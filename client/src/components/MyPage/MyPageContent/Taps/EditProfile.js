import React, { useState, useEffect, useCallback } from "react";
import { useSelector } from "react-redux";

import CropperModal from "../Func/CropperModal.js";
import Avatar from "react-avatar";
import { EditProfileDiv } from "../../css/MyPageContentElement.js";
import { getCroppedImg } from "../Func/CanvasUtils.js";
import axios from "axios";
//import S3 from "../Func/UploadS3.js";

function EditProfile(props) {
  const user = useSelector((state) => state.user);
  const [DisplayName, setDisplayName] = useState(user.userData.displayName);
  const [PhotoURL, setPhotoURL] = useState(user.userData.photoURL);
  const [ModalFlag, setModalFlag] = useState(false);

  //유저가 선택한 이미지
  const [imageSrc, setImageSrc] = React.useState(null);
  const [croppedAreaPixelsResult, setCroppedAreaPixelsResult] = useState(null);

  //canvas Data
  const [CanvasData, setCanvasData] = useState(null);

  function readFile(file) {
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.addEventListener("load", () => resolve(reader.result), false);
      reader.readAsDataURL(file);
    });
  }

  const onFileChange = async (e) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      let imageDataUrl = await readFile(file);
      setImageSrc(imageDataUrl);
      setModalFlag(true);
    }
  };

  useEffect(async () => {
    if (imageSrc && croppedAreaPixelsResult) {
      try {
        const croppedImage = await getCroppedImg(
          imageSrc,
          croppedAreaPixelsResult
        );
        const getPromise = (croppedImage) => {
          new Promise((resolve) => {
            croppedImage.toBlob((file) => {
              resolve(URL.createObjectURL(file));
            }, "image/png");
          }).then((result) => {
            setPhotoURL(result);
            console.log(result);
          });
        };
        const updateURL = getPromise(croppedImage);

        setCanvasData(croppedImage);
      } catch (e) {
        console.error(e);
      }
    }
  }, [imageSrc, croppedAreaPixelsResult]);

  function dataURItoBlob(dataURI) {
    var binary = atob(dataURI.split(",")[1]);
    var array = [];
    for (var i = 0; i < binary.length; i++) {
      array.push(binary.charCodeAt(i));
    }
    return new Blob([new Uint8Array(array)], {
      type: "image/jpeg",
    });
  }

  const submitFunc = useCallback(async (e) => {
    e.preventDefault();
    try {
      const ImgDataURL = CanvasData.toDataURL("image/png");
      //console.log("ImgDataURL", ImgDataURL);
      var blobData = dataURItoBlob(ImgDataURL);
      console.log("blobData", blobData);
      /*
      var params = { Key: fileName, ContentType: file.type, Body: blobData };
      bucket.upload(params, function (err, data) {
        console.log(data);
        console.log(err ? "ERROR!" : "UPLOADED.");
      });
      */

      let formData = new FormData();
      const config = {
        header: {
          "content-type": "multipart.form-data",
        },
      };
      formData.append("file", blobData);
      axios.post("/api/user/editProfile", formData, config).then((response) => {
        if (response.data.success) {
          console.log(response.data);
        }
      });
    } catch (e) {
      console.log(e);
    }
  });

  return (
    <EditProfileDiv>
      <div className="editProfileDiv">
        {imageSrc && ModalFlag ? (
          <CropperModal
            imageSrc={imageSrc}
            setImageSrc={setImageSrc}
            setModalFlag={setModalFlag}
            setCroppedAreaPixelsResult={setCroppedAreaPixelsResult}
          />
        ) : (
          <>
            <div className="avatarSelect">
              <input
                type="file"
                id="userAvartar"
                onChange={onFileChange}
                accept="image/*"
              />
              <label htmlFor="userAvartar">
                <Avatar
                  src={PhotoURL}
                  size="80"
                  round={true}
                  style={{ border: "1px solid #c6c6c6" }}
                  className="img"
                />
                <i className="bi bi-camera"></i>
              </label>
              <button type="button">기본 이미지로 변경</button>
            </div>
          </>
        )}
      </div>
      <form onSubmit={(e) => submitFunc(e)}>
        <label htmlFor="nickname">닉네임 변경</label>
        <input
          type="text"
          id="nickname"
          value={DisplayName}
          onChange={(e) => setDisplayName(e.currentTarget.value)}
          required
        />
        <div className="FormbtnDiv">
          <button type="submit">수정사항 저장</button>
        </div>
      </form>
    </EditProfileDiv>
  );
}

export default EditProfile;
