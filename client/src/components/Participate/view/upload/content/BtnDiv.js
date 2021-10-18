import React from "react";
import { withRouter } from "react-router-dom";

function BtnDiv(props) {
  return (
    <div className="btnDiv">
      <button
        className="cancel"
        onClick={() => {
          props.history.push("/participate");
        }}
      >
        취소
      </button>
      <button
        className="submit"
        type="submit"
        onClick={(e) => props.submitHandler(e)}
      >
        완료
      </button>
    </div>
  );
}

export default withRouter(BtnDiv);
