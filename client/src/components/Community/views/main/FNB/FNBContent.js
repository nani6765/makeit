/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import styled from "@emotion/styled";

const breakpoints = [1200, 576];
const mq = breakpoints.map((bp) => `@media (max-width: ${bp}px)`);

const FNBSearchDiv = styled.div`
  width: 20%;
  margin: 0 auto;
  background: #ffffff;
  border: 2px solid #6759f6;
  box-sizing: border-box;
  border-radius: 50px;
  padding: 5px 10px 5px 10px;
  display: grid;
  grid-template-columns: auto auto;
  grid-template-rows: auto;
  margin-bottom: 30px;
  input {
    border: none;
    &:focus {
      outline: none;
    }
    &::placeholder {
      text-align: center;
    }
  }
  label {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 0px;
  }

  ${mq[1]} {
    width: 50%;
  }
`;

export default FNBSearchDiv;
