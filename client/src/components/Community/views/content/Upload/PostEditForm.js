import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { withRouter } from "react-router-dom";
import axios from "axios";
import Select from "react-select";

import FileUploadArea from "../../../../utils/view/Files/FileUploadArea.js";
import FileShowArea from "../../../../utils/view/Files/FileShowArea.js";

/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import {
  FormDiv,
  BtnDiv,
  SubmitBtn,
  CancelBtn,
  DropZoneDiv,
} from "../../../css/CommunityFormCSS.js";

function PostEditForm(props) {
  const [Title, setTitle] = useState("");
  const [Content, setContent] = useState("");
  const [Image, setImage] = useState([]);
  const [Category, setCategory] = useState("");
  const [Check, setCheck] = useState(0);

  const user = useSelector((state) => state.user);

  const options = [
    { value: "자유게시판", label: "자유게시판" },
    { value: "질문게시판", label: "질문게시판" },
    { value: "홍보게시판", label: "홍보게시판" },
    { value: "건의함", label: "건의함" },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    setTitle(props.PostInfo.title);
    setContent(props.PostInfo.content);
    let temp = props.PostInfo.images;
    setImage(temp);
    setCategory(props.PostInfo.category);
  }, [props]);

  useEffect(() => {
    if (Image != undefined) setCheck(Image.length);
  }, [Image]);

  const SubmitHandler = (e) => {

    e.preventDefault();

    console.log("??");

    if (!Title || !Content) {
      return alert("제목과 내용을 입력해주세요.");
    }

    const body = {
      uid: user.userData.uid,
      title: Title,
      content: Content,
      images: Image,
      category: Category,
      id: props.PostInfo._id,
    };

    axios.post("/api/community/postUpdate", body).then((response) => {
      if (response.data.success) {
        alert("게시글 수정 성공");
        props.history.push({
          pathname: "/community",
          state: { category: props.PostInfo.category },
        });
      } else {
        alert("게시글 수정 실패");
      }
    });
  };

  return (
    <FormDiv>
      <input
        name="title"
        className="title"
        placeholder="제목을 입력하세요"
        value={Title}
        onChange={(e) => setTitle(e.currentTarget.value)}
      />
      <div className="CategoryDiv">
        <Select
          options={options}
          placeholder="카테고리"
          blurInputOnSelect="true"
          menuShouldBlockScroll="true"
          onChange={(e) => setCategory(e.value)}
        />
      </div>
      <textarea
        name="content"
        className="content"
        placeholder={
          "메이킷은 누구나 참여할 수 있는 커뮤니티를 만들기 위해 커뮤니티 이용규칙을 제정하여 운영하고 있습니다.\n위반 시 게시물이 삭제되고 서비스 이용이 일정 기간 제한될 수 있습니다.\n\n아래는 이 게시판에 해당하는 핵심 내용에 대한 요약 사항이며, 게시물 작성 시 전 커뮤니티 이용 규칙 전문을 반드시 확인하시기 바랍니다.\n\n정치 사회 관련 행위 금지\n과도한 홍보 및 판매 관련 행위 금지\n그 밖에 규칙 위반     "
        }
        value={Content}
        onChange={(e) => setContent(e.currentTarget.value)}
      ></textarea>

      <DropZoneDiv>
        <FileUploadArea
          Images={Image}
          setImages={setImage}
          dirURL="community"
        />
        {Check ? (
          <FileShowArea Images={Image} setImages={setImage} type="community" />
        ) : null}
      </DropZoneDiv>

      <BtnDiv>
        <CancelBtn
          onClick={() => {
            props.history.push("/community");
          }}
        >
          취소
        </CancelBtn>
        <button css={SubmitBtn} onClick={(e) => SubmitHandler(e)}>
          완료
        </button>
      </BtnDiv>
    </FormDiv>
  );
}

export default withRouter(PostEditForm);
