import React, {useState, useEffect} from 'react';
import { Link } from "react-router-dom";
import ListTopArea from './ListTopArea.js';
import Pagination from "../main/Pagination.js";
import { FPListDiv, PortfolioListContainer, PortfolioCard } from '../CSS/PortfolioFindCSS.js';
import { PagiCSS } from '../CSS/PortpolioCSS.js';
import axios from 'axios'

function FPList(props) {
    const [PortfolioList, setPortfolioList] = useState([]);
    const [PageLen, setPageLen] = useState(1);
    const [PageIdxArr, setPageIdxArr] = useState([1]);

    const FieldToKorean = (text) => {
      switch (text) {
        case "general":
          return "일반영상";
        case "youtube":
          return "유튜브제작";
        case "special":
          return "특수영상";
        case "ad":
          return "광고/홍보영상";
        case "online":
          return "온라인생중계";
        case "ani":
          return "애니메이션";
        case "filming":
          return "촬영";
        case "edit":
          return "편집/자막";
        case "etc":
          return "기타";
        default:
          return "기타";
      }
    };

    useEffect(() => {
        let body = {
            skip: props.URL.pIdx * 16,
            sort: props.URL.sort,
        };

        console.log(props.URL);

        if(props.URL.type) {
            body.type = props.URL.type;
        }
        if(props.URL.filmType) {
            body.filmType = props.URL.filmType;
        }
        if(props.URL.class) {
            body.class = props.URL.class;
        }
        if(props.URL.field) {
            body.field = props.URL.field;
        }

        axios.post("/api/portfolio/pf/getList", body).then((response) => {
            if(response.data.success){
                setPortfolioList([...response.data.portfolio]);
            }
        })
    }, [props.URL])

    useEffect(() => {
      let sIdx = parseInt(parseInt(props.URL.pIdx) / 10);
      let temp = [];
      for (let i = sIdx * 10 + 1; i <= Math.min(sIdx * 10 + 10, PageLen); i++) {
        temp.push(i);
      }
      setPageIdxArr(temp);
    }, [parseInt(props.URL.pIdx / 10), PageLen]);

    

    return (
        <FPListDiv>
            <ListTopArea URL = {props.URL}/>
            <PortfolioListContainer>
                {
                    PortfolioList.map((post) => {
                        return (
                            <Link to={`/portfolio/${post.url}`}>
                                <PortfolioCard>
                                    <div className='card'>
                                        <figure className='profileImg'>
                                            <img src={post.profileImg} />
                                        </figure>
                                        <p className="title">{post.titletext}</p>
                                        <p className='info'>{post.name}</p>
                                        <p className='field'>
                                            {post.type === "프로"
                                            ? post.field
                                            : FieldToKorean(post.fieldArr[0])}
                                        </p>
                                    </div>
                                </PortfolioCard>
                            </Link>
                        )
                    })
                }
            </PortfolioListContainer>
            <PagiCSS>
                <Pagination URL={URL} PageLen={PageLen} PageIdxArr={PageIdxArr} />
            </PagiCSS>
        </FPListDiv>
    )
}

export default FPList
