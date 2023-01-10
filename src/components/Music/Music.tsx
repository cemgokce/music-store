import React, { useContext } from "react";
import classes from "./Music.module.css";
import Button from "../UI/Button/Button";
import Card from "../UI/Card/Card";
import { useDispatch } from "react-redux";
import { musicActions } from "../../store/music-slice";
import AuthContext from "../../store/auth-context";

const Music = (props: any) => {
  const dispatch = useDispatch();
  const ctx = useContext(AuthContext);

  const { id } = props;
  const addingFav = () => {
    dispatch(musicActions.addFavMusic(id));
  };
  return (
    <Card className={classes.musicCard}>
      <div className={classes.name}>
        {props.singer} - {props.name}
      </div>
      <div className={classes.frame}>
        <iframe
          src={`https://www.youtube.com/embed/${props.link}`}
          title={props.name}
          width="560"
          height="315"
          frameBorder="0"
          allowFullScreen
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        ></iframe>
      </div>
      {ctx.isLoggedIn && (
        <Button className={classes.btnFav} onClick={addingFav}>
          {props.addedFav ? "Discard ro Favorites" : "Add to Favorites"}
        </Button>
      )}
    </Card>
  );
};

export default Music;
