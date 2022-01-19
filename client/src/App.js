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
import Search from "./components/MainPage/Search/Search.js";
import MakingSearch from "./components/MainPage/Search/MakingSearch.js";
import CoSearch from "./components/MainPage/Search/CoSearch.js";
import PartSearch from "./components/MainPage/Search/PartSearch.js";

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
import QuotationEdit from "./components/MakingMedia/view/RequestVideo/upload/QuotationEdit.js";

import ShareVideoUpload from "./components/MakingMedia/view/ShareVideo/upload/ShareVideoUpload.js";
import ShareVideoDetail from "./components/MakingMedia/view/ShareVideo/detail/ShareVideoDetail.js";
import ShareVideoEdit from "./components/MakingMedia/view/ShareVideo/upload/ShareVideoEdit.js";

//Participate
import Participate from "./components/Participate/view/Participate.js";
import ParticipateUpload from "./components/Participate/view/upload/ParticipateUpload.js";
import ParticipateEdit from "./components/Participate/view/upload/ParticipateEdit.js";
import PartDetail from "./components/Participate/view/detail/PartDetail.js";

//Protfolio
import Portfolio from "./components/Portpolio/Portfolio.js";
import ProdUpload from "./components/Portpolio/MyPortpolio/Production/ProdUpload.js";
import ProUpload from "./components/Portpolio/MyPortpolio/Pro/ProUpload.js";
import ProjectUpload from "./components/Portpolio/Project/upload/ProjectUpload.js";
import ProjectDetail from "./components/Portpolio/Project/detail/ProjectDetail.js";

import MapPicker from "./components/utils/view/Area/MapPicker.js";
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
          <Route exact path="/search" component={Search} />
          <Route exact path="/search/making" component={MakingSearch} />
          <Route exact path="/search/participate" component={PartSearch} />
          <Route exact path="/search/community" component={CoSearch} />
          {/*User*/}
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/register" component={RegisterPage} />
          <Route exact path="/register/complete" component={RegisterComplete} />
          <Route path="/myPage" component={MyPage} />
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
            path="/making/RequestVideoEdit"
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
          <Route exact path="/making/QuotationEdit" component={QuotationEdit} />
          <Route
            exact
            path="/making/ShareUpload"
            component={ShareVideoUpload}
          />
          <Route
            exact
            path="/making/ShareVideoEdit"
            component={ShareVideoEdit}
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
          <Route
            exact
            path="/participate/postEdit"
            component={ParticipateEdit}
          />
          <Route exact path="/participate/post/:url" component={PartDetail} />
          <Route path="/participate" component={Participate} />

          {/*Portpolio*/}
          <Route exact path="/portfolio" component={Portfolio} />
          <Route exact path="/portfolio/prod/upload" component={ProdUpload} />
          <Route exact path="/portfolio/pro/upload" component={ProUpload} />
          <Route
            exact
            path="/portfolio/project/upload"
            component={ProjectUpload}
          />
          <Route
            exact
            path="/portfolio/project/:url"
            component={ProjectDetail}
          />
          <Route exact path="/MapPicker" component={MapPicker} />
        </Switch>
        <Footer />
        <MobileFooter />
      </>
    );
  }
}

export default App;
