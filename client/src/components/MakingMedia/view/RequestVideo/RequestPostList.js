import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import Avatar from "react-avatar";
import { RequestPostCard } from '../../css/RequestVideoCSS';
import axios from 'axios';

function RequestPostList(props) {
    const [PostList, setPostList] = useState([]);

    useEffect(() => {
        let body = {
            category: props.SubCategory,
            sort: props.Sort,
            skip: props.Skip,
        }

        axios.post("/api/making/requestVideo", body).then((response) => {
            if(response.data.success) {
                let temp = [...response.data.post];
                setPostList(temp);
            } else {
                console.log("get requestVideo Error", response.data.err);
            }
        });

    }, [props.SubCategory, props.Sort, props.Skip]);

    return (
        <div>
            {
                PostList.map((post, idx) => {
                    return (
                        <RequestPostCard>
                            <Link to={"/making/requestPost/"+post.url} key={idx}>
                                <div className="postInfo">
                                    <div className="profile">
                                        <Avatar
                                            src={post.auther.photoURL}
                                            size="40"
                                            round={true}
                                            style={{ border: "1px solid #c6c6c6" }}
                                        />
                                        <span>{post.auther.displayName}</span>
                                    </div>
                                    <span>{post.realTime}</span>
                                </div>
                                <div className="title">
                                    {post.oneLineIntroduce}
                                </div>
                                <div className="typeList">
                                    {
                                        post.workTypeArr.length > 0 &&
                                        <div>
                                            <p>작업 유형</p>
                                            <div>
                                            {
                                                post.workTypeArr.map((work, idx)=> {
                                                    return (
                                                        <span className="tag">{work}</span>
                                                    )
                                                })
                                            }
                                            </div>
                                        </div>
                                    }
                                    {
                                        post.videoPurposeArr.length > 0 &&
                                        <div>
                                            <p>영상 목적</p>
                                            <div>
                                            {
                                                post.videoPurposeArr.map((purpose, idx)=> {
                                                    return (
                                                        <span className="tag">{purpose}</span>
                                                    )
                                                })
                                            }
                                            </div>
                                        </div>
                                    }
                                </div>
                            </Link>
                        </RequestPostCard>
                    );
                })
            }
        </div>
    )
}

export default RequestPostList
