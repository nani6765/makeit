import React from "react";
import { InfoSection } from "../ProductionCSS.js";
function Info() {
  return (
    <InfoSection>
      <div className="profileImg">
        <label>
          <input type="file" accept="image/*" />
        </label>
      </div>
      <div className="links">
        <p>ㅇ</p>
        <p>ㅇ</p>
        <p>ㅇ</p>
      </div>
      <div className="name infoDiv">
        <label>프로덕션명</label>
        <div>
          <input type="text" />
        </div>
      </div>
      <div className="field infoDiv">
        <label>전문분야</label>
        <div className="contentDiv">
          <div>
            <input type="checkbox" />
            <label>일반영상</label>
          </div>
          <div>
            <input type="checkbox" />
            <label>유튜브제작</label>
          </div>
          <div>
            <input type="checkbox" />
            <label>특수영상</label>
          </div>
          <div>
            <input type="checkbox" />
            <label>광고/홍보영상</label>
          </div>
          <div>
            <input type="checkbox" />
            <label>온라인생중계</label>
          </div>
          <div>
            <input type="checkbox" />
            <label>애니메이션</label>
          </div>
          <div>
            <input type="checkbox" />
            <label>촬영</label>
          </div>
          <div>
            <input type="checkbox" />
            <label>편집/자막</label>
          </div>
          <div>
            <input type="checkbox" />
            <label>기타</label>
          </div>
        </div>
      </div>
      <div className="location infoDiv">
        <label>소재지</label>
        <div>
          <input type="text" />
        </div>
      </div>
    </InfoSection>
  );
}

export default Info;
