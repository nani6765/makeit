import React, { useState } from "react";
import { PublicArea } from "../css/ShareVideoUploadCSS.js";
import YoutubeModal from "../utils/YoutubeModal.js";

function PublicUpload(props) {
  const [ModalFlag, setModalFlag] = useState(false);
  return (
    <PublicArea>
      <div className="heading">
        <p>
          동영상등록(필수)
          <span>
            <span className="curentLength">{props.Thumbnail ? "1" : "0"}</span>
            /1
          </span>
        </p>
        <button onClick={() => setModalFlag(true)}>검색</button>
      </div>
      {props.Thumbnail ? (
        <img
          className="thumbnail"
          src={props.Thumbnail}
          onClick={() => setModalFlag(true)}
        />
      ) : (
        <div className="upload" onClick={() => setModalFlag(true)}>
          <i className="bi bi-upload"></i>
        </div>
      )}

      {ModalFlag && (
        <YoutubeModal
          setModalFlag={setModalFlag}
          setThumbnail={props.setThumbnail}
          setVideoURL={props.setVideoURL}
        />
      )}
    </PublicArea>
  );
}

export default PublicUpload;
