import React, { useState } from "react";
import Axios from "axios";
import { useDispatch } from "react-redux";
import { withRouter } from "react-router-dom";
import { loginUser } from "../../_actions/user_action";

/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import { DivCSS, BoxDivCSS, FormDivCSS } from "../css/UserPageElement.js";

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
    dispatch(loginUser(body)).then((response) => {
      if (response.payload.loginSuccess) {
        props.history.push("/");
      } else {
        alert("Error");
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
            <label>Password</label>
            <input
              type="password"
              value={Password}
              onChange={(e) => setPassword(e.currentTarget.value)}
            />
            <br />
            <button type="submit">Login</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default withRouter(LoginPage);
