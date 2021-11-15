import React from "react";
import { useHistory } from "react-router";
import qs from "qs";

function Pagination(props) {
  let history = useHistory();

  const ClickFunc = (type, page = 0) => {
    console.log("type : ", type, " , page : ", page);
    let temp = props.URL;
    console.log(temp);
    switch (type) {
      case "prev":
        temp.pIdx = parseInt((parseInt(props.URL.pIdx) - 10 / 10) * 10);
        break;
      case "num":
        temp.pIdx = parseInt(page) - 1;
        break;
      case "next":
        temp.pIdx = parseInt((parseInt(props.URL.pIdx) + 10 / 10) * 10);
        break;
    }
    let temp2 = qs.stringify(temp);
    history.push(`?${decodeURI(temp2)}`);
  };

  return (
    <div className="pagination">
      {props.PageIdxArr[0] !== 1 && (
        <button onClick={() => ClickFunc("prev")}>&lt; 이전</button>
      )}
      <ul>
        {props.PageIdxArr.map((page, idx) => {
          return (
            <li
              key={idx}
              className={
                page === parseInt(props.URL.pIdx) + 1 ? "active" : null
              }
              onClick={() => ClickFunc("num", page)}
            >
              <p>{page}</p>
            </li>
          );
        })}
      </ul>
      {props.PageIdxArr[props.PageIdxArr.length - 1] < props.PageLen && (
        <button>&gt; 다음</button>
      )}
    </div>
  );
}

export default Pagination;
