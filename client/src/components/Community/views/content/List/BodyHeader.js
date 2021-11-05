import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { BodyHeaderDiv } from "../../../css/CommunityListCSS.js";
import { ReactComponent as PenIcon } from "../../../css/img/Pen.svg";
import qs from "qs";

import { useHistory } from "react-router-dom";

function BodyHeader(props) {
  let history = useHistory();

  const SortClickFunc = (sort) => {
    let temp = qs.parse(props.URL);
    temp.sort = sort;
    let temp2 = qs.stringify(temp);
    history.push(`?${decodeURI(temp2)}`);
    //props.setURL(decodeURI(temp2));
  };

  return (
    <BodyHeaderDiv>
      <div>
        <p className="category">{qs.parse(props.URL).category}</p>
        <p>
          <span
            className={
              qs.parse(props.URL).sort === "new" ? "activate" : undefined
            }
            onClick={() => {
              SortClickFunc("new");
            }}
            disabled={qs.parse(props.URL).sort === "new" && true}
          >
            최신순
          </span>
          <span
            className={
              qs.parse(props.URL).sort === "hot" ? "activate" : undefined
            }
            onClick={() => {
              SortClickFunc("hot");
            }}
            disabled={qs.parse(props.URL).sort === "hot" && true}
          >
            인기순
          </span>
        </p>
      </div>
      <Link
        to={{
          pathname: "/community/upload/",
        }}
      >
        <button>
          글쓰기
          <PenIcon />
        </button>
      </Link>
    </BodyHeaderDiv>
  );
}

export default BodyHeader;
