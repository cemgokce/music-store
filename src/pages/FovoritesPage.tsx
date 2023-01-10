import React from "react";
import classes from "./MainPage.module.css";
import Music from "../components/Music/Music";
import { useSelector } from "react-redux";
import { RootState } from "../store";

const FovoritesPage = () => {
  const musicItems = useSelector((state: RootState) => state.music.musics);
  const favAddedMusics = musicItems.filter(item=>item.addedFav===true);
  console.log(musicItems);

  return (
    <div className={classes.container}>
      <h1 style={{ textAlign: "center" }}>Total fovorite musics {favAddedMusics.length}</h1>
      {favAddedMusics.map((e) => {
        return (
          <Music name={e.name} singer={e.singer} link={e.link} key={e.id} id={e.id} addedFav={e.addedFav}/>
        );
      })}
    </div>
  );
};

export default FovoritesPage;
