import React, { useState } from "react";
//import YoutubeModal from "../../../../../utils/view/Modal/YoutubeCheckModal.js";
import YoutubeLinkModal from "../../../../../utils/view/Modal/YoutubeLinkModal.js";
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
          추가
        </button>
      </div>

      {ModalFlag && (
        <YoutubeLinkModal
          setModalFlag={setModalFlag}
          VideoArr={props.VideoArr}
          setVideoArr={props.setVideoArr}
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

                <img src={Video.thumbnail} alt="" />
                <div>
                  <p className="title">{Video.video}</p>
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
