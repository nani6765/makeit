import React, { useState, useEffect } from "react";
import { useHistory, Link, useLocation } from "react-router-dom";
import axios from "axios";

import Avatar from "react-avatar";
import { RequestPostCard } from "../../css/RVCSS.js";
import { LinkCSS } from "../../css/CommonCSS.js";
import qs from 'qs';

/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";

function RequestPostList(props) {
  const [PostList, setPostList] = useState([]);
  let history = useHistory();

  useEffect(() => {
    let body = {
      category: props.SubCategory,
      sort: props.Sort,
      skip: props.Skip,
    };

    axios.post("/api/making/requestVideo", body).then((response) => {
      if (response.data.success) {
        let temp = [...response.data.post];
        setPostList(temp);
      } else {
        console.log("get requestVideo Error", response.data.err);
      }
    });
  }, [props.SubCategory, props.Sort]);

  
  useEffect(() => {
    let body = {
      category: props.SubCategory,
      sort: props.Sort,
      skip: props.Skip,
    };

    axios.post("/api/making/requestVideo", body).then((response) => {
      if (response.data.success) {
        let temp = [...response.data.post];
        setPostList(temp);
        //history.push(`making?category=requestVideo&sort=${props.Sort}&skip=${props.Skip}`);
      } else {
        console.log("get requestVideo Error", response.data.err);
      }
    });
  }, [props.Skip]);

  /*
  useEffect(() => {
    if(history.location.search) {
      const query = qs.parse(history.location.search, {
        ignoreQueryPrefix: true
      });
      console.log(query);
    }
  }, [props.Skip]);
  */

  return (
    <div>
      {PostList.map((post, idx) => {
        return (
          <Link to={"/making/requestPost/" + post.url} key={idx} css={LinkCSS}>
            <RequestPostCard key={idx}>
              <div className="profile">
                <Avatar
                  src={post.auther.photoURL}
                  size="40"
                  round={true}
                  style={{ border: "1px solid #c6c6c6" }}
                />
              </div>
              <div className="author">
                <span>{post.auther.displayName}</span>
              </div>
              <div className="date">
                <span>{post.realTime}</span>
              </div>

              <div className="title">{post.oneLineIntroduce}</div>
              <div className="tag type">
                {post.workTypeArr.length > 0 && (
                  <>
                    <p>작업 유형</p>
                    {post.workTypeArr.map((work, idx) => {
                      return (
                        <span key={idx} className="tag">
                          {work}
                        </span>
                      );
                    })}
                  </>
                )}
              </div>
              <div className="tag purpose">
                {post.videoPurposeArr.length > 0 && (
                  <>
                    <p>영상 목적</p>
                    {post.videoPurposeArr.map((purpose, idx) => {
                      return (
                        <span key={idx} className="tag">
                          {purpose}
                        </span>
                      );
                    })}
                  </>
                )}
              </div>
            </RequestPostCard>
          </Link>
        );
      })}
    </div>
  );
}

export default RequestPostList;
