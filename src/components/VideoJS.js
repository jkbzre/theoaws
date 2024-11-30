import React, { useEffect, useRef } from 'react';
import videojs from 'video.js';
import 'video.js/dist/video-js.css';

class CustomText extends videojs.getComponent('Component') {
  constructor(player, options) {
    super(player, options);
    this.addClass('vjs-custom-text');
    this.el().innerHTML = options.text || 'Custom Text';
  }
}

videojs.registerComponent('CustomText', CustomText);

export const VideoJS = (props) => {
  const videoRef = useRef(null);
  const playerRef = useRef(null);
  const { id, options, onReady } = props;

  useEffect(() => {
    if (!playerRef.current) {
      const videoElement = document.createElement('video-js');
      videoElement.classList.add('vjs-big-play-centered');
      videoRef.current.appendChild(videoElement);

      const player = playerRef.current = videojs(videoElement, options, () => {
        videojs.log('player is ready');
        onReady && onReady(player);

        const CustomTextComponent = new CustomText(player, { text: 'VIDEO EXTRACT' });
        console.log("FULL VIDEO: ",id)
        if(id !== "travelling-light") {
          player.addChild(CustomTextComponent);
        }
      });

    } else {
      const player = playerRef.current;
      player.autoplay(options.autoplay);
      player.src(options.sources);
    }
  }, [options, videoRef]);

  useEffect(() => {
    const player = playerRef.current;

    return () => {
      if (player && !player.isDisposed()) {
        player.dispose();
        playerRef.current = null;
      }
    };
  }, [playerRef]);

  return (
    <div data-vjs-player style={{ position: 'relative', width: '100%', height: '100%' }}>
      <div ref={videoRef} className="video-container" />
    </div>
  );
}

export default VideoJS;
