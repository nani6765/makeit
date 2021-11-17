import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import { ProducerListContainer } from "../../css/FPCSS.js";

function ProducerList(props) {
  const [PostList, setPostList] = useState([]);

  const loadPostList = async () => {
    try {
      let body = {
        category: props.URL.subCategory,
        sort: props.URL.sort,
        skip: props.URL.pIdx*9,
      };

      if(props.URL.searchTerm) {
        body.searchTerm = props.URL.searchTerm;
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
  }, [props.URL]);

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
              <p className="producerName">{post.auther.displayName}</p>
              <p className="title">{post.oneLineIntroduce}</p>
              <p className="evaluation">
                <span>
                {post.grade
                  ? (post.grade / post.gradeArrayNum).toFixed(1)
                  : post.grade} / 5.0
                </span>
                <span>
                  {post.likeArray.length}
                </span>
              </p>
              <p className="price">&#8361; {post.priceInfo}</p>
            </div>
          </Link>
        );
      })}
    </ProducerListContainer>
  );
}

export default ProducerList;
