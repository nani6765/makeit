import React, { useState, useEffect } from "react";
import { Link, useHistory, useLocation, withRouter } from "react-router-dom";
import Avatar from "react-avatar";

import axios from "axios";
import qs from "qs";
import Loading from "../../utils/view/Page/Loading.js";

import { SearchBody, SearchInput, PostCard } from "../css/SearchCSS.js";
import SearchIcon from "./search.svg";

function Search() {
  let history = useHistory();
  let location = useLocation();

  const [Term, setTerm] = useState("");
  const [SearchTerm, setSearchTerm] = useState("");
  const [IsLoading, setIsLoading] = useState(false);

  const [CoLength, setCoLength] = useState(0);
  const [CoResult, setCoResult] = useState([]);
  const [MakingLength, setMakingLength] = useState(0);
  const [MakingResult, setMakingResult] = useState([]);
  const [PartLength, setPartLength] = useState(0);
  const [PartResult, setPartResult] = useState([]);

  const setMakingURL = (type) => {
    switch (type) {
      case "영상 제작자 탐색":
        return "/making/producerPost/";
      case "영상 의뢰하기":
        return "/making/requestPost/";
      case "제작 영상 알리기":
        return "/making/shareVideo/";
      default:
        return;
    }
  };

  const SearchHandler = (e) => {
    e.preventDefault();
    if (SearchTerm && !/\S/.test(SearchTerm)) {
      return;
    }
    if (!SearchTerm) {
      history.push("/");
    } else history.push(`?term=${SearchTerm}`);
  };

  useEffect(() => {
    let temp = qs.parse(location.search, { ignoreQueryPrefix: true }).term;
    if (location.search && temp) {
      setTerm(temp);
    } else {
      history.push("/");
    }
  }, [location]);

  useEffect(() => {
    if (Term) {
      setIsLoading(true);
      let body = {
        term: Term,
      };
      axios.post("/api/util/search", body).then((response) => {
        if (response.data.success) {
          console.log(response.data);
          let temp = [...response.data.coResult];
          setCoResult(temp);
          setCoLength(response.data.coLength);
          temp = [...response.data.makingResult];
          setMakingResult(temp);
          setMakingLength(response.data.makingLength);
          temp = [...response.data.participateResult];
          setPartResult(temp);
          setPartLength(response.data.participateLength);
        } else {
          console.log(response.data.err);
        }
        setIsLoading(false);
      });
    }
  }, [Term]);

  const partTransferType = (type) => {
    switch (type) {
      case "FA":
        return "배우찾기";
      case "FP":
        return "파트너찾기";
      case "IP":
        return "프로알리기";
      case "Lo":
        return "로케이션";
      default:
        return "배우찾기";
    }
  };

  return (
    <>
      {IsLoading ? (
        <Loading />
      ) : (
        <SearchBody>
          <div>
            <SearchInput>
              <input
                type="text"
                defaultValue={Term}
                onChange={(e) => setSearchTerm(e.target.value)}
                onKeyDown={(e) => {
                  if (e.keyCode === 13) SearchHandler(e);
                }}
              />
              <button onClick={(e) => SearchHandler(e)}>
                <img src={SearchIcon} />
              </button>
            </SearchInput>
          </div>
          <div className="result">
            <div className="resultHeader">
              <p>
                <span>"영상 제작"</span> 검색 결과 ({MakingLength})
              </p>
              {MakingLength > 5 ? (
                <Link to={`/search/making?term=${Term}&pIdx=0&category=all`}>
                  <button>더보기 &gt;</button>
                </Link>
              ) : null}
            </div>
            {MakingLength > 0 &&
              MakingResult.map((making, idx) => {
                return (
                  <Link to={setMakingURL(making.type) + making.url} key={idx}>
                    <PostCard>
                      <p className="title">{making.oneLineIntroduce}</p>
                      <div className="content">{making.content}</div>
                      <Avatar
                        src={making.auther.photoURL}
                        size="30"
                        round={true}
                        style={{ border: "1px solid #c6c6c6" }}
                      />
                      <p className="auther">{making.auther.displayName}</p>
                      <p className="realTime">{making.realTime}</p>
                      <p className="category">{making.type}</p>
                    </PostCard>
                  </Link>
                );
              })}
          </div>
          <div className="result">
            <div className="resultHeader">
              <p>
                <span>"영상 참여"</span> 검색 결과 ({PartLength})
              </p>
              {PartLength > 5 ? (
                <Link
                  to={`/search/participate?term=${Term}&pIdx=0&category=all`}
                >
                  <button>더보기 &gt;</button>
                </Link>
              ) : null}
            </div>
            {PartLength > 0 &&
              PartResult.map((participate, idx) => {
                return (
                  <Link to={"/participate/post/" + participate.url} key={idx}>
                    <PostCard>
                      <p className="title">{participate.title}</p>
                      <div className="content">{participate.content}</div>
                      <Avatar
                        src={participate.auther.photoURL}
                        size="30"
                        round={true}
                        style={{ border: "1px solid #c6c6c6" }}
                      />
                      <p className="auther">{participate.auther.displayName}</p>
                      <p className="realTime">{participate.realTime}</p>
                      <p className="category">
                        {partTransferType(participate.type)}
                      </p>
                    </PostCard>
                  </Link>
                );
              })}
          </div>
          <div className="result">
            <div className="resultHeader">
              <p>
                <span>"커뮤니티"</span> 검색 결과 ({CoLength})
              </p>
              {CoLength > 5 ? (
                <Link to={`/search/community?term=${Term}`}>
                  <button>더보기 &gt;</button>
                </Link>
              ) : null}
            </div>
            {CoLength > 0 &&
              CoResult.map((post, idx) => {
                return (
                  <Link to={"/community/post/" + post.url} key={idx}>
                    <PostCard>
                      <p className="title">{post.title}</p>
                      <div className="content">{post.content}</div>
                      <Avatar
                        src={post.auther.photoURL}
                        size="30"
                        round={true}
                        style={{ border: "1px solid #c6c6c6" }}
                      />
                      <p className="auther">{post.auther.displayName}</p>
                      <p className="realTime">{post.realTime}</p>
                      <p className="category">{post.category}</p>
                    </PostCard>
                  </Link>
                );
              })}
          </div>
        </SearchBody>
      )}
    </>
  );
}

export default withRouter(Search);
