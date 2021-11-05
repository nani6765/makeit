import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import HeaderGNB from "./view/common/HeaderGNB";
import FindingProducer from "./view/FindingProducer/FindingProducer.js";
import RequestVideo from "./view/RequestVideo/RequestVideo.js";
import ShareVideo from "./view/ShareVideo/ShareVideo";
import { MakingDiv, MakingHeader } from "./css/CommonCSS.js";

function MakingMedia(props) {
  const user = useSelector((state) => state.user.userData);

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
    if(props.history.location.state !== undefined) {
      setMenu(props.history.location.state.category);
    }
  }, []);

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
