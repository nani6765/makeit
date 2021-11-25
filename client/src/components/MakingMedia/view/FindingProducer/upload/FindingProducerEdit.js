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
  const [Content, setContent] = useState("");
  const [WorkTypeArr, setWorkTypeArr] = useState([]);
  const [VideoPurposeArr, setVideoPurposeArr] = useState([]);

  //포트폴리오
  const [Thumbnail, setThumbnail] = useState("");
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
    setOneLineIntroduce(props.location.state.postInfo.oneLineIntroduce);
    setCategory(props.location.state.postInfo.category);
    setContent(props.location.state.postInfo.content);
    setWorkTypeArr([...props.location.state.postInfo.workTypeArr]);
    setVideoPurposeArr([...props.location.state.postInfo.videoPurposeArr]);

    // 포트폴리오
    setThumbnail(props.location.state.postInfo.thumbnailUrl);
    setDetailImgArr([...props.location.state.postInfo.detailImgArr]);
    setVideoArr([...props.location.state.postInfo.videoArr]);

    // 가격설정
    setPriceInfo(props.location.state.postInfo.priceInfo);
    setPriceDirectInput(props.location.state.postInfo.priceDirectInput);

    // 수정환불 안내
    setEditandReprogress(props.location.state.postInfo.editandReprogress);
    setFAQList([...props.location.state.postInfo.FAQList]);
  }, []);

  /* 임시저장이 필요한가?
  const TempSaveHandler = () => {
    let body = {
      uid: user.userData.uid,
      email: user.userData.email,
      oneLineIntroduce: OneLineIntroduce,
      category: Category,
      content: Content,
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

  const DetailCheckEmptyContent = () => {
    if (!OneLineIntroduce) {
      alert("한줄 소개를 입력하세요.");
      return false;
    }
    if (Category === "카테고리") {
      alert("카테고리를 선택하세요.");
      return false;
    }
    if (!Content) {
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
    switch (process.value) {
      case "포트폴리오":
        if (!DetailCheckEmptyContent()) {
          setCurrentProcess("상세설명");
          return;
        }
        break;
      case "가격설정":
        if (!DetailCheckEmptyContent()) {
          setCurrentProcess("상세설명");
          return;
        }
        if (!PortfolioCheckEmptyContent()) {
          setCurrentProcess("포트폴리오");
          return;
        }
        break;
      case "수정/환불안내":
        if (!DetailCheckEmptyContent()) {
          setCurrentProcess("상세설명");
          return;
        }
        if (!PortfolioCheckEmptyContent()) {
          setCurrentProcess("포트폴리오");
          return;
        }
        if (!PriceCheckEmptyContent()) {
          setCurrentProcess("가격설정");
          return;
        }
        break;

      default:
        break;
    }
    setCurrentProcess(process.value);
  };

  const SubmitHandler = () => {
    let body = {
      uid: user.userData.uid,
      email: user.userData.email,
      oneLineIntroduce: OneLineIntroduce,
      category: Category,
      content: Content,
      workTypeArr: WorkTypeArr,
      videoPurposeArr: VideoPurposeArr,
      thumbnailUrl: Thumbnail[0].path,
      detailImgArr: DetailImgArr,
      videoArr: VideoArr,
      priceInfo: PriceInfo,
      priceDirectInput: PriceDirectInput,
      editandReprogress: EditandReprogress,
      FAQList: FAQList,
      url: props.location.state.postInfo.url,
      auther: props.location.state.postInfo.auther._id,
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
            Content={Content}
            setContent={setContent}
            WorkTypeArr={WorkTypeArr}
            setWorkTypeArr={setWorkTypeArr}
            VideoPurposeArr={VideoPurposeArr}
            setVideoPurposeArr={setVideoPurposeArr}
            CheckEmptyContent={DetailCheckEmptyContent}
            //TempSaveHandler={TempSaveHandler}
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
            CheckEmptyContent={PortfolioCheckEmptyContent}
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
            //TempSaveHandler={TempSaveHandler}
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
            Content={Content}
            setContent={setContent}
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
              if (e.currentTarget.value.length <= 30) {
                setOneLineIntroduce(e.currentTarget.value);
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
                      onClick={() => {
                        NextHandler(process);
                      }}
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
