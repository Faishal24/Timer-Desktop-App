import React from 'react';

type TimerSelectionPageProps = {
  onSelectTimer: (time: number) => void;
  onBack: (page: string) => void;
};

const TimerSelectionPage: React.FC<TimerSelectionPageProps> = ({ onSelectTimer, onBack }) => {
  const handleTimerSelection = (time: number) => {
    onSelectTimer(time); // Pilih waktu dan navigasi ke halaman timer
    onBack('timer'); // Navigasi ke halaman timer setelah memilih waktu
  };

  return (
    <div className="timer-selection-page">
      <h2>Select a Timer</h2>
      <div className="timer-options">
        <button onClick={() => handleTimerSelection(60)} className='selection-btn'>
          <img 
            src="/fire/fire-4.gif" 
            alt="timer" 
            className="timer-img"
          />
          <p>1 Minute</p>
        </button>
        <button onClick={() => handleTimerSelection(90)} className='selection-btn'>
          <img 
            src="/fire/fire-3.gif" 
            alt="timer" 
            className="timer-img"
          />
          <p>
            1.5 Minutes
          </p>
        </button>
        <button onClick={() => handleTimerSelection(120)} className='selection-btn'>
          <img 
            src="/fire/fire-2.gif" 
            alt="timer" 
            className="timer-img"
          />
          <p>2 Minutes</p>
        </button>
        <button onClick={() => handleTimerSelection(180)} className='selection-btn'>
          <img 
            src="/fire/fire-1.gif" 
            alt="timer" 
            className="timer-img"
          />
          <p>3 Minutes</p>
        </button>
      </div>
      <button onClick={() => onBack('home')}>Back</button>
    </div>
  );
};

export default TimerSelectionPage;
