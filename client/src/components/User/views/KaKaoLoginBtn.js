import React from "react";
import KakaoLogin from "react-kakao-login";
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import styled from "@emotion/styled";

function KaKaoLoginBtn() {
  const KaKaoBtn = styled(KakaoLogin)`
    padding: 0;
    height: 45px;
    line-height: 44px;
    color: #783c00;
    background-color: #ffeb00;
    border: 1px solid transparent;
    border-radius: 3px;
    font-size: 14px;
    font-weight: bold;
    text-align: center;
    cursor: pointer;
    margin-bottom: 30px;
    &:hover {
      box-shadow: 0 0px 15px 0 rgba(0, 0, 0, 0.2);
    }
  `;

  return (
    <>
      <KaKaoBtn
        token={"c0af8fc7c4db663b009ab8265f7a4f85"}
        onSuccess={(result) => console.log("success", result)}
        onFail={(err) => console.log("fail", err)}
      ></KaKaoBtn>
    </>
  );
}

export default KaKaoLoginBtn;
