import React from "react";
import TextEllipsis from "react-text-ellipsis";
import Avatar from "react-avatar";
import { CardImg } from "../css/MainPageCommunity.js";

function CommunityPostCard(props) {

  let timeGap;
  function conculateUploadTime() {
    let sliceT = props.post.realTime.split(" ");
    let newTime = new Date("20" + sliceT[0] + "T" + sliceT[1]);
    timeGap = new Date() - newTime;

    let minute = 1000 * 60;
    let hour = minute * 60;
    let day = hour * 24;
    let month = day * 30;
    let year = month * 12;

    if (parseInt(timeGap / year) > 0) {
      return parseInt(timeGap / year) + "년 전";
    } else if (parseInt(timeGap / month) > 0) {
      return parseInt(timeGap / month) + "달 전";
    } else if (parseInt(timeGap / day) > 0) {
      return parseInt(timeGap / day) + "일 전";
    } else if (parseInt(timeGap / hour) > 0) {
      return parseInt(timeGap / hour) + "시간 전";
    } else {
      return parseInt(timeGap / minute) + "분 전";
    }
  }
  return (
    <>
      <CardImg>
        <div className="profile">
          <Avatar
            src={props.post.auther.photoURL}
            size="40"
            round={true}
            style={{ border: "1px solid #c6c6c6" }}
          />
        </div>

        <p className="author">{props.post.auther.displayName}</p>
        <p className="view">조회수 {props.post.views}</p>
        <p className="title">{props.post.title}</p>
        <TextEllipsis lines={1} tag={"p"} tagClass={"desc"}>
          {props.post.content}
        </TextEllipsis>
        <p className="date">{(timeGap = conculateUploadTime())}</p>
        <div className="category">
          <p>{props.post.category}</p>
        </div>
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
