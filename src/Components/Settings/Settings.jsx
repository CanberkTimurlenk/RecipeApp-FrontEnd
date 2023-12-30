import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "./Settings.module.css";

const Settings = () => {
  const [user, setUser] = useState({});

  useEffect(() => {
    const getUserProfile = async () => {
      const response = await axios
        .get("https://api.escuelajs.co/api/v1/auth/profile", {
          headers: {
            Authorization: `Bearer ${
              JSON.parse(localStorage.getItem("user")).access_token
            }`,
          },
        })
        .then((response) => setUser(response.data));
    };

    getUserProfile();
  }, []);

  return (
    <div className={styles["user-card"]}>
      <img className={styles["user-img"]} src={user.avatar} alt={user.name} />
      <p className={styles["user-name"]}>{user.name}</p>
      <p className={styles["user-email"]}>{user.email}</p>
      <p className={styles["user-role"]}>{user.role}</p>
    </div>
  );
};

export default Settings;
