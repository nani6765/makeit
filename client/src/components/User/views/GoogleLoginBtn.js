// GoogleButton.js
import React from "react";
import GoogleLogin from "react-google-login";
import { withRouter } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginUser, registerUser } from "../../../_actions/user_action";
import { googleClientId } from '../../../hoc/key.js';
import axios from 'axios';

function GoogleLoginBtn(props) {
  const dispatch = useDispatch();

  const onSuccess = (result) => {
    console.log("success", result);

    const email = result.profileObj.email; //unique

    let body = {
      email : email,
    };

    axios.post("/api/oauth/google/check", body).then((response) => {
        if (response.data.success) {
          // 구글 로그인
          if (response.data.googleCheck) {
            //body.token = result.tokenId;
            dispatch(loginUser(body, "google")).then((response) => {
              if (response.payload.loginSuccess) {
                props.history.push("/");
              } else {
                alert("Error");
              }
            });
          }
          // 구글 회원가입
          else {
            body.name = result.profileObj.name;
            body.avatar = result.profileObj.imageUrl;
            
            dispatch(registerUser(body)).then((response) => {
              if (response.payload.success) {
               //body.token = result.tokenId;
                dispatch(loginUser(body, "google")).then((response) => {
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

  return (
    <div>
      <GoogleLogin
        clientId={googleClientId}
        responseType={"id_token"}
        onSuccess={onSuccess}
        onFailure={onFailure}
      />
    </div>
  );
}

export default withRouter(GoogleLoginBtn);