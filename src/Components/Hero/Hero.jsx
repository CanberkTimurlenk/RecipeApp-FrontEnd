import React, { useContext } from "react";
import { PreferencesContext } from "../PreferencesContext/PreferencesContext.jsx";
import styles from "./Hero.module.css";

export function Hero() {
  const { theme, toggleTheme } = useContext(PreferencesContext);

  return (
    <div className={`${styles["home"]} ${styles[theme]}`}>
      <div
        className={`${styles["home-title"]} ${styles[`home-title-${theme}`]}`}
      >
        <h1>Welcome to Recipe Sharing Platform</h1>
        <p>Find and share the best recipes </p>
      </div>

      <h2 className={`${styles["hacks-title"]} ${styles[`hacks-title-${theme}`]}`}>Our Kitchen Hacks</h2>


      <section className={`${styles["kitchen-hack"]}  ${styles[`kitchen-hack-${theme}`]}`}>
        <h2>Hack #1: Easy Citrus Juicing</h2>
        <p>
          Place a citrus fruit in the microwave for about 10 seconds before
          juicing. The warmth will make it easier to extract the juice.
        </p>
      </section>

      <section className={`${styles["kitchen-hack"]}  ${styles[`kitchen-hack-${theme}`]}`}>
        <h2>Hack #2: Quick Egg Shell Removal</h2>
        <p>
          If you accidentally get pieces of eggshell in your bowl, use a larger
          piece of eggshell to easily scoop them out. The shell pieces will be
          attracted to each other.
        </p>
      </section>

      <section className={`${styles["kitchen-hack"]}  ${styles[`kitchen-hack-${theme}`]}`}>
        <h2>Hack #3: Onion Tear-Free Chopping</h2>
        <p>
          To prevent tears while chopping onions, freeze the onion for a few
          minutes before cutting. Frozen onions release fewer irritants.
        </p>
      </section>

      <section className={`${styles["kitchen-hack"]}  ${styles[`kitchen-hack-${theme}`]}`}>
        <h2>Hack #4: Freshen Up Stale Bread</h2>
        <p>
          If your bread has gone stale, sprinkle it with a little water and heat
          it in the oven for a few minutes. It will regain its freshness.
        </p>
      </section>

      <section className={`${styles["kitchen-hack"]}  ${styles[`kitchen-hack-${theme}`]}`}>
        <h2>Hack #5: Quick Garlic Peeling</h2>
        <p>
          To peel garlic quickly, place a garlic bulb in the microwave for 15
          seconds. The cloves will pop out easily without the papery skin.
        </p>
      </section>
    </div>
  );

  // text center
}
