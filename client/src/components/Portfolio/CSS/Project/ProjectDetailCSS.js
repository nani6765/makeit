import styled from "@emotion/styled";

const breakpoints = [1200, 576];
const mq = breakpoints.map((bp) => `@media (max-width: ${bp}px)`);

const BtnDiv = styled.div`
  width: 100%;
  height: auto;

  display: flex;
  justify-content: flex-end;

  margin: 1rem 0;
  user-select: none;

  button {
    background: #5a278b;
    border: 1px solid #5a278b;
    border-radius: 3px;
    padding: 5px 10px;

    font-weight: bold;
    color: white;
    &:hover,
    &:focus {
      background: white;
      color: #5a278b;
    }
  }
`;

const ProjectDetailContentDiv = styled.div`
  width: 100%;
  height: auto;
  border: 1px solid #c6c6c6;

  margin-top: 1rem;
  margin-bottom: 1rem;
  padding: 20px 30px;
  
  user-select: none;

  section {
    margin-bottom: 2rem;
    label {
      margin-bottom: 1rem;
    }
    &:nth-last-of-type(1) {
      margin-bottom: 0px;
    }
    &.title {
      width: 100%;
      padding: 10px 20px;
      h3 {
        font-weight: bold;
        text-align: center;
        border: 1px solid #acb0b4;
        width: 100%;
        background-color: white;
      }
    }

    &.info {
      display: grid;
      grid-template-columns: 1fr 3fr;
      grid-template-rows: auto auto auto;
      grid-template-areas:
        "img introduce"
        "img detailContent"
        "img location";
      grid-gap: 1rem;
      .img {
        grid-area: img;
        img {
          border-radius: 5px;
          width: 100%;
          height: auto;
          max-height: 200px;
          border: 1px solid #c6c6c6;
        }
      }

      .infoDiv {
        width: 100%;
        display: flex;
        align-content: center;
        align-items: flex-start;
        label {
          width: 15%;
          height: 100%;
          margin-bottom: 0px;
          user-select: none;
          margin-bottom: 0px;
        }
        div {
          width: 100%;
          height: 100%;
          padding: 5px 10px;
          border: 1px solid #acb0b4;
          border-radius: 3px;
          p {
            margin-bottom: 0px;
            white-space: pre-wrap;
          }
        }
      }

      .introduce {
        grid-area: introduce;
        label {
          display: flex;
          align-items: center;
        }
        div {
          display: flex;
          align-items: center;
        }
      }
      .detailContent {
        grid-area: detailContent;
      }
      .location {
        grid-area: location;
        label {
          display: flex;
          align-items: flex-start;
        }
        span {
          width: 100%;
          div {
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: 1rem;
            justify-content: center;
          }
        }
      }
    }

    &.timeline {
      div {
        width: 100%;
        border: 1px solid #acb0b4;
        background-color: white;
        padding: 5px 10px;
        margin-bottom: 1rem;
        cursor: pointer;
        p {
          margin-bottom: 0px;
          span {
            font-weight: bold;
          }
        }
      }
    }

    &.participants {
      button {
        width: 100%;
        border: 1px solid #acb0b4;
        padding: 20px;
        min-height: 100px;

        display: flex;
        justify-content: center;
        align-items: center;
        background-color: white;

        cursor: pointer;
        font-weight: bold;
        &:hover,
        &:focus {
          border: 1px solid black;
        }
      }
    }

    &.tag {
      .list {
        display: flex;
        align-items: flex-start;
        flex-wrap: wrap;
        p {
          margin-right: 1rem;
          border-radius: 15px;
          border: 1px solid #acb0b4;
          padding: 5px 10px;
          text-align: center;
          margin-bottom: 1rem;
          line-height: 16px;
          min-width: 150px;
        }
      }
    }
  }
`;

const ParticipateModalDiv = styled.div`
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
    background-color: white;
    padding: 20px;
    border-radius: 15px;
    width: 50%;
    display: flex;
    flex-direction: column;
    margin-right: 1rem;
    max-height: 80vh;
    overflow: auto;
    span{
      width: 100%;
      text-align: right;
      margin-bottom: 1rem;
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

const ParticipateSection = styled.figure`
  width: 100%;
  border: 1px solid #c6c6c6;
  padding: 20px;
  border-radius: 15px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 50px;
  grid-template-rows: 50px auto;
  grid-template-areas:
    "img title . hambuc"
    "img title info info";
  grid-gap: 1rem;
  margin-bottom: 1rem;
  user-select: none;

  .img {
    grid-area: img;
    width: 100%;
    padding-top: 62.5%;
    position: relative;
    overflow: hidden;
    margin-bottom: 0px;
    img{
      position: absolute;
      width: 100%;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      border-radius: 15px;
    }
  }
  .title {
    grid-area: title;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
  }
  .info {
    grid-area: info;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    p {
      margin-bottom: 0px;
    }
  }
  .hambuc {
    grid-area: hambuc;
    display: flex;
    justify-content: flex-end;
    position: relative;
  }
  .partModal {
    position : absolute;
    top: 20px;
    right: 10px;
    padding: 10px;
    box-shadow: 0px 4px 6px -1px rgb(0 0 0 / 25%);
    border-radius: 12px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;

    width: 100px;
    height: auto;

    span {
      margin-bottom: 10px;
      cursor: pointer;
      &.reject{
        color: red;
      }
      &:nth-last-of-type(1){
        margin-bottom: 0px;
      }
    }
  }
`;

export { BtnDiv, ProjectDetailContentDiv, ParticipateModalDiv, ParticipateSection };
