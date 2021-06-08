import React from "react";
import FriendsVideo from "./views/FriendsVideo.js";
import CommunityPost from "./views/CommunityPost.js";
import ProArea from "./views/ProArea.js";
import MainBanner from "./views/MainBanner.js";
import MobileFooter from "../HeaderAndFooter/MobileFooter.js";

function MainPage() {
  return (
    <>
      <MainBanner />
      <FriendsVideo />
      <CommunityPost />
      <ProArea />
      <MobileFooter path="/" />
    </>
  );
}

export default MainPage;
