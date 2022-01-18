import styled from "@emotion/styled";

const breakpoints = [1200, 576];
const mq = breakpoints.map((bp) => `@media (max-width: ${bp}px)`);

const MakingDiv = styled.div`
  width: 70%;
  margin: 0 auto;
  padding-top: 10vh;
  padding-bottom: 10vh;
  .path {
    margin-top: 30px;
    color: #a7a5a8;
    p {
      float: left;
    }
    .editBtn {
      float: right;
      background: #faf5f5;
      border: 1px solid #d4d4d4;
      box-sizing: border-box;
      border-radius: 5px;
    }
  }
  ${mq[1]} {
    width: 90%;
  }
`;

const MenuList = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: center;
  list-style: none;
`;

const MenuItem = styled.li`
  background: #ffffff;
  border: 1px solid #d5d5d5;
  box-sizing: border-box;
  border-radius: 22px;
  color: #702c8a;
  font-weight: bold;
  font-size: 18px;
  padding: 10px 20px 10px 20px;
  cursor: pointer;
  &.active {
    background: #faf5f5;
  }
`;

const ProducerListDiv = styled.div`
  width: 1160px;
  height: auto;
  display: flex;
  flex-direction: column;
  .FNB {
    display: flex;
    flex-direction: column;
    align-items: center;

    margin-top: 50px;
    .pagination {
      height: 20px;
      display: flex;
      button {
        display: inline-block;
        background: none;
        color: black;
        font-weight: normal;
        border: none;
      }
      li {
        display: inline-block;
        padding: 0px 6px;
        border-right: 1.5px solid black;
        p {
          cursor: pointer;
          margin: 0;
        }
      }
      li.active {
        font-weight: bold;
        color: #5a278b;
      }
      li:last-child {
        border: none;
      }
    }
  }
  ${mq[0]} {
    width: 100%;
  }
`;

const ProducerListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  position: relative;
  a {
    color: black;
    text-decoration: none;
    &hover: text-decoration: none;
  }
  .producercard{
    width: 269px;
    height: auto;
    margin-right: 20px;
    margin-top: 20px;
    position: relative;
    &:nth-of-type(4n) {
      margin-right: 0;
    }
    &:nth-child(n):nth-child(-n+4) {
      margin-top: 0;
    }
    ${mq[0]} {
      width: 50%;
      padding: 0.5rem;
      margin: 0;
    }
    ${mq[1]} {
      width: 100%;
      padding: 0.5rem;
      margin: 0;
    }
    .card {
      border: none;
      display: grid;
      height: 100%;
      grid-template-rows: auto auto auto auto;
      grid-template-columns: auto;
      grid-template-areas:
      "thumbnail"
      "title" 
      "info"
      "price";
      position: relative;
      p {
        height: auto;
        align-items: center;
        font-weight: 600;
        font-size: 18px;
      }
      .thumbnail {
        grid-area: thumbnail;
        display: block;
        position: relative;
        width: 100%;
        padding-top: 56.25%;
        img{
          width: 100%;
          height: 100%;
          border-radius: 10px;
          position: absolute;
          top: 0;
          left: 0;
        }
      }
      .title {
        grid-area: title;
        margin-top: 12px;
        padding: 0 12px;
        word-break: keep-all;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
      }
      .info {
        grid-area: info;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin-top: 12px;
        padding: 0 12px;
        .producerInfo {
          .profile {
            display: inline-block;
            width: 20px;
            height: 20px;
          }
          .name {
            font-size: 15px;
            color: #9D9EA9;
            line-height: 20px;
            margin-left: 5px;
          }
        }
        .evaluation {
          font-size: 12px;
          padding: 0;
          line-height: 20px;
          i {
            color: #ffe459;
            margin-right: 5px;
          }
          span {
            margin-right: 1rem;
          }
        }
      }
      .price {
        grid-area: price;
        margin: 12px 0;
        padding: 0 12px;
        text-align: right;
      }
    }    
  }
}
`;

export {
  MakingDiv,
  MenuList,
  MenuItem,
  ProducerListDiv,
  ProducerListContainer,
};
