import React, { useState, useEffect } from 'react'

import HeaderGNB from '../../common/HeaderGNB.js';
import { MakingDiv } from "../../../css/FindingProducerCSS.js";


function ProducerDetail({location}) {
    const [PostInfo, setPostInfo] = useState(location.state.post);

    useEffect(() => {
        console.log(PostInfo);
    }, [PostInfo])

    return (
        <MakingDiv>
            <HeaderGNB Menu="영상 제작자 탐색"></HeaderGNB>
        </MakingDiv>
    )
}

export default ProducerDetail
