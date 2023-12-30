import React from "react";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthContext/AuthContext.jsx";
import { PreferencesContext } from "../PreferencesContext/PreferencesContext.jsx";
import styles from "./Nav.module.css";

const ThemeSlider = () => {
  const { theme, toggleTheme } = useContext(PreferencesContext);

  return (
    <div
      className={`${styles["slider-container"]} ${styles[theme]}`}
      onClick={() => toggleTheme()}
    >
      <div className={styles["slider-button"]}></div>
    </div>
  );
};

export function Nav() {
  const { isAuthenticated, logout } = useContext(AuthContext);
  const { theme } = useContext(PreferencesContext);

  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const handleLogin = () => {
    navigate("/login");
  };

  return (
    <header className={styles[theme]}>
      <div>Recipe Platform</div>
      <nav>
        <ul>
          <li>
            <Link className={styles["nav-link"]} to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className={styles["nav-link"]} to="/recipe-list">
              Recipe List
            </Link>
          </li>
          <li>
            <Link className={styles["nav-link"]} to="/new-recipe">
              Add Recipe
            </Link>
          </li>
          {isAuthenticated && (
            <li>
              <Link className={styles["nav-link"]} to="/settings">
                Settings
              </Link>
            </li>
          )}
          <li>
            <a onClick={isAuthenticated ? handleLogout : handleLogin}>
              {isAuthenticated ? "Logout" : "Login"}
            </a>
          </li>
        </ul>
        <ThemeSlider />
      </nav>
    </header>
  );
}
