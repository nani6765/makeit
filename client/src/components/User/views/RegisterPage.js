import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { registerUser } from "../../../_actions/user_action";
import Axios from "axios";
import { withRouter } from "react-router-dom";
import MobileFooter from "../../HeaderAndFooter/MobileFooter.js";
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import { DivCSS, BoxDivCSS, Logo, FormDivCSS } from "../css/UserPageElement.js";
import axios from "axios";

function RegisterPage(props) {
  const dispatch = useDispatch();
  const [Email, setEmail] = useState("");
  const [Name, setName] = useState("");
  const [Password, setPassword] = useState("");
  const [ConfirmPassword, setConfirmPassword] = useState("");

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (Password !== ConfirmPassword) {
      return alert("비밀번호와 비밀번호 확인은 같아야 합니다.");
    }

    let body = {
      email: Email,
      password: Password,
      name: Name,
    };

    axios.post("/api/oauth/sns/check", body).then((response) => {
      if(response.data.success) {
        //이미 계정이 있음
        if(response.data.snsCheck) {
          alert("이미 존재하는 이메일입니다.");
        } else { //계정 없음 -> 디비에 저장
          dispatch(registerUser(body)).then((response) => {
            console.log("response", response);
            if (response.payload.success) {
              props.history.push("/login");
            } else {
              alert("Failed to sign up");
            }
          });
        }
      } else {
        alert("다시 시도하세요.");
      }
    });
  };

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
            <label>이름</label>
            <input
              type="text"
              value={Name}
              onChange={(e) => setName(e.currentTarget.value)}
            />
            <label>비밀번호</label>
            <input
              type="password"
              value={Password}
              onChange={(e) => setPassword(e.currentTarget.value)}
            />
            <label>비밀번호확인</label>
            <input
              type="password"
              value={ConfirmPassword}
              onChange={(e) => setConfirmPassword(e.currentTarget.value)}
            />
            <br />
            <button type="submit">회원 가입</button>
          </form>
        </div>
      </div>
      <MobileFooter />
    </>
  );
}

export default withRouter(RegisterPage);
