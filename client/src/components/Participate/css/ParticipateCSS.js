/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import styled from "@emotion/styled";

const breakpoints = [1200, 576];
const mq = breakpoints.map((bp) => `@media (max-width: ${bp}px)`);

const PartHeader = styled.div`
  position: relative;
  height: auto;
  .bannerDiv {
    width: 100%;
    height: 35vh;
    position: relative;
    img {
      width: 100%;
      height: 100%;
      postition: absolute;
      top: 0;
      left: 0;
      z-index: 5;
    }
    ${mq[1]} {
      height: 20vh;
    }
  }
  .category {
    width: 100%;
    background: #ede7f6;
    padding: 10px 15%;
    p {
      display: inline-block;
      color: #702c8a;
      font-size: 24px;
      font-weight: bold;
      margin: 0;
    }
    .sorting {
      display: inline-block;
      p {
        margin-left: 20px;
        color: #979393;
        font-size: 16px;
        background: #efe9e9;
        padding: 5px 10px;
        font-weight: normal;
      }
      .active {
        background: #935ea5;
        border-radius: 16px;
        color: #fff;
      }
    }
    ${mq[1]} {
      padding: 10px 5%;
    }
  }
`;

const MenuList = styled.div`
width: 100%;
padding: 0px 15%;
border-bottom: 1px solid #acb0b4;
display: flex;
justify-content: space-between;
align-items: flex-end;
align-content: center;
ul {
  height: 1rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-bottom: 1rem !important;
  margin-top: 3rem;
  list-style: none;
}
.search {
  background: #f7f7f7;
  padding: 5px;
  height: 100%;
  margin-bottom: 0.5rem;
  input {
    background: none;
    border: none;
    text-align: right;
    height: 100%;
    &::placeholder {
      color: #bfbfbf;
    }
  }
  input:focus {
    border: none;
    outline: none;
  }
  svg {
    margin-left: 5px;
    height: 100%;
    cursor: pointer;
  }
}

${mq[1]} {
  padding: 0px 5%;
  justify-content: space-evenly;
  flex-direction: column;
  align-items: flex-end;
  ul {
    width: 100%;
    align-content: center;
    justify-content: space-evenly;
    padding-bottom: 0px !important;
    margin-top: 1rem;
    margin-bottom: 1rem;
  }
  .search {
    padding: 3px;
    width: 150px;
    input {
      width: 120px;
      &::placeholder {
        font-size: 10px;
      }
    }
  }
}
`;

const MenuItem = styled.li`
  color: #ACB0B4;
  background: #ffffff;
  cursor: pointer;
  text-align: center;
  margin-right: 2rem;
  padding-bottom: 2rem !important;
  height: 1rem;
  font-weight: bold;
  &.active {
    border-bottom: 3px solid #61057d;
    user-select: none;
    p {
      color: #61057d;
      font-weight: bold;
    }
  }

  ${mq[1]} {
    margin-right: 0px;
    padding-bottom: 0rem !important;
    p {
      font-size: 10px;
    }
  }
`;

const PartBody = styled.div`
  width: 70%;
  margin: 0 auto;
  ${mq[1]} {
    width: 90%;
  }
`;

const PartFilter = styled.div`
  background: #fafafa;
  border: none;
  height: auto;
  padding: 0 15%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding-top: 1rem;
  ${mq[0]} {
    padding: 10px 10%;
  }
  ${mq[1]} {
    padding: 10px 5%;
  }
  .select {
    display: flex;
    .labelArea {
      width: 10%;
      display: flex;
      align-content: center;
      align-items: center;
      user-select: none;
      margin-bottom: 1rem;
      span {
        font-weight: bold;
        margin: 0px;
      }
    }
    .contentArea {
      display: flex;
      width: 90%;
      flex-wrap: wrap;
     
      div {
        width: auto;
        margin-bottom: 1rem;
        margin-right: 1rem;
        &:nth-last-of-type(1){
          margin-right: 0rem;
        }
        input {
          display: none;
        }
        label {
          padding: 0.75rem;
          cursor: pointer;
          border: 1px solid #ACB0B4;
          border-radius: 5px;
          
        }
        input:checked + label {
          background: #61057D;
          border: 1px solid #61057D;
          box-sizing: border-box;
          border-radius: 5px;
          color: white;
        }
      }
    }
  }
`;

const PartIPLoListDiv = styled.div`
  width: 100%;
  height: auto;
`;

const PostCard = styled.div`
  width: 100%;
  height: auto;
  min-height: 120px;
  background: #ffffff;
  margin-top: 5vh;
  margin-bottom: 5vh;
  padding: 20px;
  box-shadow: 0px 2px 10px rgba(178, 3, 108, 0.03),
    0px 9px 30px rgba(163, 1, 79, 0.05);
  border-radius: 15px;
  display: grid;
  grid-template-columns: 50px auto 1fr 80px 80px 80px;
  grid-template-rows: 25px 25px auto auto auto;
  grid-template-areas:
    "avatar author author author . view"
    "avatar date date date . ."
    "title title title title title title"
    "desc desc desc desc desc desc"
    ". . . image like reple";
  ${mq[1]} {
    grid-template-columns: 50px auto 1fr 60px 60px 60px;
  }
  .avatar {
    grid-area: avatar;
  }
  .author {
    grid-area: author;
    font-weight: 600;
    margin-left: 10px;
  }
  .view {
    text-align: right;
    grid-area: view;
    font-size: 14px;
    color: 686868;
    ${mq[1]} {
      font-size: 10px;
    }
  }
  .date {
    grid-area: date;
    color: #5b4949;
    margin-left: 10px;
    font-size: 14px;
    ${mq[1]} {
      font-size: 10px;
    }
  }
  .title {
    grid-area: title;
    font-weight: 600;
    margin-top: 10px;
    font-size: 20px;
  }
  .desc {
    grid-area: desc;
    margin-top: 10px;
    margin-bottom: 10px;
  }
  .like {
    grid-area: like;
    font-size: 14px;
    text-align: right;
    ${mq[1]} {
      font-size: 10px;
    }
    i {
      margin-right: 5px;
    }
  }
  .reple {
    grid-area: reple;
    font-size: 14px;
    text-align: right;
    ${mq[1]} {
      font-size: 10px;
    }
    i {
      margin-right: 5px;
    }
  }
  .image {
    grid-area: image;
    font-size: 14px;
    text-align: right;
    ${mq[1]} {
      font-size: 10px;
    }
    i {
      margin-right: 5px;
    }
  }
`;

const IPLoPostCard = styled.div`
  background: #ffffff;
  width: 100%;
  height: 100%;
  padding: 20px;
  box-shadow: 0px 2px 10px rgba(178, 3, 108, 0.03),
    0px 9px 30px rgba(163, 1, 79, 0.05);
  border-radius: 15px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 200px auto auto auto;
  grid-template-areas:
    "thumbnail thumbnail"
    "author author"
    "intro intro"
    "like comment";
  grid-gap: 0.5rem;
  margin-bottom: 1rem;
  .thumbnail {
    grid-area: thumbnail;
    width: 100%;
    height: 100%;
    border-radius: 11px;
  }
  .author {
    grid-area: author;
    color: #a7a5a8;
    font-size: 12px;
    margin-bottom: 0px;
  }
  .intro {
    grid-area: intro;
    font-size: 18px;
    font-weight: bold;
  }
  .like {
    grid-area: like;
    border-right: 1px solid rgba(204, 210, 227, 0.39);
  }
  .comment {
    grid-area: comment;
  }

  .like,
  .comment {
    padding: 10px;
    display: flex;
    align-content: center;
    justify-content: space-around;
    align-items: center;
    font-weight: bold;
    border-top: 1px solid rgba(204, 210, 227, 0.39);
  }
`;

const SubCategoryDiv = styled.div`
width: 100%;
background-color: #fafafa;
padding: 1rem 15%;
display: flex;
justify-content: space-between;
align-items: center;
align-content: center;
ul {
  height: 1rem;
  display: flex;
  justify-content: flex-start;
  align-content: center;
  list-style: none;
  li {
    margin-right: 1rem;
    font-size: 12px;
    color: rgba(172, 176, 180, 1);
    user-select: none;
    cursor: pointer;
    &.active {
      color: rgba(97, 5, 125, 1);
      font-weight: bold;
    }
  }
}
${mq[1]} {
  padding: 0rem 5% 0rem 5%;
  ul {
    flex-wrap: wrap;
    flex-direction: row;
    height: auto;
    li {
      font-size: 10px;
      margin-top: 0.5rem;
      margin-bottom: 0.5rem;
    }
  }
}
`;

const FNBDiv = styled.div`
  margin-bottom: 20px;
  .submitBtn {
    display: flex;
    justify-content: flex-end;
    button {
      font-size: 15px;
      font-weight: bold;
      background: #935ea5;
      color: #fff;
      padding: 7px 10px;
      border: none;
      border-radius: 10px;
      svg {
        margin-left: 3px;
      }
    }
  }
`;

const LinkCSS = css`
  width: 30%;
  margin-left: 3%;
  margin-bottom: 1rem;
  color: black;
  text-decoration: none;
  &:hover {
    text-decoration: none;
    color: black;
  }
  ${mq[1]} {
    width: auto;
  }
`;

const PagiCSS = styled.div`
  margin: 10px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  .pagination {
    .active {
      font-weight: bold;
    }
    ul {
      li {
        display: inline-block;s
        border-left: 1px solid black;
        padding: 0.5rem;
        text-decoration: none;
        list-style: none;
        p {
          cursor: pointer;
          margin: 0;
        }
        &:first-of-type(1) {
        border: none;
        }
      }
    }
    button {
      background: none;
      border: none;
    }
  }
`;

const UploadBtnDiv = styled.div`
  width: 100%;
  text-align: right;
  margin: 1rem 0;
  button{
    background: #5A278B;
    border: 1px solid #5A278B;
    box-sizing: border-box;
    border-radius: 5px;
    padding: 1rem;
    color: white;
    font-weight: bold;
  }
`;

export {
  PartHeader,
  PartBody,
  PartFilter,
  PartIPLoListDiv,
  PostCard,
  IPLoPostCard,
  SubCategoryDiv,
  FNBDiv,
  PagiCSS,
  LinkCSS,
  MenuList,
  MenuItem,
  UploadBtnDiv
};
