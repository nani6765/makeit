import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import StickyBar from "../common/StickyBar.js";
import Dropdown from "react-bootstrap/Dropdown";
import RequestPostList from "./RequestPostList.js";
import { RequestListDiv } from "../../css/RVCSS.js";
import { ReactComponent as PenIcon } from "../../css/Img/Pen.svg";

import axios from "axios";

function RequestVideo(props) {
  const [Sort, setSort] = useState("최신순");
  const [Skip, setSkip] = useState(0);
  const [PageLen, setPageLen] = useState(1);
  const [PageIdxArr, setPageIdxArr] = useState([]);
  const [SubCategory, setSubCategory] = useState("전체");

  const getPageLen = () => {
    let body = {
      category: SubCategory,
    };

    axios.post("/api/making/requestVideo/postLength", body).then((response) => {
      if (response.data.success) {
        setPageLen(parseInt((response.data.len - 1) / 10) + 1);
      }
    });
  };

  useEffect(() => {
    getPageLen();
  }, [SubCategory]);

  useEffect(() => {
    let temp = [];
    for (let i = 1; i <= 10; i++) {
      temp.push(parseInt(Skip / 100) * 10 + i);
      if (parseInt(Skip / 100) * 10 + i === PageLen) break;
    }
    setPageIdxArr(temp);
  }, [parseInt(Skip / 100)]);

  return (
    <RequestListDiv>
      <div className="left">
        <StickyBar
          Menu={props.Menu}
          SubCategory={SubCategory}
          setSubCategory={setSubCategory}
          SubCategoryList={props.SubCategoryList}
        />
      </div>
      <div className="right">
        <div className="GNB">
          <p className="category">
            홈 &gt; 영상제작 &gt; 의뢰하기 &gt; {SubCategory}
          </p>
          <Dropdown id="sort">
            <Dropdown.Toggle id="dropdown-basic">{Sort}</Dropdown.Toggle>
            <Dropdown.Menu id="dropdown-menu">
              <Dropdown.Item onClick={() => setSort("인기순")}>
                인기순
              </Dropdown.Item>
              <Dropdown.Item onClick={() => setSort("최신순")}>
                최신순
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <RequestPostList Sort={Sort} Skip={Skip} SubCategory={SubCategory} />
        <Link to="/Making/RequestUpload">
          <button className="postBtn">
            게시하기
            <PenIcon />
          </button>
        </Link>
        <div className="FNB">
          <div className="pagination">
            {PageIdxArr[0] !== 1 ? (
              <button onClick={() => setSkip((parseInt(Skip / 120) - 1) * 120)}>
                &lt; 이전
              </button>
            ) : null}
            <ul>
              {PageIdxArr.map((page, idx) => {
                return (
                  <li
                    key={idx}
                    onClick={() =>
                      setSkip(parseInt(Skip / 120) * 120 + 12 * idx)
                    }
                    className={Skip / 12 + 1 === page ? "active" : null}
                  >
                    {page}
                  </li>
                );
              })}
            </ul>
            {PageIdxArr[PageIdxArr.length - 1] < PageLen && (
              <button onClick={() => setSkip((parseInt(Skip / 120) + 1) * 120)}>
                다음 &gt;
              </button>
            )}
          </div>
        </div>
      </div>
    </RequestListDiv>
  );
}

export default RequestVideo;
