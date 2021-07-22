import React, { useState, useRef } from "react";
import { firebase } from "../../../../firebase.js";
import ProgressBar from "react-bootstrap/ProgressBar";
import mime from "mime-types";

import moment from "moment";
import "moment/locale/ko";

function FileUpload(props) {
  const [Percentage, setPercentage] = useState(0);

  const inputOpenImageRef = useRef();
  const storageRef = firebase.storage().ref();
  let MessageRef = firebase.database().ref("chats");
  moment.locale("ko");

  moment.locale("ko");

  const handleOpenImageRef = () => {
    inputOpenImageRef.current.click();
  };

  const handleImageUpload = (e) => {
    const Date = moment().format("YYYY[년] MM[월] DD[일]");
    const file = e.target.files[0];

    if (!file) return;

    const Date = moment().format("YYYY[년] MM[월] DD[일]");
    const filePath = `/chats/${props.ChatRoomId}/${Date}/${file.name}`;
    const metadata = { contentType: mime.lookup(file.name) };

<<<<<<< HEAD:client/src/components/MyPage/Chat/Content/ImageUpload.js
    console.log("파일", file);
=======
    console.log("파일 업로드");

>>>>>>> 4cc7f7a1acb7d527d92fb8c6f2866a2c1f6b8f99:client/src/components/MyPage/Chat/Content/FileUpload.js
    try {
      console.log("파일 업로드 시작");
      //파일 저장
      let uploadTask = storageRef.child(filePath).put(file, metadata);

      //퍼센티지
      uploadTask.on(
        "state_changed",
        UploadTaskSnapshot => {
          console.log("task", UploadTaskSnapshot.bytesTransferred);
          const percentage = Math.round(
                        (UploadTaskSnapshot.bytesTransferred / UploadTaskSnapshot.totalBytes) * 100
                    )
          setPercentage(percentage);
        },
        (err) => {
          console.log(err);
        },
        () => {
          //파일을 메시지로 전송
          //스토리지에서 이미지 url 가져오기
          uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
            let message = {
              timestamp: firebase.database.ServerValue.TIMESTAMP,
              username: props.user.userData.displayName,
              profile_picture: props.user.userData.photoURL,
              uid: props.user.userData.uid,
              src: downloadURL,
<<<<<<< HEAD
              comment: file.name,
=======
>>>>>>> kimdoyoen-develop
            };

            if (file.type.includes("image")) {
              message.type = "image";
            } else {
              message.type = "file";
            }

<<<<<<< HEAD
            MessageRef.child(`${props.ChatRoomId}/${Date}`).push().set(message);
=======
            MessageRef.child(props.ChatRoomId).push().set(message);
>>>>>>> kimdoyoen-develop
          });
        }
      );
    } catch (error) {
      alert("error!");
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

      <button className="file" onClick={handleOpenImageRef}>
        <i className="bi bi-upload"></i>
      </button>
      <input
<<<<<<< HEAD:client/src/components/MyPage/Chat/Content/ImageUpload.js
        accept="image/*, .doc, .docx, .hwp, .pdf, .txt, .zip"
        type="file"
        style={{ display: "none" }}
        ref={inputOpenImageRef}
        onChange={handleImageUpload}
        accept="image/*, .doc, .docx, .hwp, .pdf, .txt, .ppt"
=======
        accept = 'image/*, .doc, .docx, .hwp, .pdf, .ppt, .pptx, .txt'
        type="file"
        style={{ display: "none" }}
        ref={inputOpenImageRef}
        onChange={(e) => {
          handleImageUpload(e);
          console.log("file", e);
        }}
>>>>>>> 4cc7f7a1acb7d527d92fb8c6f2866a2c1f6b8f99:client/src/components/MyPage/Chat/Content/FileUpload.js
      />
    </>
  );
}

export default FileUpload;
