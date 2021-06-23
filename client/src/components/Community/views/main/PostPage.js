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
      category: props.category,
    };
    axios.post("/api/community/length", body).then((response) => {
      if (response.data.success) {
        let temp = parseInt(response.data.idx / 10) + 1;
        setpageTotal(temp);
      } else {
        alert("error");
      }
    });
  }, [props.category]);

  useEffect(() => {
    let temp = [];
    for (let i = 0; i < pageTotal; i++) {
      temp.push(i + 1);
    }
    setpageTotalArray([...temp]);
  }, [pageTotal]);

  useEffect(() => {
    setpageIdx(1);
  }, [props.category, props.sortPost]);

  useEffect(() => {
    window.scrollTo({
      top: 150,
      left: 0,
      behavior: "smooth",
    });
  }, [pageIdx]);

  return (
    <>
      <PostList
        category={props.category}
        sortPost={props.sortPost}
        pageSkip={pageSkip}
      />
      <PageUL>
        {pageTotalArray.map((num, idx) => {
          return (
            <li key={idx}>
              <button
                className={pageIdx === num ? "active" : null}
                onClick={() => {
                  setpageIdx(num);
                  setpageSkip(idx);
                }}
              >
                {num}
              </button>
            </li>
          );
        })}
      </PageUL>
    </>
  );
}

export default PostPage;
