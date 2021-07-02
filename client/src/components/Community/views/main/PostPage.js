import React, { useState, useEffect } from "react";
import PostList from "./PostList.js";
import axios from "axios";
import { PageUL } from "../../css/CommunityMainElement.js";

function PostPage(props) {
  const [pageTotal, setpageTotal] = useState(0);
  const [pageTotalArray, setpageTotalArray] = useState([]);
  const [pageSkip, setpageSkip] = useState(0);
  const [pageIdx, setpageIdx] = useState(1);

  useEffect(() => {
    let body = {
      category: props.MainCategoryContent,
      key: false,
    };

    axios.post("/api/community/length", body).then((response) => {
      //"/api/community/length"로 카테고리 정보를 담은 데이터 전송
      if (response.data.success) {
        // 서버에서 카테고리에 맞는 게시글 수 검색
        let temp = parseInt(response.data.idx / 10) + 1; // response를 보내줌
        setpageTotal(temp); // 페이지 목록 설정
      } else {
        alert("error");
      }
    });
  }, [props.MainCategoryContent]);

  useEffect(() => {
    //전체 페이지 수 바뀌면 실행 pageToTalArray에 페이지 수만큼 배열
    let temp = [];
    for (let i = 0; i < pageTotal; i++) {
      temp.push(i + 1);
    }
    setpageTotalArray([...temp]);
  }, [pageTotal]);

  useEffect(() => {
    //카테고리, 정렬 기준 바뀌면 실행, 각 기준에 맞는 1페이지로 이동
    setpageIdx(1);
  }, [props.category, props.sortPost]);

  useEffect(() => {
    //페이지 바뀌면 스크롤이 가장 위로 이동
    window.scrollTo({
      top: 150,
      left: 0,
      behavior: "smooth",
    });
  }, [pageIdx]);

  return (
    <>
      <PostList
        category={props.MainCategoryContent}
        sortPost={props.SortPost}
        pageSkip={pageSkip}
      />
      <PageUL>
        {
          //페이지 목록 보여주는 태그
          pageTotalArray.map((num, idx) => {
            //num은 현재 보고 있는 값, idx는 현재 인덱스
            return (
              <li key={idx}>
                <button //버튼 클릭시 해당 페이지로 이동
                  className={pageIdx === num ? "active" : null}
                  onClick={() => {
                    setpageIdx(num); //현재 페이지를 num으로 변경
                    setpageSkip(idx); //이동한 페이지 수
                  }}
                >
                  {num}
                </button>
              </li>
            );
          })
        }
      </PageUL>
    </>
  );
}

export default PostPage;
