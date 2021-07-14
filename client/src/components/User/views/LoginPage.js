import React, { useState } from "react";
import Axios from "axios";
import { useDispatch } from "react-redux";
import { withRouter } from "react-router-dom";
import { loginUser } from "../../../_actions/user_action";
import MobileFooter from "../../HeaderAndFooter/MobileFooter.js";
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import { DivCSS, BoxDivCSS, Logo, FormDivCSS } from "../css/UserPageElement.js";
import GoogleLoginBtn from "./GoogleLoginBtn.js";

function LoginPage(props) {
  const dispatch = useDispatch();
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");

  const onSubmitHandler = (e) => {
    e.preventDefault();
    let body = {
      email: Email,
      password: Password,
    };
    dispatch(loginUser(body, "makeit")).then((response) => {
      if (response.payload.loginSuccess) {
        props.history.push("/");
      } else {
        alert("Error");
      }
    });
  };

  const passwordFind = css`
    width: 100%;
    text-align: right;
    color: #454345;
    font-size: 10px;
  `;

  const GoRegister = css`
    font-size: 12px;
    line-height: 19px;
    text-align: center;
    color: #454345;
    span {
      font-weight: bold;
      text-decoration: underline;
      pointer: cursor;
    }
  `;

  return (
    <>
      <div css={DivCSS}>
        <div css={BoxDivCSS}>
          <div css={Logo}>
            <img src={process.env.PUBLIC_URL + "/Img/logo.png"} alt="" />
            <p>
              영상의 시작,
              <br />
              영상이 쉬워지는 곳
            </p>
          </div>

          <form css={FormDivCSS} onSubmit={onSubmitHandler}>
            <label>이메일</label>
            <input
              type="email"
              value={Email}
              onChange={(e) => setEmail(e.currentTarget.value)}
            />
            <label>비밀번호</label>
            <input
              type="password"
              value={Password}
              onChange={(e) => setPassword(e.currentTarget.value)}
            />
            <br />
            <p css={passwordFind}>비밀번호찾기</p>
            <button type="submit">로그인</button>
          </form>
          <GoogleLoginBtn />
          <div id="naverIdLogin"></div>
          <p css={GoRegister}>
            아직 계정이 없으신가요?{" "}
            <span
              onClick={() => {
                window.location.href = "/register";
              }}
            >
              간편가입하기
            </span>
          </p>
        </div>
      </div>
      <MobileFooter />
    </>
  );
}

export default withRouter(LoginPage);
