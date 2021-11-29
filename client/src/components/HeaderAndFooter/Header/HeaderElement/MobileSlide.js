import React from "react";
import { MobileSlideDivContent } from "../../css/HeaderElement.js";
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import styled from "@emotion/styled";

import { ReactComponent as SearchIcon } from "../../css/search.svg";

function MobileSlide() {
  const Search = styled.div`
    display: flex;
    form {
      width: 100%;
      height: 40%;
      padding: 5px 0px 5px 20px;
      border-radius: 20px;
      border: 2.5px solid #816afe;
      input {
        height: 100%;
        width: 85%;
        border: none;
      }
      input:focus {
        outline: none;
      }
      button {
        background: none;
        border: none;
      }
    }
  `;
  return (
    <MobileSlideDivContent>
      <Search>
        <form action="/search" method="GET">
          <input type="text" placeholder="Search" name="term" />
          <button type="submit">
            <SearchIcon />
          </button>
        </form>
      </Search>
    </MobileSlideDivContent>
  );
}

export default MobileSlide;
