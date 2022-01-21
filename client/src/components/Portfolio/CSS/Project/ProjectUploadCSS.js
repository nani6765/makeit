import styled from "@emotion/styled";

const breakpoints = [1200, 576];
const mq = breakpoints.map((bp) => `@media (max-width: ${bp}px)`);

const ProjectUploadDiv = styled.div`
  form {
    width: 100%;
    height: auto;
    border: 1px solid #c6c6c6;

    margin-top: 1rem;
    margin-bottom: 1rem;
    padding: 20px 30px;

    section {
      margin-bottom: 2rem;
      label {
        margin-bottom: 1rem;
      }
      &:nth-last-of-type(1) {
        margin-bottom: 0px;
      }
    }
    .btnDiv {
      display: flex;
      justify-content: flex-end;
      button {
        margin-left: 10px;
        padding: 5px 10px;
        border-radius: 10px;
        &.cancel {
          background: white;
          border: 1px solid #5a278b;
          color: #5a278b;
        }
        &.submit {
          background: #5a278b;
          border: 1px solid #5a278b;
          color: white;
        }
      }
    }
  }
`;

const TitleSection = styled.section`
  margin-top: 1rem;
  input {
    width: 100%;
    padding: 10px 20px;
    font-weight: bold;
    text-align: center;
    border: 1px solid #acb0b4;
    background-color: white;
    &::placeholder {
      font-weight: bold;
      color: black;
    }
    &:focus,
    &:active {
      outline: none;
      &::placeholder {
        color: transparent;
      }
    }
  }
`;

const InfoSection = styled.section`
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-template-rows: 1fr 3fr auto;
  grid-template-areas:
    "img introduce"
    "img detailContent"
    "img location";
  grid-gap: 0.5rem;
  .img {
    grid-area: img;
    label {
      width: 100%;
      input {
        display: none;
      }
      img {
        cursor: pointer;
        border-radius: 5px;
        width: 100%;
        height: auto;
        max-height: 200px;
      }
    }
  }
  .infoDiv {
    width: 100%;
    display: flex;
    align-content: center;
    align-items: flex-start;
    label {
      width: 15%;
      margin-bottom: 0px;
      user-select: none;
      text-align: center;
      margin-bottom: 0px;
    }
    input {
      width: 100%;
      padding: 5px 10px;
      border: 1px solid #acb0b4;
      border-radius: 3px;
      &:focus,
      &:active {
        outline: none;
      }
    }
    textarea {
      width: 100%;
      height: 100px;
      padding: 5px 10px;
      border: 1px solid #acb0b4;
      border-radius: 3px;
      resize: none;
      &:focus {
        outline: none;
      }
      &::-webkit-scrollbar {
        width: 10px;
      }
      &::-webkit-scrollbar-thumb {
        background-color: grey;
        border-radius: 15px;
        background-clip: padding-box;
        border: 2px solid transparent;
      }
      &::-webkit-scrollbar-track {
        background-color: #c6c6c6;
        border-radius: 15px;
        box-shadow: inset 0px 0px 5px white;
      }
    }
    button {
      width: 100%;
      border: 1px solid #acb0b4;
      background-color: white;
      padding: 5px 10px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #acb0b4;

      &:hover:enabled {
        border: 1px solid black;
        color: black;
        font-weight: bold;
      }
    }
  }
  .introduce {
    grid-area: introduce;
  }
  .detailContent {
    grid-area: detailContent;
  }
  .location {
    grid-area: location;

    div {
      width: 100%;
      position: relative;
      input,
      .list {
        margin-bottom: 1rem;
      }
      .list {
        border: 1px solid #acb0b4;
        padding: 5px 10px;
        text-align: center;
        color: #acb0b4;
        user-select: none;
        cursor: pointer;
      }
      input {
        text-align: center;
      }
    }
  }
`;

const TimeLineSection = styled.section`
  div {
    .add {
      width: 100%;
      border: 1px solid #acb0b4;
      background-color: white;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #acb0b4;
      padding: 5px 10px;
      &:hover {
        border: 1px solid black;
        color: black;
        font-weight: bold;
      }
    }
    &.list {
      width: 100%;
      border: 1px solid #acb0b4;
      background-color: white;
      padding: 5px 10px;
      margin-bottom: 1rem;
      cursor: pointer;
      p {
        margin-bottom: 0px;
      }
    }
  }
`;

const TagSection = styled.section`
  div {
    display: flex;
    align-items: flex-start;
    flex-wrap: wrap;
    * {
      margin-right: 1rem;
      border-radius: 15px;
      border: 1px solid #acb0b4;
      padding: 5px 10px;
      text-align: center;
      margin-bottom: 1rem;
      line-height: 16px;
    }
    input {
      background-color: white;
      width: 150px;
      height: 28px;
      &:focus,
      &:active {
        outline: none;
      }
    }
    p {
      min-width: 150px;
    }
  }
`;

const ModalDiv = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 30;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;

  .modalContent {
    background-color: white;
    padding: 20px;
    border-radius: 15px;
    width: 50%;
    height: auto;
    display: grid;
    grid-template-columns: 80px auto 80px auto;
    grid-template-rows: auto auto auto;
    grid-template-areas:
      "startLabel startPicker endLabel endPicker"
      "inputLabel input input input"
      "btnDiv btnDiv btnDiv btnDiv";
    grid-gap: 1rem;
    label {
      display: flex;
      align-self: center;
    }
    div {
      position: relative;
    }
    input {
      width: 100%;
      padding: 5px 10px;
      border-radius: 10px;
      border: 1px solid #acb0b4;
      &:focus,
      &:active {
        outline: none;
      }
    }
    .startLabel {
      grid-area: startLabel;
    }
    .startPicker {
      grid-area: startPicker;
    }
    .endLabel {
      grid-area: endLabel;
    }
    .endPicker {
      grid-area: endPicker;
    }
    .inputLabel {
      grid-area: inputLabel;
    }
    .input {
      grid-area: input;
    }
    .btnDiv {
      grid-area: btnDiv;
      display: flex;
      justify-content: flex-end;
      button {
        margin-left: 10px;
        border: 1px solid #acb0b4;
        background-color: white;
        padding: 5px 10px;
        border-radius: 10px;
      }
    }
  }
`;

export {
  ProjectUploadDiv,
  TitleSection,
  InfoSection,
  TimeLineSection,
  TagSection,
  ModalDiv,
};
