import React from 'react'

import { ProducerDiv } from "../../css/FindingProducerCSS.js";

function ProducerDetail() {
    return (
        <div>
            <ProducerDiv>
                <img src="/Img/MainBanner.jpg" className="thumbnail" />
                <div>
                    <span className="producerName">프로제작러</span>
                </div>
            </ProducerDiv>
        </div>
    )
}

export default ProducerDetail
