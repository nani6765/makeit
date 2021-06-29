import React, { useState, useEffect } from "react";
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import {
  FormDiv,
  BtnDiv,
  SubmitBtn,
  CancelBtn,
} from "../../css/CommunityElement.js";
import { withRouter } from "react-router-dom";
import axios from "axios";
import FileUpload from "../../../utils/FileUpload.js";

function UpdateForm(props) {
  const [PostInfo, setPostInfo] = useState("");
  const [Title, setTitle] = useState("");
  const [Content, setContent] = useState("");
  const [Image, setImage] = useState([]);
  const [Check, setCheck] = useState(false);

  useEffect(() => {
    setPostInfo(props.PostInfo);
    setTitle(props.PostInfo.title);
    setContent(props.PostInfo.content);
    let temp = props.PostInfo.images;
    setImage(temp);
    setCheck(true);
  }, [props]);

  useEffect(() => {
    console.log("Image", Image);
  }, [Image]);

  const updateImages = (newImages) => {
    setImage(newImages);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (!Title || !Content) {
      return alert("제목과 내용을 입력해주세요.");
    }
    const body = {
      auther: props.user._id,
      email: props.user.email,
      title: Title,
      content: Content,
      images: Image,
      category: props.category,
    };

    axios.post("/api/community/postSubmit", body).then((response) => {
      if (response.data.success) {
        alert("게시글 수정 성공");
        props.history.push("/community");
      } else {
        alert("게시글 수정 실패");
      }
    });
  };

  return (
    <div>
      <FormDiv onSubmit={submitHandler}>
        <input
          name="title"
          className="title"
          placeholder="제목을 입력하세요"
          value={Title}
          onChange={(e) => setTitle(e.currentTarget.value)}
        />
        <textarea
          name="content"
          className="content"
          placeholder={
            "메이킷은 누구나 참여할 수 있는 커뮤니티를 만들기 위해 커뮤니티 이용규칙을 제정하여 운영하고 있습니다.\n위반 시 게시물이 삭제되고 서비스 이용이 일정 기간 제한될 수 있습니다.\n\n아래는 이 게시판에 해당하는 핵심 내용에 대한 요약 사항이며, 게시물 작성 시 전 커뮤니티 이용 규칙 전문을 반드시 확인하시기 바랍니다.\n\n정치 사회 관련 행위 금지\n과도한 홍보 및 판매 관련 행위 금지\n그 밖에 규칙 위반     "
          }
          value={Content}
          onChange={(e) => setContent(e.currentTarget.value)}
        ></textarea>
        {Check ? (
          <FileUpload updateImages={updateImages} originImages={Image} />
        ) : null}
        <BtnDiv>
          <CancelBtn
            onClick={() => {
              props.history.push("/community");
            }}
          >
            취소
          </CancelBtn>
          <button css={SubmitBtn} type="submit">
            완료
          </button>
        </BtnDiv>
      </FormDiv>
    </div>
  );
}

export default withRouter(UpdateForm);
