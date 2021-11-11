import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useLocation, useHistory } from "react-router-dom";
import HeaderGNB from "./view/common/HeaderGNB";
import FindingProducer from "./view/FindingProducer/FindingProducer.js";
import RequestVideo from "./view/RequestVideo/RequestVideo.js";
import ShareVideo from "./view/ShareVideo/ShareVideo";
import { MakingDiv, MakingHeader } from "./css/CommonCSS.js";

function MakingMedia(props) {
  const location = useLocation();
  const history = useHistory();
  const user = useSelector((state) => state.user.userData);

  const [URL, setURL] = useState("");
  const [Menu, setMenu] = useState("영상 제작자 탐색");
  const [SubCategoryList, setSubCategoryList] = useState([
    "전체",
    "일반 영상",
    "유튜브 제작",
    "특수영상",
    "광고/홍보 영상",
    "온라인 생중계",
    "애니메이션",
    "촬영",
    "편집/자막",
    "기타",
  ]);

  const setContent = () => {
    switch (Menu) {
      case "영상 제작자 탐색":
        return (
          <FindingProducer
            Menu={Menu}
            user={user}
            SubCategoryList={SubCategoryList}
            setSubCategoryList={setSubCategoryList}
          />
        );

      case "영상 의뢰하기":
        return (
          <RequestVideo
            Menu={Menu}
            user={user}
            SubCategoryList={SubCategoryList}
            setSubCategoryList={setSubCategoryList}
          />
        );

      case "제작 영상 알리기":
        return (
          <ShareVideo
            Menu={Menu}
            user={user}
            SubCategoryList={SubCategoryList}
            setSubCategoryList={setSubCategoryList}
          />
        );

      default:
        break;
    }
  };

  useEffect(() => {
    if(props.history.location.state !== undefined && props.history.location.state.category !== undefined) {
      setMenu(props.history.location.state.category);
    }
  }, []);

  /*
  useEffect(() => {
    if (location.search) {
      setURL(location.search.slice(1));
    } else {      
      setURL("category=전체게시판&sort=new&pIdx=0");
      history.push(`?category=전체게시판&sort=new&pIdx=0`);
    }
  }, [location]);

  */
  return (
    <>
    <MakingHeader>
      <img
          src="https://kr.object.ncloudstorage.com/makeit/admin/MakingBanner.png"
          style={{ width: "100%" }}
        />
      <HeaderGNB Menu={Menu} setMenu={setMenu} />
      <div className="category">{Menu}</div>
    </MakingHeader>
    <MakingDiv>
      {setContent()}
    </MakingDiv>
    </>
  );
}

export default MakingMedia;
