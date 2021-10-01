import React from "react";
import StickyBar from "../common/StickyBar.js";
import { Link } from "react-router-dom";

import { ProducerListDiv } from "../../css/FindingProducerCSS.js";
import { ReactComponent as PenIcon } from "../../css/Img/Pen.svg";

function ShareVideo(props) {
  return (
    <ProducerListDiv>
      <div className="left">
        <StickyBar
          Menu={props.Menu}
          setSubCategory={props.setSubCategory}
          SubCategoryList={props.SubCategoryList}
        />
      </div>
      <div className="right">
        <Link to="/Making/ShareUpload">
          <button className="postBtn">
            게시하기
            <PenIcon />
          </button>
        </Link>
        <div className="FNB">
          {/*
            <div className="pagination">
            {PageIdxArr[0] !== 1 ? (
              <button onClick={() => setSkip((parseInt(Skip / 120) - 1) * 120)}>
                &lt; 이전
              </button>
            ) : null}
            <ul>
              {PageIdxArr.map((page, idx) => {
                return (
                  <li
                    key={idx}
                    onClick={() =>
                      setSkip(parseInt(Skip / 120) * 120 + 12 * idx)
                    }
                    className={Skip / 12 + 1 === page ? "active" : null}
                  >
                    {page}
                  </li>
                );
              })}
            </ul>
            {PageIdxArr[PageIdxArr.length - 1] < PageLen && (
              <button onClick={() => setSkip((parseInt(Skip / 120) + 1) * 120)}>
                다음 &gt;
              </button>
            )}
          </div>
          */}
        </div>
      </div>
    </ProducerListDiv>
  );
}

export default ShareVideo;
