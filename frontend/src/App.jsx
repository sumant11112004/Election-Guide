import React, { useState, useEffect, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';

// Lazy load pages
const Home = React.lazy(() => import('./pages/Home'));
const Assistant = React.lazy(() => import('./pages/Assistant'));
const Guide = React.lazy(() => import('./pages/Guide'));
const TimelinePage = React.lazy(() => import('./pages/TimelinePage'));
const About = React.lazy(() => import('./pages/About'));

const App = () => {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  return (
    <div className="app">
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <main className="container">
        <Suspense fallback={<div className="page-header"><h2>Loading...</h2></div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/assistant" element={<Assistant />} />
            <Route path="/guide" element={<Guide />} />
            <Route path="/timeline" element={<TimelinePage />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Suspense>
      </main>
    </div>
  );
};

export default App;
