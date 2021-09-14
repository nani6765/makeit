import React, { useState } from "react";

function Temp() {
  const [TempArr, setTempArr] = useState([]);

  return <>
  {TempArr.map((temp, idx) =>{
      return({temp})
  })}
  </>;
}

export default Temp;
