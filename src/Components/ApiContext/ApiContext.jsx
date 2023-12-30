import { createContext } from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

export const ApiContext = createContext();

// PreferencesContext.Provider

export const ApiProvider = ({ children }) => {
  const [recipes, setRecipes] = useState([]);
  const [isLoading, setIsLoading] = useState({
    read: false,
    add: false,
    delete: false,
  });

  useEffect(() => {
    const getRecipes = async () => {
      try {
        setIsLoading((prevIsLoading) => ({ ...prevIsLoading, read: true }));
        const response = await axios
          .get("http://localhost:3001/recipes")
          .then((response) => setRecipes(response.data));
      } catch (error) {
        console.error("There was an error while fetching the recipes");
      }
      setIsLoading((prevIsLoading) => ({ ...prevIsLoading, read: false }));
    };

    getRecipes();
  }, []);

  const addRecipeToList = async (newRecipe) => {
    try {
      setIsLoading((prevIsLoading) => ({ ...prevIsLoading, add: true }));
      const response = await axios.post(
        "http://localhost:3001/recipes",
        newRecipe
      );
      if (response.status === 201)
        setRecipes((prevRecipes) => [...prevRecipes, response.data]);
    } catch (error) {
      console.error("There was an error while posting the new recipe!", error);
    }
    setIsLoading((prevIsLoading) => ({ ...prevIsLoading, add: false }));
  };

  const deleteRecipe = async (id) => {
    setIsLoading((prevIsLoading) => ({ ...prevIsLoading, delete: true }));
    const response = await axios.delete(`http://localhost:3001/recipes/${id}`);
    if (response.status === 200) {
      setRecipes((prevRecipeList) =>
        prevRecipeList.filter((recipe) => recipe.id !== id)
      );
    }
  };

  return (
    <ApiContext.Provider
      value={{ recipes, isLoading, addRecipeToList, deleteRecipe }}
    >
      {children}
    </ApiContext.Provider>
  );
};
