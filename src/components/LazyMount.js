import { useEffect, useRef, useState } from 'react';

/**
 * LazyMount
 * - Mounts children only when near the viewport.
 * - Keeps page scroll height stable using a placeholder minHeight.
 */
export default function LazyMount({
  children,
  minHeight = 600,
  rootMargin = '1200px 0px',
  placeholder = null,
  className,
}) {
  const [shouldRender, setShouldRender] = useState(false);
  const sentinelRef = useRef(null);

  useEffect(() => {
    if (shouldRender) return undefined;

    const node = sentinelRef.current;
    if (!node) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry && entry.isIntersecting) {
          setShouldRender(true);
          observer.disconnect();
        }
      },
      { root: null, rootMargin, threshold: 0.01 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [rootMargin, shouldRender]);

  if (shouldRender) {
    return <div className={className}>{typeof children === 'function' ? children() : children}</div>;
  }

  const heightValue = typeof minHeight === 'number' ? `${minHeight}px` : minHeight;

  return (
    <div ref={sentinelRef} className={className} style={{ minHeight: heightValue }}>
      {placeholder}
    </div>
  );
}
