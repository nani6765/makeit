import React from "react";

function MPay() {
  return (
    <div
      style={{
        display: "flex",
        alignContent: "center",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <img src="/Img/PayTempImg.png" alt="" />
      <h1 style={{ textAlign: "center", fontSize: "32px", fontWeight: "bold" }}>
        준비중입니다.
        <br />
        <br />
        조금만 기다려주세요!
      </h1>
    </div>
  );
}

export default MPay;
