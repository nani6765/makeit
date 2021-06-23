import React, { useState } from "react";
import { Link } from "react-router-dom";
import { PostLabelDiv } from "../../css/CommunityMainElement.js";
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import styled from "@emotion/styled";

function PostLabel(props) {
  const breakpoints = [1200, 576];
  const mq = breakpoints.map((bp) => `@media (max-width: ${bp}px)`);

  const Label = styled.div`
    grid-area: label;
    text-align: left;
    width: 100%;
    p {
      font-weight: bold;
      font-size: 18px;
      color: #702c8a;
      margin-bottom: 0px;
    }
  `;

  const Btn = styled.div`
    grid-area: btn;
    width: 100%;
    display: flex;
    justify-content: space-around;
    button {
      display: inline;
      border-radius: 16px;
      font-size: 10px;
      font-weight: bold;
      padding: 8px 10px 8px 10px;
      background: #efe9e9;
      color: #979393;
      border: none;
      .left {
        margin-right: 10px;
        ${mq[1]} {
          margin-right: 5px;
        }
      }
    }
  `;

  const Upload = styled.div`
    grid-area: upload;
    text-align: right;
    button {
      padding: 8px 12px 8px 12px;
      border-radius: 16px;
      border: none;
      background: #935ea5;
      color: white;
      font-size: 10px;
      font-weight: bold;
    }
  `;

  return (
    <>
      <div style={{ backgroundColor: "#faf6f6" }}>
        <PostLabelDiv>
          <Label>
            <p>{props.category}</p>
          </Label>
          <Btn>
            <button
              className="left"
              style={
                props.sortPost === "최신순"
                  ? { backgroundColor: "#935EA5", color: "white" }
                  : null
              }
              onClick={() => props.setsortPost("최신순")}
            >
              최신순
            </button>
            <button
              style={
                props.sortPost === "인기순"
                  ? { backgroundColor: "#935EA5", color: "white" }
                  : null
              }
              onClick={() => props.setsortPost("인기순")}
            >
              인기순
            </button>
          </Btn>
          <Upload>
            <Link
              to={{
                pathname: "/community/upload/",
                params: { category: props.category },
              }}
            >
              <button>
                글쓰기 <i className="bi bi-pencil-fill"></i>
              </button>
            </Link>
          </Upload>
        </PostLabelDiv>
      </div>
    </>
  );
}

export default PostLabel;
