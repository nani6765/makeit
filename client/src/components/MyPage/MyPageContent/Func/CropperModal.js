import React, { useState, useCallback } from "react";
import Cropper from "react-easy-crop";
import { EditProfile } from "../../css/MyPageContentElement.js";
import { getCroppedImg } from "./CanvasUtils.js";

function CropperModal(props) {
  //cropping
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  //cropping Result
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);
  //cropped Image
  const [croppedImage, setCroppedImage] = useState(null);

  const backgroundClidk = () => {
    props.setImageSrc(null);
    props.setModalFlag(false);
  };

  const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
    setCroppedAreaPixels(croppedAreaPixels);
  }, []);

  const showCroppedImage = useCallback(async () => {
    try {
      const croppedImage = await getCroppedImg(
        props.imageSrc,
        croppedAreaPixels
      );
      console.log("donee", { croppedImage });
      setCroppedImage(croppedImage);
    } catch (e) {
      console.error(e);
    }
  }, [props.imageSrc, croppedAreaPixels]);

  const onClose = useCallback(() => {
    setCroppedImage(null);
  }, []);

  return (
    <EditProfile>
      <div
        className="background"
        onClick={() => {
          backgroundClidk();
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
        <button type="button">이미지 선택</button>
      </div>
    </EditProfile>
  );
}

export default CropperModal;
