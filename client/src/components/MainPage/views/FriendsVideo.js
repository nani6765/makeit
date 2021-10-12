import React, { useState, useEffect } from "react";
import { Link, withRouter } from "react-router-dom";
import axios from "axios";

import Videos from "./FriendsVideo/Videos.js";

/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";

import ScrollContainer from "react-indiana-drag-scroll";
import {
  MainPageDiv,
  MainPageHading,
  MainPageSubHading,
  MainPageGridDiv,
  MainPageGridPrev,
  MainPageGridNext,
  MainPageGridPrevAndNext,
  MainPageGridContent,
} from "../css/MainPageElement.js";

function FriendsVideo() {
  const [FVideos, setFVideos] = useState([]);

  useEffect(() => {
    let body = {
      sort: {
        likeNum: -1,
      },
    };
    axios.post("/api/main/friendVideo", body).then((response) => {
      if (response.data.success) {
        setFVideos([...response.data.Videos]);
      }
    });
  }, []);

  useEffect(() => {
    console.log(FVideos);
  }, [FVideos]);

  let FVGridContent = MainPageGridContent(310);
  var scrollAmount = 0;

  const handlePrev = () => {
    const target = document.querySelector(".frinedsVideo");
    target.scrollTo({
      top: 0,
      left: (scrollAmount -= 510),
      behavior: "smooth",
    });
  };

  const handleNext = () => {
    const target = document.querySelector(".frinedsVideo");
    target.scrollTo({
      top: 0,
      left: (scrollAmount += 510),
      behavior: "smooth",
    });
  };

  return (
    <>
      <MainPageDiv>
        <p css={MainPageHading}>
          프렌즈가 참여한 영상들
          <Link to={{pathname:"/Making", state: {menu: "제작 영상 알리기"}}}>더보기 &gt;</Link>
        </p>
        <p css={MainPageSubHading}>
          프렌즈가 촬영, 제작, 배우로 참석한 영상이 올라오고 있어요.
        </p>

        <MainPageGridDiv>
          <MainPageGridPrev css={MainPageGridPrevAndNext}>
            <button onClick={() => handlePrev()}>&lt;</button>
          </MainPageGridPrev>
          <ScrollContainer
            className="scroll-container frinedsVideo"
            css={FVGridContent}
          >
            {FVideos.map((video, idx) => {
              return <Videos key={idx} video={video} />;
            })}
          </ScrollContainer>
          <MainPageGridNext css={MainPageGridPrevAndNext}>
            <button onClick={() => handleNext()}>&gt;</button>
          </MainPageGridNext>
        </MainPageGridDiv>
      </MainPageDiv>
    </>
  );
}

export default withRouter(FriendsVideo);
