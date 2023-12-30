import { createContext } from "react";
import { useState } from "react";

export const PreferencesContext = createContext();

// PreferencesContext.Provider

export const PreferencesProvider = ({ children }) => {
  const [language, setLanguage] = useState("en");
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme( theme === 'light' ? 'dark' : 'light')
}
  return (
    <PreferencesContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </PreferencesContext.Provider>
  );
};
 