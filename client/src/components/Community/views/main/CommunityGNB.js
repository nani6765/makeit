import React, { useState } from "react";
import {
  GNBDiv,
  GNBBtnDiv,
  GNBMobileDiv,
  GNBMobileContentDiv,
  GNBCategoryBtn,
} from "../../css/CommunityMainElement.js";
import MobileCommunityDiv from "./MobileCommunityDiv.js";

function CommunityGNB(props) {
  const [mobileGnb, setmobileGnb] = useState(false);

  return (
    <>
      <GNBDiv>
        <GNBBtnDiv>
          <GNBCategoryBtn
            style={
              props.category === "자유게시판"
                ? { backgroundColor: "#FAF5F5" }
                : null
            }
            onClick={() => {
              props.setCategory("자유게시판");
            }}
          >
            자유게시판
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
              props.category === "자료실"
                ? { backgroundColor: "#FAF5F5" }
                : null
            }
            onClick={() => {
              props.setCategory("자료실");
            }}
          >
            자료실
          </GNBCategoryBtn>
          <GNBCategoryBtn
            style={
              props.category === "Q&A" ? { backgroundColor: "#FAF5F5" } : null
            }
            onClick={() => {
              props.setCategory("Q&A");
            }}
          >
            Q&amp;A
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

          {mobileGnb ? (
            <GNBMobileContentDiv>
              <MobileCommunityDiv
                category={props.category}
                setCategory={props.setCategory}
                setMobileGnb={setmobileGnb}
              />
            </GNBMobileContentDiv>
          ) : null}
        </GNBMobileDiv>
      </GNBDiv>
    </>
  );
}

export default CommunityGNB;
