import React, { useState } from "react";
import { Link } from "react-router-dom";
import { PostLabelDiv, LabelDiv, LabelBtn, LabelUpload } from "./GNBContent.js";

function PostLabel(props) {
  return (
    <>
      <div style={{ backgroundColor: "#faf6f6" }}>
        <PostLabelDiv>
          <LabelDiv>
            <p>{props.MainCategoryContent}</p>
          </LabelDiv>
          <LabelBtn>
            <button
              className="left"
              style={
                props.SortPost === "최신순"
                  ? { backgroundColor: "#935EA5", color: "white" }
                  : null
              }
              onClick={() => props.setSortPost("최신순")}
            >
              최신순
            </button>
            <button
              style={
                props.SortPost === "인기순"
                  ? { backgroundColor: "#935EA5", color: "white" }
                  : null
              }
              onClick={() => props.setSortPost("인기순")}
            >
              인기순
            </button>
          </LabelBtn>
          <LabelUpload>
            <Link
              to={{
                pathname: "/community/upload/",
                params: { category: props.MainCategoryContent },
              }}
            >
              <button>
                글쓰기 <i className="bi bi-pencil-fill"></i>
              </button>
            </Link>
          </LabelUpload>
        </PostLabelDiv>
      </div>
    </>
  );
}

export default PostLabel;
