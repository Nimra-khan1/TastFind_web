import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import BrowseRecipes from './components/BrowseRecipes'; 


const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle('dark-mode');
  };

  return (
    <Router>
      <div className={isDarkMode ? 'dark' : ''}>
        <Navbar toggleDarkMode={toggleDarkMode} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/browse" element={<BrowseRecipes />} />
          
        </Routes>
      </div>
    </Router>
  );
};

export default App;