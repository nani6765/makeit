import React, { useEffect, useState } from 'react'
import { useHistory, withRouter } from "react-router-dom";
import { useSelector } from 'react-redux';
import axios from 'axios';

import UploadModal from './UploadModal.js';

import {CommonMarginDiv} from "../../CommonCSS.js";

function MyPortfolio(props) {
    const history = useHistory();
    const user = useSelector(state => state.user);
    const [ModalFlag, setModalFlag] = useState(false);
    const [PortfolioList, setPortfolioList] = useState([]);


    useEffect(() => {
       if(!user.userData) {
           alert("로그인이 필요한 서비스입니다.");
           history.push("/login");
       }
       else {
           //axios.post("/api/portfolio/")
       }
    }, [])

    return (
        <CommonMarginDiv>
            <button onClick={() => setModalFlag(true)}>등록</button>

            {
                ModalFlag && <UploadModal setModalFlag={setModalFlag} />
            }
            <div>

            </div>
        </CommonMarginDiv>
    )
}

export default withRouter(MyPortfolio)