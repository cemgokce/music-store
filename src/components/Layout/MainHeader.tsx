import React from "react";
import classes from "./MainHeader.module.css";
import { BsSearch } from "react-icons/bs";
import { IconContext } from "react-icons";

const MainHeader = () => {
  return (
    <React.Fragment>
      <header className={classes.header}>
        <div className={classes.logo}>Music Store</div>
        <div className={classes.search}>
          <input
            className={classes.searchInput}
            type="text"
            placeholder="Search"
          />
          <span className={classes.searchButton}>
              <IconContext.Provider value={{ color: "white" }}>
                <BsSearch />
              </IconContext.Provider>
          </span>
        </div>
        <div className={classes.headerLeft}>
          <div>Profil</div>
          <div style={{marginLeft:"1em"}}>New Music</div>
        </div>
      </header>
    </React.Fragment>
  );
};

export default MainHeader;
