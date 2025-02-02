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
        <button onClick={() => handleTimerSelection(60)} className='selection-btn'>1 Minute</button>
        <button onClick={() => handleTimerSelection(120)} className='selection-btn'>2 Minutes</button>
        <button onClick={() => handleTimerSelection(300)} className='selection-btn'>5 Minutes</button>
        <button onClick={() => handleTimerSelection(600)} className='selection-btn'>10 Minutes</button>
      </div>
      <button onClick={() => onBack('home')}>Back</button>
    </div>
  );
};

export default TimerSelectionPage;
