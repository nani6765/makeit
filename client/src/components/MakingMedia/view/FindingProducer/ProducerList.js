import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import axios from 'axios';

import { ProducerListContainer } from "../../css/FindingProducerCSS.js";

function ProducerList(props) {
    const [PostList, setPostList] = useState([]);

    const loadPostList = async () => {
        try {
            let body = {
                category: props.SubCategory,
                sort: props.Sort,
                skip: props.Skip,
            }

            axios.post("/api/making/producer", body).then((response) => {
                if(response.data.success) {
                    let temp = [...response.data.posts]
                    setPostList(temp);
                }
            })
            
        } catch (error) {
            console.log("loadPostList error", error)
        }
    }

    useEffect(() => {
        loadPostList();
    }, [props.SubCategory, props.Sort, props.Skip]);

    return (
        <ProducerListContainer>
            {
                PostList.map((post, idx) => {
                    return (
                        <Link to={{
                            pathname: `/making/produerPost/${post.url}`,
                            state: {
                                post: post,
                            }
                        }} key={idx} className="producercard">
                        <div>
                            <img src={post.thumbnailArr[0].path} className="thumbnail" />
                            <div className="info">
                                <span className="producerName">{post.auther.displayName}</span>
                                {
                                    post.likeArray.indexOf(props.user.userData.uid) === -1
                                    ? <i className="bi bi-heart"></i>
                                    : <i className="bi bi-heart-fill"></i>
                                }
                            </div>
                            <p className="title">{post.oneLineIntroduce}</p>
                            <div className="priceAndGrade">
                                <p className="price">{post.priceInfo}</p>
                                <p className="grade">
                                    <i className="bi bi-star"></i>
                                    {post.grade} | {post.gradeArray.length}개의 평가
                                </p>
                            </div>
                        </div>
                        </Link>
                    )
                })
            }
        </ProducerListContainer>
    )
}

export default ProducerList;
