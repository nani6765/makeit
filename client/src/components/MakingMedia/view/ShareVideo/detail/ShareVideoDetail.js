import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import axios from "axios";

import ShareVideoPost from "./Content/ShareVideoPost.js";

import RepleList from "../../../../utils/view/Reple/RepleList.js";
import RepleUpload from "../../../../utils/view/Reple/Form/RepleUpload.js";
import { RepleBtnDiv } from "../../../../utils/view/Reple/RepleCSS.js";

function ShareVideoDetail(props) {
  const user = useSelector((state) => state.user.userData);

  const [PostInfo, setPostInfo] = useState({});
  const [Reples, setReples] = useState([]);
  const [TotalSize, setTotalSize] = useState(0);
  const [Skip, setSkip] = useState(0);
  const [Limit, setLimit] = useState(5);

  useEffect(() => {
    let body = {
      url: props.match.params.url,
    };

    axios
      .post("/api/making/shareVideo/getPostDetail", body)
      .then((response) => {
        if (response.data.success) {
          setPostInfo(response.data.post);
        } else {
          console.log("share Video get Post Detail Error", response.data.err);
        }
      });
  }, []);

  useEffect(() => {
    if(PostInfo._id) {
      let body = {
        postId: PostInfo._id,
        skip: Skip,
        limit: Limit,
        type: "ShareVideo",
      };
      getReples(body);
    }
  }, [PostInfo]);

  const loadMoreHanlder = () => {
    let skip = Skip + Limit;
    let body = {
      postId: PostInfo._id,
      skip: skip,
      limit: Limit,
      loadMore: true,
      type: "ShareVideo",
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
      {PostInfo.url != undefined && <ShareVideoPost PostInfo={PostInfo} />}
      {TotalSize > 0 ? (
        <>
          <RepleBtnDiv>
            <button className="Total">{TotalSize}개의 댓글이 있습니다.</button>
          </RepleBtnDiv>
          <RepleList
            repleInfo={Reples}
            loadMoreHanlder={loadMoreHanlder}
            postInfo={PostInfo}
            type="ShareVideo"
            category="/making/shareVideo"
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
      {PostInfo._id != null ? (
        <RepleUpload postInfo={PostInfo} type="ShareVideo" category="/making/shareVideo"/>
      ) : null}
    </>
  );
}

export default ShareVideoDetail;
