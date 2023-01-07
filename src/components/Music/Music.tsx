import React from "react";

const Music = (props: any) => {
  return (
    <React.Fragment>
      <div>{props.name}</div>
      <div>{props.singer}</div>
      <a href={props.link}>Youtube Link</a>
      <div>{props.name}</div>
    </React.Fragment>
  );
};

export default Music;
