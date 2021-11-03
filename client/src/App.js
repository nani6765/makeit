import React, { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setUser, clearUser } from "./redux/_actions/user_action.js";
import firebase from "./config/firebase.js";

//Basic
import Header from "./components/HeaderAndFooter/Header/Header.js";
import Footer from "./components/HeaderAndFooter/Footer/Footer.js";
import TopArea from "./components/utils/view/Area/TopArea.js";
import MobileFooter from "./components/HeaderAndFooter/Footer/MobileFooter.js";

//Main
import MainPage from "./components/MainPage/MainPage.js";

//Landing
import LandingPage from "./components/LandingPage/LandingPage.js";

//User
import LoginPage from "./components/User/views/LoginPage.js";
import RegisterPage from "./components/User/views/RegisterPage.js";
import RegisterComplete from "./components/User/views/RegisterComplete.js";
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
import RequestVideoEdit from "./components/MakingMedia/view/RequestVideo/upload/RequestVideoEdit.js";
import RequestDetail from "./components/MakingMedia/view/RequestVideo/detail/RequestDetail.js";
import QuotationUpload from "./components/MakingMedia/view/RequestVideo/upload/QuotationUpload.js";

import ShareVideoUpload from "./components/MakingMedia/view/ShareVideo/upload/ShareVideoUpload.js";
import ShareVideoDetail from "./components/MakingMedia/view/ShareVideo/detail/ShareVideoDetail.js";

//Participate
import Participate from "./components/Participate/view/Participate.js";
import ParticipateUpload from "./components/Participate/view/upload/ParticipateUpload.js";
import PartDetail from "./components/Participate/view/detail/PartDetail.js";

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
          {/*Main*/}
          <Route exact path="/" component={MainPage} />
          <Route exact path="/landingPage" component={LandingPage} />
          {/*User*/}
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/register" component={RegisterPage} />
          <Route exact path="/register/complete" component={RegisterComplete} />
          <Route exact path="/myPage" component={MyPage} />
          <Route exact path="/chat/:chatUrl" component={ChatDetailDiv} />
          {/*Community*/}
          <Route
            exact
            path="/community/post/:postId"
            component={CommunityDetail}
          />
          <Route exact path="/community/upload" component={PostUpload} />
          <Route exact path="/community/update/:postId" component={PostEdit} />
          <Route path="/community" component={CommunityList} />
          {/*Making*/}
          <Route
            exact
            path="/making/ProducerUpload"
            component={FindingProducerUplopad}
          />
          <Route
            exact
            path="/making/ProducerEdit"
            component={FindingProducerEdit}
          />
          <Route
            exact
            path="/making/ProducerPost/:url"
            component={ProducerDetail}
          />
          <Route
            exact
            path="/making/RequestUpload"
            component={RequestVideoUpload}
          />
          <Route
            exact
            path="/making/RequestEdit"
            component={RequestVideoEdit}
          />
          <Route
            exact
            path="/making/RequestPost/:url"
            component={RequestDetail}
          />
          <Route
            exact
            path="/making/QuotationUpload"
            component={QuotationUpload}
          />
          <Route
            exact
            path="/making/ShareUpload"
            component={ShareVideoUpload}
          />
          <Route
            exact
            path="/making/ShareVideo/:url"
            component={ShareVideoDetail}
          />
          <Route path="/making" component={MakingMedia} />
          {/*Participate*/}
          <Route
            exact
            path="/participate/upload"
            component={ParticipateUpload}
          />
          <Route exact path="/participate/post/:url" component={PartDetail} />
          <Route path="/participate" component={Participate} />
        </Switch>
        <Footer />
        <MobileFooter />
      </>
    );
  }
}

export default App;
