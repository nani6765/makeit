import React, {useState, useEffect} from 'react'
import axios from 'axios'

function FPList(props) {

    const [PortfolioList, setPortfolioList] = useState([]);
    useEffect(() => {
        let body = {};
        axios.post("/api/protfolio/pf/getList", body).then((response) => {
            if(response.data.success){
                setPortfolioList([...response.data.PortList]);
            }
        })
    }, [props.URL])

    return (
        <div>
            lorem  
        </div>
    )
}

export default FPList
