import React from "react";
import MainBanner from "./views/MainBanner.js";
import FriendsVideo from "./views/FriendsVideo.js";
import CommunityPost from "./views/CommunityPost.js";
import ProArea from "./views/ProArea.js";
import Header from "../HeaderAndFooter/Header.js";
import Footer from "../HeaderAndFooter/Footer.js";

function MainPage() {
  return (
    <>
      <Header />
      <MainBanner />
      <FriendsVideo />
      <CommunityPost />
      <ProArea />
      <Footer />
    </>
  );
}

export default MainPage;
