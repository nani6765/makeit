import React, { useEffect } from "react";

import IPFilter from "../filter/IPFilter.js";
import PostList from "./content/PostList.js";
import UploadButton from "../filter/UploadButton";

import { PartIPLoListDiv, FNBDiv } from "../../css/ParticipateCSS.js";

function IPList(props) {
  const SubCategoryList = ["전체", "스태프", "배우", "1인편집자", "기타"];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [props.URL]);

  return (
    <>
      <PartIPLoListDiv>
        <IPFilter
          category="프로 알리기"
          URL={props.URL}
          setURL={props.setURL}
          SubCategoryList={SubCategoryList}
        />
        <div className="right">
          <PostList user={props.user} type="IP" user={props.user} />
        </div>
      </PartIPLoListDiv>
      <FNBDiv>
        <UploadButton category="프로알리기" />
      </FNBDiv>
    </>
  );
}

export default IPList;
