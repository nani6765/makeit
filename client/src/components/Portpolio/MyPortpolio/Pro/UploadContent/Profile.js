import React, { useState } from "react";
import { ProfileSection } from "../../../CSS/MyPortpolio/ProductionCSS.js";
import { Spinner } from "react-bootstrap";
import axios from "axios";

function ProfileImg(props) {
  const [Loading, setLoading] = useState(false);

  const ImageUpload = async (e) => {
    console.log("??");

    setLoading(true);
    let formData = new FormData();
    const config = {
      header: { "content-type": "multipart.form-data" },
    };

    formData.append("file", e.target.files[0]);
    await axios
      .post("/api/portfolio/prod/profile", formData, config)
      .then((response) => {
        setLoading(false);
        if (response.data.success) {
          props.setProfileImgList([
            ...props.ProfileImgList,
            response.data.filePath,
          ]);
        } else {
          alert("파일을 저장하는 데 실패하였습니다.");
        }
      });
  };

  return (
    <ProfileSection>
      <label>프로필 이미지</label>
      <div className="list">
        <article>
          <label>
            <figure className="add">
              <input
                type="file"
                accept="image/*"
                onChange={(e) => ImageUpload(e)}
              />
              {Loading ? (
                <Spinner animation="border" role="status"></Spinner>
              ) : (
                <i className="bi bi-plus-lg"></i>
              )}
            </figure>
          </label>
        </article>
        {props.ProfileImgList.map((path, idx) => {
          return (
            <article key={idx}>
              <figure>
                <img src={path} />
              </figure>
            </article>
          );
        })}
      </div>
    </ProfileSection>
  );
}

export default ProfileImg;
