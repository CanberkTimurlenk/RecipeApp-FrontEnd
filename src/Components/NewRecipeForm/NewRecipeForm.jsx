import React, { useState } from "react";
import styles from "./NewRecipeForm.module.css";
import { ApiContext } from "../ApiContext/ApiContext";
import { useContext } from "react";

export const NewRecipeForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");

  const [titleErr, setTitleErr] = useState(false);
  const [descriptionErr, setDescriptionErr] = useState(false);
  const [imageErr, setImageErr] = useState(false);

  const { addRecipeToList, isLoading } = useContext(ApiContext);

  const handleSubmit = (event) => {
    event.preventDefault();

    setTitleErr(false);
    setDescriptionErr(false);
    setImageErr(false);

    if (title.trim() && description.trim() && image.trim()) {
      addRecipeToList({ title, description, image });

      setTitle("");
      setDescription("");
      setImage("");

      console.log(
        `submitting new recipe \n title: ${title} \n Desc: ${description} \n image: ${image}`
      );
    } else {
      setTitleErr(!title.trim());
      setDescriptionErr(!description.trim());
      setImageErr(!image.trim());
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        value={title}
        type="text"
        onChange={(event) => setTitle(event.target.value)}
        placeholder="Recipe Title"
      />
      {titleErr && <p>Recipe Title can not be empty!</p>}
      <textarea
        type="text"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
        placeholder="Recipe Description"
      ></textarea>
      {descriptionErr && <p>Recipe Description can not be empty!</p>}
      <input
        type="text"
        value={image}
        onChange={(event) => setImage(event.target.value)}
        placeholder="Image URL"
      />
      {imageErr && <p>Image URL can not be empty!</p>}
      <button type="submit">
        {isLoading.add ? "Loading..." : "Add Receipe"}
      </button>
    </form>
  );
};

export default NewRecipeForm;
