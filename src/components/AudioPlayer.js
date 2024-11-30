import React, { useState, useEffect, useRef } from 'react';
import { Slider } from '@mui/material';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import { styled } from '@mui/material/styles';
import radioAtlas from '../../src/Atlas-Radio.wav'

function AudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [totalTime, setTotalTime] = useState(0);

  const audioRef = useRef(null);

  const StyledSlider = styled(Slider)({
    color: 'black', // Adjust color as desired
    height: 8,
  });

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.addEventListener('loadedmetadata', () => {
        setTotalTime(audio.duration);
      });

      audio.addEventListener('timeupdate', () => {
        if (!isPlaying) return; // Update only when playing
        setCurrentTime(audio.currentTime);
      });
    }

    return () => {
      if (audio) {
        audio.removeEventListener('loadedmetadata', () => {});
        audio.removeEventListener('timeupdate', () => {});
      }
    };
  }, [audioRef, isPlaying]);

  const startTimer = () => {
    setIsPlaying(true);
    audioRef.current.play();
  };

  const pauseTimer = () => {
    setIsPlaying(false);
    audioRef.current.pause();
  };

  const handleSliderChange = (event, value) => {
    setCurrentTime(value);
    audioRef.current.currentTime = value;
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secondsRemaining = Math.round(seconds % 60); // Round seconds
    return `${minutes.toString().padStart(2, '0')}:${secondsRemaining.toString().padStart(2, '0')}`;
  };

  return (
    <div>
      <div className='flex pt-4 justify-center'>
        <button onClick={isPlaying ? pauseTimer : startTimer}>
          {isPlaying ? <PauseIcon /> : <PlayArrowIcon />}
        </button>
      </div>
      <div>
        <StyledSlider value={currentTime} onChange={handleSliderChange} min={0} max={totalTime} />
      </div>
      <div className='flex justify-end pb-4'>
        {formatTime(currentTime)} / {formatTime(totalTime)}
      </div>
      <audio ref={audioRef} src={"http://drqlcggpj7pli.cloudfront.net/Atlas-Radio.wav"} />
    </div>
  );
}

export default AudioPlayer;