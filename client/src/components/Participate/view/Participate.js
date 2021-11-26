import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useHistory, useLocation } from "react-router";
import { PartHeader, PartBody, PagiCSS } from "../css/ParticipateCSS.js";
import axios from "axios";
import qs from "qs";

import GNBArea from "./content/GNBArea.js";
import SubCategory from "./filter/SubCategory.js";
import FAFilter from "./filter/FAFilter.js";
import FPFilter from "./filter/FPFilter.js";
import ListTopArea from "./content/ListTopArea.js";
import Pagination from "./content/Pagination.js";
import PostListDiv from "./content/PostListDiv.js";
import Loading from "../../utils/view/Page/Loading.js";

function Participate(props) {
  const user = useSelector((state) => state.user.userData);
  let location = useLocation();
  let history = useHistory();

  const [URL, setURL] = useState({});
  const [isLoading, setisLoading] = useState(false);
  const [PageLen, setPageLen] = useState(1);
  const [PageIdxArr, setPageIdxArr] = useState([1]);
  const [PostList, setPostList] = useState([]);

  const SetSubCategory = () => {
    switch (URL.category) {
      case "FP":
        return <FPFilter URL={URL} setURL={setURL} />;
      case "FA":
        return <FAFilter URL={URL} setURL={setURL} />;
      case "IP":
        return <SubCategory URL={URL} />;
      case "Lo":
        return <SubCategory URL={URL} />;
    }
  };

  async function getPostLen() {
    let body = {
      type: URL.category,
      sort: URL.sort,
    };
    if (URL.subCategory) {
      body.category = URL.subCategory;
    }
    if (URL.gender) {
      body.gender = URL.gender;
    }
    if (URL.class) {
      body.classfication = URL.class;
    }
    if (URL.filmType) {
      body.filmType = URL.filmType;
    }

    await axios.post("/api/participate/getPageLen", body).then((response) => {
      if (response.data.success) {
        setPageLen(parseInt(response.data.len / 12) + 1);
      } else {
        alert("error");
      }
    });
  }

  async function getPostList() {
    setisLoading(true);
    let body = {
      type: URL.category,
      sort: URL.sort,
      limit: 12,
      skip: URL.pIdx * 12,
    };

    if (URL.subCategory) {
      body.category = URL.subCategory;
    }
    if (URL.gender) {
      body.gender = URL.gender;
    }
    if (URL.class) {
      body.classfication = URL.class;
    }
    if (URL.filmType) {
      body.filmType = URL.filmType;
    }
    await axios.post("/api/participate", body).then((response) => {
      if (response.data.success) {
        setPostList([...response.data.post]);
      } else {
        alert("error");
      }
      setisLoading(false);
    });
  }

  useEffect(() => {
    if (URL.category) {
      getPostLen();
      getPostList();
    }
  }, [URL]);

  useEffect(() => {
    if (location.search) {
      let temp = qs.parse(location.search, { ignoreQueryPrefix: true });
      setURL(temp);
    } else {
      //최초접속
      history.push(`?category=FP&sort=인기순&pIdx=0`);
    }
  }, [location.search]);

  useEffect(() => {
    let sIdx = parseInt(parseInt(URL.pIdx) / 10);
    let temp = [];
    for (let i = sIdx * 10 + 1; i <= Math.min(sIdx * 10 + 10, PageLen); i++) {
      temp.push(i);
    }
    setPageIdxArr(temp);
  }, [parseInt(URL.pIdx / 10), PageLen]);

  return (
    <>
      <PartHeader>
        <div className="bannerDiv">
          <img src="./Img/CommunityBanner.png" alt="" />
        </div>
        <GNBArea URL={URL} setURL={setURL} />
        {SetSubCategory()}
      </PartHeader>

      <PartBody>
        <ListTopArea URL={URL} category={URL.category} />
        {isLoading ? (
          <Loading />
        ) : (
          <PostListDiv type={URL.category} PostList={PostList} user={user} />
        )}
      </PartBody>
      <PagiCSS>
        {!isLoading && (
          <Pagination URL={URL} PageLen={PageLen} PageIdxArr={PageIdxArr} />
        )}
      </PagiCSS>
    </>
  );
}

export default Participate;
