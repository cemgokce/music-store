import React from "react";
import classes from "./MainPage.module.css"
import Music from "../components/Music/Music";

const MainPage = () => {
  return (
    <div className={classes.container}>
      <Music
        name="Tiny Desk"
        singer="Dua Lipa"
        link={`https://www.youtube.com/embed/F4neLJQC1_E`}
      />
      <Music
        name="Tiny Desk"
        singer="Dua Lipa"
        link={`https://www.youtube.com/embed/F4neLJQC1_E`}
      />
      <Music
        name="Tiny Desk"
        singer="Dua Lipa"
        link={`https://www.youtube.com/embed/F4neLJQC1_E`}
      />
      <Music
        name="Tiny Desk"
        singer="Dua Lipa"
        link={`https://www.youtube.com/embed/F4neLJQC1_E`}
      />
      
    </div>
  );
};

export default MainPage;
