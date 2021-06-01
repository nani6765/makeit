import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { registerUser } from "../../_actions/user_action";
import Axios from "axios";
import { withRouter } from "react-router-dom";
import { DivCSS, BoxDivCSS, FormDivCSS } from "../css/UserPageElement.js";

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
    console.log("body", body);
    dispatch(registerUser(body)).then((response) => {
      console.log("response", response);
      if (response.payload.success) {
        props.history.push("/login");
      } else {
        alert("Failed to sign up");
      }
    });
  };

  return (
    <>
      <div css={DivCSS}>
        <div css={BoxDivCSS}>
          <form css={FormDivCSS} onSubmit={onSubmitHandler}>
            <label>Email</label>
            <input
              type="email"
              value={Email}
              onChange={(e) => setEmail(e.currentTarget.value)}
            />
            <label>name</label>
            <input
              type="text"
              value={Name}
              onChange={(e) => setName(e.currentTarget.value)}
            />
            <label>Password</label>
            <input
              type="password"
              value={Password}
              onChange={(e) => setPassword(e.currentTarget.value)}
            />
            <label>Confirm Password</label>
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
    </>
  );
}

export default withRouter(RegisterPage);
