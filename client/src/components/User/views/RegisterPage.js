import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import firebase from "../../../firebase.js";

/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import { DivCSS, BoxDivCSS, Logo, FormDivCSS } from "../css/UserPageElement.js";
import MobileFooter from "../../HeaderAndFooter/Footer/MobileFooter.js";

function RegisterPage() {
  const [Email, setEmail] = useState("");
  const [Name, setName] = useState("");
  const [Password, setPassword] = useState("");
  const [ConfirmPassword, setConfirmPassword] = useState("");
  const [ErrorFormSubmit, setErrorFormSubmit] = useState("");
  const [Loading, setLoading] = useState(false);

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    if (Password !== ConfirmPassword) {
      return alert("비밀번호와 비밀번호 확인은 같아야 합니다.");
    }

    let body = {
      email: Email,
      password: Password,
      name: Name,
    };

    try {
      setLoading(true);
      let createdUser = await firebase
        .auth()
        .createUserWithEmailAndPassword(body.email, body.password);

      await createdUser.user.updateProfile({
        displayName: body.name,
        photoURL: `https://kr.object.ncloudstorage.com/makeit/user/profile.png`,
      });

      await firebase.database().ref("users").child(createdUser.user.uid).set({
        name: createdUser.user.displayName,
        image: createdUser.user.photoURL,
      });
      setLoading(false);
    } catch (error) {
      setErrorFormSubmit(error.message);
      setLoading(false);
      setTimeout(() => {
        setErrorFormSubmit("");
      }, 5000);
    }
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
            {ErrorFormSubmit && <p>{ErrorFormSubmit}</p>}
            <button type="submit" disabled={Loading}>
              회원 가입
            </button>
          </form>
        </div>
      </div>
      <MobileFooter />
    </>
  );
}

export default withRouter(RegisterPage);
