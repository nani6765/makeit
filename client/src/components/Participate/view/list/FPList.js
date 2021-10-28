import React, { useState, useEffect } from "react";
import FPFilter from "../filter/FPFilter";
import PostList from "./content/PostList";
import UploadButton from "../filter/UploadButton";
import Pagination from "./content/Pagination";

import { PartFilter, FNBDiv } from "../../css/ParticipateCSS.js";

import axios from "axios";

function FPList(props) {
  const [Skip, setSkip] = useState(0);
  const [PageLen, setPageLen] = useState(1);
  const [PageIdxArr, setPageIdxArr] = useState([]);
  const [FilmType, setFilmType] = useState([]);
  const [Classification, setClassification] = useState([]);

  useEffect(() => {
    let body = {
      type: "FP",
    }
    if(FilmType[0]) {
      body.filmType = FilmType;
    }
    if(Classification[0]) {
      body.classification = Classification;
    }

    axios.post("/api/participate/getPageLen", body).then((response) => {
      if(response.data.success) {
        setPageLen(parseInt(response.data.len/6) + 1);
        setSkip(0);
      }
    })
  }, [FilmType, Classification]);

  useEffect(() => {
    let sIdx = parseInt((Skip-1)/10);
    let temp = [];
    for(let i = sIdx*10 + 1; i<=Math.min(sIdx*10 + 10, PageLen); i++) {
      temp.push(i);
    }
    setPageIdxArr(temp);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [parseInt((Skip-1)/10), PageLen])

  return (
    <>
      <PartFilter style={{"borderRadius":"15px"}}>
        <FPFilter FilmType={FilmType} setFilmType={setFilmType} Classification={Classification} setClassification={setClassification}/>
      </PartFilter>
      <PostList type="FP" Sort={props.Sort} Skip={Skip} FilmType={FilmType} Classification={Classification}/>
      <FNBDiv>   
        <UploadButton category="파트너찾기" />
        <Pagination PageIdxArr={PageIdxArr} Skip={Skip} setSkip={setSkip} PageLen={PageLen} />
      </FNBDiv>
    </>
  );
}

export default FPList;
