import React, { useState, useRef } from 'react'
import { firebase } from "../../../firebase.js";
import ProgressBar from 'react-bootstrap/ProgressBar';
import mime from 'mime-types';

function ImageUpload(props) {
    const [Percentage, setPercentage] = useState(0);
    
    const inputOpenImageRef = useRef();
    const storageRef = firebase.storage().ref();
    let MessageRef = firebase.database().ref("chats");


    
  const handleOpenImageRef = () => {
    inputOpenImageRef.current.click();
  }

  const handleImageUpload = (e) => {
    const file = e.target.files[0];

    if(!file) return;

    const filePath = `/chats/${props.ChatRoomId}/${file.name}`;
    const metadata = {contentType: mime.lookup(file.name)};
    
    try {
        //파일 저장
        let uploadTask = storageRef.child(filePath).put(file, metadata);
        
        //퍼센티지
        uploadTask.on("state_changed",
            UploadTaskSnapshot => {
                const percentage = Math.round(UploadTaskSnapshot.bytesTransferred / UploadTaskSnapshot.totalBytes)*100;
                setPercentage(percentage);
            },
            err => {
                console.log(err);
            },
            () => {
                //파일 메시지 전송

                //스토리지에서 이미지 url
                uploadTask.snapshot.ref.getDownloadURL()
                    .then(downloadURL => {
                        console.log('downloadURL', downloadURL);
                    })
            }
        );


    } catch (error) {
      alert("error!");
    }
  }

    return (
        <>
        {
          !( Percentage === 0 || Percentage === 100 ) &&
          <ProgressBar variant="warning" label={`${Percentage}%`} now={Percentage} />
        }
        <button onClick = {handleOpenImageRef}>사진 업로드</button>
        <input type = 'file' style = {{display : 'none'}} ref = {inputOpenImageRef} onChange = {handleImageUpload}/>
        </>
    )
}

export default ImageUpload
