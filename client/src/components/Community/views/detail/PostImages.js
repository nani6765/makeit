import React, { useState, useEffect, useCallback } from "react";
import { render } from "react-dom";
import ImageViewer from "react-simple-image-viewer";
import "../../css/ImageViewer.css";
function PostImages(props) {
  const [Images, setImages] = useState([...props.images]);
  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);

  const ImageArray = () => {
    let temp = [];
    for (let i = 0; i < Images.length; i++) {
      temp.push(Images[i].path);
    }
    return temp;
  };

  const openImageViewer = useCallback((index) => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };

  return (
    <>
      <div className="image">
        {ImageArray().map((src, idx) => (
          <img
            src={src}
            onClick={() => openImageViewer(idx)}
            key={idx}
            style={{ margin: "2px" }}
            alt=""
          />
        ))}
        {isViewerOpen && (
          <ImageViewer
            src={ImageArray()}
            currentIndex={currentImage}
            onClose={closeImageViewer}
            style={{ zIndex: "99" }}
          />
        )}
      </div>
    </>
  );
}

export default PostImages;
