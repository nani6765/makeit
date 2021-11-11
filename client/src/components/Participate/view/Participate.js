import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useHistory, useLocation } from "react-router";
import { PartHeader, PartBody } from "../css/ParticipateCSS.js";
import axios from "axios";
import qs from "qs";

import GNBArea from "./GNBArea.js";
import FAList from "./list/FAList.js";
import FPList from "./list/FPList.js";
import IPList from "./list/IPList.js";
import LoList from "./list/LoList.js";

function Participate(props) {
  const user = useSelector((state) => state.user.userData);
  let location = useLocation();
  let history = useHistory();

  const [URL, setURL] = useState({});
  const [Loading, setLoading] = useState(false);
  const [Skip, setSkip] = useState(0);
  const [PageLen, setPageLen] = useState(1);
  const [PageIdxArr, setPageIdxArr] = useState([]);
  const [SearchTerm, setSearchTerm] = useState("");

  const GNBObj = {
    FA: "배우찾기",
    FP: "파트너찾기",
    IP: "프로알리기",
    Lo: "로케이션",
  };

  const SetContent = () => {
    switch (URL.category) {
      case "FP":
        return <FPList user={user} URL={URL} setURL={setURL} />;
      case "FA":
        return <FAList user={user} URL={URL} setURL={setURL} />;
      case "IP":
        return <IPList user={user} URL={URL} setURL={setURL} />;
      case "Lo":
        return <LoList user={user} URL={URL} setURL={setURL} />;
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
    setLoading(true);
    let temp = qs.parse(location.search, { ignoreQueryPrefix: true });
    /*
    if (location.search.slice(1) != URL) {
      setURL(location.search.slice(1));
      if (temp.pIdx) {
        setSkip(parseInt(temp.pIdx));
      } else {
        setSkip(0);
      }
      if (temp.searchTerm) {
        setSearchTerm(temp.searchTerm);
      } else {
        setSearchTerm("");
      }
    }
    */

    let body = {};
    /*
    let body = {
      type: "FP",
      subCategory: SubCategory,
    };
    if (FilmType[0]) {
      body.filmType = FilmType;
    }
    if (Classification[0]) {
      body.classification = Classification;
    }

    if (Gender[0]) {
      body.gender = Gender;
    }
    if (FilmType[0]) {
      body.filmType = FilmType;
    }
    if (Classification[0]) {
      body.classification = Classification;
    }
    */
    await axios.post("/api/participate/getPageLen", body).then((response) => {
      if (response.data.success) {
        //setPageLen(parseInt(response.data.len / 12) + 1);
        //setSkip(0);
      } else {
        alert("error");
      }
      setLoading(false);
    });
  }

  /*
  useEffect(() => {
    if (props.history.location.state !== undefined) {
      setGNB(GNBObj[props.history.location.state.category]);
    }
  }, []);
  */

  useEffect(() => {
    getPostLen();
  }, [location.search]);

  useEffect(() => {
    let sIdx = parseInt(Skip / 10);
    let temp = [];
    for (let i = sIdx * 10 + 1; i <= Math.min(sIdx * 10 + 10, PageLen); i++) {
      temp.push(i);
    }
    setPageIdxArr(temp);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [parseInt(Skip / 10), PageLen]);

  useEffect(() => {
    if (location.search) {
      let temp = qs.parse(location.search, { ignoreQueryPrefix: true });
      setURL(temp);
    } else {
      //최초접속
      history.push(`?category=FP&sort=hot&pIdx=0`);
    }
  }, [location]);

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
    </>
  );
}

export default Participate;
