import React, { useState, useEffect } from "react";
import FAFilter from "../filter/FAFilter";
import PostList from "../list/content/PostList.js";
import UploadButton from "../filter/UploadButton";
import Pagination from "./content/Pagination";

import { PartFilter, FNBDiv } from "../../css/ParticipateCSS.js";

import axios from 'axios';

function FAList(props) {
  const [Gender, setGender] = useState([]);
  const [FilmType, setFilmType] = useState([]);
  const [Classification, setClassification] = useState([]);
  const [Skip, setSkip] = useState(1);
  const [PageLen, setPageLen] = useState(0);
  const [PageIdxArr, setPageIdxArr] = useState([]);
  
  useEffect(() => {
    let body = {
      type: "FA",
    }
    if(Gender[0]) {
      body.gender = Gender;
    }
    if(FilmType[0]) {
      body.filmType = FilmType;
    }
    if(Classification[0]) {
      body.classification = Classification;
    }

    axios.post("/api/participate/getPageLen", body).then((response) => {
      if(response.data.success) {
        setPageLen(parseInt((response.data.len - 1)/6) + 1);
        setSkip(0);
      }
    })
  }, [Gender, FilmType, Classification]);

  useEffect(() => {
    let sIdx = parseInt(Skip/10);
    let temp = [];
    for(let i = sIdx*10 + 1; i<=Math.min(sIdx*10 + 9, PageLen); i++) {
      temp.push(i);
    }
    setPageIdxArr(temp);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [parseInt(Skip/10), PageLen])

  return (
    <>
      <PartFilter style={{"borderRadius":"15px"}}>
        <FAFilter user={props.user} Gender={Gender} setGender={setGender} FilmType={FilmType} setFilmType={setFilmType} Classification={Classification} setClassification={setClassification}/>
      </PartFilter>
      <PostList type="FA" Sort={props.Sort} Skip={Skip} Gender={Gender} FilmType={FilmType} Classification={Classification} />
      <FNBDiv>   
        <UploadButton category="배우찾기" />
        <Pagination PageIdxArr={PageIdxArr} Skip={Skip} setSkip={setSkip} PageLen={PageLen} />
      </FNBDiv>
    </>
  );
}

export default FAList;
