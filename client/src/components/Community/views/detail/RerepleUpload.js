import React, { useState } from 'react'
import Avatar from "react-avatar";
import axios from 'axios';
import { RerepleContentGrid } from '../../css/CommunityDetailElement.js';

function RerepleUpload(props) {
    const [content, setContent] = useState("");
    
    const submitHandler = (e) => {
        e.preventDefault();
        if (!content) {
            return alert("댓글 내용을 입력해주세요.");
        }
        const body = {
            auther: props.userData._id,
            avatar: props.userData.avatar,
            email: props.userData.email,
            name: props.userData.name,
            postNum: props.postInfo.postNum,
            replePid: props.Reple._id,
            _id: props.Reple.rerepleIdx,
            content: content,
        };

        axios.post("/api/community/rerepleSubmit", body).then((response) => {
            if (response.data.success) {
                alert("대댓글 등록 성공");
                window.location.reload();
            } else {
                alert("대댓글 등록 실패");
            }
        });
    };

    return (
        <RerepleContentGrid>
            <div className="content">
                <div className="avatar">
                    <Avatar
                        src={props.userData.avatar}
                        size="50"
                        round={true}
                        style={{ border: "1px solid #c6c6c6" }}
                    />
                </div>
                <p className="author">{props.userData.name}</p>
                <div className="desc">
                </div>
            </div>
        <form action="post" onSubmit={submitHandler}>
          <input
            type="text"
            placeholder="댓글을 입력하세요"
            name="content"
            value={content}
            onChange={(e) => setContent(e.currentTarget.value)}
          />
          <div>
            <button type="submit">
              작성하기<i className="bi bi-pencil-fill"></i>
            </button>
          </div>
        </form>
        </RerepleContentGrid>
    )
}

export default RerepleUpload
