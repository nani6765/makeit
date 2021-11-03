import React, { useEffect } from "react";
import { withRouter, Link, useLocation, useHistory } from "react-router-dom";

/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import {
  DivCSS,
  BoxDivCSS,
  Logo,
  CompeleteDiv,
} from "../css/UserPageElement.js";

function RegisterComplete(props) {
  let history = useHistory();
  let location = useLocation();

  useEffect(() => {
    console.log(location);

    if (!(location.state != undefined && location.state.flag === undefined)) {
      history.push("/");
    }
  }, []);

  return (
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
        <CompeleteDiv>
          <h1>회원가입이 완료되었습니다!</h1>
          <Link to="/">
            <button>첫 페이지로 돌아가기</button>
          </Link>
        </CompeleteDiv>
      </div>
    </div>
  );
}

export default withRouter(RegisterComplete);
