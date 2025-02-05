import { useState } from 'react';
import HomePage from './components/HomePage';
import TimerSelectionPage from './components/TimerSelectionPage';
import TimerPage from './components/TimerPage';

function App() {
  const [currentPage, setCurrentPage] = useState<string>('home');
  const [selectedTime, setSelectedTime] = useState<number | null>(null);

  const navigateToPage = (page: string) => {
    setCurrentPage(page);
  };

  return (
    <div className="app-container">
      {currentPage === 'home' && <HomePage onStart={() => navigateToPage('timer-selection')} />}
      {currentPage === 'timer-selection' && (
        <TimerSelectionPage onSelectTimer={setSelectedTime} onBack={navigateToPage} />
      )}
      {currentPage === 'timer' && selectedTime !== null && (
        <TimerPage time={selectedTime} onBack={() => navigateToPage('timer-selection')} />
      )}
    </div>
  );
}

export default App;
