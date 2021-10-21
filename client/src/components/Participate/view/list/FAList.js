import React from "react";
import FAFilter from "../filter/FAFilter";
import { PartFilter } from "../../css/ParticipateCSS.js";

function FAList(props) {
  return (
    <div>
      <PartFilter style={{"borderRadius":"15px"}}>
        <FAFilter user={props.user}/>
      </PartFilter>
    </div>
  );
}

export default FAList;
