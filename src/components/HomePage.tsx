import React from 'react';

type HomePageProps = {
  onStart: (page: string) => void;
};

const HomePage: React.FC<HomePageProps> = ({ onStart }) => {
  const exit = () => {
    window.close();
  };

  return (
    <div className="home-page">
      <h1>Welcome to SetBreak</h1>
      <div className='home-page-buttons'>
        <button onClick={() => onStart('timer-selection')}>Tap to Start</button>
        <button onClick={exit} className='home-page-exit-buttons'>Exit</button>
      </div>
    </div>
  );
};

export default HomePage;
