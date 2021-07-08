import React, { useState, useEffect } from "react";
import { PageUL } from "../../../css/CommunityMainElement.js";
import FNBSearchDiv from "./FNBContent.js";

function CommunityFNB(props) {
  const [pageTotalArray, setpageTotalArray] = useState([]);

  useEffect(() => {
    let temp = [];
    for (let i = 0; i < props.PageTotalIdx / 10; i++) {
      temp.push(i + 1);
    }
    setpageTotalArray([...temp]);
  }, [props.PageTotalIdx]);

  useEffect(() => {
    const target = document.querySelector("#CommunitySearch");
    target.addEventListener("keyup", (e) => {
      if (e.key === "Enter") CommunitySearch("Enter");
    });
  }, [props.SearchCheck]);

  function CommunitySearch(flag) {
    const target = document.querySelector("#CommunitySearch");
    if (flag === "Enter" && target.value === "") {
      return alert("검색어를 입력해주세요.");
    }
    if (flag === "Click" && props.SearchTerm === "") {
      return alert("검색어를 입력해주세요.");
    }
    props.setSearchCheck(!props.SearchCheck);
  }

  return (
    <>
      <PageUL>
        {pageTotalArray.map((num, idx) => {
          return (
            <li key={idx}>
              <button
                className={props.PageIdx === parseInt(num) ? "active" : null}
                onClick={() => {
                  props.setPageIdx(parseInt(num));
                }}
              >
                {num}
              </button>
            </li>
          );
        })}
      </PageUL>
      <FNBSearchDiv>
        <input
          id="CommunitySearch"
          type="text"
          value={props.SearchTerm}
          placeholder="내용검색"
          onChange={(e) => props.setSearchTerm(e.currentTarget.value)}
        />
        <label
          htmlFor="CommunitySearch"
          onClick={() => CommunitySearch("Click")}
        >
          <i className="bi bi-search"></i>
        </label>
      </FNBSearchDiv>
    </>
  );
}

export default CommunityFNB;
