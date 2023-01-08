import React from "react";
import classes from "./Music.module.css"


const Music = (props: any) => {
  return (
    <React.Fragment>
      <div className={classes.container}>
        <div className={classes.name}>{props.singer}-{props.name}</div>
        <div className={classes.frame}>
        <iframe  src={props.link} title={props.name} width="560" height="315" frameBorder="0" allowFullScreen
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Music;
