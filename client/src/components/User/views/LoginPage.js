import React, { useState } from "react";
import { Link, withRouter, useHistory } from "react-router-dom";
import MobileFooter from "../../HeaderAndFooter/Footer/MobileFooter.js";
import { DivCSS, BoxDivCSS, Logo, FormDivCSS, passwordFind } from "../css/UserPageElement.js";
import firebase from "../../../config/firebase.js";
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
const breakpoints = [1200, 576];
const mq = breakpoints.map((bp) => `@media (max-width: ${bp}px)`);

function LoginPage(props) {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [ErrorLogin, setErrorLogin] = useState("");
  const [Loading, setLoading] = useState(false);
  let history = useHistory();

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
      history.push("/");
    } catch (error) {
      console.log(error);
      if(error.code === 'auth/user-not-found') {
        setErrorLogin("존재하지 않는 이메일입니다.");
      } else if (error.code === 'auth/wrong-password') {
        setErrorLogin("비밀번호가 일치하지 않습니다.");
      } else {
        setErrorLogin("로그인에 실패하였습니다. 다시 시도해주십시오.");
      }

      setLoading(false);
      setTimeout(() => {
        setErrorLogin("");
      }, 5000);
    }
  };

  const GoRegister = css`
    width: 40%;
    text-align: center;
    button {
      width: 100%;
      border: 1px solid #5A278B;
      box-sizing: border-box;
      border-radius: 5px;
      padding: 15px 10px;
      background: #fff;
      color: #5A278B;
      font-weight: bold;
    }
    ${mq[1]} {
      width: 70%;
    }
  `;

  return (
    <>
      <div css={DivCSS}>
        <div css={BoxDivCSS}>
          <div css={Logo}>
            <p>로그인</p>
          </div>

          <form css={FormDivCSS} onSubmit={onSubmitHandler}>
            <input
              type="email"
              placeholder="이메일을 입력해 주세요"
              value={Email}
              onChange={(e) => setEmail(e.currentTarget.value)}
            />
            <input
              type="password"
              placeholder="비밀번호를 입력해 주세요"
              value={Password}
              onChange={(e) => setPassword(e.currentTarget.value)}
            />
            <br />
            <p css={passwordFind}>
              <span>이메일 찾기</span>
              <span>비밀번호 찾기</span>
            </p>
            {ErrorLogin && <p style={{marginTop:"1rem"}}>{ErrorLogin}</p>}
            <button type="submit" disabled={Loading}>
              로그인
            </button>
          </form>

          <div id="naverIdLogin"></div>
          <Link to="/register" css={GoRegister}>
            <button>간편가입하기</button>
          </Link>
        </div>
      </div>
      <MobileFooter />
    </>
  );
}

export default withRouter(LoginPage);
