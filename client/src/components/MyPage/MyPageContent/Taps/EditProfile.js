import React, { useState, useEffect, useCallback } from "react";
import { useSelector } from "react-redux";
import { withRouter, useHistory } from "react-router-dom";
import CropperModal from "../Func/CropperModal.js";
import Avatar from "react-avatar";
import { EditProfileDiv } from "../../css/MyPageContentElement.js";
import { getCroppedImg } from "../Func/CanvasUtils.js";
import axios from "axios";
import { firebase } from "../../../../firebase.js";

function EditProfile(props) {
  const user = useSelector((state) => state.user);
  const [DisplayName, setDisplayName] = useState(user.userData.displayName);
  const [PhotoURL, setPhotoURL] = useState(user.userData.photoURL);
  const [ModalFlag, setModalFlag] = useState(false);
  const [isLoading, setisLoading] = useState(false);

  //유저가 선택한 이미지
  const [imageSrc, setImageSrc] = React.useState(null);
  const [croppedAreaPixelsResult, setCroppedAreaPixelsResult] = useState(null);

  //canvas Data
  const [CanvasData, setCanvasData] = useState(null);

  let history = useHistory();

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
        alert(e);
      }
    }
  }, [imageSrc, croppedAreaPixelsResult]);

  function dataURItoBlob(dataURI) {
    var binary = atob(dataURI.split(",")[1]);
    var array = [];
    for (var i = 0; i < binary.length; i++) {
      array.push(binary.charCodeAt(i));
    }

    var byteArray = new Uint8Array(array);
    var byteArrays = [];
    byteArrays.push(byteArray);

    return new Blob(byteArrays, {
      type: "image/png",
    });
  }

  function SubmitExit() {
    history.push("/MyPage");
    setisLoading(false);
    setDisplayName(user.userData.displayName);
    setPhotoURL(user.userData.photoURL);
    setImageSrc(null);
    setCroppedAreaPixelsResult(null);
    setCanvasData(null);
    console.log("test");
    history.go(0);
  }

  const submitFunc = useCallback(async (e) => {
    e.preventDefault();
    try {
      setisLoading(true);
      if (CanvasData === null) {
        var currentUser = firebase.auth().currentUser;

        try {
          await currentUser.updateProfile({
            displayName: DisplayName,
            photoURL: PhotoURL,
          });
          //set...?
          await firebase
            .database()
            .ref("users")
            .child(user.userData.uid)
            .update({
              name: DisplayName,
              image: PhotoURL,
            });
          let body = {
            uid: user.userData.uid,
            displayName: DisplayName,
            photoURL: PhotoURL,
          };

          axios.post("/api/user/uploadProfile", body).then((response) => {
            if (response.data.success) {
              SubmitExit();
            }
          });
          setisLoading(false);
        } catch (error) {
          alert(error);
          setisLoading(false);
        }
      } else {
        const ImgDataURL = CanvasData.toDataURL("image/jpg");

        var blobData = dataURItoBlob(ImgDataURL);

        let formData = new FormData();
        const config = {
          header: {
            "content-type": "multipart.form-data",
          },
        };
        formData.append("file", blobData, user.userData.uid + ".png");

        var currentUser = firebase.auth().currentUser;
        axios
          .post("/api/user/editProfile", formData, config)
          .then(async (response) => {
            if (response.data.success) {
              try {
                await currentUser.updateProfile({
                  displayName: DisplayName,
                  photoURL: response.data.filePath,
                });
                await firebase
                  .database()
                  .ref("users")
                  .child(user.userData.uid)
                  .update({
                    name: DisplayName,
                    image: response.data.filePath,
                  });
                let body = {
                  uid: user.userData.uid,
                  displayName: DisplayName,
                  photoURL: response.data.filePath,
                };

                axios.post("/api/user/uploadProfile", body).then((response) => {
                  if (response.data.success) {
                    SubmitExit();
                  }
                });
                setisLoading(false);
              } catch (error) {
                alert(error);
                setisLoading(false);
              }
            }
          });
      }
    } catch (e) {
      alert(e);
      setisLoading(false);
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
              <button
                type="button"
                onClick={() =>
                  setPhotoURL(
                    "https://kr.object.ncloudstorage.com/makeit/user/profile.png"
                  )
                }
              >
                기본 이미지로 변경
              </button>
            </div>
          </>
        )}
      </div>
      <form
        onSubmit={(e) => {
          console.log(e);
          submitFunc(e);
        }}
      >
        <label htmlFor="nickname">닉네임 변경</label>
        <input
          type="text"
          id="nickname"
          value={DisplayName}
          onChange={(e) => setDisplayName(e.currentTarget.value)}
          required
        />
        <div className="FormbtnDiv">
          <button type="submit" disabled={isLoading}>
            수정사항 저장
          </button>
        </div>
      </form>
    </EditProfileDiv>
  );
}

export default withRouter(EditProfile);
