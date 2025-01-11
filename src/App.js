import Home from "./components/Home";
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import MyFavourite from "./Pages/MyFavourite";
import UsersFeedback from "./Pages/UsersFeedback";
import BrowseRecipes from "./components/BrowseRecipes";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle("dark-mode");
  };

  return (
    <Router>
      <div className={isDarkMode ? "dark" : ""}>
        <Navbar toggleDarkMode={toggleDarkMode} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/browse" element={<BrowseRecipes />} />
          <Route path="/my-favourite" element={<MyFavourite />} />
          <Route path="/users-feedback" element={<UsersFeedback />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
