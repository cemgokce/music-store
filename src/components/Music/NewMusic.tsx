import React, { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { musicActions } from "../../store/music-slice";
import { useHistory } from "react-router-dom";

import Card from "../UI/Card/Card";
import classes from "./NewMusic.module.css";
import Button from "../UI/Button/Button";
import Input from "../UI/Input/Input";

const NewMusic = (props: any) => {

  const [name, setName] = useState("");
  const [singer, setSinger] = useState("");
  const [link, setLink] = useState("");

  let musicTotal = useSelector((state: RootState) => state.music.totalMusic);

  const dispatch = useDispatch();
  const hisory = useHistory();


  const nameChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const singerChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSinger(event.target.value);
  };

  const linkChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLink(event.target.value);
  };
  
  const submitHandler = () => {
    const id = musicTotal + 1;
    const newMusic = { name, singer, link, id };
    console.log(newMusic);
    dispatch(musicActions.addMusic(newMusic));
    hisory.push("/");
  };

  return (
    <Card className={classes.login}>
      <h1 className={classes.loginHeader}>New Music Add</h1>
      <form onSubmit={submitHandler}>
        <Input
          type="text"
          label="Music Name"
          id="musicName"
          value={name}
          onChange={nameChangeHandler}
        />
        <Input
          type="text"
          label="Singer Name"
          id="singer"
          value={singer}
          onChange={singerChangeHandler}
        />

        <Input
          type="link"
          label="Youtube Link"
          id="link"
          value={link}
          onChange={linkChangeHandler}
        />
      </form>
      <div className={classes.actions}>
        <Button type="button" onClick={submitHandler}>
          Send
        </Button>
      </div>
    </Card>
  );
};

export default NewMusic;
