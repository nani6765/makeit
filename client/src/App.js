import React from "react";
import { Route, Switch } from "react-router-dom";
import Auth from "./hoc/auth.js";
//Basic
import Header from "./components/HeaderAndFooter/Header.js";
import TopArea from "./components/utils/TopArea.js";
import Footer from "./components/HeaderAndFooter/Footer.js";

//Main
import MainPage from "./components/MainPage/MainPage.js";

//Landing
import LandingPage from "./components/LandingPage/LandingPage.js";

//User
import LoginPage from "./components/User/views/LoginPage.js";
import RegisterPage from "./components/User/views/RegisterPage.js";
import MyPage from "./components/MyPage/MyPage.js";
import ChatDetail from "./components/MyPage/Chat/ChatDetail.js";

//Comminity
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
        <Route exact path="/landingPage" component={Auth(LandingPage, null)} />
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
        <Route exact path="/myPage" component={Auth(MyPage, true)} />
        <Route exact path="/chat/:chatid" component={Auth(ChatDetail, true)} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
