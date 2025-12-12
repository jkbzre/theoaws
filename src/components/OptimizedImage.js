import { useState, useEffect } from 'react';

/**
 * OptimizedImage - A component for instantly displaying images with blur placeholder
 * 
 * Features:
 * - Blur placeholder while loading (instant visual feedback)
 * - WebP with fallback to JPG/PNG
 * - Responsive images with srcSet
 * - Lazy loading for below-the-fold images
 * - Proper width/height to prevent layout shift
 * - Modern loading strategies
 * 
 * @param {string} src - Main image source URL
 * @param {string} alt - Alt text for accessibility
 * @param {string} className - CSS classes
 * @param {boolean} priority - If true, preload this image (for above-the-fold)
 * @param {string} blurDataURL - Optional base64 blur placeholder
 * @param {string} width - Image width (helps prevent layout shift)
 * @param {string} height - Image height (helps prevent layout shift)
 * @param {string} srcSet - Optional responsive image srcSet
 * @param {string} sizes - Optional sizes attribute for responsive images
 */
const OptimizedImage = ({ 
    src, 
    alt = '', 
    className = '', 
    priority = false,
    blurDataURL,
    width,
    height,
    srcSet,
    sizes,
    ...props 
}) => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [currentSrc, setCurrentSrc] = useState(blurDataURL || src);

    // Auto-detect WebP version if available
    const webpSrc = src.replace(/\.(jpg|jpeg|png)$/i, '.webp');
    
    // Auto-generate srcSet from src if not provided
    const autoSrcSet = !srcSet && src.match(/\.(jpg|jpeg|png)$/i) 
        ? `${src.replace(/\.(jpg|jpeg|png)$/i, '.400.$1')} 400w, ${src.replace(/\.(jpg|jpeg|png)$/i, '.800.$1')} 800w, ${src.replace(/\.(jpg|jpeg|png)$/i, '.1200.$1')} 1200w`
        : srcSet;

    useEffect(() => {
        // Preload if priority
        if (priority) {
            const link = document.createElement('link');
            link.rel = 'preload';
            link.as = 'image';
            link.href = webpSrc;
            link.type = 'image/webp';
            document.head.appendChild(link);
            
            return () => {
                if (document.head.contains(link)) {
                    document.head.removeChild(link);
                }
            };
        }
    }, [webpSrc, priority]);

    useEffect(() => {
        // Create an image loader
        const img = new Image();
        img.src = webpSrc;
        
        img.onload = () => {
            setCurrentSrc(webpSrc);
            setIsLoaded(true);
        };

        img.onerror = () => {
            // Fallback to original src if WebP fails
            const fallbackImg = new Image();
            fallbackImg.src = src;
            fallbackImg.onload = () => {
                setCurrentSrc(src);
                setIsLoaded(true);
            };
        };

        // If image is already cached, mark as loaded immediately
        if (img.complete) {
            setCurrentSrc(webpSrc);
            setIsLoaded(true);
        }
    }, [src, webpSrc]);

    const imageStyles = {
        transition: 'filter 0.3s ease-out, opacity 0.3s ease-out',
        filter: isLoaded ? 'blur(0)' : 'blur(10px)',
        opacity: isLoaded ? 1 : 0.8,
    };

    return (
        <picture>
            <source 
                type="image/webp" 
                srcSet={autoSrcSet ? autoSrcSet.replace(/\.(jpg|jpeg|png)/gi, '.webp') : webpSrc}
                sizes={sizes || '(max-width: 600px) 400px, (max-width: 1200px) 800px, 1200px'}
            />
            <img
                src={currentSrc}
                srcSet={autoSrcSet}
                sizes={sizes || '(max-width: 600px) 400px, (max-width: 1200px) 800px, 1200px'}
                alt={alt}
                className={className}
                loading={priority ? 'eager' : 'lazy'}
                decoding={priority ? 'sync' : 'async'}
                style={imageStyles}
                width={width}
                height={height}
                {...props}
            />
        </picture>
    );
};

export default OptimizedImage;
