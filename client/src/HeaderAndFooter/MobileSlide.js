import React, { useState, useEffect } from "react";
import { MobileSlideDivContent } from "./css/HeaderElement.js";
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import styled from "@emotion/styled";

function MobileSlide() {
  const Search = styled.div`
    display: flex;
    form {
      width: 100%;
      height: 40%;
      input {
        height: 100%;
        width: 95%;
        padding: 5px 20px 5px 20px;
        border-radius: 20px;
        border: 2.5px solid #816afe;
        background-image: url("/Img/search.png");
        background-repeat: no-repeat;
        background-position: calc(100% - 5%) calc(100% - 50%);
      }
      input:focus {
        outline: none;
      }
    }
  `;
  return (
    <MobileSlideDivContent>
      <Search>
        <form action="/search" method="GET">
          <input type="text" placeholder="Search..." />
        </form>
      </Search>
    </MobileSlideDivContent>
  );
}

export default MobileSlide;
