import React, { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setUser, clearUser } from "./redux/_actions/user_action.js";
import { firebase } from "./firebase.js";

//Basic
import Header from "./components/HeaderAndFooter/Header/Header.js";
import Footer from "./components/HeaderAndFooter/Footer/Footer.js";
import TopArea from "./components/utils/TopArea.js";

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
  let dispatch = useDispatch();
  const isLoading = useSelector((state) => state.user.isLoading);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        dispatch(setUser(user));
      } else {
        dispatch(clearUser());
      }
    });
  }, []);

  if (isLoading) {
    return <div>...loading</div>;
  } else {
    return (
      <>
        <Header />
        <TopArea />
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route exact path="/landingPage" component={LandingPage} />
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/register" component={RegisterPage} />
          <Route exact path="/community" component={CommunityMain} />
          <Route
            exact
            path="/community/post/:postId"
            component={CommunityPostDetail}
          />
          <Route exact path="/community/upload" component={CommunityUpload} />
          <Route
            exact
            path="/community/update/:postId"
            component={CommunityUpdate}
          />
          <Route exact path="/myPage" component={MyPage} />
          <Route exact path="/chat/:chatUrl" component={ChatDetail} />
        </Switch>
        <Footer />
      </>
    );
  }
}

export default App;
