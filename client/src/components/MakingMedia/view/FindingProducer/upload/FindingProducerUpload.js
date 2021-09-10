import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { withRouter } from "react-router-dom";

import Detail from "./content/Detail.js";
import Portfolio from "./content/Portfolio.js";
import Price from "./content/Price.js";
import Confirm from "./content/Confirm.js";

import axios from 'axios';

import {
  UploadForm,
  UploadHead,
  ContentDiv,
  LeftContent,
} from "./css/FPCSS.js";

function FindingProducerUpload(props) {
  const user = useSelector((state) => state.user);

  const UploadProcess = [
    { idx: 0, value: "상세설명" },
    { idx: 1, value: "포트폴리오" },
    { idx: 2, value: "가격설정" },
    { idx: 3, value: "수정/환불안내" },
  ];
  const [CurrentProcess, setCurrentProcess] = useState("상세설명");
  const [CureentIdx, setCureentIdx] = useState(0);

  //상세설명
  const [OneLineIntroduce, setOneLineIntroduce] = useState("");
  const [Category, setCategory] = useState("카테고리");
  const [Description, setDescription] = useState("");
  const [WorkTypeArr, setWorkTypeArr] = useState([]);
  const [VideoPurposeArr, setVideoPurposeArr] = useState([]);

  //포트폴리오
  const [ThumbnailArr, setThumbnailArr] = useState([]);
  const [DetailImgArr, setDetailImgArr] = useState([]);
  const [VideoArr, setVideoArr] = useState([]);

  //가격설정
  const [PriceInfo, setPriceInfo] = useState("가격선택");
  const [PriceDirectInput, setPriceDirectInput] = useState("직접 입력");

  //수정환불안내
  const [EditandReprogress, setEditandReprogress] = useState("");
  const [FAQList, setFAQList] = useState([{ q: "", a: "" }]);

  useEffect(() => {
    console.log(FAQList);
  }, [FAQList]);

  const LoadTempPost = async () => {
    try {
      await axios.post("/api/making/producer/loadTempPost", {uid: user.userData.uid}).then((response) => {
          console.log(response.data);
        if(response.data.success && response.data.tempPost) {
          console.log(response.data);
          //datail
          setOneLineIntroduce(response.data.tempPost.oneLineIntroduce);
          setCategory(response.data.tempPost.category);
          setDescription(response.data.tempPost.description);
          setWorkTypeArr(response.data.tempPost.workTypeArr);
          setVideoPurposeArr(response.data.tempPost.videoPurposeArr);


          //Portfolio
          setThumbnailArr(response.data.tempPost.thumbnailArr);
          setDetailImgArr(response.data.tempPost.detailImgArr);
          setVideoArr(response.data.tempPost.videoArr);

          //price
          setPriceInfo(response.data.tempPost.priceInfo);
          setPriceDirectInput(response.data.tempPost.priceDirectInput);

          //confirm
          setEditandReprogress(response.data.tempPost.editandReprogress);
          setFAQList(response.data.tempPost.FAQList);
        }
      })
    } catch (error) {
      alert("임시저장 불러오기 실패");
      console.log("임시저장 error", error);
    }
  }

  useEffect(() => {
    LoadTempPost();
  }, [])
  
  const TempSaveHandler = () => {
    let body = {
      uid: user.userData.uid,
      email: user.userData.email,
      oneLineIntroduce: OneLineIntroduce,
      category: Category,
      description: Description,
      workTypeArr: WorkTypeArr,
      videoPurposeArr: VideoPurposeArr,
      thumbnailArr: ThumbnailArr,
      detailImgArr: DetailImgArr,
      videoArr: VideoArr,
      priceInfo: PriceInfo,
      priceDirectInput: PriceDirectInput,
      editandReprogress: EditandReprogress,
      FAQList: FAQList,
    }
    axios.post("/api/making/producer/tempSaving", body).then((response, err) => {
      if(response.data.success) {
        alert("임시 저장이 완료되었습니다.");
      }
      else {
        alert("임시 저장이 실패했습니다.");
        console.log("임시저장 error", err);
      }
    })
  }  

  const SubmitHandler = () => {
    let body = {
      uid: user.userData.uid,
      email: user.userData.email,
      oneLineIntroduce: OneLineIntroduce,
      category: "영상제작자탐색",
      subCategory: Category,
      description: Description,
      workTypeArr: WorkTypeArr,
      videoPurposeArr: VideoPurposeArr,
      thumbnailArr: ThumbnailArr,
      detailImgArr: DetailImgArr,
      videoArr: VideoArr,
      priceInfo: PriceInfo,
      editandReprogress: EditandReprogress,
      FAQList: FAQList,
    }
    if(PriceInfo==='직접 입력') {
      body.priceInfo = PriceDirectInput;
    }
    axios.post("/api/making/producer/proPostSubmit", body).then((response, err) => {
      if(response.data.success) {
        alert("제작자 게시가 완료되었습니다.");
        props.history.push({
          pathname: "/making",
        });
      }
      else {
        alert("제작자 게시에 실패했습니다.");
        console.log("prosubmit error", err);
      }
    })
  }

  const setRightContent = () => {
    switch (CurrentProcess) {
      case "상세설명":
        return (
          <Detail
            OneLineIntroduce={OneLineIntroduce}
            setCurrentProcess={setCurrentProcess}
            Category={Category}
            setCategory={setCategory}
            Description={Description}
            setDescription={setDescription}
            WorkTypeArr={WorkTypeArr}
            setWorkTypeArr={setWorkTypeArr}
            VideoPurposeArr={VideoPurposeArr}
            setVideoPurposeArr={setVideoPurposeArr}
            TempSaveHandler={TempSaveHandler}
          />
        );

      case "포트폴리오":
        return (
          <Portfolio
            setCurrentProcess={setCurrentProcess}
            ThumbnailArr={ThumbnailArr}
            setThumbnailArr={setThumbnailArr}
            DetailImgArr={DetailImgArr}
            setDetailImgArr={setDetailImgArr}
            VideoArr={VideoArr}
            setVideoArr={setVideoArr}
            TempSaveHandler={TempSaveHandler}
          />
        );

      case "가격설정":
        return (
          <Price
            setCurrentProcess={setCurrentProcess}
            PriceInfo={PriceInfo}
            setPriceInfo={setPriceInfo}
            TempSaveHandler={TempSaveHandler}
            PriceDirectInput={PriceDirectInput}
            setPriceDirectInput={setPriceDirectInput}
          />
        );

      case "수정/환불안내":
        return (
          <Confirm
            EditandReprogress={EditandReprogress}
            setEditandReprogress={setEditandReprogress}
            FAQList={FAQList}
            setFAQList={setFAQList}
            TempSaveHandler={TempSaveHandler}
            SubmitHandler={SubmitHandler}
            setCurrentProcess={setCurrentProcess}
          />
        );

      default:
        return (
          <Detail
            setCurrentProcess={setCurrentProcess}
            Category={Category}
            setCategory={setCategory}
            Description={Description}
            setDescription={setDescription}
            WorkTypeArr={WorkTypeArr}
            setWorkTypeArr={setWorkTypeArr}
            VideoPurposeArr={VideoPurposeArr}
            setVideoPurposeArr={setVideoPurposeArr}
            TempSaveHandler={TempSaveHandler}
          />
        );
    }
  };

  return (
    <>
      <UploadHead>
        <div>
          <h1>
            <span>&lt;</span>
            게시하기
          </h1>
        </div>
      </UploadHead>
      <UploadForm>
        {CurrentProcess === "상세설명" && (
          <input
            type="text"
            className="OneLineIntroduce"
            placeholder="한줄 소개 작성( 30자 이내로 작성해주세요. )"
            value={OneLineIntroduce}
            onChange={(e) => setOneLineIntroduce(e.currentTarget.value)}
          />
        )}
        <ContentDiv>
          <LeftContent>
            <div>
              <h1>제작자 게시하기</h1>
              <ul>
                {UploadProcess.map((process, idx) => {
                  return (
                    <li
                      key={idx}
                      className={
                        CurrentProcess === process.value ? "active" : null
                      }
                    >
                      {idx + 1}){process.value}
                    </li>
                  );
                })}
              </ul>
            </div>
          </LeftContent>
          <div className="rightContent">{setRightContent()}</div>
        </ContentDiv>
      </UploadForm>
    </>
  );
}

export default withRouter(FindingProducerUpload);
