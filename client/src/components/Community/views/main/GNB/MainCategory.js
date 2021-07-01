import React, { useState } from "react";
import {
  GNBDiv,
  GNBBtnDiv,
  GNBMobileDiv,
  GNBMobileContentDiv,
  GNBCategoryBtn,
} from "./GNBContent.js";

function MainCateGory(props) {
  return (
    <>
      <GNBDiv>
        <GNBBtnDiv>
          <GNBCategoryBtn
            style={
              props.category === "게시판"
                ? { backgroundColor: "#FAF5F5" }
                : null
            }
            onClick={() => {
              props.setCategory("게시판");
            }}
          >
            게시판
          </GNBCategoryBtn>
          <GNBCategoryBtn
            style={
              props.category === "파트너찾기"
                ? { backgroundColor: "#FAF5F5" }
                : null
            }
            onClick={() => {
              props.setCategory("파트너찾기");
            }}
          >
            파트너 찾기
          </GNBCategoryBtn>
          <GNBCategoryBtn
            style={
              props.category === "프로찾기"
                ? { backgroundColor: "#FAF5F5" }
                : null
            }
            onClick={() => {
              props.setCategory("프로찾기");
            }}
          >
            프로 찾기
          </GNBCategoryBtn>
          <GNBCategoryBtn
            style={
              props.category === "로케이션"
                ? { backgroundColor: "#FAF5F5" }
                : null
            }
            onClick={() => {
              props.setCategory("로케이션");
            }}
          >
            로케이션
          </GNBCategoryBtn>
          <GNBCategoryBtn
            style={
              props.category === "건의함"
                ? { backgroundColor: "#FAF5F5" }
                : null
            }
            onClick={() => {
              props.setCategory("건의함");
            }}
          >
            자료실
          </GNBCategoryBtn>
        </GNBBtnDiv>
        <GNBMobileDiv>
          <GNBMobileContentDiv>
            <i
              className="bi bi-list"
              style={{ fontSize: "28px" }}
              onClick={() => {
                setmobileGnb(!mobileGnb);
              }}
            ></i>
          </GNBMobileContentDiv>
        </GNBMobileDiv>
      </GNBDiv>
    </>
  );
}

export default MainCateGory;
