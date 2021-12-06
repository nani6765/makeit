import React from "react";
import { Link, withRouter } from "react-router-dom";

import FriendsVideo from "./views/FriendsVideo.js";
import CommunityPost from "./views/CommunityPost.js";
import ProArea from "./views/ProArea.js";
import MainBanner from "./views/MainBanner.js";

import { CommonMarginDiv } from "../CommonCSS.js";
import { MainPageHading, MainPageSubHading } from "./css/MainPageElement.js";
import { ReactComponent as MoreIcon } from "./css/more.svg";

/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";

function MainPage() {
  return (
    <>
      <MainBanner />
      <CommonMarginDiv style={{ paddingTop: "80px", paddingBottom: "50px" }}>
        <>
          <p css={MainPageHading}>
            프렌즈가 참여한 영상들
            <Link
              to={
                "/making?category=제작%20영상%20알리기&subCategory=전체&sort=인기순&pIdx=0"
              }
            >
              <MoreIcon />
            </Link>
          </p>
          <p css={MainPageSubHading}>
            프렌즈가 촬영, 제작, 배우로 참석한 영상이 올라오고 있어요.
          </p>
        </>
        <FriendsVideo />
      </CommonMarginDiv>
      <div
        style={{
          paddingTop: "50px",
          paddingBottom: "50px",
          backgroundColor: "#FAF6F6",
        }}
      >
        <CommonMarginDiv>
          <>
            <p css={MainPageHading}>
              커뮤니티
              <Link to="/community">
                <MoreIcon />
              </Link>
            </p>
            <p css={MainPageSubHading}>
              영상, 그리고 변화를 만드는 사람들과 소통해보세요!
            </p>
          </>
          <CommunityPost />
        </CommonMarginDiv>
      </div>

      <CommonMarginDiv
        style={{
          paddingTop: "50px",
        }}
      >
        <>
          <p css={MainPageHading}>
            이 프로님은 어떠세요?
            <a href="/">
              <MoreIcon />
            </a>
          </p>
          <p css={MainPageSubHading}>
            지금 뜨고 있는 프로덕션, 프로님을 추천해드려요!
          </p>
        </>
        <ProArea />
      </CommonMarginDiv>
    </>
  );
}

export default withRouter(MainPage);
