import React from 'react';
import { NavLink } from 'react-router-dom';
import { Moon, Sun } from 'lucide-react';

const Navbar = ({ theme, toggleTheme }) => {
  return (
    <nav className="nav container">
      <div className="logo" style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--primary-color)' }}>
        VoteAssist
      </div>
      <div className="nav-links">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/assistant">Assistant</NavLink>
        <NavLink to="/guide">Guide</NavLink>
        <NavLink to="/timeline">Timeline</NavLink>
        <NavLink to="/about">About</NavLink>
      </div>
      <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
        {theme === 'dark' ? <Sun size={24} /> : <Moon size={24} />}
      </button>
    </nav>
  );
};

export default Navbar;
