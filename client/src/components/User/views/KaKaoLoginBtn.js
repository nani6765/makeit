import React from "react";
import KakaoLogin from "react-kakao-login";
import { withRouter } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginUser, registerUser } from "../../../_actions/user_action";
import axios from "axios";
import { kakaoClientId } from "../../../hoc/key.js";
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import styled from "@emotion/styled";

function KaKaoLoginBtn(props) {
  const dispatch = useDispatch();

  const onSuccess = (result) => {
    console.log("success", result);
    const email = result.profile.kakao_account.email; //unique

    let body = {
      email: email,
    };

    axios.post("/api/oauth/sns/check", body).then((response) => {
      if (response.data.success) {
        if (response.data.snsCheck) {
          dispatch(loginUser(body, "kakao")).then((response) => {
            if (response.payload.loginSuccess) {
              props.history.push("/");
            } else {
              alert("Error");
            }
          });
        } else {
          body.name = result.profile.kakao_account.profile.nickname;
          body.avatar =
            result.profile.kakao_account.profile.profile_image_url || "";
          body.type = "kakao";
          dispatch(registerUser(body)).then((response) => {
            if (response.payload.success) {
              //body.token = result.tokenId;
              dispatch(loginUser(body, "kakao")).then((response) => {
                if (response.payload.loginSuccess) {
                  props.history.push("/");
                } else {
                  alert("Error");
                }
              });
            } else {
              alert("Failed to sign up");
            }
          });
        }
        //로그인 실패
      } else {
        props.history.push("/");
      }
    });
  };

  const onFailure = (error) => {
    console.log(error);
  };

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
        token={kakaoClientId}
        onSuccess={onSuccess}
        onFail={onFailure}
      ></KaKaoBtn>
    </>
  );
}

export default withRouter(KaKaoLoginBtn);
