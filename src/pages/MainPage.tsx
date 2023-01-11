import React, { useEffect } from "react";
import classes from "./MainPage.module.css";
import Music from "../components/Music/Music";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import { useParams } from "react-router-dom";

const MainPage = () => {
  let musicItems = useSelector((state: RootState) => state.music.musics);
  let filteredItems;

  const params = useParams<{ searchKey: string }>();
  const { searchKey } = params;
  if (searchKey) {
    filteredItems = musicItems.filter(
      (item) => item.name.includes(searchKey) || item.singer.includes(searchKey)
    );
  } else {
    filteredItems = musicItems;
  }

  return (
    <div className={classes.container}>
      <h1 style={{ textAlign: "center" }}>Total musics {filteredItems.length}</h1>
      {filteredItems.map((e) => {
        return (
          <Music
            name={e.name}
            singer={e.singer}
            link={e.link}
            key={e.id}
            id={e.id}
            addedFav={e.addedFav}
          />
        );
      })}
    </div>
  );
};

export default MainPage;
