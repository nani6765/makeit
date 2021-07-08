import React, { useState, useEffect } from "react";
import { PageUL } from "../../../css/CommunityMainElement.js";

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
  }, []);

  function CommunitySearch(flag) {
    if (flag === "Enter") {
      const target = document.querySelector("#CommunitySearch");
      if (target.value === "") return alert("검색어를 입력해주세요.");
    }
    if (flag === "Click" && props.SearchTerm === "") {
      return alert("검색어를 입력해주세요.");
    }
    console.log("props.searchTerm", props.SearchTerm);
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
      <div style={{ width: "100%", textAlign: "center" }}>
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
          검색
        </label>
      </div>
    </>
  );
}

export default CommunityFNB;
