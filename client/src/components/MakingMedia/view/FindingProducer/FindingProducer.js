import React, { useState } from "react";

import { ProducerListDiv } from "../../css/FindingProducerCSS.js";
import Dropdown from 'react-bootstrap/Dropdown'
function FindingProducer() {
  const [SubCategory, setSubCategory] = useState("전체");
  const [Sort, setSort] = useState("인기순");

  return (
    <>
      <ProducerListDiv>
        <div>
          <p class="category">홈 &gt; {SubCategory}</p>
          <Dropdown id="sort">
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              {Sort}
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item>인기순</Dropdown.Item>
              <Dropdown.Item>최신순</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
        lorelemdmdksk
      </ProducerListDiv>
    </>
  );
}

export default FindingProducer;
