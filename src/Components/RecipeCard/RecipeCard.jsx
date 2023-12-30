import styles from "./recipeCard.module.css";
import React, { useState } from "react";
import { useContext } from "react";
import { ApiContext } from "../ApiContext/ApiContext";

export const RecipeCard = ({ title, image, description, id }) => {
  const { deleteRecipe } = useContext(ApiContext);
  const [deleteIsLoading, setDeleteIsLoading] = useState(false);

  return (
    <div className={styles.card}>
      <div>
        <img src={image} alt={title} />
        <p className={styles.title}>{title}</p>
        <p>{description}</p>
      </div>
      <button
        onClick={async () => {
          setDeleteIsLoading(true);
          await deleteRecipe(id);
          setDeleteIsLoading(false);
        }}
        className={styles["btn-delete"]}
      >
        {deleteIsLoading ? "Loading..." : "Delete Receipe"}
      </button>
    </div>
  );
};

export default RecipeCard;
