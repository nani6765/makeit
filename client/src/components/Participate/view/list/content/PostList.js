import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import TextEllipsis from "react-text-ellipsis";
import Avatar from "react-avatar";
import axios from 'axios';

import { PostCard, IPLoPostCard, LinkCSS } from "../../../css/ParticipateCSS.js";

import { ReactComponent as CGIcon } from "../../../../MakingMedia/css/Img/CommentGray.svg";
import { ReactComponent as CYIcon } from "../../../../MakingMedia/css/Img/CommentYellow.svg";
import { ReactComponent as LGIcon } from "../../../../MakingMedia/css/Img/LikeGrey.svg";
import { ReactComponent as LPIcon } from "../../../../MakingMedia/css/Img/LikePurple.svg";


function PostList(props) {
    const [Posts, setPosts] = useState([]);

    useEffect(() => {
        let body = {
            type: props.type,
            sortPost: props.Sort,
            skip: props.Skip * 6,
            limit: 6,
        }

        if(props.type === "IP" || props.type === "Lo") {
            body.limit = 12;
            body.skip = body.skip * 2;
        }
        
        if(props.SubCategory) {
            body.subCategory = props.SubCategory;
        }

        if(props.Gender) {
            body.gender = props.Gender;
        }
        if(props.FilmType) {
            body.filmType = props.FilmType;
        }
        if(props.Classification) {
            body.classification = props.Classification;
        }

        axios.post("/api/participate", body).then((response) => {
            if(response.data.success) {
                let temp = response.data.post;
                setPosts(temp);
            }
        })
    }, [props.Sort, props.Skip, props.SubCategory, props.Gender, props.FilmType, props.Classification]);

    return (
        <>
        {
            props.type === "FP" || props.type === "FA"
            ? (
                Posts.map((post, idx) => {
                return (
                <Link
                    to={"/participate/post/" + post.url}
                    style={{ textDecorationLine: "none", color: "black" }}
                    key={idx}
                >
                    <PostCard>
                    <Avatar
                        src={post.auther.photoURL}
                        size="50"
                        round={true}
                        style={{ border: "1px solid #c6c6c6" }}
                    />
                    <p className="author">{post.auther.displayName}</p>
                    <p className="view">조회수 {post.views}</p>
                    <p className="date">{post.realTime}</p>
                    <p className="title">{post.title}</p>
                    <TextEllipsis lines={2} tag={"p"} tagClass={"desc"}>
                        {post.content}
                    </TextEllipsis>
                    {post.images ? (
                        post.images[0] && (
                        <p className="image">
                        <i className="bi bi-card-image"></i>
                        첨부({post.images.length})
                        </p>
                    )) : null}
                    <p className="like">
                        <i className="bi bi-emoji-smile"></i>
                        공감({post.likeNum})
                    </p>
                    <p className="reple">
                        <i className="bi bi-chat-square-dots"></i>
                        댓글({post.repleNum})
                    </p>
                    </PostCard>
                </Link>
                );
            })
            ) : (
                Posts.map((post, idx) => {
                return (
                  <Link
                    to={"/participate/post/" + post.url}
                    key={idx}
                    style={{ width: "30%", color:"black", textDecoration:"none", marginLeft: "3%", marginBottom: "1rem" }}
                    css={LinkCSS}
                  >
                    <IPLoPostCard>
                      <img src={post.thumbnail[0].path} className="thumbnail" />
                      <p className="author">{post.auther.displayName}</p>
                      <p className="intro">{post.title}</p>
                      <div className="like">
                        {
                          props.user && post.likeArray.includes(props.user.uid)
                          ? <LPIcon />
                          : <LGIcon />
                        }
                        추천
                        {post.likeNum != 0 && <span>({post.likeNum})</span>}
                      </div>
                      <div className="comment">
                        {post.repleNum ? <CGIcon /> : <CYIcon />}
                        의견
                        {post.repleNum != 0 && <span>({post.repleNum})</span>}
                      </div>
                    </IPLoPostCard>
                  </Link>
                );
              })
            )
        }
        </>
    )
}

export default PostList
