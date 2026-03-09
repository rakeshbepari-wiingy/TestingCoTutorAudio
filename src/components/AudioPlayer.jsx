import { useRef, useState, useEffect } from "react";

function formatTime(s) {
  return Math.floor(s / 60) + ":" + Math.floor(s % 60).toString().padStart(2, "0");
}

export default function AudioPlayer({ audioUrl }) {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    setPlaying(false);
    setCurrentTime(0);
    setDuration(0);
  }, [audioUrl]);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (playing) audio.pause();
    else audio.play();
    setPlaying(!playing);
  };

  const handleTimeUpdate = () => {
    setCurrentTime(audioRef.current.currentTime);
  };

  const handleLoadedMetadata = () => {
    setDuration(audioRef.current.duration);
  };

  const handleEnded = () => {
    setPlaying(false);
  };

  const handleProgressClick = (e) => {
    const bar = e.currentTarget;
    const rect = bar.getBoundingClientRect();
    audioRef.current.currentTime =
      ((e.clientX - rect.left) / bar.offsetWidth) * audioRef.current.duration;
  };

  const SPEEDS = [0.5, 0.75, 1, 1.25, 1.5];
  const [speed, setSpeed] = useState(1);

  const cycleSpeed = () => {
    const nextIndex = (SPEEDS.indexOf(speed) + 1) % SPEEDS.length;
    const newSpeed = SPEEDS[nextIndex];
    setSpeed(newSpeed);
    audioRef.current.playbackRate = newSpeed;
  };

  const progress = duration ? (currentTime / duration) * 100 : 0;

  return (
    <div className="player-wrap">
      <div className="player">
        <button className="play-btn" onClick={togglePlay}>
          {playing ? (
            <svg width="18" height="18" viewBox="0 0 18 18" fill="white">
              <rect x="3" y="2" width="4" height="14" rx="1" />
              <rect x="11" y="2" width="4" height="14" rx="1" />
            </svg>
          ) : (
            <svg width="18" height="18" viewBox="0 0 18 18" fill="white">
              <path d="M4 2.5v13l12-6.5z" />
            </svg>
          )}
        </button>
        <div className="progress-area">
          <div className="progress-bar" onClick={handleProgressClick}>
            <div className="progress-fill" style={{ width: `${progress}%` }} />
          </div>
          <div className="time-row">
            <span>{formatTime(currentTime)}</span>
            <span>{formatTime(duration)}</span>
          </div>
        </div>
        <button className="speed-btn" onClick={cycleSpeed}>
          {speed}x
        </button>
      </div>
      <audio
        ref={audioRef}
        src={audioUrl}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        onEnded={handleEnded}
      />
    </div>
  );
}
