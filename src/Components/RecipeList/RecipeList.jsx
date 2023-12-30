import React, { useEffect, useState } from "react";
import RecipeCard from "../RecipeCard/RecipeCard";
import styles from "./recipeList.module.css";
import { useContext } from "react";
import { ApiContext } from "../ApiContext/ApiContext";

export const RecipeList = () => {
  const { recipes, deleteRecipe, isLoading } = useContext(ApiContext);
  return (
    <div className={styles.cards}>
      {isLoading.read && <p>Loading...</p>}
      {recipes.map((recipe) => (
        <RecipeCard key={recipe.id} {...recipe} />
      ))}
    </div>
  );
};

export default RecipeList;
