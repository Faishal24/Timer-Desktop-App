import React from 'react';

type HomePageProps = {
  onStart: (page: string) => void;
};

const HomePage: React.FC<HomePageProps> = ({ onStart }) => {
  return (
    <div className="home-page">
      <h1>Welcome to Timer App</h1>
      <button onClick={() => onStart('timer-selection')}>Tap to Start</button>
    </div>
  );
};

export default HomePage;
