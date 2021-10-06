import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';

import QuotationFilter from './view/QuotationFilter.js';
import {
  UploadHead,
  UploadForm,
  UploadContent,
} from "../../../css/CommonUploadCSS.js";

function QuotationUpload(props) {
    const [OneLineIntroduce, setOneLineIntroduce] = useState("");
    const [Deadline, setDeadline] = useState("1주 이내");
    const [Price, setPrice] = useState(0);
    
    // 미구현
    const [PortPolio, setPortPolio] = useState("");

    return (
        <>
        <UploadHead>
          <div>
            <h1>
              <span onClick={() => props.history.goBack()}>&lt;</span>
              견적 등록하기
            </h1>
          </div>
        </UploadHead>
        <UploadForm>
            <div className="path">홈 &gt; 영상제작 &gt; 의뢰하기 &gt; 작성하기</div>
            <input
            type="text"
            className="OneLineIntroduce"
            placeholder="한줄 소개 작성( 30자 이내로 작성해주세요. )"
            value={OneLineIntroduce}
            onChange={(e) => setOneLineIntroduce(e.currentTarget.value)}
            />
            <UploadContent>
                <QuotationFilter Deadline={Deadline} setDeadline={setDeadline} Price={Price} setPrice={setPrice} PortPolio={PortPolio} setPortPolio={setPortPolio} />
            </UploadContent>
        </UploadForm>
        </>
    )
}

export default withRouter(QuotationUpload)
