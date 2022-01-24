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
  margin-bottom: 1rem;
  .title {
    font-weight: bold;
    font-size: 2rem;
    margin: 1rem 0;
    text-align: center;
  }
  .info {
    display: grid;
    grid-template-columns: 300px 1fr 1fr;
    grid-template-rows: 50px 50px 1fr;
    grid-template-areas:
      "profileImg name proName"
      "profileImg gender field"
      "profileImg location location";
    grid-gap: 0.5rem;
    &.prod {
      grid-template-columns: 300px 1fr 1fr;
      grid-template-rows: 50px auto 1fr;
      grid-template-areas:
        "profileImg name name"
        "profileImg field field"
        "profileImg location location";
      .infoDiv {
        label {
          width: 100px;
        }
      }
    }
    .profileImg {
      grid-area: profileImg;
      img {
        cursor: pointer;
        border-radius: 5px;
        width: 100%;
        height: 400px;
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
      align-items: flex-start;
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
      div {
        width: 100%;
        ul {
          width: 100%;
          margin-bottom: 0px;
        }
      }
    }
    .location {
      grid-area: location;
      margin-left: 1rem;
      display: flex;
      align-items: flex-start;
      width: 100%;
      label {
        width: 100px;
        margin-bottom: 0px;
        color: grey;
      }
      div {
        width: 100%;
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
  .project {
    margin-top: 1rem;
    .sub {
      font-weight: bold;
      font-size: 1.5rem;
    }
    .list {
      width: 100%;
      display: flex;
      align-content: center;
      align-items: flex-start;
      flex-wrap: wrap;
      div {
        width: calc(calc(100% - 3rem) / 3);
        height: 150px;
        border: 1px solid #9a9a9a;
        border-radius: 8px;
        margin-bottom: 1rem;
        margin-right: 1rem;
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
              margin-bottom: 1rem;
            }
          }
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
export { BtnDiv, ImageModalDiv, DetailDiv };
