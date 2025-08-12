import React, { useState } from 'react';
import LandingPage from './components/LandingPage';
import VerificationApp from './components/VerificationApp';

function App() {
  const [currentPage, setCurrentPage] = useState('landing');

  return (
    <div className="App">
      {currentPage === 'landing' ? (
        <LandingPage onNavigateToDemo={() => setCurrentPage('demo')} />
      ) : (
        <VerificationApp onNavigateHome={() => setCurrentPage('landing')} />
      )}
    </div>
  );
}

export default App;