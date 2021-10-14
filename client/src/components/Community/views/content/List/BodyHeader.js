import React from "react";
import { Link } from "react-router-dom";
import { BodyHeaderDiv } from "../../../css/CommunityListCSS.js";
import { ReactComponent as PenIcon } from "../../../css/img/Pen.svg";

function BodyHeader(props) {
  return (
    <BodyHeaderDiv>
      <div>
        <p className="category">{props.GNB}</p>
        <p>
          <span
            className={props.SortPost === "new" ? "activate" : undefined}
            onClick={() => {
              props.setSortPost("new");
            }}
            disabled={props.SortPost === "new" && "ture"}
          >
            최신순
          </span>
          <span
            className={props.SortPost === "hot" ? "activate" : undefined}
            onClick={() => {
              props.setSortPost("hot");
            }}
            disabled={props.SortPost === "new" && "ture"}
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
