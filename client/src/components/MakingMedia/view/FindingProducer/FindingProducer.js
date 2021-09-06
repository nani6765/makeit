import React, { useState } from "react";
import ProducerList from "./ProducerList.js";
import { ProducerListDiv } from "../../css/FindingProducerCSS.js";
import Dropdown from 'react-bootstrap/Dropdown'
function FindingProducer() {
  const [SubCategory, setSubCategory] = useState("전체");
  const [Sort, setSort] = useState("인기순");

  return (
    <>
      <ProducerListDiv>
        <div className="GNB">
          <p className="category">홈 &gt; {SubCategory}</p>
          <Dropdown id="sort">
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              {Sort}
            </Dropdown.Toggle>

            <Dropdown.Menu id="dropdown-menu">
              <Dropdown.Item>인기순</Dropdown.Item>
              <Dropdown.Item>최신순</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <ProducerList />
      </ProducerListDiv>
    </>
  );
}

export default FindingProducer;
