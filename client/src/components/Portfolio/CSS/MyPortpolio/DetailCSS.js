import styled from "@emotion/styled";

const breakpoints = [1200, 576];
const mq = breakpoints.map((bp) => `@media (max-width: ${bp}px)`);

const BtnDiv = styled.div``;

const DetailDiv = styled.div`
  width: 100%;
  height: auto;
  padding: 20px;
  border-radius: 15px;
  border: 1px solid #c6c6c6;
  .title {
    font-weight: bold;
    font-size: 2rem;
    margin: 1rem 0;
    text-align: center;
  }
  .info {
    display: grid;
    grid-template-columns: 1fr 1.5fr 1.5fr;
    grid-template-rows: 50px 50px 1fr;
    grid-template-areas:
      "profileImg name proName"
      "profileImg gender field"
      "profileImg location location";
    grid-gap: 0.5rem;
    .profileImg {
      grid-area: profileImg;
      img {
        cursor: pointer;
        border-radius: 5px;
        width: 100%;
        height: auto;
        max-height: 200px;
        border-radius: 15px;
        border: 1px solid #c6c6c6;
      }
      .links {
        display: flex;
        width: 70%;
        margin: 10px auto;
        justify-content: space-around;
        span {
          margin-right: 1rem;
          color: purple;
          font-size: 1.5rem;
          &:nth-last-of-type(1) {
            margin-right: 0px;
          }
        }
      }
    }
    .infoDiv {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      margin-left: 1rem;
      label {
        width: 30%;
        margin-bottom: 0px;
        color: grey;
      }
      p {
        width: 70%;
        margin-bottom: 0px;
        font-weight: bold;
      }
    }
    .name {
      grid-area: name;
    }
    .proName {
      grid-area: proName;
    }
    .gender {
      grid-area: gender;
    }
    .field {
      grid-area: field;
    }
    .location {
      grid-area: location;
      margin-left: 1rem;
      display: flex;
      align-items: center;
      label {
        width: 15%;
        margin-bottom: 0px;
        color: grey;
      }
      div {
        width: 85%;
        ul {
          width: 100%;
          margin-bottom: 0px;
        }
      }
    }
  }
  .introduce {
    margin-top: 1rem;
    p {
      font-weight: bold;
      font-size: 1.5rem;
    }
    div {
      white-space: pre-wrap;
      padding: 10px 20px;
      border-radius: 15px;
      border: 1px solid #c6c6c6;
    }
  }
  .profile {
    margin-top: 1rem;
    p {
      font-weight: bold;
      font-size: 1.5rem;
    }
    .list {
      display: flex;
      flex-wrap: wrap;
      article {
        width: calc(33% - 1rem);
        position: relative;
        margin-right: 1rem;
        border: 1px solid #c6c6c6;
        border-radius: 15px;
        margin-bottom: 1rem;
        figure {
          width: 100%;
          border-radius: 15px;
          padding-top: 62.5%;
          height: 0px;
          margin-bottom: 0px;
          background-position: 50% 50%;
          background-size: cover;
          cursor: pointer;
        }
      }
    }
  }
  .tag {
    margin-top: 1rem;
    p {
      font-weight: bold;
      font-size: 1.5rem;
    }
    div {
      span {
        padding: 5px 10px;
        border: 1px solid #c6c6c6;
        margin-right: 1rem;
        border-radius: 10px;
        user-select: none;
      }
    }
  }
`;

const ImageModalDiv = styled.div`
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
  .innerDiv {
    width: auto;
    height: auto;
    .image-gallery {
      width: 80vw;
      height: auto;
      .image-gallery-content {
        .image-gallery-slide-wrapper {
          .image-gallery-slides {
            div {
              img {
                width: 100%;
                height: auto;
                max-height: 80vh;
                object-fit: cover;
                overflow: hidden;
              }
            }
          }
        }
      }
    }
  }
`;

const ProfileSection = styled.section`
  .list {
    display: flex;
    flex-wrap: no-wrap;
    overflow-x: auto;
    overflow-y: hidden;
    article {
      width: 300px;
      flex: 0 0 auto;
      position: relative;
      margin-right: 1rem;
      label {
        width: 100%;
      }
      figure {
        width: 100%;
        padding-top: 62.5%;
        position: relative;
        border: 1px solid #9a9a9a;
        box-sizing: border-box;
        border-radius: 8px;
        margin-bottom: 0px;
        overflow: hidden;
        img {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 100%;
          transform: translate(-50%, -50%);
        }
        &.add {
          padding-top: 0px;
          height: 100%;
          min-height: 187.5px;
          display: flex;
          justify-content: center;
          align-items: center;
          cursor: pointer;
          input {
            display: none;
          }
        }
      }
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
      height: 130px;
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
          &.type {
            color: grey;
            font-size: 0.5em;
            text-align: right;
          }
          &.title {
            font-weight: bold;
            font-size: 1em;
          }
          &.content {
          }
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
  z-index: 30;
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
    .other {
    }
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
          color: black;
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
      .header {
        span {
          cursor: pointer;
          user-select: none;
          &.divider {
            margin: 0 1rem;
            cursor: auto;
          }
          &.target {
            &:hover {
              font-weight: bold;
            }
          }
        }
      }
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
          color: black;
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
    &.uploadModal {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-template-rows: auto auto;
      grid-template-areas:
        "title title"
        "pro prod";
      grid-gap: 2rem;
      padding: 50px 20px;
      user-select: none;

      .title {
        grid-area: title;
        font-size: 1.75rem;
        font-weight: bold;
        text-align: center;
      }
      .pro {
        grid-area: pro;
      }
      .prod {
        grid-area: prod;
      }
      .box {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        border: 1px solid #eeeeee;
        border-radius: 10px;
        cursor: pointer;
        padding: 20px;

        img {
          width: 50%;
          height: auto;
          margin-bottom: 1rem;
        }
        p {
          text-align: center;
          font-size: 1.5rem;
          line-height: 2rem;
          font-weight: bold;
          span {
            font-size: 1.25rem;
          }
        }
      }
    }
  }
`;

const MakeItContentDiv = styled.div`
  .list {
    width: 100%;
    padding: 0px;
    border-radius: 0px;

    display: flex;
    flex-direction: row;
    flex-wrap: no-wrap;
    overflow-x: auto;
    overflow-y: hidden;
    &::-webkit-scrollbar {
      width: 1px;
      height: 10px;
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

    article {
      width: 200px;

      flex: 0 0 auto;
      position: relative;
      margin-right: 1rem;
      margin-bottom: 1rem;
      padding: 20px;
      border: 1px solid #c6c6c6;
      border-radius: 15px;

      cursor: pointer;

      figure {
        width: auto;
        margin-bottom: 0px;
        img {
          width: 100%;
          height: 100%;
          display: block;
        }
        figcaption {
          color: lightgrey;
          span {
            font-weight: bold;
            color: black;
          }
        }
      }
    }
  }
  .loading {
    width: 100%;
    margin: 1rem 0;
    .spinner-border {
      border-radius: 50%;
      width: 2rem;
      margin: 0 auto;
    }
  }
`;

export { BtnDiv, ImageModalDiv, DetailDiv };
