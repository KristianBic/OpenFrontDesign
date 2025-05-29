import React from 'react';
import { ThemeProvider } from './components/theme/ThemeProvider';
import LandingPage from './pages/LandingPage';

function App() {
  return (
    <ThemeProvider>
      <LandingPage />
    </ThemeProvider>
  );
}

export default App;