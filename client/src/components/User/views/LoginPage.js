import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import MobileFooter from "../../HeaderAndFooter/MobileFooter.js";
import { DivCSS, BoxDivCSS, Logo, FormDivCSS } from "../css/UserPageElement.js";
import GoogleLoginBtn from "./GoogleLoginBtn.js";
import KaKaoLoginBtn from "./KaKaoLoginBtn.js";
import firebase from "../../../firebase.js";

/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";

function LoginPage(props) {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [ErrorLogin, setErrorLogin] = useState("");
  const [Loading, setLoading] = useState(false);

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    let body = {
      email: Email,
      password: Password,
    };
    try {
      setLoading(true);
      await firebase
        .auth()
        .signInWithEmailAndPassword(body.email, body.password);
      setLoading(false);
    } catch (error) {
      setErrorLogin(error.message);
      setLoading(false);
    }
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
            {ErrorLogin && <p>{ErrorLogin}</p>}
            <button type="submit" disabled={Loading}>
              로그인
            </button>
          </form>
          <GoogleLoginBtn />
          <KaKaoLoginBtn />
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
