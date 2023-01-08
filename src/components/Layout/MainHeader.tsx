import React, { useContext } from "react";
import classes from "./MainHeader.module.css";
import { Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import { IconContext } from "react-icons";
import AuthContext from "../../store/auth-context";

const MainHeader = () => {
  const ctx = useContext(AuthContext);

  return (
    <React.Fragment>
      <header className={classes.header}>
        <div className={classes.logo}>
          <Link to="/">Music Store</Link>
        </div>
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
        {ctx.isLoggedIn && (
          <div className={classes.headerRight}>
            <div>
              <Link to="/profile">Profile</Link>
            </div>
            <div style={{ marginLeft: "1em" }}>
              <Link to="new-music">New Music</Link>
            </div>
            <div>
              <Link to="/" className={classes.btn1} onClick={ctx.onLogout}>Log Out</Link>
            </div>
          </div>
        )}
        {!ctx.isLoggedIn && (
          <div>
            <Link to="/login">Login</Link>
          </div>
        )}
      </header>
    </React.Fragment>
  );
};

export default MainHeader;
