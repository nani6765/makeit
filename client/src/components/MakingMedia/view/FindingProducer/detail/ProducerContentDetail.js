import React, { useEffect } from "react";
import FPRule from "../../../../utils/rule/FPRule.js";
import { DetailFilterDiv, DetaulContentSubTitle } from "../../../css/FPDCSS.js";

import ContentGNB from "./content/ContentGNB.js";
import DetailExplanation from "./content/DetailExplanation.js";
import PortFolio from "./content/PortFolio.js";
import PriceRule from "./content/PriceRule.js";
import FAQ from "./content/FAQ.js";
import ReviewArea from "./content/review/ReviewArea.js";

function ProducerContentDetail(props) {
  return (
    <>
      <ContentGNB />
      <DetailFilterDiv>
        <div className="bgOutter">
          <div className="bgInner">
            <DetailExplanation
              WorkTypeArr={props.PostInfo.workTypeArr}
              VideoPurposeArr={props.PostInfo.videoPurposeArr}
              Description={props.PostInfo.description}
            />
            <PortFolio />
            <PriceRule PriceInfo={props.PostInfo.priceInfo} />

            <div id="edit" style={{ paddingTop: "1rem" }}>
              <DetaulContentSubTitle>수정/환불 안내</DetaulContentSubTitle>
              <FPRule />
            </div>

            {props.PostInfo.FAQList[0].q && (
              <FAQ FAQList={props.PostInfo.FAQList} />
            )}

            <ReviewArea PostURL={props.PostInfo.url} />
          </div>
        </div>
      </DetailFilterDiv>
    </>
  );
}

export default ProducerContentDetail;
