import React, { useState, useEffect } from "react";
import { PageUL } from "../../css/CommunityMainElement.js";

function CommunityFNB(props) {
  const [pageTotalArray, setpageTotalArray] = useState([]);

  useEffect(() => {
    let temp = [];
    for (let i = 0; i < props.PageTotalIdx / 10; i++) {
      temp.push(i + 1);
    }
    setpageTotalArray([...temp]);
  }, [props.PageTotalIdx]);

  return (
    <PageUL>
      {pageTotalArray.map((num, idx) => {
        return (
          <li key={idx}>
            <button
              className={props.PageIdx === parseInt(num) ? "active" : null}
              onClick={() => {
                props.setPageIdx(parseInt(num));
              }}
            >
              {num}
            </button>
          </li>
        );
      })}
    </PageUL>
  );
}

export default CommunityFNB;