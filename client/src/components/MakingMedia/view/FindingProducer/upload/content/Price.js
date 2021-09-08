import React, { useState, useEffect } from "react";

import ContentHeadingArea from "../utils/ContentHeadingArea.js";
import FooterBtnArea from "../utils/FooterBtnArea.js";
import { DropdownButton, Dropdown } from "react-bootstrap";

import { PriceDiv } from "../css/FPContentCSS.js";

function Price(props) {
  const [InputFlag, setInputFlag] = useState(false);
  const [PriceInput, setPriceInput] = useState("");

  const PriceArr = [
    "직접 입력",
    "30만원 미만",
    "30만원 ~ 80만원",
    "80만원 ~ 150만원",
    "150만원 ~ 300만원",
    "300만원 ~ 500만원",
    "500만원 이상",
  ];

  useEffect(() => {
    if (props.PriceInfo === "직접 입력") {
      setInputFlag(true);
    }
  }, [props.PriceInfo]);

  const CheckEmptyContent = () => {
    if (props.PriceInfo === "가격선택") {
      alert("가격을 선택하세요.");
      return false;
    }
    if (props.PriceInfo === "직접 입력" && !PriceInput) {
      alert("가격을 입력하세요.");
      return false;
    }
    props.setPriceInfo(PriceInput);
    return true;
  };

  return (
    <PriceDiv>
      <ContentHeadingArea HeadingTitle="가격 설정" />
      <div className="inputArea">
        <label>
          <input
            type="radio"
            name="price"
            value="가격선택"
            defaultChecked={true}
          />
          가격선택
        </label>
        <DropdownButton
          title={props.PriceInfo !== "가격문의" ? props.PriceInfo : "가격선택"}
        >
          {PriceArr.map((price, idx) => {
            return (
              <Dropdown.Item
                key={idx}
                onClick={() => props.setPriceInfo(price)}
              >
                {price}
              </Dropdown.Item>
            );
          })}
        </DropdownButton>
        {props.PriceInfo === "직접 입력" && (
          <input
            name="priceInput"
            placeholder={props.PriceInfo}
            onChange={(e) => setPriceInput(e.currentTarget.value)}
          />
        )}
      </div>
      <div className="inputArea">
        <label>
          <input
            type="radio"
            name="price"
            value="가격문의"
            onClick={() => props.setPriceInfo("가격문의")}
          />
          가격문의
        </label>
      </div>

      <FooterBtnArea
        setCurrentProcess={props.setCurrentProcess}
        NextStep="수정/환불안내"
        CheckEmptyContent={CheckEmptyContent}
      />
    </PriceDiv>
  );
}

export default Price;
