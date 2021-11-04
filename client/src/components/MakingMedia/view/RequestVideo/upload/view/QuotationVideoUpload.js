import React, { useState } from "react";
import YoutubeModal from "../../../../../utils/view/Modal/YoutubeCheckModal.js";
import { VideoUploadDiv } from "../../../../css/RVUCSS.js";

function QuotationVideoUpload(props) {
  const [ModalFlag, setModalFlag] = useState(false);

  const DeleteHandler = (idx) => {
    console.log(idx);
    let temp = [...props.VideoArr];
    temp.splice(idx, 1);
    props.setVideoArr([...temp]);
  };

  return (
    <VideoUploadDiv>
      <p className="reference">참고 자료</p>
      <div className="videoSearch">
        <p>
          동영상등록(3개이상)
          <span>
            <span className="curentLength">{props.VideoArr.length}</span>/6
          </span>
        </p>
        <button
          type="button"
          className="search"
          onClick={() => setModalFlag(true)}
        >
          검색
        </button>
      </div>

      {ModalFlag && (
        <YoutubeModal
          setModalFlag={setModalFlag}
          VideoArr={props.VideoArr}
          setVideoArr={props.setVideoArr}
          SearchLength="6"
        />
      )}

      {props.VideoArr[0] && (
        <ul className="showSelectedVideo">
          {props.VideoArr.map((Video, idx) => {
            return (
              <li key={idx}>
                <div className="deleteArea">
                  <p>삭제</p>
                  <input
                    type="checkbox"
                    checked={false}
                    onClick={() => {
                      DeleteHandler(idx);
                    }}
                  />
                </div>

                <img src={Video.snippet.thumbnails.high.url} alt="" />
                <div>
                  <p className="title">{Video.snippet.title}</p>
                  <p className="channel">{Video.snippet.channelTitle}</p>
                </div>
              </li>
            );
          })}
        </ul>
      )}
    </VideoUploadDiv>
  );
}

export default QuotationVideoUpload;
