import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";

import FirstLanding from "./views/FirstLanding.js";
import SecondLanding from "./views/SecondLanding.js";
import ThirdLanding from "./views/ThirdLanding.js";
import FourthLanding from "./views/FourthLanding.js";
import FifthLanding from "./views/FifthLanding.js";
import SixthLanding from "./views/SixthLanding.js";

import { PCOnly, PCExcept } from "./css/LandigPageElement.js";

function LandingPage() {
  const sliderRef = useRef();

  var NextKeys = { 39: 1, 40: 1 };
  var PrevKeys = { 37: 1, 38: 1 };

  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    draggable: false,
    easing: "ease-in-out",
    vertical: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const gotoNext = () => {
    sliderRef.current.slickNext();
  };

  const gotoPrev = () => {
    sliderRef.current.slickPrev();
  };

  function wheelEvent(e) {
    e.preventDefault();
    if (e.deltaY < 0) {
      gotoPrev();
    } else if (e.deltaY > 0) {
      gotoNext();
    }
  }

  function keyEvent(e) {
    e.preventDefault();
    if (NextKeys[e.keyCode]) {
      gotoNext();
    } else if (PrevKeys[e.keyCode]) {
      gotoPrev();
    }
    return false;
  }

  // call this to Disable
  function disableScroll() {

    window.addEventListener(
      "keydown",
      (e) => {
        keyEvent(e);
      },
      false
    );
  }

  useEffect(() => {
    window.addEventListener(
      "wheel",
      wheelEvent,
      { passive : false }
    ); // modern desktop

    
    window.addEventListener(
      "keydown",
      keyEvent,
      false
    );

    return () => {
      console.log('hi?')

      window.removeEventListener("wheel", wheelEvent, { passive : false });
      
      window.removeEventListener(
        "keydown",
        keyEvent,
        false
      );
    }
  });

  return (
    <>
      <PCOnly>
        <Slider {...settings} ref={sliderRef}>
          <FirstLanding />
          <SecondLanding />
          <ThirdLanding />
          <FourthLanding />
          <FifthLanding />
          <SixthLanding />
        </Slider>
      </PCOnly>
      <PCExcept>
        <FirstLanding />
        <SecondLanding />
        <ThirdLanding />
        <FourthLanding />
        <FifthLanding />
        <SixthLanding />
      </PCExcept>
    </>
  );
}

export default LandingPage;
