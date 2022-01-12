import styled from "@emotion/styled";

const breakpoints = [1200, 576];
const mq = breakpoints.map((bp) => `@media (max-width: ${bp}px)`);

const ProdUploadDiv = styled.div`
  form {
    width: 100%;
    height: auto;
    border: 1px solid #c6c6c6;

    margin-top: 1rem;
    margin-bottom: 1rem;
    padding: 20px 30px;

    section {
      margin-bottom: 2rem;
      &:nth-last-of-type(1){
        margin-bottom: 0px;
      }
    }
`;

const TitleSection = styled.section`
  display: grid;
  grid-template-columns: 50px 1fr 50px;
  grid-template-rows: auto;
  grid-template-areas: " . title link";
  grid-gap: 1rem;
  margin-top: 1rem;
  input {
    grid-area: title;
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
  grid-template-rows: auto auto auto auto;
  grid-template-areas:
    "profileImg name"
    "profileImg field"
    "profileImg location"
    "links .";
  grid-gap: 0.5rem;
  .profileImg {
    grid-area: profileImg;
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
  .links {
    grid-area: links;
    display: flex;
    justify-content: center;
    div {
      span {
        margin-right: 10px;
        cursor: pointer;
        &:nth-last-of-type(1) {
          margin-right: 0px;
        }
        &.active {
          i {
            color: purple;
          }
        }
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
    }
    div {
      width: 85%;
      &.contentDiv {
        display: flex;
        width: 80%;
        flex-wrap: wrap;
        div {
          width: auto;
          margin-bottom: 10px;
          input[type="checkbox"] {
            display: none;
          }
          label {
            margin: 0px;
            user-select: none;
            width: auto;
            ${mq[1]} {
              font-size: 14px;
              display: flex;
              align-items: center;
            }
          }
          input + label:before {
            content: "";
            display: inline-flex;
            width: 1rem;
            height: 1rem;
            background: rgba(179, 82, 255, 0.12);
            border: 2px solid rgba(179, 82, 255, 0.24);
            border-radius: 4px;
            margin: 0 0.5rem 0 1.5rem;
            cursor: pointer;
            ${mq[1]} {
              margin: 0 0.5rem 0 1rem;
            }
          }
          input:checked + label:before {
            content: "✓";
            color: white;
            background: #9b51e0;
            align-items: center;
            align-content: center;
            justify-content: center;
          }
        }
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
    }
  }
  .name {
    grid-area: name;
  }
  .field {
    grid-area: field;
  }
  .location {
    grid-area: location;
  }
`;

const IntroSection = styled.section`
  display: flex;
  flex-direction: column;
  textarea {
    min-height: 350px;
    padding: 20px;
    border: 1px solid #acb0b4;
    border-radius: 15px;
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
`;

const ProjectSection = styled.section`
  .list {
    width: 100%;
    display: flex;
    align-content: center;
    align-items: flex-start;
    flex-wrap: wrap;
    div {
      width: calc(calc(100% - 3rem) / 3);
      height: 100px;
      border: 1px solid #9a9a9a;
      border-radius: 8px;
      margin-bottom: 1rem;
      margin-right: 1rem;
      &.addition {
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
      }
      &.project {
        padding: 20px;
        cursor: pointer;
        p {
          margin-bottom: 0px;
        }
        .title {
          font-weight: bold;
        }
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
    }
    input {
      background-color: white;
      width: 150px;
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
  zindex: 30;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  div {
    background-color: white;
    padding: 20px;
    border-radius: 15px;
    width: 50%;
    display: flex;
    flex-direction: column;
    input {
      padding: 5px;
      border: 1px solid #acb0b4;
      border-radius: 3px;
      &:focus,
      &:active {
        outline: none;
      }
      &#projectTitle {
        padding: 10px 5px;
        font-weight: bold;
        text-align: center;
        &::placeholder {
          text-align: center;
          color: black;
          font-weight: bold;
        }
        &:focus,
        &:active {
          outline: none;
          &::placeholder {
            color: transparent;
          }
        }
      }
    }
    label {
      margin-bottom: 0px;
      margin-top: 1rem;
    }
    textarea {
      min-height: 150px;
      padding: 5px;
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
    &.linkModal {
      .btnDiv {
        margin-top: 1rem;
        padding: 0px;
        width: 100%;
        display: flex;
        justify-content: flex-end;
        flex-direction: row;
        button {
          margin-right: 1rem;
          border-radius: 15px;
          padding: 5px 10px;
          border: 1px solid #c6c6c6;
          background-color: white;
          &.cancel {
          }
          &.delete {
          }
          &.submit {
            margin-right: 0px;
          }
        }
      }
    }
    &.projectModal {
      .btnDiv {
        margin-top: 1rem;
        padding: 0px;
        width: 100%;
        display: flex;
        justify-content: space-between;
        flex-direction: row;
        div {
          padding: 0px;
          display: flex;
          flex-direction: row;
          justify-content: flex-end;
        }
        button {
          margin-right: 1rem;
          border-radius: 15px;
          padding: 5px 10px;
          background-color: white;
          &.cancel {
            border: 1px solid #c6c6c6;
          }
          &.delete {
            border: 1px solid red;
            color: red;
            margin-right: 0px;
          }
          &.submit {
            border: 1px solid #c6c6c6;
            margin-right: 0px;
          }
        }
      }
    }
  }
`;

export {
  ProdUploadDiv,
  TitleSection,
  InfoSection,
  IntroSection,
  ProjectSection,
  TagSection,
  ModalDiv,
};
