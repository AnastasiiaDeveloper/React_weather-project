import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navigation.module.css";
const Navigation2 = () => (
  <>
    <ul className={styles.nav}>
      <li>
        <NavLink
          to="/today"
          exact
          className={styles.link}
          activeClassName={styles.linkActive}
        >
          Today
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/tomorrow"
          className={styles.link}
          activeClassName={styles.linkActive}
        >
          Tomorrow
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/week"
          className={styles.link}
          activeClassName={styles.linkActive}
        >
          Week
        </NavLink>
      </li>
    </ul>
  </>
);

export default Navigation2;