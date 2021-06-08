import React from "react";
import { Route, Switch } from "react-router-dom";
import Auth from "./hoc/auth.js";
import Header from "./components/HeaderAndFooter/Header.js";
import TopArea from "./components/TopArea.js";
import Footer from "./components/HeaderAndFooter/Footer.js";
import MainPage from "./components/MainPage/MainPage.js";
import LoginPage from "./components/User/views/LoginPage.js";
import RegisterPage from "./components/User/views/RegisterPage.js";
import CommunityUpload from "./components/Community/views/CommunityUpload.js";

function App() {
  return (
    <>
      <Header />
      <TopArea />
      <Switch>
        <Route exact path="/" component={Auth(MainPage, null)} />
        <Route exact path="/login" component={Auth(LoginPage, false)} />
        <Route exact path="/register" component={Auth(RegisterPage, false)} />
        <Route
          exact
          path="/community"
          component={Auth(CommunityUpload, true)}
        />
        <Route
          exact
          path="/community/upload"
          component={Auth(CommunityUpload, true)}
        />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
