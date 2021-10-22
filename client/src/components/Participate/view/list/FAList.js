import React, { useState, useEffect } from "react";
import FAFilter from "../filter/FAFilter";
import UploadButton from "../filter/UploadButton";
import { PartFilter } from "../../css/ParticipateCSS.js";

function FAList(props) {
  const [Gender, setGender] = useState([]);
  const [FilmType, setFilmType] = useState([]);
  const [Classification, setClassification] = useState([]);
  return (
    <div>
      <PartFilter style={{"borderRadius":"15px"}}>
        <FAFilter user={props.user} Gender={Gender} setGender={setGender} FilmType={FilmType} setFilmType={setFilmType} Classification={Classification} setClassification={setClassification}/>
      </PartFilter>
      <UploadButton category="FA" />
    </div>
  );
}

export default FAList;
