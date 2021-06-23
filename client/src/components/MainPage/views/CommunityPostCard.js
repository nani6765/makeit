import React from "react";
import TextEllipsis from "react-text-ellipsis";
import Avatar from "react-avatar";
import { CardImg } from "../css/MainPageCommunity.js";

function CommunityPostCard(props) {
  return (
    <>
      <CardImg>
        <Avatar
          src={props.post.auther.avatar}
          size="50"
          round={true}
          style={{ border: "1px solid #c6c6c6" }}
        />
        <p className="author">{props.post.auther.name}</p>
        <p className="view">조회수 {props.post.views}</p>
        <p className="title">{props.post.title}</p>
        <TextEllipsis lines={2} tag={"p"} tagClass={"desc"}>
          {props.post.content}
        </TextEllipsis>
        <p className="date">{props.post.realTime}</p>
        <p className="category">{props.post.category}</p>
        <p className="like">
          <i className="bi bi-emoji-smile"></i>
          공감({props.post.likeNum})
        </p>
        <p className="comment">
          <i className="bi bi-chat-square-dots"></i>
          댓글({props.post.repleNum})
        </p>
      </CardImg>
    </>
  );
}

export default CommunityPostCard;
