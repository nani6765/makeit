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
import UploadButton from "./content/UploadButton.js";
import Pagination from "./content/Pagination.js.js";

function Participate(props) {
  const user = useSelector((state) => state.user.userData);
  let location = useLocation();
  let history = useHistory();

  const [URL, setURL] = useState({});
  const [Loading, setLoading] = useState(false);
  const [PageLen, setPageLen] = useState(1);
  const [PageIdxArr, setPageIdxArr] = useState([1]);
  const [PostList, setPostList] = useState([]);

  /*
  const SetContent = () => {
    switch (URL.category) {
      case "FP":
        return (
          <FPList
            user={user}
            URL={URL}
            setURL={setURL}
            PostList={PostList}
            Loading={Loading}
          />
        );
      case "FA":
        return (
          <FAList
            user={user}
            URL={URL}
            setURL={setURL}
            PostList={PostList}
            Loading={Loading}
          />
        );
      case "IP":
        return (
          <IPList
            user={user}
            URL={URL}
            setURL={setURL}
            PostList={PostList}
            Loading={Loading}
          />
        );
      case "Lo":
        return (
          <LoList
            user={user}
            URL={URL}
            setURL={setURL}
            PostList={PostList}
            Loading={Loading}
          />
        );
      default:
        return (
          <FPList
            user={user}
            URL={URL}
            setURL={setURL}
            PostList={PostList}
            Loading={Loading}
          />
        );
    }
  };
  */

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
      default:
        return (
          <FPList
            URL={URL}
            setURL={setURL}
            PostList={PostList}
            Loading={Loading}
          />
        );
    }
  };

  const SortFilter = (sort) => {
    let temp = qs.parse(URL);
    temp.sort = sort;
    temp.pIdx = 0;
    let temp2 = qs.stringify(temp);
    history.push(`?${decodeURI(temp2)}`);
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

    console.log(body);
    await axios.post("/api/participate/getPageLen", body).then((response) => {
      if (response.data.success) {
        setPageLen(parseInt(response.data.len / 12) + 1);
      } else {
        alert("error");
      }
    });
  }

  async function getPostList() {
    setLoading(true);
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
      setLoading(false);
    });
  }

  useEffect(() => {
    //console.log("URL : ", URL);
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
      history.push(`?category=FP&sort=hot&pIdx=0`);
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
        <PostList
          type={URL.category}
          PostList={props.PostList}
          user={props.user}
        />
      </PartHeader>

      <PartBody>
        <UploadButton category={URL.category} />
        {SetContent()}
      </PartBody>
      <PagiCSS>
        {!Loading && (
          <Pagination URL={URL} PageLen={PageLen} PageIdxArr={PageIdxArr} />
        )}
      </PagiCSS>
    </>
  );
}

export default Participate;
