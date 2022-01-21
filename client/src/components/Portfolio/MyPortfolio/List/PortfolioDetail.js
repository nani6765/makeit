import React, { useState, useEffect } from "react";
import { useHistory, withRouter } from "react-router-dom";
import { useSelector } from "react-redux";

import axios from "axios";

import Loading from "../../../utils/view/Page/Loading";
import ProContent from "./ProContent";
import ProdContent from "./ProdContent";

import { CommonMarginDiv } from "../../../CommonCSS";

function PortplioDetail(props) {
  const user = useSelector((state) => state.user);
  const history = useHistory();

  const [Portfolio, setPortfolio] = useState({});
  const [LoadingFlag, setLoadingFlag] = useState(true);

  useEffect(async () => {
    let body = {
      url: props.match.params.url,
    };
    await axios.post("/api/portfolio/get/Detail", body).then((response) => {
      if (response.data.success) {
        setPortfolio(response.data.portfolio);
      } else {
        alert("잘못된 URL 접근입니다.");
        history.push("/portfolio");
      }
      if (!response.data.portfolio.public) {
        if (user.uid !== response.data.portfolio.uid) {
          alert("비공개 포트폴리오입니다.");
          history.push("/portfolio");
        }
      }
    });
    setLoadingFlag(false);
  }, []);

  return (
    <CommonMarginDiv>
      {!LoadingFlag ? (
        <div>
          {/*
          Portfolio.uid == user.userData.uid ? (
            <button>수정하기</button>
          ) : (
            <button>쪽지보내기</button>
          )
        */}
          {Portfolio.type == "프로" ? (
            <ProContent Portfolio={Portfolio} />
          ) : (
            <ProdContent Portfolio={Portfolio} />
          )}
        </div>
      ) : (
        <Loading />
      )}
    </CommonMarginDiv>
  );
}

export default withRouter(PortplioDetail);
