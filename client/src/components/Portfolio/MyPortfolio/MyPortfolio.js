import React, { useEffect, useState } from "react";
import { useHistory, withRouter } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";

import UploadModal from "./UploadModal.js";
import Loading from "../../utils/view/Page/Loading.js";
import ProtfolioContent from "./List/PortfolioContent.js";

import { CommonMarginDiv } from "../../CommonCSS.js";
import { BtnDiv } from "../CSS/MyPortpolio/UploadCSS.js";
import { ParticipateSection } from "../CSS/Project/ProjectDetailCSS.js";

function MyPortfolio(props) {
  const history = useHistory();
  const user = useSelector((state) => state.user);

  const [isLoading, setisLoading] = useState(false);
  const [ModalFlag, setModalFlag] = useState(false);
  const [PortfolioList, setPortfolioList] = useState([]);

  useEffect(() => {
    setisLoading(true);
    if (!user.userData) {
      setisLoading(false);
      alert("로그인이 필요한 서비스입니다.");
      history.push("/login");
    } else {
      let body = {
        uid: user.userData.uid,
      };

      if (props.URL.subCategory === "공개된 포트폴리오") {
        body.public = true;
      }
      axios.post("/api/portfolio/getMyPortfolio", body).then((response) => {
        if (response.data.success) {
          console.log(response.data.portfolio);
          setPortfolioList([...response.data.portfolio]);
        } else {
          alert("오류 발생", response.data.err);
        }
        setisLoading(false);
      });
    }
  }, []);

  return (
    <CommonMarginDiv>
      <BtnDiv>
        <button onClick={() => setModalFlag(true)}>등록</button>
      </BtnDiv>

      {ModalFlag && <UploadModal setModalFlag={setModalFlag} />}
      {isLoading ? (
        <Loading />
      ) : (
        PortfolioList.map((content, idx) => {
          return (
            <ParticipateSection
              key={idx}
              onClick={(e) => {
                history.push(`/portfolio/${content.url}`);
              }}
            >
              <ProtfolioContent content={content} />
            </ParticipateSection>
          );
        })
      )}
    </CommonMarginDiv>
  );
}

export default withRouter(MyPortfolio);
