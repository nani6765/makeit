/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import styled from "@emotion/styled";

const breakpoints = [1200, 576];
const mq = breakpoints.map((bp) => `@media (max-width: ${bp}px)`);

const ActorFilterDiv = styled.div`
  width: 100%;
  height: auto;
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
    justify-content: space-around;
    align-items: center;
  }
  .genderFilter {
    grid-area: genderFilter;
  }
  .type {
    grid-area: type;
    width: 100%;
    font-weight: bold;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  .typeFilter {
    grid-area: typeFilter;
  }
  .classfication {
    grid-area: classfication;
    width: 100%;
    font-weight: bold;
    display: flex;
    justify-content: space-around;
    align-items: center;
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
        background: rgba(255, 255, 255, 0.12);
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
export { ActorFilterDiv, ActorInputDiv };
