import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import { ProducerListContainer } from "../../css/FPCSS.js";

function ProducerList(props) {
  const [PostList, setPostList] = useState([]);

  const loadPostList = async () => {
    try {
      let body = {
        category: props.URLQuery.subCategory,
        sort: props.URLQuery.sort,
        skip: props.URLQuery.pIdx*9,
      };

      if(props.URLQuery.searchTerm) {
        body.searchTerm = props.URLQuery.searchTerm;
      }

      axios.post("/api/making/producer", body).then((response) => {
        if (response.data.success) {
          let temp = [...response.data.posts];
          setPostList(temp);
        }
      });
    } catch (error) {
      console.log("loadPostList error", error);
    }
  };

  useEffect(() => {
    loadPostList();
  }, [props.URLQuery]);

  return (
    <ProducerListContainer>
      {PostList.map((post, idx) => {
        return (
          <Link
            to={"/making/producerPost/" + post.url}
            key={idx}
            className="producercard"
          >
            <div>
              <img src={post.thumbnailArr[0].path} className="thumbnail" />
              <div className="info">
                <span className="producerName">{post.auther.displayName}</span>
                {props.user ? (
                  post.likeArray.indexOf(props.user.uid) === -1 ? (
                    <i className="bi bi-heart"></i>
                  ) : (
                    <i className="bi bi-heart-fill"></i>
                  )
                ) : (
                  <i className="bi bi-heart"></i>
                )}
              </div>
              <p className="title">{post.oneLineIntroduce}</p>
              <div className="priceAndGrade">
                <p className="price">{post.priceInfo}</p>
                <p className="grade">
                  <i className="bi bi-star"></i>
                  {post.grade
                    ? (post.grade / post.gradeArrayNum).toFixed(1)
                    : post.grade}{" "}
                  | {post.gradeArrayNum}개의 평가
                </p>
              </div>
            </div>
          </Link>
        );
      })}
    </ProducerListContainer>
  );
}

export default ProducerList;
