import React, { useState, useEffect } from "react";
import ProducerList from "./ProducerList.js";
import StickyBar from "./StickyBar.js";
import Dropdown from "react-bootstrap/Dropdown";
import { ProducerListDiv } from "../../css/FindingProducerCSS.js";

import axios from 'axios';

function FindingProducer(props) {
  const [SubCategory, setSubCategory] = useState("전체");
  const [Sort, setSort] = useState("인기순");
  const [Skip, setSkip] = useState(0);
  const [PageLen, setPageLen] = useState(0);
  const [SubCategoryList, setSubCategoryList] = useState([
    "전체",
    "일반 영상",
    "유튜브 제작",
    "특수영상",
    "광고/홍보 영상",
    "온라인 생중계",
    "애니메이션",
    "촬영",
    "편집/자막",
    "기타",
  ]);

  const getPageLen = () => {
    let body = {
      category: SubCategory,
    }

    axios.post("/api/making/producer/postLength", body).then((response) => {
      if(response.data.success) {
        setPageLen(response.data.len / 12);
      }
    })
  }

  useEffect(() => {
    console.log("getPageLen")
    getPageLen();
  }, [SubCategory]);

  return (
    <ProducerListDiv>
      <div className="left">
        <StickyBar
          Menu={props.Menu}
          SubCategory={SubCategory}
          setSubCategory={setSubCategory}
          SubCategoryList={SubCategoryList}
        />
      </div>
      <div className="right">
        <div className="GNB">
          <p className="category">홈 &gt; {SubCategory}</p>
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

        <ProducerList SubCategory={SubCategory} Sort={Sort} Skip={Skip} user={props.user}/>
      </div>
    </ProducerListDiv>
  );
}

export default FindingProducer;
