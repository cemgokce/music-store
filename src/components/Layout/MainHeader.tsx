import React, { useContext, useState } from "react";
import classes from "./MainHeader.module.css";
import { Link, useHistory } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import { IconContext } from "react-icons";
import AuthContext from "../../store/auth-context";

const MainHeader = () => {
  //use contex for header visibility
  const ctx = useContext(AuthContext);

  //history we are using for search bar
  const history = useHistory();
  const [searchKey, setSearchKey] = useState("");
  const [searchIsActive, setSearchIsActive] = useState(false);

  const searchKeyHandler = (event: any) => {
    setSearchKey((prevstate) => (prevstate = event.target.value));
  };

  const handleKeyPress = (event: any) => {
    console.log(searchKey);
    if (searchKey !== "") {
      setSearchIsActive(true);
    } else {
      setSearchIsActive(false);
    }
    if (event.key === "Enter" && searchIsActive) {
      history.replace(`/music/${searchKey}/search`);
      // setSearchKey("");
    } else if (searchKey === "") {
      history.replace("/");
    }
  };
  const searchClearHandler = () => {
    setSearchKey("");
    setSearchIsActive(false)
  };

  return (
    <React.Fragment>
      <header className={classes.header}>
        <div className={classes.logo}>
          <Link to="/" onClick={searchClearHandler}>
            Music Store
          </Link>
        </div>
        <div className={classes.search}>
          <input
            className={classes.searchInput}
            type="text"
            value={searchKey}
            onChange={searchKeyHandler}
            onKeyUp={handleKeyPress}
            placeholder="Search"
          />
          <span className={classes.searchButton}>
            <Link to={searchIsActive ? `/music/${searchKey}/search`: "#"} >
              <IconContext.Provider value={{ color: "white" }}>
                <BsSearch />
              </IconContext.Provider>
            </Link>
          </span>
        </div>
        {ctx.isLoggedIn && (
          <div className={classes.headerRight}>
            <div>
              <Link to="/favorite">Favorites</Link>
            </div>
            <div style={{ marginLeft: "1em" }}>
              <Link to="new-music">New Music</Link>
            </div>
            <div>
              <Link to="/" className={classes.btn1} onClick={ctx.onLogout}>
                Log Out
              </Link>
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
