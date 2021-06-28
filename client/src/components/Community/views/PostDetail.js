import React, { useState, useEffect } from "react";
import axios from "axios";
import PostDetailContent from "./detail/PostDetailContent.js";
import RepleList from "./detail/RepleList.js";
import RepleUpload from "./detail/RepleUpload.js";
import { RepleBtnDiv } from "../css/CommunityDetailElement.js";

function PostDetail(props) {
  const [postInfo, setpostInfo] = useState({ _id: null });
  const [Reples, setReples] = useState([]);
  const [TotalSize, setTotalSize] = useState(0);
  const [Skip, setSkip] = useState(0);
  const [Limit, setLimit] = useState(3);

  useEffect(() => {
    let body = {
      postNum: props.match.params.postId,
    };
    axios.post("/api/community/postDetail", body).then((response) => {
      if (response.data.success) {
        if (response.data.postInfo === null) {
          props.history.push("/community");
        } else {
          setpostInfo(response.data.postInfo);
        }
      } else {
        props.history.push("/community");
      }
    });
  }, []);

  useEffect(() => {
    let body = {
      postNum: props.match.params.postId,
      skip: Skip,
      limit: Limit,
    };
    getReples(body);
  }, []);

  const loadMoreHanlder = () => {
    let skip = Skip + Limit;
    let body = {
      postNum: props.match.params.postId,
      skip: skip,
      limit: Limit,
      loadMore: true,
    };
    getReples(body);
    setSkip(skip);
  };

  const getReples = (body) => {
    axios.post("/api/community/postDetail/reple", body).then((response) => {
      if (response.data.success) {
        if (body.loadMore === true) {
          let temp = [...Reples, ...response.data.repleInfo];
          setReples(temp);
        } else {
          setReples([...response.data.repleInfo]);
        }
        setTotalSize(response.data.totalSize);
      } else {
        alert("댓글들을 가져오는데 실패 했습니다.");
      }
    });
  };

  function RepleDivArea() {
    return (
      <RepleBtnDiv>
        <button className="Total">{TotalSize}개의 댓글이 있습니다.</button>
      </RepleBtnDiv>
    );
  }

  function RepleBtnArea() {
    return (
      <RepleBtnDiv>
        <button className="left" onClick={loadMoreHanlder}>
          댓글 더보기({parseInt(TotalSize - Reples.length)})
        </button>
      </RepleBtnDiv>
    );
  }

  return (
    <>
      {postInfo._id != null ? (
        <PostDetailContent postInfo={postInfo} user={props.user} />
      ) : null}

      {TotalSize > 0 ? (
        <>
          {RepleDivArea}
          <RepleList
            repleInfo={Reples}
            loadMoreHanlder={loadMoreHanlder}
            user={props.user}
          />
          {TotalSize > Reples.length ? { RepleBtnArea } : null}
          <RepleUpload postInfo={postInfo} user={props.user} />
        </>
      ) : null}

      {postInfo._id != null ? (
        <RepleUpload postInfo={postInfo} user={props.user} />
      ) : null}
    </>
  );
}

export default PostDetail;
