import React from 'react'
import { withRouter, useHistory } from 'react-router';
import { DeleteModalDiv } from "../css/ChatDetailElement.js";
import { firebase } from '../../../firebase.js';
import axios from "axios";

function DeleteModal(props) {
    let MessageRef = firebase.database().ref("chats");
    const storageRef = firebase.storage().ref();
    let history = useHistory();

    function RemoveHandler() {

        let body = {
            chatRoomId: props.ChatRoomId
        }
        
        axios.post("/api/chat/delete", body).then((response) => {
            if (response.data.success) {
                MessageRef.child(props.ChatRoomId).remove((error) => {
                    if(error) {
                        alert(error);
                    } else {
                        storageRef.child(`chats/${props.ChatRoomId}`).listAll().then((res) => {
                            res.items.forEach((item) => {
                                storageRef.child(item.fullPath).delete()
                            })
                            history.goBack();
                        }).catch((err) => {
                            if(err)                                        
                            alert(err);                           
                            history.goBack();                           
                        })
                    }
                });
            } else {
                alert("error");
            }
        });
        
    }

    return (
    <DeleteModalDiv>
      <div className="content">
        <div
          className="background"
          onClick={() => props.setDeleteFlag(false)}
        ></div>
        <div className="gridDiv">
          <p className="title">
              쪽지함 나가기
          </p>
          <span className="delete" onClick={() => props.setDeleteFlag(false)}>
            X
          </span>
          <p className="desc">
            상대방과의 대화 중인 쪽지함을 나가시겠습니까?
            <br />
            삭제된 내용은 복원할 수 없습니다.
          </p>
          <div className="buttonDiv">
            <button
              type="button"
              className="cancel"
              onClick={() => props.setDeleteFlag(false)}
            >
              취소
            </button>
            <button
              type="button"
              className="delete"
              onClick={() => RemoveHandler()}
            >
              삭제
            </button>
          </div>
        </div>
      </div>
    </DeleteModalDiv>
    )
}

export default withRouter(DeleteModal)
