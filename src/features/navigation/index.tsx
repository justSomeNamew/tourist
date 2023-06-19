import React from "react";
import { Link } from "react-router-dom";
import Navigation from "@mui/material/BottomNavigation";
import NavigationAction from "@mui/material/BottomNavigationAction";
import PublicIcon from "@mui/icons-material/Public";
import FavoriteIcon from "@mui/icons-material/Favorite";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";

import styles from "./index.module.scss";

export const AppNavigation: React.FC = React.memo(() => {
  const [value, setValue] = React.useState(0);

  return (
    <div className={styles.navigationWrapper}>
      <Navigation
        showLabels
        value={value}
        classes={{
          root: styles.navigationRoot,
        }}
        onChange={(_, newValue) => {
          setValue(newValue);
        }}
      >
        <Link className={styles.navigationLink} to="/">
          <NavigationAction
            className={styles.navigationBtn}
            label="Главная"
            icon={<HomeIcon />}
          />
        </Link>
        <Link className={styles.navigationLink} to="/tours-list">
          <NavigationAction
            className={styles.navigationBtn}
            label="Туры"
            icon={<PublicIcon />}
          />
        </Link>
        <Link className={styles.navigationLink} to="/my-tours">
          <NavigationAction
            className={styles.navigationBtn}
            label="Избранное"
            icon={<FavoriteIcon />}
          />
        </Link>
        <Link className={styles.navigationLink} to="about">
          <NavigationAction
            className={styles.navigationBtn}
            label="О нас"
            icon={<InfoIcon />}
          />
        </Link>
      </Navigation>
    </div>
  );
});
