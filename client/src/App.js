import React from "react";
import { Route, Switch } from "react-router-dom";
import Auth from "./hoc/auth.js";
import Header from "./components/HeaderAndFooter/Header.js";
import TopArea from "./components/utils/TopArea.js";
import Footer from "./components/HeaderAndFooter/Footer.js";
import MainPage from "./components/MainPage/MainPage.js";
import LoginPage from "./components/User/views/LoginPage.js";
import RegisterPage from "./components/User/views/RegisterPage.js";
import CommunityMain from "./components/Community/views/CommunityMain.js";
import CommunityPostDetail from "./components/Community/views/PostDetail.js";
import CommunityUpload from "./components/Community/views/CommunityUpload.js";
import CommunityUpdate from "./components/Community/views/CommunityUpdate.js";

function App() {
  return (
    <>
      <Header />
      <TopArea />
      <Switch>
        <Route exact path="/" component={Auth(MainPage, null)} />
        <Route exact path="/login" component={Auth(LoginPage, false)} />
        <Route exact path="/register" component={Auth(RegisterPage, false)} />
        <Route exact path="/community" component={Auth(CommunityMain, null)} />
        <Route
          exact
          path="/community/post/:postId"
          component={Auth(CommunityPostDetail, null)}
        />
        <Route
          exact
          path="/community/upload"
          component={Auth(CommunityUpload, true)}
        />
        <Route
          exact
          path="/community/update/:postId"
          component={Auth(CommunityUpdate, true)}
        />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
