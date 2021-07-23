/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import styled from "@emotion/styled";

const breakpoints = [1200, 576];
const mq = breakpoints.map((bp) => `@media (max-width: ${bp}px)`);

const EditProfileGrid = styled.div`
  width: 60%;
  margin: 0 auto;
  padding: 5vh 5vw 5vh 5vw;
  margin-top: 5vh;
  margin-bottom: 5vh;
  background: #ffffff;
  box-shadow: 0px 2px 10px rgba(178, 3, 108, 0.03),
    0px 9px 30px rgba(163, 1, 79, 0.05);
  border-radius: 15px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: auto auto auto auto;
  grid-gap: 1rem;
  grid-template-areas:
    ". title back"
    "editProfileDiv editProfileDiv editProfileDiv"
    "eidtNickNameDiv eidtNickNameDiv eidtNickNameDiv"
    ". btnDiv .";
  .title {
    grid-area: title;
    font-weight: bold;
    width: 100%;
    margin-bottom: 0px;
    text-align: center;
  }
  .back {
    grid-area: back;
    cursor: pointer;
    text-align: right;
  }
  .editProfileDiv {
    grid-area: editProfileDiv;
    border-top: 2px solid black;
    .editProfile {
      display: flex;
      flex-wrap: columns;
      justyfi-content: center;
      align-items: center;
    }
  }
  .eidtNickNameDiv {
    grid-area: eidtNickNameDiv;
    .eidtNickName {
    }
  }
  .btnDiv {
    grid-area: btnDiv;
    width: 100%;
    text-align: center;
    button {
      background: #935ea5;
      border-radius: 10px;
      padding: 5px 10px 5px 10px;
      color: white;
      font-weight: bold;
      &:hover,
      &:focus {
        background: #702c8a;
      }
    }
  }
`;

const PCOnly = styled.span`
  display: block;
  ${mq[1]} {
    display: none;
  }
`;
export { EditProfileGrid, PCOnly };
