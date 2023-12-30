import "./App.css";
import { Nav } from "./Components/Nav/Nav.jsx";
import React, { useEffect, useState, useContext } from "react";
import { Hero } from "./Components/Hero/Hero.jsx";
import { RecipeList } from "./Components/RecipeList/RecipeList.jsx";
import { NewRecipeForm } from "./Components/NewRecipeForm/NewRecipeForm.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ApiProvider } from "./Components/ApiContext/ApiContext.jsx";
import { LoginForm } from "./Components/Login/LoginForm.jsx";
import Settings from "./Components/Settings/Settings.jsx";
import { PreferencesContext } from "./Components/PreferencesContext/PreferencesContext.jsx";

function App() {
  const { theme } = useContext(PreferencesContext);

  const bodyElement = document.querySelector("body");

  switch (theme) {
    case "dark":
      bodyElement.classList.add("dark");
      bodyElement.classList.remove("light");
      break;
    case "light":
      bodyElement.classList.add("light");
      bodyElement.classList.remove("dark");
      break;
    default:
      break;
  }



  return (
    <div className={`${theme}`}>
      <ApiProvider>
        <Router>
          <Nav />
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/recipe-list" element={<RecipeList />} />
            <Route path="/new-recipe" element={<NewRecipeForm />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/login" element={<LoginForm />} />
          </Routes>
        </Router>
      </ApiProvider>
    </div>
  );
}

export default App;
