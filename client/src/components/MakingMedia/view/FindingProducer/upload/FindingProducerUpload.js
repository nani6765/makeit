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
import Switch from "react-bootstrap/esm/Switch";
import e from "cors";

function FindingProducerUpload(props) {
  const user = useSelector((state) => state.user);

  const UploadProcess = [
    { idx: 0, value: "상세설명" },
    { idx: 1, value: "포트폴리오" },
    { idx: 2, value: "가격설정" },
    { idx: 3, value: "수정/환불안내" },
  ];
  const [CurrentProcess, setCurrentProcess] = useState("상세설명");

  //상세설명
  const [OneLineIntroduce, setOneLineIntroduce] = useState("");
  const [Category, setCategory] = useState("카테고리");
  const [Description, setDescription] = useState("");
  const [WorkTypeArr, setWorkTypeArr] = useState([]);
  const [VideoPurposeArr, setVideoPurposeArr] = useState([]);

  //포트폴리오
  const [Thumbnail, setThumbnail] = useState([]);
  const [DetailImgArr, setDetailImgArr] = useState([]);
  const [VideoArr, setVideoArr] = useState([]);

  //가격설정
  const [PriceInfo, setPriceInfo] = useState("가격선택");
  const [PriceDirectInput, setPriceDirectInput] = useState("직접 입력");

  //수정환불안내
  const [EditandReprogress, setEditandReprogress] = useState("");
  const [FAQList, setFAQList] = useState([{ q: "", a: "" }]);

  useEffect(() => {
    if(!user.userData) {
      props.history.push("/login");
    }
    window.scrollTo(0, 0);
    LoadTempPost();
  }, [])

  const LoadTempPost = async () => {
    try {
      if(user.userData) {
        await axios
          .post("/api/making/producer/loadTempPost", { uid: user.userData.uid })
          .then((response) => {
            console.log(response.data);
            if (response.data.success && response.data.tempPost) {
              console.log(response.data);
              //datail
              setOneLineIntroduce(response.data.tempPost.oneLineIntroduce);
              setCategory(response.data.tempPost.category);
              setDescription(response.data.tempPost.description);
              setWorkTypeArr(response.data.tempPost.workTypeArr);
              setVideoPurposeArr(response.data.tempPost.videoPurposeArr);

              //Portfolio
              setThumbnail(response.data.tempPost.thumbnailArr);
              setDetailImgArr(response.data.tempPost.detailImgArr);
              setVideoArr(response.data.tempPost.videoArr);

              //price
              setPriceInfo(response.data.tempPost.priceInfo);
              setPriceDirectInput(response.data.tempPost.priceDirectInput);

              //confirm
              setEditandReprogress(response.data.tempPost.editandReprogress);
              setFAQList(response.data.tempPost.FAQList);
            }
          });
      }
    } catch (error) {
      alert("임시저장 불러오기 실패");
      console.log("임시저장 error", error);
    }
  };

  const DetailCheckEmptyContent = () => {
    if (!OneLineIntroduce) {
      alert("한줄 소개를 입력하세요.");
      return false;
    }
    if (Category === "카테고리") {
      alert("카테고리를 선택하세요.");
      return false;
    }
    if (!Description) {
      alert("상세 설명을 입력하세요.");
      return false;
    }
    return true;
  };
  
  const PortfolioCheckEmptyContent = () => {
    if (!Thumbnail.length) {
      alert("썸네일을 등록하세요.");
      return false;
    }
    if (VideoArr.length < 3) {
      alert("동영상을 3개 이상 등록하세요.");
      return false;
    }
    return true;
  };

  const PriceCheckEmptyContent = () => {
    if (PriceInfo === "가격선택") {
      alert("가격을 선택하세요.");
      return false;
    }
    if (PriceInfo === PriceDirectInput) {
      alert("가격을 입력하세요.");
      return false;
    }
    return true;
  };

  const ConfirmCheckEmptyContent = () => {
    if (!EditandReprogress) {
      alert("수정 및 재진행 절차를 입력하세요.");
      return false;
    }
    return true;
  };

  const NextHandler = (process) => {
    switch(process.value) {
      case "포트폴리오":
        if(!DetailCheckEmptyContent())
          return;
        break;
      case "가격설정":
        if(!DetailCheckEmptyContent())
          return;
        if(!PortfolioCheckEmptyContent())
            return;
        break;
      case "수정/환불안내":
        if(!DetailCheckEmptyContent())
          return;
        if(!PortfolioCheckEmptyContent())
            return;
        if(!PriceCheckEmptyContent())
            return;
        break;
      
      default:
        break;
    }
    setCurrentProcess(process.value);
  }

  const TempSaveHandler = () => {
    let body = {
      uid: user.userData.uid,
      email: user.userData.email,
      oneLineIntroduce: OneLineIntroduce,
      category: Category,
      description: Description,
      workTypeArr: WorkTypeArr,
      videoPurposeArr: VideoPurposeArr,
      thumbnailArr: Thumbnail,
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
  };

  const SubmitHandler = () => {
    let body = {
      uid: user.userData.uid,
      email: user.userData.email,
      oneLineIntroduce: OneLineIntroduce,
      category: Category,
      description: Description,
      workTypeArr: WorkTypeArr,
      videoPurposeArr: VideoPurposeArr,
      thumbnailArr: Thumbnail,
      detailImgArr: DetailImgArr,
      videoArr: VideoArr,
      priceInfo: PriceInfo,
      priceDirectInput: PriceDirectInput,
      editandReprogress: EditandReprogress,
      FAQList: FAQList,
    };
    axios
      .post("/api/making/producer/proPostSubmit", body)
      .then((response, err) => {
        if (response.data.success) {
          alert("제작자 게시가 완료되었습니다.");
          props.history.push("/making?category=영상 제작자 탐색&subCategory=전체&sort=인기순&pIdx=0");
        } else {
          alert("제작자 게시에 실패했습니다.");
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
            TempSaveHandler={TempSaveHandler}
            CheckEmptyContent={DetailCheckEmptyContent}
          />
        );

      case "포트폴리오":
        return (
          <Portfolio
            setCurrentProcess={setCurrentProcess}
            Thumbnail={Thumbnail}
            setThumbnail={setThumbnail}
            DetailImgArr={DetailImgArr}
            setDetailImgArr={setDetailImgArr}
            VideoArr={VideoArr}
            setVideoArr={setVideoArr}
            TempSaveHandler={TempSaveHandler}
            CheckEmptyContent={PortfolioCheckEmptyContent}
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
            CheckEmptyContent={PriceCheckEmptyContent}
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
            CheckEmptyContent={ConfirmCheckEmptyContent}
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
          <h1 onClick={() => props.history.push("/making?category=영상 제작자 탐색&subCategory=전체&sort=인기순&pIdx=0")}>
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
                      onClick={() => {NextHandler(process)}}
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
