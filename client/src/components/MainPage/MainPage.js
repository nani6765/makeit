import React from "react";
import FriendsVideo from "./views/FriendsVideo.js";
import CommunityPost from "./views/CommunityPost.js";
import ProArea from "./views/ProArea.js";
import MainBanner from "./views/MainBanner.js";

import {
  CommonMarginDiv,
  CommonPaddingDiv,
  CommonFullDiv,
} from "../CommonCSS.js";

function MainPage() {
  return (
    <>
      <MainBanner />
      <FriendsVideo />
      <CommunityPost />
      <ProArea />
      {/*
         <CommonMarginDiv style={{ height: "10vh" }}>
        <div
          style={{ backgroundColor: "red", width: "100%", height: "100%" }}
        ></div>
      </CommonMarginDiv>
      <CommonPaddingDiv style={{ height: "10vh" }}>
        <div
          style={{ backgroundColor: "blue", width: "100%", height: "100%" }}
        ></div>
      </CommonPaddingDiv>
      <CommonFullDiv style={{ height: "10vh" }}>
        <div
          style={{ backgroundColor: "green", width: "100%", height: "100%" }}
        ></div>
      </CommonFullDiv>
        */}
    </>
  );
}

export default MainPage;
