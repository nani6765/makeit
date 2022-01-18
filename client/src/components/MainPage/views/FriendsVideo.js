import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import Slider from "react-slick";
import axios from "axios";

import Videos from "./FriendsVideo/Videos.js";

import { MainPageDiv } from "../css/MainPageElement.js";

function FriendsVideo() {
  const [FVideos, setFVideos] = useState([]);

  var settings = {
    dots: false,
    infinite: FVideos.length > 3,
    speed: 500,
    easing: "ease-in-out",
    draggable: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
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
