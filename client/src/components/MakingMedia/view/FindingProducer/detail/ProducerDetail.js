import React, { useState, useEffect } from 'react'
import { useSelector } from "react-redux";

import ProducerTitleDetail from './ProducerTitleDetail.js';
import { MakingDiv } from "../../../css/FindingProducerCSS.js";

import axios from 'axios';


function ProducerDetail(props) {
    const user = useSelector((state) => state.user.userData);
    const [PostInfo, setPostInfo] = useState({});

    const getPostDetail = async () => {
        try {
            let body = {
                url: props.match.params.url
            }

            await axios.post("/api/making/producer/getPostDetail", body).then((response) => {
                if(response.data.success) {
                    setPostInfo(response.data.post);
                }
            })
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getPostDetail();
    }, []);

    useEffect(() => {
        console.log(PostInfo);
    }, [PostInfo])

    return (
        <MakingDiv>
            {
                PostInfo.url !== undefined && <ProducerTitleDetail PostInfo={PostInfo} setPostInfo={setPostInfo} user={user}/>
            }
        </MakingDiv>
    )
}

export default ProducerDetail
