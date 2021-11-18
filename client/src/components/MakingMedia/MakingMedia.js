import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useLocation, useHistory } from "react-router-dom";
import HeaderGNB from "./view/common/HeaderGNB";
import SubGNB from "./view/common/SubGNB";
import FindingProducer from "./view/FindingProducer/FindingProducer.js";
import RequestVideo from "./view/RequestVideo/RequestVideo.js";
import ShareVideo from "./view/ShareVideo/ShareVideo";
import { MakingDiv, MakingHeader } from "./css/CommonCSS.js";
import qs from "qs";

function MakingMedia(props) {
  const location = useLocation();
  const history = useHistory();
  const user = useSelector((state) => state.user.userData);

  const [URL, setURL] = useState({});
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
    switch (URL.category) {
      case "영상 제작자 탐색":
        return (
          <FindingProducer
            URL={URL}
            user={user}
            SubCategoryList={SubCategoryList}
            setSubCategoryList={setSubCategoryList}
          />
        );

      case "영상 의뢰하기":
        return (
          <RequestVideo
            URL={URL}
            user={user}
            SubCategoryList={SubCategoryList}
            setSubCategoryList={setSubCategoryList}
          />
        );

      case "제작 영상 알리기":
        return (
          <ShareVideo
            URL={URL}
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
    let temp = qs.parse(location.search, { ignoreQueryPrefix: true });
    if (temp.category && temp.sort && temp.pIdx && temp.subCategory) {
      setURL(qs.parse(location.search, { ignoreQueryPrefix: true }));
    } else
      history.push(
        "?category=영상 제작자 탐색&subCategory=전체&sort=인기순&pIdx=0"
      );
  }, [location.search]);

  return (
    <>
      <MakingHeader>
        <img
          src="https://kr.object.ncloudstorage.com/makeit/admin/MakingBanner.png"
          style={{ width: "100%" }}
        />
        <HeaderGNB URL={URL} />
        <SubGNB SubCategoryList={SubCategoryList} URL={URL} />
      </MakingHeader>
      <MakingDiv>
        {/*
        setContent()
         */}
      </MakingDiv>
    </>
  );
}

export default MakingMedia;
