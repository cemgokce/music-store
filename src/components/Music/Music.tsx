import React from "react";
import classes from "./Music.module.css"
import Button from "../UI/Button/Button"
import Card from "../UI/Card/Card"


const Music = (props: any) => {
  return (
    <Card className={classes.musicCard}>
        <div className={classes.name}>{props.singer} - {props.name}</div>
        <div className={classes.frame}>
        <iframe  src={`https://www.youtube.com/embed/${props.link}`} title={props.name} width="560" height="315" frameBorder="0" allowFullScreen
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
        </div>
        <Button className={classes.btnFav}>Add to Favorites</Button>
 
    </Card>
  );
};

export default Music;
