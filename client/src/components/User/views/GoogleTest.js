// GoogleButton.js
import React from "react";
import GoogleLogin from "react-google-login";

const clientId =
  "398748469422-09qrq11ip627468edpholpd3sofe4df3.apps.googleusercontent.com";

export default function GoogleButton({ onSocial }) {
  const onSuccess = (response) => {
    console.log("success", response);

    //서버랑 통신해서
    //api/user/googleCheck >> response.check true or false
    //이미 로그인한 기록이 있는 유저라면 로그인
    //최초 로그인한 유저라면 회원가입 + 로그인
    //api body email만받아서 로그인 시켜주는데 토큰은 google에서 제공해주는걸 쓰는걸로
    const name = response.profileObj.name;
    const email = response.profileObj.email; //unique
    const avatar = response.profileObj.imageUrl;
    const token = response.profileObj.tokenId;
  };

  const onFailure = (error) => {
    console.log(error);
  };

  return (
    <div>
      <GoogleLogin
        clientId={clientId}
        responseType={"id_token"}
        onSuccess={onSuccess}
        onFailure={onFailure}
      />
    </div>
  );
}
