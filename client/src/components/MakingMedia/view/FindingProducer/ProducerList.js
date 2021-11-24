import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Avatar from 'react-avatar';
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
            <div className="card">
              <figure className="thumbnail">
                <img src={post.thumbnailUrl} />
              </figure>
              <p className="title">{post.oneLineIntroduce}</p>
              <div className="info">
                <div className="producerInfo">
                  <div className="profile">
                    <Avatar
                      src={post.auther.photoURL}
                      size="20"
                      round={true}
                      style={{ border: "1px solid #c6c6c6" }}
                    />
                  </div>
                  <span className="name">{post.auther.displayName}</span>
                </div>
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
              </div>
              <p className="price">&#8361; {post.priceInfo}</p>
            </div>
          </Link>
        );
      })}
    </ProducerListContainer>
  );
}

export default ProducerList;
