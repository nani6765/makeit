import React, { useEffect, useState } from 'react';
import { useHistory, withRouter } from 'react-router-dom';
import axios from "axios";

function ProjectList(props) {
    const history = useHistory();

    const [ProjectList, setProjectList] = useState([]);
    const [PageLen, setPageLen] = useState(1);
    const [PageIdxArr, setPageIdxArr] = useState([1]);

    useEffect(() => {
        let body = {};

        axios.post("/project/getList", body).then((response) => {
            if(response.data.success) {
                
            }
        })
    }, [props.URL]);
    

  return <div></div>;
}

export default withRouter(ProjectList);
