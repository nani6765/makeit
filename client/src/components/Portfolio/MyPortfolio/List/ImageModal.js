import React, { useState, useEffect, useRef } from "react";
import { ImageModalDiv } from "../../CSS/MyPortpolio/DetailCSS.js";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

function ImageModal(props) {
  const [Images, setImages] = useState([]);

  const ref = useRef();
  useOnClickOutside(ref, () => props.setImageFlag(false));

  useEffect(() => {
    let temp = [];
    try {
      for (let i = 0; i < props.profileImgList.length; i++) {
        let item = {
          original: `${props.profileImgList[i]}`,
          thumbnail: `${props.profileImgList[i]}`,
        };
        temp.push(item);
      }
    } finally {
      setImages([...temp]);
    }
  }, []);

  const DownHandler = (e) => {
    if (e.keyCode == 27) {
      props.setImageFlag(false);
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", DownHandler);
    return () => {
      window.removeEventListener("keydown", DownHandler);
    };
  }, []);

  return (
    <ImageModalDiv>
      <div className="innerDiv" ref={ref}>
        <ImageGallery
          items={Images}
          showNav={false}
          thumbnailPosition="right"
          showFullscreenButton={false}
          showIndex={true}
          showPlayButton={false}
        />
      </div>
    </ImageModalDiv>
  );
}

function useOnClickOutside(ref, handler) {
  useEffect(() => {
    const listener = (event) => {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      handler(event);
    };
    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);
    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, handler]);
}

export default ImageModal;
