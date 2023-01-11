import React, { useState, useEffect, useContext } from "react";

import Card from "../UI/Card/Card";
import classes from "./Login.module.css";
import Button from "../UI/Button/Button";
import AuthContext from "../../store/auth-context";
import Input from "../UI/Input/Input";
import { useHistory } from "react-router-dom";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import { BsQuestionLg } from "react-icons/bs";
import { IconContext } from "react-icons";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

import userData from "../../mockData/userData.json";

const Login = (props: any) => {
  //React context using for login management and holding on the local storage
  const ctx = useContext(AuthContext);

  //we are going to use after login or sign up for redirect
  let history = useHistory();

  //login fields
  const [enteredEmail, setEnteredEmail] = useState("");
  const [emailIsValid, setEmailIsValid] = useState(true);
  const [enteredPassword, setEnteredPassword] = useState("");
  const [passwordIsValid, setPasswordIsValid] = useState(true);
  const [formIsValid, setFormIsValid] = useState(false);

  //login or register choice
  const [isLogin, setIsLogin] = useState(true);

  //register fields
  const [enteredFirstName, setEnteredFirstName] = useState("");
  const [firstNameIsValid, setFirstNameIsValid] = useState(true);
  const [enteredSurname, setEnteredSurname] = useState("");
  const [surnameIsValid, setSurnameIsValid] = useState(true);


  //Checking form validity!
  useEffect(() => {
    setFormIsValid(
      emailIsValid && passwordIsValid && firstNameIsValid && surnameIsValid
    );
  }, [emailIsValid, passwordIsValid, firstNameIsValid, surnameIsValid]);

  //Change handlers

  const emailChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEnteredEmail(event.target.value);
    setFormIsValid(
      event.target.value.includes("@") && enteredPassword.trim().length > 6
    );
  };

  const passwordChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setEnteredPassword(event.target.value);
    setFormIsValid(emailIsValid && event.target.value.trim().length > 6);
  };

  const firstNameChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setEnteredFirstName(event.target.value);
    setFormIsValid(
      event.target.value.trim().length > 2 &&
        enteredEmail.includes("@") &&
        enteredPassword.trim().length > 6
    );
    console.log("change girdi");
  };

  const surnameChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEnteredSurname(event.target.value);
    setFormIsValid(
      event.target.value.trim().length > 2 &&
        enteredEmail.includes("@") &&
        enteredPassword.trim().length > 6
    );
  };

  //validating inputs
  const validateEmailHandler = () => {
    setEmailIsValid(enteredEmail.includes("@"));
  };

  const validatePasswordHandler = () => {
    setPasswordIsValid(enteredPassword.trim().length > 6);
  };

  const validateFirstNameHandler = () => {
    setFirstNameIsValid(enteredFirstName.trim().length > 1);
  };
  const validateSurnameHandler = () => {
    setSurnameIsValid(enteredSurname.trim().length > 1);
  };


  //notification setting
  const notifyError = () =>
    toast.error("🦄 Wrong email or password", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

  const notifySucces = () =>
    toast.error("🦄 Wow so easy!", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

  //submit handler login and sign up
  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (formIsValid) {
      if (isLogin) {
        const found = userData.users.find(
          (user) => user.email === enteredEmail
        );
        if (found) {
          if (found.password === enteredPassword) {
            ctx.onLogin(enteredEmail, enteredPassword);
            history.push("/");
          } else {
            notifyError();
          }
        } else {
          notifyError();
        }
      } else {
        ctx.onLogin(enteredEmail, enteredPassword);
        history.push("/");
        notifySucces();
      }
    }
  };

  //login or signup handler
  const switchAuthHandler = () => {
    setIsLogin((prevState) => !prevState);
    setFirstNameIsValid(true);
    setSurnameIsValid(true);
    setEmailIsValid(true);
    setPasswordIsValid(true);
    setEnteredFirstName("");
    setEnteredSurname("");
    setEnteredEmail("");
    setEnteredPassword("");
  };

  return (
    <Card className={classes.login}>
      <h1 className={classes.loginHeader}>{isLogin ? "Login" : "Sign Up"}</h1>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      {/* Same as */}
      <ToastContainer />
      <form onSubmit={submitHandler}>
        {!isLogin && (
          <div>
            <Input
              isValid={firstNameIsValid}
              type="text"
              label="First Name"
              id="firstName"
              value={enteredFirstName}
              onChange={firstNameChangeHandler}
              onBlur={validateFirstNameHandler}
            />
            <Input
              isValid={surnameIsValid}
              type="text"
              label="Surname"
              id="surname"
              value={enteredSurname}
              onChange={surnameChangeHandler}
              onBlur={validateSurnameHandler}
            />
          </div>
        )}
        <Input
          isValid={emailIsValid}
          type="email"
          label="E-mail"
          id="email"
          value={enteredEmail}
          onChange={emailChangeHandler}
          onBlur={validateEmailHandler}
        />
        <Input
          isValid={passwordIsValid}
          type="password"
          label="Password"
          id="password"
          value={enteredPassword}
          onChange={passwordChangeHandler}
          onBlur={validatePasswordHandler}
        />
        <div className={classes.actions}>
          <div>
            <Button
              type="submit"
              disabled={!formIsValid}
              className={classes.submitBtn}
            >
              {isLogin ? "Login" : "Create New Account"}
            </Button>
            {isLogin && (
              <span style={{ marginLeft: "1rem" }}>
                <a id="question">
                  <IconContext.Provider value={{ color: "#741188" }}>
                    <BsQuestionLg />
                  </IconContext.Provider>
                </a>
                <Tooltip anchorId="question" html="cem@mail.com<br />1234567" />
              </span>
            )}
          </div>
          <button
            type="button"
            className={classes.buttonSignUp}
            onClick={switchAuthHandler}
          >
            {isLogin ? "Create new account" : "Login with existing account"}
          </button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
