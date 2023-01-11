import React from "react";
import Login from "../components/Auth/Login";
import classes from "./LoginPage.module.css";

export default function LoginPage() {
  return (
    <div className={classes.container}>
      <Login />
    </div>
  );
}
