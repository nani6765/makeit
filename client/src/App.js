import React, { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./HeaderAndFooter/Header.js";
import MainPage from "./MainPage/MainPage.js";
import LoginPage from "./User/views/LoginPage.js";
import RegisterPage from "./User/views/RegisterPage";
import Footer from "./HeaderAndFooter/Footer.js";

function App() {
  useEffect(() => {}, []);
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/">
          <MainPage />
        </Route>
        <Route exact path="/login">
          <LoginPage />
        </Route>
        <Route exact path="/register">
          <RegisterPage />
        </Route>
      </Switch>

      <Footer />
    </>
  );
}

export default App;
