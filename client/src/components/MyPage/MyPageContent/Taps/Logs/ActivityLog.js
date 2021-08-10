import React, { useState, useEffect } from 'react'
import { useSelector } from "react-redux";
import axios from 'axios';

function ActivityLog(props) {
  const user = useSelector((state) => state.user);
  const [LogList, setLogList] = useState([]);
  const [Limit, setLimit] = useState(0)

  useEffect(() => {
      let body = {
          uid: user.userData.uid,
      }
      axios.post("/api/community/getMyLog", body).then((response) => {
          if(response.data.success) {

          } else {
              
          }
      });
  }, []);

    return (
        <div>
            <div>
                작성게시글
            </div>
        </div>
    )
}

export default ActivityLog
