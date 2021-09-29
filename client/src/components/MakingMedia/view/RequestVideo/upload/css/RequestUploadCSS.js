/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import styled from "@emotion/styled";

const breakpoints = [1200, 576];
const mq = breakpoints.map((bp) => `@media (max-width: ${bp}px)`);

const UploadHead = styled.div`
  width: 100%;
  height: auto;
  background: #faf6f6;
  div {
    width: 70%;
    margin: 0 auto;
    h1 {
      font-weight: bold;
      font-size: 32px;
      line-height: 44px;
      color: #702c8a;
      span {
        margin-right: 1.5rem;
        cursor: pointer;
      }
    }
    ${mq[1]} {
      width: 90%;
    }
  }
`;

const UploadForm = styled.div`
width: 70%;
margin: 0 auto;
margin-bottom: 10%;
${mq[1]} {
  width: 90%;
}
.path {
  color: #A7A5A8;
}
.OneLineIntroduce {
  width: 100%;
  background: #ffffff;
  box-shadow: 0px 2px 10px rgba(178, 3, 108, 0.03),
    0px 9px 30px rgba(163, 1, 79, 0.05);
  border-radius: 15px;
  border: none;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  outline: none;
  margin-top: 20px;
  margin-bottom: 20px;
  padding: 20px;
  &:focus {
    outline: none;
  }
  &::placeholder {
    text-align: center;
  }
}
.BtnDiv {
    display: flex;
    justify-content: flex-end;
    button {
        border-radius: 8px;
        width: 10%;
        padding: 3px;
    }
    .cancel {
        color: #935EA5;
        background: #fff;
        border: 1px solid #DEDEDE;
    }
    .submit {
        color: #fff;
        background: #935EA5;
        margin-left: 10px;
        border: none;
    }
}
`;

const UploadContent = styled.div`
  width: 100%;
  margin-bottom: 10px;
  background: #fff;
  border-radius: 15px;
  box-shadow: 0px 2px 10px rgba(178, 3, 108, 0.03), 0px 9px 30px rgba(163, 1, 79, 0.05);
  .filter {
    display: grid;
    grid-template-columns: 1.5fr 2.5fr 1fr 5fr;
    grid-template-rows: 1fr 1fr 1fr;
    grid-template-areas:
    "categorylabel category pricelabel price"
    "deadlinelabel deadline filmTypelabel filmType"
    "Uniquenesslabel Uniqueness Uniqueness Uniqueness";
    background: #EDE7F6;
    border-radius: 15px 15px 0px 0px;
    .categorylabel {
        padding: 20px 0px;
        width: 100%;
        text-align: center;
        font-weight: bold;
        font-size: 100%;
        margin: 0px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .category {
        grid-area: category;
        padding: 20px 10px 20px 0px;
        line-height: 100%;
        display: flex;
        align-items: center;
        .categoryList {
            width: 100%;
            span {
                display: none;
            }
            path {
              color: #702C8A;
            }
        }
    }
    .pricelabel {
        grid-area: pricelabel;
        padding: 20px 0px;
        width: 100%;
        text-align: center;
        font-weight: bold;
        font-size: 100%;
        margin: 0px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .price {
        grid-area: price;
        padding: 20px 0px;
        input {
            display: inline-block;
            margin-left: 5px;
            height: 100%;
            width: 30%;
            border: 1px solid #D8D8D8;
            border-radius: 8px;
        }
        input[type="number"]::-webkit-outer-spin-button,
        input[type="number"]::-webkit-inner-spin-button {
            -webkit-appearance: none;
            margin: 0;
        }
        p {
            margin-left: 10px;
            display: inline-block;
        }
    }
    .deadlinelabel {
        grid-area: deadlinelabel;
        padding: 20px 0px;
        width: 100%;
        text-align: center;
        font-weight: bold;
        font-size: 100%;
        margin: 0px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .deadline {
        grid-area: deadline;
        padding: 20px 10px 20px 0px;
        display: flex;
        align-items: center;
        .react-datepicker-wrapper {
            width: 100%;
            height: 100%;
            .react-datepicker__input-container {
                width: 100%;
                height: 100%;
                .date {
                    width: 100%;
                    height: 100%;
                    border: 1px solid #D8D8D8;
                    border-radius: 8px;
                    text-align: center;
                }
            }
        }
    }
    .filmTypelabel {
        grid-area: filmTypelabel;
        padding: 20px 0px;
        width: 100%;
        text-align: center;
        font-weight: bold;
        font-size: 100%;
        margin: 0px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .filmType {
        grid-area: filmType;
        padding: 20px 0px;
        display: flex;
        align-items: center;
        justify-content: center;
        .setFilmType {
            display: inline-block;
            width: 100%;
            label {
                margin-left: 10px;
                width: 30%;
                input {
                    margin-right: 5px;
                    border-radius: 0px;
                }
            }
        }
    }
    .Uniquenesslabel {
        grid-area: Uniquenesslabel;
        padding: 20px 0px;
        width: 100%;
        text-align: center;
        font-weight: bold;
        font-size: 100%;
        margin: 0px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .Uniqueness {
        grid-area: Uniqueness;
        padding: 20px 40px 20px 0px;
        display: flex;
        align-items: center;
        input {
            width: 100%;
            height: 100%;
            border-radius: 8px;
            border: 1px solid #D8D8D8;
        }
    }
  }
  .body {
    width: 100%;
    border-radius: 0px 0px 15px 15px;
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    align-content: center;
    flex-direction: column;
    textarea {
      min-height: 350px;
      border: none;
      width: 100%;
      resize: none;
      &:focus {
        outline: none;
      }
      &::placeholder {
        word-break: keep-all;
        font-weight: 300;
        font-size: 12px;
        color: #9f9f9f;
        text-align: center;
        padding-top: 100px;
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
      ${mq[0]} {
        min-height: 400px;
        &::placeholder {
          padding-top: 100px;
        }
      }
      ${mq[1]} {
        min-height: 300px;
        &::placeholder {
          padding-top: 15px;
        }
      }
    }
    div {
      span {
        font-weight: bold;
        border-right: 1px solid black;
        padding-right: 1rem;
        margin-right: 1rem;
      }
      margin-top: 1rem;
      input {
        padding: 5px;
        border-radius: 16px;
        max-width: 100px;
        border: 1px solid rgba(117, 117, 117, 1);
        margin-bottom: 5px;
        &:focus,
        &:active {
          outline: none;
        }
      }
      p {
        display: inline-block;
        background: #f7efff;
        border-radius: 16px;
        padding: 5px 10px 5px 10px;
        margin-right: 1rem;
        color: rgba(117, 117, 117, 1);
        margin-bottom: 5px;
      }
    }
  }
`;


export { UploadHead, UploadForm, UploadContent };