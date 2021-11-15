import React, { useState, useEffect } from "react";
import { Link, withRouter } from "react-router-dom";
import axios from "axios";
import {
  MainPageDiv,
  MainPageHading,
  MainPageSubHading,
} from "../css/MainPageElement.js";
import CommunityPostCard from "./CommunityPostCard.js";
import {
  CPGridDiv,
  CPGridHot,
  CPGridNew,
  CPGridComment,
  GridTitle,
} from "../css/MainPageCommunity.js";

/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";

function CommunityPost() {
  const [hotPost, sethotPost] = useState([]);
  const [newPost, setnewPost] = useState([]);
  const [commentPost, setcommentPost] = useState([]);

  useEffect(() => {
    let body = {
      sort: "hot",
    };
    axios.post("/api/main/community", body).then((response) => {
      if (response.data.success) {
        sethotPost([...response.data.postInfo]);
      } else {
        alert("게시글을 불러오는 데 실패했습니다.");
      }
    });
  }, []);

  useEffect(() => {
    let body = {
      sort: "new",
    };
    axios.post("/api/main/community", body).then((response) => {
      if (response.data.success) {
        setnewPost([...response.data.postInfo]);
      } else {
        alert("게시글을 불러오는 데 실패했습니다.");
      }
    });
  }, []);

  useEffect(() => {
    let body = {
      sort: "comment",
    };
    axios.post("/api/main/community", body).then((response) => {
      if (response.data.success) {
        setcommentPost([...response.data.postInfo]);
      } else {
        alert("게시글을 불러오는 데 실패했습니다.");
      }
    });
  }, []);

  return (
    <>
      <div style={{ backgroundColor: "#FAF6F6" }}>
        <MainPageDiv>
          <p css={MainPageHading}>
            커뮤니티 게시글
            <Link to="/community">더보기 &gt;</Link>
          </p>
          <p css={MainPageSubHading}>
            영상, 그리고 변화를 만드는 사람들과 소통해보세요!
          </p>
          <CPGridDiv>
            <CPGridHot>
              <p css={GridTitle}>HOT 게시글</p>
              {hotPost.map((post, idx) => (
                <Link
                  to={"/community/post/" + post.postNum}
                  style={{ textDecorationLine: "none", color: "black" }}
                  key={idx}
                >
                  <CommunityPostCard post={post} />
                </Link>
              ))}
            </CPGridHot>
            <CPGridNew>
              <p css={GridTitle}>최신 게시글</p>
              {newPost.map((post, idx) => (
                <Link
                  to={"/community/post/" + post.postNum}
                  style={{ textDecorationLine: "none", color: "black" }}
                  key={idx}
                >
                  <CommunityPostCard post={post} />
                </Link>
              ))}
            </CPGridNew>
            <CPGridComment>
              <p css={GridTitle}>댓글 많은 게시글</p>
              {commentPost.map((post, idx) => (
                <Link
                  to={"/community/post/" + post.postNum}
                  style={{ textDecorationLine: "none", color: "black" }}
                  key={idx}
                >
                  <CommunityPostCard post={post} />
                </Link>
              ))}
            </CPGridComment>
          </CPGridDiv>
        </MainPageDiv>
      </div>
    </>
  );
}

export default withRouter(CommunityPost);
