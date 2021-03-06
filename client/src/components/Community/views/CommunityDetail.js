import React, { useState, useEffect } from "react";
import axios from "axios";

import PostDetailContent from "./content/Detail/PostDetailContent.js";
import { RepleBtnDiv } from "../../utils/view/Reple/RepleCSS.js";

import RepleList from "../../utils/view/Reple/RepleList.js";
import RepleUpload from "../../utils/view/Reple/Form/RepleUpload.js";

function CommunityDetail(props) {
  const [postInfo, setpostInfo] = useState({ _id: null });
  const [Reples, setReples] = useState([]);
  const [TotalSize, setTotalSize] = useState(0);
  const [Skip, setSkip] = useState(0);
  const [Limit, setLimit] = useState(5);

  useEffect(() => {
    let body = {
      url: props.match.params.postId,
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
    if (postInfo._id) {
      let body = {
        postId: postInfo._id,
        skip: Skip,
        limit: Limit,
        type: "Community",
      };
      getReples(body);
    }
  }, [postInfo]);

  const loadMoreHanlder = () => {
    let skip = Skip + Limit;
    let body = {
      postId: postInfo._id,
      skip: skip,
      limit: Limit,
      loadMore: true,
      type: "Community",
    };
    getReples(body);
    setSkip(skip);
  };

  const getReples = (body) => {
    axios.post("/api/util/getReple", body).then((response) => {
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

  return (
    <>
      {postInfo._id != null ? <PostDetailContent postInfo={postInfo} /> : null}
      {TotalSize > 0 ? (
        <>
          <RepleBtnDiv>
            <button className="Total">{TotalSize}개의 댓글이 있습니다.</button>
          </RepleBtnDiv>
          <RepleList
            repleInfo={Reples}
            loadMoreHanlder={loadMoreHanlder}
            postInfo={postInfo}
            type="CoPost"
            category="/community/post"
          />
          {TotalSize > Reples.length ? (
            <RepleBtnDiv>
              <button className="left" onClick={loadMoreHanlder}>
                댓글 더보기({parseInt(TotalSize - Reples.length)})
              </button>
            </RepleBtnDiv>
          ) : null}
        </>
      ) : null}
      {postInfo._id != null ? (
        <RepleUpload
          postInfo={postInfo}
          type="CoPost"
          category="/Community/post"
        />
      ) : null}
    </>
  );
}

export default CommunityDetail;
