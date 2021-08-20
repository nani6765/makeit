import React from "react";
import { BodyHeaderDiv } from "../../../css/CommunityListCSS.js";
import { ReactComponent as PenIcon } from "../../../css/img/Pen.svg";
function BodyHeader(props) {
  return (
    <BodyHeaderDiv>
      <div>
        <h1>{props.GNB}</h1>
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
          <span className="divider">|</span>
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
      <button>
        글쓰기
        <PenIcon />
      </button>
    </BodyHeaderDiv>
  );
}

export default BodyHeader;
