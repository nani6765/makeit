import React, { useState, useCallback, useEffect } from "react";
import { useSelector } from "react-redux";

import { EditProfileGrid } from "../css/MyPageContentElement.js";
import Cropper from "react-easy-crop";
import TESTIMAGE from "../../../Img/sample.png";

function EditProfile(props) {
  const user = useSelector((state) => state.user);
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);

  const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
    console.log(croppedArea, croppedAreaPixels);
    //getCroppedImg(user.userData.photoURL, croppedArea);
  }, []);

  useEffect(() => {
    console.log("crop", crop);
  }, [crop]);

  /*
  const TEST = (url) => {
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");
    const image = new Image();
    image.onload = drawImageActualSize;
    image.src = url;
    function drawImageActualSize() {
      canvas.width = this.naturalWidth;
      ctx.drawImage(this, 0, 0);
      ctx.drawImage(this, 0, 0, this.width, this.height);
    }
  };
  */

  /*
  const getCroppedImg = async (img, crop) => {
    const image = await createImage(img);
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    canvas.width = 100;
    canvas.height = 100;
    ctx.drawImage(
      image,
      crop.x,
      crop.y,
      crop.width,
      crop.height,
      0,
      0,
      canvas.width,
      canvas.height
    );
    console.log(ctx);
  };
  */

  return (
    <EditProfileGrid>
      <p className="title">프로필 관리</p>
      <p className="back">X</p>
      <div className="editProfileDiv">
        <div className="editProfile">
          <Cropper
            image={TESTIMAGE}
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
      </div>
      <div className="eidtNickNameDiv">
        <div className="editNickName">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non pariatur
          quia amet cupiditate veritatis laborum asperiores necessitatibus
          consequuntur deserunt. Corrupti ipsum ex fugit? Nesciunt perspiciatis
          vitae facilis atque quisquam pariatur?
        </div>
      </div>
      <div className="btnDiv">
        <button>수정사항 저장</button>
      </div>
    </EditProfileGrid>
  );
}

export default EditProfile;
