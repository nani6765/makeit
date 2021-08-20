/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import styled from "@emotion/styled";

const breakpoints = [1200, 576];
const mq = breakpoints.map((bp) => `@media (max-width: ${bp}px)`);

const SubCategoryDiv = styled.div`
  width: 70%;
  margin: 0 auto;
  padding-top: 1rem;
  ${mq[1]} {
    width: 90%;
  }
`;

const ActorFilterDiv = styled.div`
  width: 100%;
  height: auto;
  background: #ffffff;
  box-shadow: 0px 2px 10px rgba(178, 3, 108, 0.03),
    0px 9px 30px rgba(163, 1, 79, 0.05);
  border-radius: 15px;
  padding: 20px;
  display: grid;
  grid-template-columns: 80px 1fr;
  grid-template-rows: auto;
  grid-template-areas:
    "gender genderFilter"
    "type typeFilter"
    "classfication classficationFilter";
  grid-gap: 15px;
  .gender {
    grid-area: gender;
    width: 100%;
    font-weight: bold;
    display: flex;
    justify-content: space-between;
  }
  .genderFilter {
    grid-area: genderFilter;
  }
  .type {
    grid-area: type;
    width: 100%;
    font-weight: bold;
    display: flex;
    justify-content: space-between;
  }
  .typeFilter {
    grid-area: typeFilter;
  }
  .classfication {
    grid-area: classfication;
    width: 100%;
    font-weight: bold;
    display: flex;
    justify-content: space-between;
  }
  .classficationFilter {
    grid-area: classficationFilter;
  }
`;

const ActorInputDiv = styled.div`
  input[type="checkbox"] {
    display: none;
    & + label {
      padding-left: 25px;
      margin-right: 25px;
      position: relative;
      user-select: none;
      &:before {
        content: "";
        width: 14px;
        height: 14px;
        cursor: pointer;
        background: rgba(179, 82, 255, 0.12);
        border: 2px solid rgba(179, 82, 255, 0.24);
        box-sizing: border-box;
        border-radius: 4px;
        position: absolute;
        left: 0;
        top: 2px;
      }
    }
    &:checked + label:before {
      content: "✓";
      display: flex;
      align-items: center;
      color: white;
      background: #9b51e0;
      border-radius: 4px;
      text-align: center;
      font-size: 14px;
    }
    &:disabled {
      & + label {
        opacity: 0.5;
      }
    }
  }
`;
export { SubCategoryDiv, ActorFilterDiv, ActorInputDiv };
