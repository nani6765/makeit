import React, { useState, useEffect } from "react";
import { YoutubeDiv } from "./ModalCSS.js";

import FileUploadArea from "../Files/FileUploadArea.js";

function YoutubeLinkModal(props) {
    const [VideoURL, setVideoURL] = useState("");
    const [Thumbnail, setThumbnail] = useState("");

    const setURL = (originURL) => {
        var regExp =
          /^https?\:\/\/(?:www\.youtube(?:\-nocookie)?\.com\/|m\.youtube\.com\/|youtube\.com\/)?(?:ytscreeningroom\?vi?=|youtu\.be\/|vi?\/|user\/.+\/u\/\w{1,2}\/|embed\/|watch\?(?:.*\&)?vi?=|\&vi?=|\?(?:.*\&)?vi?=)([^#\&\?\n\/<>"']*)/i;
        var match = originURL.match(regExp);
        return match && match[1].length == 11 ? match[1] : false;
      };

    const setVideoHandler = () => {
        if(!setURL(VideoURL)) {
            alert("URL을 다시 입력하세요.");
            return;
        }
      
        if(!Thumbnail) {
            alert("썸네일을 선택하세요.");
            return;
        }

        let temp = [...props.VideoArr];
        temp.push({video: VideoURL, thumbnail: Thumbnail[0].path});
        props.setVideoArr(temp);

        props.setModalFlag(false);
    }

  return (
    <YoutubeDiv>
        <div className="content">
            <div
                className="background"
                onClick={() => props.setModalFlag(false)}
            ></div>
            <div className="linkDiv">
                <label className="urlLabel">Youtube 주소</label>
                <input
                    className="urlInput"
                    type="text"
                    value={VideoURL}
                    onChange={(e) => setVideoURL(e.currentTarget.value)}
                />

                <label className="imgLabel">
                    썸네일
                    <br />
                    <span>권장: 1920 * 1080</span>
                </label>
                <div className="imgUpload">
                    <FileUploadArea
                    Images={Thumbnail}
                    setImages={setThumbnail}
                    type="thumbnail"
                    dirURL="making"
                    />
                </div>
                <div className="imgShow">
                    {Thumbnail[0] != undefined &&
                    Thumbnail[0].path != undefined ? (
                    <img src={Thumbnail[0].path} alt="" />
                    ) : null}
                </div>
                <div className="btnDiv">
                    <button onClick={() => props.setModalFlag(false)}>취소</button>
                    <button onClick={setVideoHandler}>확인</button>
                </div>
            </div>
        </div>
    </YoutubeDiv>
  );
}

export default YoutubeLinkModal;
