import React, { useEffect } from "react";
import { useHistory, useLocation } from "react-router";
import qs from "qs";

import { StickyBarDiv } from "../../css/ParticipateCSS.js";

function StickyBar(props) {
  let history = useHistory();
  let location = useLocation();

  const setSubCategory = (sub) => {
    let temp = qs.parse(location.search, { ignoreQueryPrefix: true });
    temp.subCategory = sub;
    let temp2 = qs.stringify(temp);
    history.push(`?${decodeURI(temp2)}`);
  };

  return (
    <StickyBarDiv>
      <div className="category">{props.category}</div>
      <div className="subCategory">
        {props.SubCategoryList.map((sub, idx) => {
          return (
            <p
              className={sub === props.URL.subCategory ? "active" : null}
              key={idx}
              onClick={() => setSubCategory(sub)}
            >
              {sub}
            </p>
          );
        })}
      </div>
    </StickyBarDiv>
  );
}

export default StickyBar;
