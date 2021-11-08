import React, { useEffect } from "react";
import { PrivateArea } from "../../../../css/SVUCSS.js";

import FileUploadArea from "../../../../../utils/view/Files/FileUploadArea.js";

function PrivateUpload(props) {
  return (
    <PrivateArea>
      <label className="urlLabel">Youtube 주소</label>
      <input
        className="urlInput"
        type="text"
        value={props.VideoURL}
        onChange={(e) => props.setVideoURL(e.currentTarget.value)}
      />

      <label className="imgLabel">
        썸네일
        <br />
        <span>권장: 1920 * 1080</span>
      </label>
      <div className="imgUpload">
        <FileUploadArea
          Images={props.Thumbnail}
          setImages={props.setThumbnail}
          type="thumbnail"
          dirURL="making"
        />
      </div>
      <div className="imgShow">
        {props.Thumbnail[0] != undefined &&
        props.Thumbnail[0].path != undefined ? (
          <img src={props.Thumbnail[0].path} alt="" />
        ) : null}
      </div>
    </PrivateArea>
  );
}

export default PrivateUpload;
