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
import ChatDetailDiv from "./components/MyPage/Chat/ChatDetailDiv.js";

//Comminity
import CommunityList from "./components/Community/views/CommunityList.js";
import CommunityDetail from "./components/Community/views/CommunityDetail.js";
import PostUpload from "./components/Community/views/PostUpload.js";
import PostEdit from "./components/Community/views/PostEdit.js";

//MakingMedia
import MakingMedia from "./components/MakingMedia/MakingMedia.js";
import FindingProducerUplopad from "./components/MakingMedia/view/FindingProducer/upload/FindingProducerUpload.js";
import ProducerDetail from "./components/MakingMedia/view/FindingProducer/detail/ProducerDetail.js";
import FindingProducerEdit from "./components/MakingMedia/view/FindingProducer/upload/FindingProducerEdit.js";
import RequestVideoUpload from "./components/MakingMedia/view/RequestVideo/upload/RequestVideoUpload.js";
import ShareVideoUpload from "./components/MakingMedia/view/ShareVideo/upload/ShareVideoUpload.js";
import RequestDetail from "./components/MakingMedia/view/RequestVideo/detail/RequestDetail.js";

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

          <Route exact path="/community" component={CommunityList} />
          <Route
            exact
            path="/community/post/:postId"
            component={CommunityDetail}
          />
          <Route exact path="/community/upload" component={PostUpload} />
          <Route exact path="/community/update/:postId" component={PostEdit} />

          <Route exact path="/myPage" component={MyPage} />
          <Route exact path="/chat/:chatUrl" component={ChatDetailDiv} />

          <Route exact path="/Making" component={MakingMedia} />
          <Route
            exact
            path="/Making/ProducerUpload"
            component={FindingProducerUplopad}
          />
          <Route
            exact
            path="/Making/ProducerEdit"
            component={FindingProducerEdit}
          />
          <Route
            exact
            path="/Making/ProducerPost/:url"
            component={ProducerDetail}
          />
          <Route
            exact
            path="/Making/RequestUpload"
            component={RequestVideoUpload}
          />
          <Route
            exact
            path="/Making/RequestPost/:url"
            component={RequestDetail}
          />

          <Route
            exact
            path="/Making/ShareUpload"
            component={ShareVideoUpload}
          />
        </Switch>
        <Footer />
      </>
    );
  }
}

export default App;
