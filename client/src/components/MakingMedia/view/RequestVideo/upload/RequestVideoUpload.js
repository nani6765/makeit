import React, { useState } from 'react'
import { withRouter } from 'react-router-dom';
import Select from "react-select";
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css';

import {
    UploadHead,
    UploadForm,
    UploadContent
} from "./css/RequestUploadCSS.js";

function RequestVideoUpload(props) {
    const [OneLineIntroduce, setOneLineIntroduce] = useState("");
    const [Category, setCategory] = useState("일반 영상");
    const [MinPrice, setMinPrice] = useState(0);
    const [MaxPrice, setMaxPrice] = useState(0);
    const [Deadline, setDeadline] = useState(new Date());
    const [FilmType, setFilmType] = useState("직접 촬영");
    const [Uniqueness, setUniqueness] = useState("");
    const [Content, setContent] = useState("");

    const [WorkTypeArr, setWorkTypeArr] = useState([]);
    const [VideoPurposeArr, setVideoPurposeArr] = useState([]);
    const [WorkType, setWorkType] = useState("");
    const [VideoPurpose, setVideoPurpose] = useState("");

    const options = [
      { value: "일반 영상", label: "일반 영상" },
      { value: "유튜브 제작", label: "유튜브 제작" },
      { value: "특수영상", label: "특수영상" },
      { value: "광고/홍보 영상", label: "광고/홍보 영상" },
      { value: "온라인 생중계", label: "온라인 생중계" },
      { value: "애니메이션", label: "애니메이션" },
      { value: "촬영", label: "촬영" },
      { value: "편집/자막", label: "편집/자막" },
      { value: "기타", label: "기타" },
    ];
    const radioOptions = ["직접 촬영", "업체 촬영", "협의"];
    
    const WorkKeyDown = (e) => {
        if (e.key === "Enter" && WorkType !== "") {
        let temp = [...WorkTypeArr, WorkType];
        setWorkTypeArr(temp);
        setWorkType("");
        }
    };

    const VideoKeyDown = (e) => {
        if (e.key === "Enter") {
        let temp = [...VideoPurposeArr, VideoPurpose];
        setVideoPurposeArr(temp);
        setVideoPurpose("");
        }
    };

    const submitHandler = ()=> {
       
    }

    return (
        <>
        <UploadHead>
          <div>
            <h1>
              <span onClick = {() => props.history.goBack()}>&lt;</span>
              의뢰 작성하기
            </h1>
          </div>
        </UploadHead>
        <UploadForm>
            <div className="path">
                홈 &gt; 영상제작 &gt; 의뢰하기 &gt; 작성하기
            </div>
            <input
                type="text"
                className="OneLineIntroduce"
                placeholder="한줄 소개 작성( 30자 이내로 작성해주세요. )"
                value={OneLineIntroduce}
                onChange={(e) => setOneLineIntroduce(e.currentTarget.value)}
            />
            <UploadContent>
                <div className="filter">
                    <label className="categorylabel">카테고리</label>
                    <div className="category">
                        <Select
                        className="categoryList"
                        options={options}
                        placeholder="카테고리"
                        blurInputOnSelect="true"
                        menuShouldBlockScroll="true"
                        onChange={(e) => setCategory(e.value)}
                        />
                    </div>
                    <label className="pricelabel">측정 예산</label>
                    <div className="price">
                        <input
                            name="minPrice"
                            type="number"
                            min="0"
                            onChange={(e) => setMinPrice(e.currentTarget.value)}
                        />
                        <p>원 ~ </p>
                        <input
                            name="maxPrice"
                            type="number"
                            onChange={(e) => setMaxPrice(e.currentTarget.value)}
                        />
                        <p>원</p>
                    </div>
                    <label className="deadlinelabel">마감 기한</label>
                    <div className="deadline">
                        <DatePicker className="date" selected={Deadline} onChange={(date) => setDeadline(date)} minDate={new Date()}/>
                    </div>
                    <label className="filmTypelabel">촬영 여부</label>
                    <div className="filmType">
                        <div className="setFilmType">
                        {
                            radioOptions.map((option, idx) => {
                                return (
                                    <label key={idx}>
                                    <input
                                        type="radio"
                                        name="flimType"
                                        value={option}
                                        checked={ FilmType === option ? true : false}
                                        onChange={() => {
                                        setFilmType(option);
                                        }}
                                    />
                                    {option}
                                    </label>
                                )
                            })
                        }
                        </div>
                    </div>
                    <label className="Uniquenesslabel">특이사항</label>
                    <div className="Uniqueness">
                        <input type="text" value={Uniqueness} onChange={(e) => setUniqueness(e.currentTarget.value)} />
                    </div>
                </div>
                <div className="body">
                    <textarea
                        name="content"
                        className="content"
                        value={Content}
                        onChange={(e) => props.setContent(e.currentTarget.value)}
                        placeholder={
                        "메이킷은 누구나 참여할 수 있는 의뢰환경을 만들기 위해 이용규칙을 제정하여 운영하고 있습니다.\n위반 시 게시물이 삭제되고 서비스 이용이 일정 기간 제한될 수 있습니다.\n\n아래는 이 게시판에 해당하는 핵심 내용에 대한 요약 사항이며, 게시물 작성 시 전 커뮤니티 이용 규칙 전문을 반드시 확인하시기 바랍니다.\n\n정치 사회 관련 행위 금지\n과도한 홍보 및 판매 관련 행위 금지\n그 밖에 규칙 위반     "
                        }
                    ></textarea>
                    <div>
                      <span>작업유형</span>
                      {WorkTypeArr.map((text, idx) => {
                        return <p key={idx}>{text}</p>;
                      })}
                      <input
                        type="text"
                        value={WorkType}
                        onChange={(e) => setWorkType(e.currentTarget.value)}
                        onKeyPress={WorkKeyDown}
                      />
                    </div>
                    <div>
                      <span>영상목적</span>
                      {VideoPurposeArr.map((text, idx) => {
                        return <p key={idx}>{text}</p>;
                      })}
                      <input
                        type="text"
                        value={VideoPurpose}
                        onChange={(e) => setVideoPurpose(e.currentTarget.value)}
                        onKeyPress={VideoKeyDown}
                      />
                    </div>
                  </div>
            </UploadContent>
            <div className="BtnDiv">
                <button className="cancel" onClick={() => props.history.push("/making")}>취소</button>
                <button className="submit" onClick={() => submitHandler()}>완료</button>
            </div>
        </UploadForm>
        </>
    )
}

export default withRouter(RequestVideoUpload)
