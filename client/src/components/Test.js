import React, { useState, useEffect } from 'react'
import { useHistory, withRouter, Link } from "react-router-dom";

function Test(props) {

    const [NUM, setNUM] = useState(3);

    let history = useHistory();
    useEffect(() => {
        console.log("history : ", history);
        console.log("props : ", props);    
    }, []);

    return (
        <div>
            loremloremlorem      
            <Link to={`${history.location.pathname}?${NUM}`}>test</Link>      
        </div>
    )
}

export default withRouter(Test);
