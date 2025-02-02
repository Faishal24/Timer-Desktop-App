import React, { useEffect, useState } from 'react';

type TimerPageProps = {
  time: number; // Waktu dalam detik
  onBack: (page: string) => void;
};

const TimerPage: React.FC<TimerPageProps> = ({ time, onBack }) => {
  const [timeRemaining, setTimeRemaining] = useState(time);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timerInterval: NodeJS.Timeout | undefined = undefined;

    if (isRunning && timeRemaining > 0) {
      timerInterval = setInterval(() => {
        setTimeRemaining((prevTime) => prevTime - 1);
      }, 1000);
    }

    if (timeRemaining <= 0) {
      clearInterval(timerInterval);
    }

    return () => clearInterval(timerInterval);
  }, [isRunning, timeRemaining]);

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  };

  return (
    <div className="timer-page">
      <h2>Countdown Timer</h2>
      <div className="timer-display">
        <p>{formatTime(timeRemaining)}</p>
      </div>
      <div className="timer-controls">
        <button onClick={() => setIsRunning(!isRunning)}>
          {isRunning ? 'Pause' : 'Start'}
        </button>
        <button onClick={() => { setIsRunning(false); setTimeRemaining(time); }}>
          Reset
        </button>
      </div>
      <button onClick={() => onBack('timer-selection')}>Back</button>
    </div>
  );
};

export default TimerPage;
