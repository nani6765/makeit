import React from "react";
import { Route, Switch } from "react-router-dom";
import Auth from "./hoc/auth.js";
import MainPage from "./MainPage/MainPage.js";
import LoginPage from "./User/views/LoginPage.js";
import RegisterPage from "./User/views/RegisterPage";

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Auth(MainPage, null)} />
        <Route exact path="/login" component={Auth(LoginPage, false)} />
        <Route exact path="/register" component={Auth(RegisterPage, false)} />
      </Switch>
    </>
  );
}

export default App;
