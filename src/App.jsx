import "./App.css";
import { Nav } from "./Components/Nav/Nav.jsx";
import React, { useEffect, useState } from "react";
import { Hero } from "./Components/Hero/Hero.jsx";
import { RecipeList } from "./Components/RecipeList/RecipeList.jsx";
import { NewRecipeForm } from "./Components/NewRecipeForm/NewRecipeForm.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ApiProvider } from "./Components/ApiContext/ApiContext.jsx";
import { LoginForm } from "./Components/Login/LoginForm.jsx";
import Settings from "./Components/Settings/Settings.jsx";
import { Footer } from "./Components/Footer/Footer.jsx";


function App() {
  return (
    <ApiProvider>
      <Router>
        <div className=""></div>
        <Nav />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/recipe-list" element={<RecipeList />} />
          <Route path="/new-recipe" element={<NewRecipeForm />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/login" element={<LoginForm />} />
        </Routes>
      </Router>
        <Footer />
    </ApiProvider>
  );
}

export default App;
