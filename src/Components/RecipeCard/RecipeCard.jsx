import styles from "./recipeCard.module.css";
import React, { useState } from "react";
import { useContext } from "react";
import { ApiContext } from "../ApiContext/ApiContext";
import { PreferencesContext } from "../PreferencesContext/PreferencesContext";

export const RecipeCard = ({ title, image, description, id }) => {
  const { deleteRecipe } = useContext(ApiContext);
  const [deleteIsLoading, setDeleteIsLoading] = useState(false);
  const { theme } = useContext(PreferencesContext);

  return (
    <div className={`${styles["card"]} ${styles[`card-${theme}`]}`}>
      <div>
        <img src={image} alt={title} />
        <p className={`${styles["title"]} ${styles[`title-${theme}`]}`}>
          {title}
        </p>
        <p>{description}</p>
      </div>
      <button
        onClick={async () => {
          setDeleteIsLoading(true);
          await deleteRecipe(id);
          setDeleteIsLoading(false);
        }}
        className={`${styles["btn-delete"]} ${styles[`btn-delete-${theme}`]}`}
      >
        {deleteIsLoading ? "Loading..." : "Delete Receipe"}
      </button>
    </div>
  );
};

export default RecipeCard;
