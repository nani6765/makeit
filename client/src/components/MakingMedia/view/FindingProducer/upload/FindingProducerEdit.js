import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { withRouter } from "react-router-dom";

import Detail from "./content/Detail.js";
import Portfolio from "./content/Portfolio.js";
import Price from "./content/Price.js";
import Confirm from "./content/Confirm.js";

import axios from "axios";

import { UploadForm, UploadHead } from "../../../css/CommonUploadCSS.js";
import { ContentDiv, LeftContent } from "../../../css/FPUCSS.js";

function FindingProducerEdit(props) {
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
    // 상세설명
    setOneLineIntroduce(props.location.state.post.oneLineIntroduce);
    setCategory(props.location.state.post.category);
    setDescription(props.location.state.post.description);
    setWorkTypeArr([...props.location.state.post.workTypeArr]);
    setVideoPurposeArr([...props.location.state.post.videoPurposeArr]);

    // 포트폴리오
    setThumbnailArr([...props.location.state.post.thumbnailArr]);
    setDetailImgArr([...props.location.state.post.detailImgArr]);
    setVideoArr([...props.location.state.post.videoArr]);

    // 가격설정
    setPriceInfo(props.location.state.post.priceInfo);
    setPriceDirectInput(props.location.state.post.priceDirectInput);

    // 수정환불 안내
    setEditandReprogress(props.location.state.post.editandReprogress);
    setFAQList([...props.location.state.post.FAQList]);
  }, []);

  /* 임시저장이 필요한가?
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
    };
    axios
      .post("/api/making/producer/tempSaving", body)
      .then((response, err) => {
        if (response.data.success) {
          alert("임시 저장이 완료되었습니다.");
        } else {
          alert("임시 저장이 실패했습니다.");
          console.log("임시저장 error", err);
        }
      });
  };*/

  const SubmitHandler = () => {
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
      url: props.location.state.post.url,
      auther: props.location.state.post.auther._id,
    };
    axios
      .post("/api/making/producer/proPostEdit", body)
      .then((response, err) => {
        if (response.data.success) {
          alert("수정이 완료되었습니다.");
          props.history.push({
            pathname: "/making/",
          });
        } else {
          alert("수정에 실패했습니다.");
          console.log("prosubmit error", err);
        }
      });
  };

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
            //TempSaveHandler={TempSaveHandler}
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
            //TempSaveHandler={TempSaveHandler}
          />
        );

      case "가격설정":
        return (
          <Price
            setCurrentProcess={setCurrentProcess}
            PriceInfo={PriceInfo}
            setPriceInfo={setPriceInfo}
            //TempSaveHandler={TempSaveHandler}
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
            //TempSaveHandler={TempSaveHandler}
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
            //TempSaveHandler={TempSaveHandler}
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
            onChange={(e) => {
              if(e.currentTarget.value.length <= 30) {
                setOneLineIntroduce(e.currentTarget.value)
              }
            }}
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

export default withRouter(FindingProducerEdit);
