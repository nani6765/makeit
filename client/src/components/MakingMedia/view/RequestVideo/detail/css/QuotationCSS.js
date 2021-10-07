/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import styled from "@emotion/styled";

const breakpoints = [1200, 576];
const mq = breakpoints.map((bp) => `@media (max-width: ${bp}px)`);

const QuotationDiv = styled.div`
  margin-top: 50px;
  .title {
    font-size: 20px;
    font-weight: bold;
  }
  .slick-prev {
  height: 60px;
  left: 10px;
  z-index: 1;
  background: none;
  }
  .slick-next {
  height: 60px;
  right: 20px;
  background: none;
  }
  .slick-next:before,
  .slick-prev:before {
  opacity: 1;
  color: #702c8a;
  font-weight: 800;
  font-size: 60px;
  }
  .slick-prev:before {
  content: "〈";
  }
  .slick-next:before {
  content: "〉";
  }
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 30px;
    p {
      color: #6F6767;
      margin-bottom: 20px;
    }
    button {
      background: #935EA5;
      color: #fff;
      border-radius: 10px;
      border: none;
      padding: 10px 15px;
    }
  }
`;

const LinkCSS = css`
  color: black;
  text-decoration: none;
  &:hover {
    text-decoration: none;
  }
`;

const InfoDiv = styled.div`
    width: 30%;
    background: #FFFFFF;
    box-shadow: 0px 2px 10px rgba(178, 3, 108, 0.03), 0px 9px 30px rgba(163, 1, 79, 0.05);
    border-radius: 15px;
`;

export { QuotationDiv, LinkCSS, InfoDiv };