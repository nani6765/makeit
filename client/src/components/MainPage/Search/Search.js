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
      console.log(body);
      axios.post("/api/util/search", body).then((response) => {
        if (response.data.success) {
          setIsLoading(false);
          console.log(response.data);
        } else {
          console.log(response.data.err);
        }
      });
    }
  }, [Term]);

  return (
    <>{IsLoading ? <Loading /> : <div>"{Term.term}"에 대한 총 검색결과</div>}</>
  );
}

export default Search;
