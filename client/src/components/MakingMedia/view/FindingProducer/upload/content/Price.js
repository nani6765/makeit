import React, { useEffect } from "react";

import ContentHeadingArea from "../utils/ContentHeadingArea.js";
import FooterBtnArea from "../utils/FooterBtnArea.js";
import { DropdownButton, Dropdown } from "react-bootstrap";

import { PriceDiv } from "../../../../css/FPUCSS.js";

function Price(props) {
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
    window.scrollTo(0, 0);
  }, [])

  return (
    <PriceDiv>
      <ContentHeadingArea HeadingTitle="가격 설정" />
      <div className="inputArea">
        <label>
          <input
            type="radio"
            name="price"
            value="가격선택"
            checked={props.PriceInfo !== "가격문의" ? true : false}
            onChange={() => {
              props.setPriceInfo("가격선택");
            }}
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
            placeholder={props.PriceDirectInput}
            onChange={(e) => props.setPriceDirectInput(e.currentTarget.value)}
          />
        )}
      </div>
      <div className="inputArea">
        <label>
          <input
            type="radio"
            name="price"
            value="가격문의"
            onChange={() => props.setPriceInfo("가격문의")}
            checked={props.PriceInfo === "가격문의" ? true : false}
          />
          가격문의
        </label>
      </div>

      <FooterBtnArea
        setCurrentProcess={props.setCurrentProcess}
        NextStep="수정/환불안내"
        CheckEmptyContent={props.CheckEmptyContent}
        TempSaveHandler={props.TempSaveHandler}
      />
    </PriceDiv>
  );
}

export default Price;
