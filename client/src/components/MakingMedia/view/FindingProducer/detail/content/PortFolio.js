import React from "react";
import { DetaulContentSubTitle, PortFolioDiv } from "../../../../css/FPDCSS.js";
import YouTube from "react-youtube";
import Slider from "react-slick";

function PortFolio(props) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    easing: "ease-in-out",
    draggable: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const opts = {
    height: "100%",
    width: "100%",
  };

  return (
    <div>
      <DetaulContentSubTitle>포트폴리오</DetaulContentSubTitle>
      <PortFolioDiv>
        {props.VideoArr && (
          <Slider {...settings}>
            {props.VideoArr.map((video, idx) => {
              return (
                <YouTube
                  videoId={video}
                  key={idx}
                  opts={opts}
                  containerClassName="VideoOutterDiv"
                  className="VideoInnerDiv"
                />
              );
            })}
          </Slider>
        )}
      </PortFolioDiv>
    </div>
  );
}

export default PortFolio;
