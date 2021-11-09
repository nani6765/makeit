import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";

import PartDetailContent from "./PartDetailContent.js";
import RepleList from "../../../utils/view/Reple/RepleList.js";
import RepleUpload from "../../../utils/view/Reple/Form/RepleUpload.js";
import { RepleBtnDiv } from "../../../utils/view/Reple/RepleCSS.js";
import { DetailHeaderDiv } from "../../css/ParticipateDetailCSS.js";

function PartDetail(props) {
  const [PostInfo, setPostInfo] = useState({});
  const [Reple, setReple] = useState([]);
  const [TotalSize, setTotalSize] = useState(0);
  const [Skip, setSkip] = useState(0);
  const [Limit, setLimit] = useState(5);

  const setHeader = () => {
    // eslint-disable-next-line default-case
    switch (PostInfo.type) {
      case "FA":
        return (
          <h1
            onClick={() =>
              props.history.push({
                pathname: "/participate",
                state: { category: "FA" },
              })
            }
          >
            &lt; 배우 찾기
          </h1>
        );
      case "FP":
        return (
          <h1
            onClick={() =>
              props.history.push({
                pathname: "/participate",
                state: { category: "FP" },
              })
            }
          >
            &lt; 파트너 찾기
          </h1>
        );
      case "IP":
        return (
          <h1
            onClick={() =>
              props.history.push({
                pathname: "/participate",
                state: { category: "IP" },
              })
            }
          >
            &lt; 프로 알리기
          </h1>
        );
      case "Lo":
        return (
          <h1
            onClick={() =>
              props.history.push({
                pathname: "/participate",
                state: { category: "Lo" },
              })
            }
          >
            &lt; 로케이션
          </h1>
        );
    }
  };

  useEffect(() => {
    let body = {
      url: props.match.params.url,
    };

    axios.post("/api/participate/getPostDetail", body).then((response) => {
      if (response.data.success) {
        setPostInfo(response.data.post);
      } else {
        console.log(response.data.err);
      }
    });
  }, []);

  useEffect(() => {
    if (PostInfo._id !== undefined) {
      let body = {
        postId: PostInfo._id,
        skip: Skip,
        limit: Limit,
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
    };
    getReples(body);
    setSkip(skip);
  };

  const getReples = (body) => {
    axios.post("/api/util/getReple", body).then((response) => {
      if (response.data.success) {
        if (body.loadMore === true) {
          let temp = [...Reple, ...response.data.repleInfo];
          setReple(temp);
        } else {
          setReple([...response.data.repleInfo]);
        }
        setTotalSize(response.data.totalSize);
      } else {
        alert("댓글들을 가져오는데 실패 했습니다.");
      }
    });
  };

  return (
    <>
      <DetailHeaderDiv>
        <div>{setHeader()}</div>
      </DetailHeaderDiv>
      {PostInfo.url != undefined && <PartDetailContent PostInfo={PostInfo} />}
      {TotalSize > 0 ? (
        <>
          <RepleBtnDiv>
            <button className="Total">{TotalSize}개의 댓글이 있습니다.</button>
          </RepleBtnDiv>
          <RepleList
            repleInfo={Reple}
            loadMoreHanlder={loadMoreHanlder}
            postInfo={PostInfo}
            type={PostInfo.type}
          />
          {TotalSize > Reple.length ? (
            <RepleBtnDiv>
              <button className="left" onClick={loadMoreHanlder}>
                댓글 더보기({parseInt(TotalSize - Reple.length)})
              </button>
            </RepleBtnDiv>
          ) : null}
        </>
      ) : null}
      {PostInfo._id != null ? (
        <RepleUpload
          postInfo={PostInfo}
          type={PostInfo.type}
          category="/participate/post"
        />
      ) : null}
    </>
  );
}

export default withRouter(PartDetail);
