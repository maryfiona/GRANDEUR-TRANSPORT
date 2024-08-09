
import React, { useEffect } from 'react';
import HomePage from './pages/HomePage';

const App = () => {
  useEffect(() => {
    const handleBeforeUnload = () => {
      window.scrollTo(0, 0);
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);

  return (
    <div>
    <HomePage />
    </div>
  );
};

export default App;