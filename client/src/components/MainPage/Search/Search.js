import React, { useState, useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";

import axios from "axios";
import qs from "qs";
import Loading from "../../utils/view/Page/Loading.js";

function Search() {
  let history = useHistory();
  let location = useLocation();

  const [Term, setTerm] = useState({});
  const [IsLoading, setIsLoading] = useState(false);

  const [CoLength, setCoLength] = useState(0);
  const [CoResult, setCoResult] = useState([]);
  const [MakingLength, setMakingLength] = useState(0);
  const [MakingResult, setMakingResult] = useState([]);
  const [PartLength, setPartLength] = useState(0);
  const [PartResult, setPartResult] = useState([]);

  useEffect(() => {
    if (location.search) {
      setTerm(qs.parse(location.search, { ignoreQueryPrefix: true }));
    } else {
      history.push("/");
    }
  }, []);

  useEffect(() => {
    if (Term.term) {
      let body = {
        term: Term.term,
      };
      axios.post("/api/util/search", body).then((response) => {
        if (response.data.success) {
          console.log(response.data);
          setIsLoading(false);
        } else {
          console.log(response.data.err);
        }
      });
    }
  }, [Term]);

  return (
    <>
      {IsLoading ? (
        <Loading />
      ) : (
        <div>
          <p>"{Term.term}"에 대한 총 검색결과</p>
          <div>
            <p>영상 제작 총 {MakingLength}개의 결과</p>
            <button>더보기 &gt;</button>
            {MakingLength &&
              MakingResult.map((making, idx) => {
                return <div>{making.oneLineIntroduce}</div>;
              })}
          </div>
          <div>
            <p>영상 참여 총 {PartLength}개의 결과</p>
            <button>더보기 &gt;</button>
            {PartLength.length > 0 &&
              PartResult.map((participate, idx) => {
                return <div>{participate.title}</div>;
              })}
          </div>
          <div>
            <p>커뮤니티 총 {CoLength}개의 결과</p>
            <button>더보기 &gt;</button>
            {CoLength.length > 0 &&
              CoResult.map((post, idx) => {
                return <div>{post.title}</div>;
              })}
          </div>
        </div>
      )}
    </>
  );
}

export default Search;
