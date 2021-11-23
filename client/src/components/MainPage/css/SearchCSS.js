/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import styled from "@emotion/styled";

const breakpoints = [1200, 576];
const mq = breakpoints.map((bp) => `@media (max-width: ${bp}px)`);

const SearchBody = styled.div`
  width: 70%;
  margin: 0 auto;

  .result {
    margin-bottom: 1rem;
    a {
      color: black;
      &:hover {
        text-decoration: none;
      }
    }
    .resultHeader {
      display: flex;
      justify-content: space-between;
      color: #565656;
      padding: 1rem 0;
      border-bottom: 2px solid #565656;
      p {
        display: inline-block;
        font-weight: bold;
        span {
          color: #5A298B;
        }
      }
      button {
        background: none;
        border: none;
      }
    }
  }
  ${mq[0]}{
    width: 80%;
  }
  ${mq[1]}{
    width: 90%;
  }
`;

const SearchInput = styled.div`
  width: 20vw;
  height: 44px;
 
  display: flex;
  align-content: center;
  justify-content: center;
  align-items: center;

  margin: 0 auto;
  margin-top: 1rem;
  margin-bottom: 1rem;

  input {
    width: 85%;
    margin-right: 0px !important;
    height: 100%;
    padding: 10px;
    border: 2px solid #5A298B;
    border-radius: 5px 0px 0px 5px;
    &:active, &:focus{
      outline: none;
    }
  }

  button {
    width: 15%;
    margin-left: 0px !important;
    height: 100%;
    background-color: #5A298B;
    color: white;
    border: none;
    border-radius: 0px 5px 5px 0px;
    
    display: flex;
    align-content: center;
    justify-content: center;
    align-items: center;
    img{
      width: 60%;
      height: 60%;
    }
  }
  ${mq[0]}{
    width: 40vw;
  }
  ${mq[1]}{
    width: 60vw;
  }
`;

const PostCard = styled.div`
  display: grid;
  grid-template-rows: 30px 30px;
  grid-template-columns: 6fr 30px 0.6fr 1.2fr 1.2fr;
  grid-template-areas:
  "title . . . ."
  "content avatar auther realTime category";

  width: 100%;
  height: auto;

  margin-top: 1rem;
  padding: 1rem;
  border: 1px solid #EEEEEE;
  box-sizing: border-box;
  border-radius: 5px;

  .title {
    grid-area: title;
    font-weight: bold;
    height: 20px;
    line-height: 20px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    line-break: anywhere;
    max-width: 60%;
  }
  .content {
    grid-area: content;
    width: 90%;
    line-height: 30px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    line-break: anywhere;
  }
  .sb-avatar {
    grid-area: avatar;
  }
  .auther {
    grid-area: auther;
    margin: 5px 0;
    margin-left: 5px;
    line-height: 20px;
    height: 20px;
    color: #9D9EA9;
    border-right: 1px solid #9A9A9A;
  }
  .realTime {
    grid-area: realTime;
    text-align: center;
    line-height: 20px;
    height: 20px;
    margin: 5px 0;
    color: #9D9EA9;
    border-right: 1px solid #9A9A9A;
  }
  .category {
    grid-area: category;
    line-height: 30px;
    text-align: center;
    color: #9D9EA9;
  }
`;

export { SearchBody, SearchInput, PostCard };
