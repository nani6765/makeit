import React, { useState, useEffect } from "react";
import { Link, withRouter } from "react-router-dom";
import Slider from "react-slick";
import axios from "axios";

import Videos from "./FriendsVideo/Videos.js";

/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";

import {
  MainPageDiv,
  MainPageHading,
  MainPageSubHading,
} from "../css/MainPageElement.js";

function FriendsVideo() {
  const [FVideos, setFVideos] = useState([]);

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    easing: "ease-in-out",
    draggable: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

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

  return (
    <>
      <MainPageDiv>
        <p css={MainPageHading}>
          프렌즈가 참여한 영상들
          <Link
            to={{ pathname: "/making", state: { menu: "제작 영상 알리기" } }}
          >
            더보기 &gt;
          </Link>
        </p>
        <p css={MainPageSubHading}>
          프렌즈가 촬영, 제작, 배우로 참석한 영상이 올라오고 있어요.
        </p>
        <Slider {...settings} className="friendsVideoList">
          {FVideos.map((video, idx) => {
            return <Videos key={idx} video={video} />;
          })}
        </Slider>
      </MainPageDiv>
    </>
  );
}

export default withRouter(FriendsVideo);
