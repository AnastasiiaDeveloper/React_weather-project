import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navigation.module.css";
const Navigation = () => (
  <>
    <ul className={styles.nav}>
      <li>
        <NavLink
          to="/"
          exact
          className={styles.link}
          activeClassName={styles.linkActive}
        >
          Weather
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/news"
          className={styles.link}
          activeClassName={styles.linkActive}
        >
          News
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/contact"
          className={styles.link}
          activeClassName={styles.linkActive}
        >
          Contact us
        </NavLink>
      </li>
    </ul>
  </>
);

export default Navigation;