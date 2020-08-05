import React, { useState } from 'react';
import  { useDarkMode } from '../hooks/useDarkMode';

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [values, handleChanges] = useDarkMode()

  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };
  return (
    <nav className="navbar">
      <h1>Crypto Tracker</h1>
      <div className="dark-mode__toggle">
        <div
          onClick={toggleMode}
          className={darkMode ? 'toggle toggled' : 'toggle'}
          value={values}
          onChange={handleChanges}
        />
      </div>
    </nav>
  );
};

export default Navbar;
