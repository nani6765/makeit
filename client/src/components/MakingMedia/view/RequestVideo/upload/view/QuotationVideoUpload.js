import React, { useState, useEffect } from 'react';
import YoutubeModal from '../../../FindingProducer/upload/utils/YoutubeModal.js';
import { VideoUploadDiv } from "../css/QuotationUploadCSS.js";

function QuotationVideoUpload(props) {
    const [ModalFlag, setModalFlag] = useState(false);
    const [CheckFlag, setCheckFlag] = useState([]);

    return (
        <VideoUploadDiv>
            <p className="reference">참고 자료</p>
            {/*
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
                            checked={CheckFlag[idx]}
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
            */}
        </VideoUploadDiv>
    )
}

export default QuotationVideoUpload
