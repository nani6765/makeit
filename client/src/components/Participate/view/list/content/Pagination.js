import React from "react";

function Pagination(props) {
  return (
    <div className="FNB">
      {/*
            <div className="pagination">
        {props.PageIdxArr[0] !== 1 && (
          <button
            onClick={() => props.setSkip(parseInt((props.Skip - 10) / 10) * 10)}
          >
            &lt; 이전
          </button>
        )}
        <ul>
          {props.PageIdxArr.map((page, idx) => {
            return (
              <li
                key={idx}
                className={page === props.Skip + 1 ? "active" : null}
                onClick={() => props.setSkip(page - 1)}
              >
                <p>{page}</p>
              </li>
            );
          })}
        </ul>
        {props.PageIdxArr[props.PageIdxArr.length - 1] < props.PageLen && (
          <button
            onClick={() => props.setSkip(parseInt((props.Skip + 10) / 10) * 10)}
          >
            &gt; 다음
          </button>
        )}
      </div>
            
            */}
    </div>
  );
}

export default Pagination;
