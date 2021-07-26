import React, { useState, useCallback } from "react";
import Cropper from "react-easy-crop";
import { EditProfile } from "../../css/MyPageContentElement.js";

function CropperModal(props) {
  //cropping
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  //cropping Result
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);

  const backgroundClick = () => {
    props.setImageSrc(null);
    props.setModalFlag(false);
  };

  const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
    setCroppedAreaPixels(croppedAreaPixels);
  }, []);

  const CroppedImageFunc = () => {
    props.setCroppedAreaPixelsResult(croppedAreaPixels);
    props.setModalFlag(false);
  };

  return (
    <EditProfile>
      <div
        className="background"
        onClick={() => {
          backgroundClick();
        }}
      ></div>
      <div className="ModalDiv">
        <div className="cropperDiv">
          <Cropper
            image={props.imageSrc}
            crop={crop}
            zoom={zoom}
            aspect={1}
            cropShape="round"
            showGrid={false}
            onCropChange={setCrop}
            onCropComplete={onCropComplete}
            onZoomChange={setZoom}
          />
        </div>
        <button type="button" onClick={() => CroppedImageFunc()}>
          이미지 선택
        </button>
      </div>
      
    </EditProfile>
  );
}

export default CropperModal;
