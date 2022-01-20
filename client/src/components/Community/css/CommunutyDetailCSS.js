import styled from "@emotion/styled";

const breakpoints = [1200, 576];
const mq = breakpoints.map((bp) => `@media (max-width: ${bp}px)`);

const DetailDiv = styled.div`
  width: 70%;
  margin: 0 auto;
  margin-top: 5vh;
  margin-bottom: 5vh;
  background: #ffffff;
  box-shadow: 0px 2px 10px rgba(178, 3, 108, 0.03),
    0px 9px 30px rgba(163, 1, 79, 0.05);
  border-radius: 15px;
  padding: 30px;
  .content {
    display: grid;
    grid-template-columns: 50px 100px 1fr 50px;
    grid-template-rows: 25px 25px auto auto auto auto;
    grid-template-areas:
      "avatar author author hambuc"
      "avatar date date ."
      "title title title title"
      "desc desc desc desc"
      "image image image image"
      "like like like like";
    .avatar {
      grid-area: avatar;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .author {
      grid-area: author;
      text-align: left;
      font-weight: bold;
      margin-left: 1rem;
      margin-bottom: 0px;
    }
    .hambuc {
      grid-area: hambuc;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      color: #c4c4c4;
      position: relative;
    }
    .date {
      grid-area: date;
      text-align: left;
      color: #5b4949;
      margin-left: 1rem;
      margin-bottom: 0px;
    }
    .title {
      grid-area: title;
      font-size: 20px;
      font-weight: bold;
      text-align: left;
      margin-top: 1rem;
      margin-bottom: 1rem;
      overflow-wrap: break-word;
    }
    .desc {
      grid-area: desc;
      text-align: left;
      word-break: keep-all;

      line-height: 25px;
      overflow-wrap: break-word;
    }
    .image {
      grid-area: image;
      margin-top: 30px;
      img {
        width: 300px;
        cursor: pointer;
        ${mq[0]} {
          width: 100%;
        }
      }
    }
    .like {
      grid-area: like;
      text-align: right;
      margin-top: 30px;
      button {
        padding: 0px;
        border: none;
        background-color: rgba(255, 255, 255, 0);
        i {
          margin-right: 5px;
        }
        &.active {
          color: #935ea5;
          font-weight: bold;
        }
        &:active,
        &:focus {
          border: none;
        }
      }
    }
  }
  ${mq[1]} {
    width: 90%;
    padding: 20px;
  }
`;

export default DetailDiv;
