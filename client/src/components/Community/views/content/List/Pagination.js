import React from 'react';
import { withRouter } from "react-router-dom";
import qs from "qs";

function Pagination(props) {

    const setPIdx = (page) => {
        let temp = qs.parse(props.URL);
        temp.pIdx = page;
        let temp2 = qs.stringify(temp);
        props.history.push(`?${decodeURI(temp2)}`);
    }

    return (
        <div className="FNB">
          <div className="pagination">
            {
              props.PageIdxArr[0] !== 1 && (
                <button onClick={() => setPIdx(parseInt(props.Skip - 10)/10 * 10)}>
                  &lt; 이전
                </button>
              )
            }
            <ul>
            {
              props.PageIdxArr.map((page, idx) => {
                return (
                    <li key={idx} className={page===props.Skip + 1 ? "active" : null} onClick={() => setPIdx(page - 1)}>
                      <p>{page}</p>
                    </li>
                )
              })
            }
            </ul>
            {
                props.PageIdxArr[props.PageIdxArr.length - 1] < props.PageLen && (
                    <button onClick={() => setPIdx(parseInt((props.Skip +10)/10)*10)}>
                        &gt; 다음
                    </button>
                )
            }
          </div>
        </div>
    )
}

export default withRouter(Pagination)