import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useHistory, useLocation } from "react-router";
import { PartHeader, PartBody, PagiCSS } from "../css/ParticipateCSS.js";
import axios from "axios";
import qs from "qs";

import GNBArea from "./GNBArea.js";
import FAList from "./list/FAList.js";
import FPList from "./list/FPList.js";
import IPList from "./list/IPList.js";
import LoList from "./list/LoList.js";
import Pagination from "./list/content/Pagination.js";

function Participate(props) {
  const user = useSelector((state) => state.user.userData);
  let location = useLocation();
  let history = useHistory();

  const [URL, setURL] = useState({});
  const [Loading, setLoading] = useState(false);
  const [PageLen, setPageLen] = useState(1);
  const [PageIdxArr, setPageIdxArr] = useState([1]);
  const [SearchTerm, setSearchTerm] = useState("");
  const [PostList, setPostList] = useState([]);

  const GNBObj = {
    FA: "배우찾기",
    FP: "파트너찾기",
    IP: "프로알리기",
    Lo: "로케이션",
  };

  const SetContent = () => {
    switch (URL.category) {
      case "FP":
        return (
          <FPList user={user} URL={URL} setURL={setURL} PostList={PostList} Loading={Loading} />
        );
      case "FA":
        return (
          <FAList user={user} URL={URL} setURL={setURL} PostList={PostList} Loading={Loading}/>
        );
      case "IP":
        return (
          <IPList user={user} URL={URL} setURL={setURL} PostList={PostList} Loading={Loading}/>
        );
      case "Lo":
        return (
          <LoList user={user} URL={URL} setURL={setURL} PostList={PostList} Loading={Loading}/>
        );
      default:
        return <FPList user={user} URL={URL} setURL={setURL} PostList={PostList} Loading={Loading} />
    }
  };

  const SearchHandler = (e) => {
    e.preventDefault();
    if (!/\S/.test(SearchTerm)) {
      return;
    }
    let temp = qs.parse(URL);
    temp.searchTerm = SearchTerm.trim();
    temp.pIdx = 0;
    let temp2 = qs.stringify(temp);
    history.push(`?${decodeURI(temp2)}`);
  };

  const SortFilter = (sort) => {
    let temp = qs.parse(URL);
    temp.sort = sort;
    temp.pIdx = 0;
    let temp2 = qs.stringify(temp);
    history.push(`?${decodeURI(temp2)}`);
  };

  async function getPostLen() {
    /*
    if (URL.searchTerm) {
      setSearchTerm(temp.searchTerm);
    } else {
      setSearchTerm("");
    }
    */

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
        <div className="category">
          <p>{GNBObj[URL.category]}</p>
          <div className="sorting">
            <p
              className={URL.sort === "hot" ? "active" : null}
              onClick={() => {
                SortFilter("hot");
              }}
            >
              인기순
            </p>
            <p
              className={URL.sort === "new" ? "active" : null}
              onClick={() => {
                SortFilter("new");
              }}
            >
              최신순
            </p>
          </div>
        </div>
      </PartHeader>
      <PartBody>{SetContent()}</PartBody>
      <PagiCSS>
        {!Loading && (
          <Pagination URL={URL} PageLen={PageLen} PageIdxArr={PageIdxArr} />
        )}
      </PagiCSS>
    </>
  );
}

export default Participate;
