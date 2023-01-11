import React from "react";
import NewMusic from "../components/Music/NewMusic";
import classes from "./NewMusicPage.module.css"

export default function NewMusicPage() {
  return (
    <div className={classes.container}>
      <NewMusic />
    </div>
  );
}
