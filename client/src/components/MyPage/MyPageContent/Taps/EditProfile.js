import React, { useState, useCallback, useEffect } from "react";
import { useSelector } from "react-redux";

import CropperModal from "../Func/CropperModal.js";
import Avatar from "react-avatar";
import { EditProfileDiv } from "../../css/MyPageContentElement.js";

function EditProfile(props) {
  const user = useSelector((state) => state.user);
  const [DisplayName, setDisplayName] = useState(user.userData.displayName);
  const [PhotoURL, setPhotoURL] = useState(user.userData.photoURL);
  //유저가 선택한 이미지
  const [imageSrc, setImageSrc] = React.useState(null);
  const [ModalFlag, setModalFlag] = useState(false);

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

  const submitFunc = (e) => {
    e.preventDefault();
    console.log("수정사항 저장 완료");
  };

  return (
    <EditProfileDiv>
      <div className="editProfileDiv">
        {imageSrc && ModalFlag ? (
          <CropperModal
            imageSrc={imageSrc}
            setImageSrc={setImageSrc}
            setModalFlag={setModalFlag}
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
