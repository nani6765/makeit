import React from "react";
import { ReactComponent as AllBoard } from "../../../css/img/전체게시판.svg";
import { ReactComponent as FreeBoard } from "../../../css/img/자유게시판.svg";
import { ReactComponent as QuestionBoard } from "../../../css/img/질문게시판.svg";
import { ReactComponent as PRBoard } from "../../../css/img/홍보게시판.svg";
import { ReactComponent as SuggestionBoard } from "../../../css/img/건의게시판.svg";

import qs from "qs";
import { useHistory } from "react-router-dom";

function GNBArea(props) {
  let history = useHistory();

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

  const GNBClickFunc = (gnb) => {
    let temp = qs.parse(props.URL);
    temp.category = gnb;
    let temp2 = qs.stringify(temp);
    console.log(decodeURI(temp2));
    history.push(`?${decodeURI(temp2)}`);
    //props.setURL(decodeURI(temp2));
  };

  return (
    <div className="GNBDiv">
      {GNBList.map((category, idx) => {
        return (
          <div key={idx} onClick={() => GNBClickFunc(category.GNB)}>
            {category.icon}
            {category.text}
          </div>
        );
      })}
    </div>
  );
}

export default GNBArea;
