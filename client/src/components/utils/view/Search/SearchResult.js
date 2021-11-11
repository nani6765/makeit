import React, { useState, useEffect } from 'react';
import { withRouter, useLocation } from "react-router-dom";
import qs from "qs";
import axios from 'axios';

function SearchResult(props) {
    const location = useLocation();

    useEffect(() => {
        if(!location.search) {
            props.history.push("/");
        }
        let body = {
            term: qs.parse(location.search, { ignoreQueryPrefix: true }).search,
        }

        axios.post("/api/util/search", body).then((response) => {
            if(response.data.succeess) {
                console.log(response.data.result);
            }
            else {
                console.log(response.data.err);
            }
        })
    }, [location]);

    return (
        <div>
            searchResult
        </div>
    )
}

export default withRouter(SearchResult)
