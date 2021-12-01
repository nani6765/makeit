const nodemailer = require("nodemailer");
const config = require("../config/key.js");

const title = "MAKE IT 이메일 인증메일입니다.";
const txt = (name, Key) => {
  return `
        <div style="width:100%; background-color:white; padding: 1rem 0px 1rem 0px;">
        <div style="width: 100%; height: auto;  max-width:640px; margin:0 auto;  background-color:white;">
        <div style="width: 100%; border-bottom: 2px solid #702c8a; display: flex; justify-content: center;">
          <img src="https://kr.object.ncloudstorage.com/makeit/admin/MAKEITLogo.png" alt="MainLogo" style="width: 50%; height: auto;"/>
        </div>
        <div style="padding-top: 3rem; width: 90%; margin: 0 auto;">
          <div style="text-align: left;">
            <p style="margin: 0px;">영상이 쉬워지는 지름길, MAKE IT</p>
            <h1 style="margin: 0.5rem 0px 0.5rem 0px;">이메일 주소 인증</h1>
          </div>
          <div style="border-top: 1px solid #000000; border-bottom: 1px solid #000000">
            <div style="margin-top: 3rem; margin-bottom: 3rem">
              <p style="word-break: keep-all;">
                안녕하세요, <span style="font-weight:bold">${name}님 !</span>
              </p>
              <p style="word-break: keep-all;">MAKE IT 가입을 위한 인증번호입니다.</p>
            </div>
            <p style="word-break: keep-all;">아래 인증 번호를 확인하여 이메일 주소 인증을 완료해주세요.</p>
            <div style="width: auto;height: auto;padding: 20px 10px 20px 10px;border: 1.5px solid #a95ddd;border-radius: 10px;display: grid;grid-template-columns: 1fr 3fr;grid-template-rows: auto; grid-template-areas:'left right';">
              <div style="grid-area:left; text-align: center; border-right: 1px solid black; line-height: 2rem;">
                <h3 style="margin: 0px;">인증번호</h3>
              </div>
              <div style="grid-area:right; text-align: center; line-height: 2rem; font-weight: bold;">
                <h3 style="margin: 0px;">${Key}</h3>
              </div>
            </div>
            <div style="margin-top:3rem; margin-bottom:3rem; width:auto; height:auto; padding: 30px 20px 30px 20px; background: #ececec; text-align: left;">
              <span style="color:#8e8e8e word-break: keep-all;">
                본 메일은 가입하신 이메일 주소로 발송되었으며, 발신 전용이므로
                회신이 되지 않습니다. 문의사항은 홈페이지 고객센터를
                이용해주시기 바랍니다.
              </span>
            </div>
          </div>
          <div style="margin-top: 1rem; margin-bottom: 1rem; display: grid; grid-template-columns: 1fr 4fr; grid-template-rows: auto; grid-template-areas:'fleft fright'; grid-template-columns: 2fr 8fr;grid-gap: 1rem;"">
            <div style="grid-area: fleft; display: flex; align-content: center; justify-content: center; height: auto;" >
              <img src="https://kr.object.ncloudstorage.com/makeit/admin/MFLogo.png" style="width:100%; height:100%;"/>
            </div>
            <div style="grid-area: fright;">
              <span style="color: #8e8e8e; word-break: keep-all;">
                (주)미디어프렌드 | 대표자 : 이형진 | 개인정보책임관리자 : 이형진
                <br />
                주소 : 서울특별시 광진구 천호대로 536, 6층(군자동,서림빌딩)
                <br />
                사업자 등록번호 : 235-88-01980
                <br />
                문의 : cs@mediafriend.co.kr
                <br />
              </span>
            </div>
          </div>
        </div>
      </div>
        </div>
      `;
};

async function sendEmail(toEmail, key, name) {
  let transporter = nodemailer.createTransport({
    host: config.smtpServerURL, //SMTP 서버 주소 port: 587,
    port: config.port,
    secure: true,
    auth: {
      user: config.authUser, //메일서버 계정
      pass: config.authPass, //메일서버 비번
    },
  });

  let mailOptions = {
    from: config.authUser, //보내는 사람 주소
    to: toEmail, //받는 사람 주소
    subject: title, //제목
    html: txt(name, key), //본문
  };

  //전송 시작!
  await transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      //에러
      console.log(error);
      return false;
    } else {
      transporter.close();
      return true;
    }
  });
}
/*
async function sendEmail(toEmail, key, name) {
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com", //SMTP 서버 주소 port: 587,
    port: "465",
    secure: true,
    auth: {
      user: "mfmakeit2021@gmail.com", //메일서버 계정
      pass: "mfs0601!", //메일서버 비번
    },
  });

  let mailOptions = {
    from: "mfmakeit2021@gmail.com", //보내는 사람 주소
    to: toEmail, //받는 사람 주소
    subject: title, //제목
    html: txt(name, key), //본문
  };

  //전송 시작!
  await transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      //에러
      console.log(error);
      return false;
    } else {
      transporter.close();
      return true;
    }
  });
}
*/

module.exports = sendEmail;
