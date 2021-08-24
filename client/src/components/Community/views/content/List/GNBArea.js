import React, { useEffect, useRef } from "react";
import { ReactComponent as AllBoard } from "../../../css/img/전체게시판.svg";
import { ReactComponent as FreeBoard } from "../../../css/img/자유게시판.svg";
import { ReactComponent as QuestionBoard } from "../../../css/img/질문게시판.svg";
import { ReactComponent as PRBoard } from "../../../css/img/홍보게시판.svg";
import { ReactComponent as SuggestionBoard } from "../../../css/img/건의게시판.svg";

function GNBArea(props) {
  const GNBList = [
    {
      icon: <AllBoard />,
      text: <p>전체게시판</p>,
      GNB: "전체게시판",
    },
    {
      icon: <FreeBoard />,
      text: <p>자유게시판</p>,
      GNB: "자유게시판",
    },
    {
      icon: <QuestionBoard />,
      text: <p>질문게시판</p>,
      GNB: "질문게시판",
    },
    {
      icon: <PRBoard />,
      text: <p>홍보게시판</p>,
      GNB: "홍보게시판",
    },
    {
      icon: <SuggestionBoard />,
      text: <p>&#160;&#160;건의함&#160;&#160;</p>,
      GNB: "건의함",
    },
  ];

  const Remark = useRef();
  useEffect(() => {
    console.log(Remark);
    Remark.current.innerHTML = `
    <!--아이콘 제작자 : https://www.flaticon.com/kr/authors/flat-icons-->
    <!--Flat Icons : www.flaticon.com-->
    `;
  }, []);
  return (
    <div className="GNBDiv">
      {GNBList.map((category, idx) => {
        return (
          <div key={idx} onClick={() => props.setGNB(`${category.GNB}`)}>
            {category.icon}
            {category.text}
          </div>
        );
      })}
      <div ref={Remark} />
    </div>
  );
}

export default GNBArea;