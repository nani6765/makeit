import React, { useState, useRef, useEffect } from "react";
import firebase from "../../../../config/firebase";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

import ProgressBar from "react-bootstrap/ProgressBar";
import mime from "mime-types";

import moment from "moment";
import "moment/locale/ko";

function FileUpload(props) {
  const [Percentage, setPercentage] = useState(0);
  const [UploadLoading, setUploadLoading] = useState(false);
  const [OtherInfo, setOtherInfo] = useState("");

  const user = useSelector((state) => state.user);
  let history = useHistory();

  const inputOpenImageRef = useRef();
  const storageRef = firebase.storage().ref();
  let MessageRef = firebase.database().ref("chats");
  let UserRef = firebase.database().ref("users");
  moment.locale("ko");

  useEffect(() => {
    UserRef.child(props.OthersUid).once("value", (DataSnapshot) => {
      setOtherInfo(DataSnapshot.val());
    });
  }, []);

  const CreateAlarm = (ChatRoomId) => {
    let messageForMe = {
      type: "message",
      comment: "파일/이미지를 전송하였습니다.",
      url: history.location.pathname,
      otherName: OtherInfo.name,
      otherImage: OtherInfo.image,
      isCheck: true,
      timestamp: firebase.database.ServerValue.TIMESTAMP,
    };

    let messageForYou = {
      type: "message",
      comment: "파일/이미지를 전송하였습니다.",
      url: history.location.pathname,
      otherName: user.userData.displayName,
      otherImage: user.userData.photoURL,
      isCheck: false,
      timestamp: firebase.database.ServerValue.TIMESTAMP,
    };

    UserRef.child(`${user.userData.uid}/chats/${ChatRoomId}`).set(messageForMe);
    UserRef.child(`${props.OthersUid}/chats/${ChatRoomId}`).set(messageForYou);
  };

  const handleOpenImageRef = () => {
    inputOpenImageRef.current.click();
  };

  const handleImageUpload = (e) => {
    setUploadLoading(true);

    const Date = moment().format("YYYY[년] MM[월] DD[일]");
    const file = e.target.files[0];

    if (!file) return;

    const filePath = `/chats/${props.ChatRoomId}/${moment()}${file.name}`;
    const metadata = { contentType: mime.lookup(file.name) };

    console.log("파일 업로드");
    try {
      console.log("파일 업로드 시작");
      //파일 저장
      let uploadTask = storageRef.child(filePath).put(file, metadata);

      //퍼센티지
      uploadTask.on(
        "state_changed",
        (UploadTaskSnapshot) => {
          console.log("task", UploadTaskSnapshot.bytesTransferred);
          const percentage = Math.round(
            (UploadTaskSnapshot.bytesTransferred /
              UploadTaskSnapshot.totalBytes) *
              100
          );
          setPercentage(percentage);
        },
        (err) => {
          console.log(err);
        },
        () => {
          //파일 메시지 전송
          //스토리지에서 이미지 url
          uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
            let message = {
              timestamp: firebase.database.ServerValue.TIMESTAMP,
              username: user.userData.displayName,
              profile_picture: user.userData.photoURL,
              uid: user.userData.uid,
              src: downloadURL,
              comment: file.name,
            };

            if (file.type.includes("image")) {
              message.type = "image";
            } else {
              message.type = "file";
            }

            MessageRef.child(`${props.ChatRoomId}/${Date}`).push().set(message);
          });
        }
      );
      e.target.value = "";
      CreateAlarm(props.ChatRoomId);
      setUploadLoading(false);
    } catch (error) {
      console.log("error", error);
      alert("error!");
      e.target.value = "";
      setUploadLoading(false);
    }
  };

  return (
    <>
      {!(Percentage === 0 || Percentage === 100) && (
        <ProgressBar
          variant="warning"
          label={`${Percentage}%`}
          now={Percentage}
          id="progress"
        />
      )}

      <button
        className="file"
        onClick={handleOpenImageRef}
        disabled={UploadLoading}
      >
        <i className="bi bi-upload"></i>
      </button>
      <input
        accept="image/*, .doc, .docx, .hwp, .pdf, .ppt, .pptx, .txt"
        type="file"
        style={{ display: "none" }}
        ref={inputOpenImageRef}
        id="fileInput"
        onChange={(e) => handleImageUpload(e)}
      />
    </>
  );
}

export default FileUpload;
