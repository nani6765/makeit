import React, { useState, useEffect } from "react";
import { Link, useHistory, useLocation, withRouter } from "react-router-dom";

import axios from "axios";
import qs from "qs";
import Loading from "../../utils/view/Page/Loading.js";

import { SearchBody, SearchInput, PostCard } from "../css/SearchCSS.js";
import SearchIcon from "./search.svg";

function CoSearch() {
  let history = useHistory();
  let location = useLocation();

  const [Term, setTerm] = useState("");
  const [SearchTerm, setSearchTerm] = useState("");

  const SearchHandler = (e) => {
    e.preventDefault();
    if (SearchTerm && !/\S/.test(SearchTerm)) {
      return;
    }
    if (!SearchTerm) {
      history.push("/");
    } else history.push(`?term=${SearchTerm}`);
  };

  return (
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
    </SearchBody>
  );
}

export default CoSearch;
