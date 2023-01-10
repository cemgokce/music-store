import React from "react";
import classes from "./MainPage.module.css";
import Music from "../components/Music/Music";
import { useSelector } from "react-redux";
import { RootState } from "../store";

const MainPage = () => {
  const musicItems = useSelector((state: RootState) => state.music.musics);
  const musicTotal = useSelector((state: RootState) => state.music.totalMusic);
  console.log(musicItems);

  return (
    <div className={classes.container}>
      <h1 style={{ textAlign: "center" }}>Total musics {musicTotal}</h1>
      {musicItems.map((e) => {
        return (
          <Music name={e.name} singer={e.singer} link={e.link} key={e.id} id={e.id} addedFav={e.addedFav}/>
        );
      })}
    </div>
  );
};

export default MainPage;
