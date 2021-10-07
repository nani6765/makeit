import React, { useState, useEffect } from 'react';
import { useSelector } from "react-redux";
import { withRouter } from 'react-router-dom';

import QuotationFilter from './view/QuotationFilter.js';
import QuotationVideoUpload from './view/QuotationVideoUpload.js';
import {
  UploadHead,
  UploadForm,
  UploadContent,
} from "../../../css/CommonUploadCSS.js";
import { ContentDiv, GNBDiv } from "./css/QuotationUploadCSS.js";

import axios from 'axios';

function QuotationUpload(props) {
    const user = useSelector((state) => state.user);

    const [OneLineIntroduce, setOneLineIntroduce] = useState("");
    const [Deadline, setDeadline] = useState("1주 이내");
    const [Price, setPrice] = useState(0);
    const [Content, setContent] = useState("");
    const [VideoArr, setVideoArr] = useState([]);
    const [IsPublic, setIsPublic] = useState(false);
    
    // 미구현
    const [PortFolio, setPortFolio] = useState("");

    const PublicCheck = () => {
      setIsPublic(!IsPublic);
    }

    const submitHanlder = () => {
      if(!OneLineIntroduce) {
        alert("한줄 소개를 입력하세요");
        return;
      }
      if(Price<0) {
        alert("올바른 금액을 입력하세요.");
        return;
      }
      if(!Content) {
        alert("상세 내용을 입력하세요.");
        return;
      }
      if(VideoArr.length<3) {
        alert("동영상을 3개 이상 등록하세요.");
        return;
      }

      let body = {
        uid: user.userData.uid,
        email: user.userData.email,
        oneLineIntroduce: OneLineIntroduce,
        deadline: Deadline,
        price: Price,
        content: Content,
        videoArr: VideoArr,
        isPublic: IsPublic,
        url: props.location.state.url,
      }

      axios.post("/api/making/requestVideo/quotationSubmit", body).then((response) => {
        if(response.data.success) {
          alert("견적 등록이 완료되었습니다.");
          props.history.goBack();
        } else {
          alert("견적 등록이 실패하였습니다.");
        }
      });
    }

    useEffect(() => {
      console.log(props.location);
      if(props.location.state === undefined) {
        props.history.push("/making");
      }
    }, []);

    return (
        <>
        <UploadHead>
          <div>
            <h1>
              <span onClick={() => props.history.goBack()}>&lt;</span>
              견적 등록하기
            </h1>
          </div>
        </UploadHead>
        <UploadForm>
          <div className="path">홈 &gt; 영상제작 &gt; 의뢰하기 &gt; 작성하기</div>
          <input
          type="text"
          className="OneLineIntroduce"
          placeholder="한줄 소개 작성( 30자 이내로 작성해주세요. )"
          value={OneLineIntroduce}
          onChange={(e) => setOneLineIntroduce(e.currentTarget.value)}
          />
          <UploadContent>
              <QuotationFilter Deadline={Deadline} setDeadline={setDeadline} Price={Price} setPrice={setPrice} PortFolio={PortFolio} setPortFolio={setPortFolio} />
              <ContentDiv>
                  <textarea
                  name="content"
                  className="content"
                  value={Content}
                  onChange={(e) => setContent(e.currentTarget.value)}
                  placeholder={
                      "메이킷은 누구나 참여할 수 있는 의뢰환경을 만들기 위해 이용규칙을 제정하여 운영하고 있습니다.\n위반 시 게시물이 삭제되고 서비스 이용이 일정 기간 제한될 수 있습니다.\n\n아래는 이 게시판에 해당하는 핵심 내용에 대한 요약 사항이며, 게시물 작성 시 전 커뮤니티 이용 규칙 전문을 반드시 확인하시기 바랍니다.\n\n정치 사회 관련 행위 금지\n과도한 홍보 및 판매 관련 행위 금지\n그 밖에 규칙 위반     "
                  }
                  ></textarea>
                  <QuotationVideoUpload VideoArr={VideoArr} setVideoArr={setVideoArr} />
              </ContentDiv>
          </UploadContent>
          <GNBDiv>
            <div className="public">
              <input type="checkbox" checked={IsPublic} onChange={PublicCheck} />
              <span>해당 견적 의뢰자만 확인 가능</span>
            </div>
            <div className="btnDiv">
              <button className="cancel" onClick={() => {props.history.goBack()}}>취소</button>
              <button className="submit" onClick={() => {submitHanlder()}}>완료</button>
            </div>
          </GNBDiv>
        </UploadForm>
        </>
    )
}

export default withRouter(QuotationUpload)
