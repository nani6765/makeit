import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { BodyHeaderDiv } from "../../../css/CommunityListCSS.js";
import { ReactComponent as PenIcon } from "../../../css/img/Pen.svg";
import qs from "qs";

function BodyHeader(props) {
  const SortClickFunc = (sort) => {
    let temp = qs.parse(props.URL);
    temp.sort = sort;
    let temp2 = qs.stringify(temp);
    props.setURL(decodeURI(temp2));
  };

  useEffect(() => {
    console.log(qs.parse(props.URL).sort);
  }, [props.URL]);

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
