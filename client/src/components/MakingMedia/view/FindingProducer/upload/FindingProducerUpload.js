import React, { useState } from "react";
import {
  UploadForm,
  UploadHead,
  ContentDiv,
  LeftContent,
} from "./css/FPUploadCSS.js";
function FindingProducerUpload() {
  const UploadProcess = ["상세설명", "포트폴리오", "가격설정", "수정/환불안내"];

  const [CurrentProcess, setCurrentProcess] = useState("상세설명");

  return (
    <>
      <UploadHead>
        <div>
          <h1>
            <span>&lt;</span>
            게시하기
          </h1>
        </div>
      </UploadHead>
      <UploadForm>
        <input
          type="text"
          className="OneLineIntroduce"
          placeholder="한줄 소개 작성( 30자 이내로 작성해주세요. )"
        />
        <ContentDiv>
          <LeftContent>
            <div>
              <h1>제작자 게시하기</h1>
              <ul>
                {UploadProcess.map((process, idx) => {
                  return (
                    <li
                      key={idx}
                      className={CurrentProcess === process ? "active" : null}
                    >
                      {idx + 1}){process}
                    </li>
                  );
                })}
              </ul>
            </div>
          </LeftContent>
          <div className="rightContent">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa nisi
            repudiandae deleniti aspernatur distinctio nobis mollitia laboriosam
            sequi. Atque, veniam. Perferendis ducimus ut mollitia aliquid
            consequatur deserunt placeat blanditiis consequuntur! Lorem ipsum
            dolor sit amet, consectetur adipisicing elit. Commodi reprehenderit
            voluptas dolor a non magni consequatur corrupti aspernatur,
            doloribus veniam, necessitatibus id dolorum ipsa ab et earum.
            Debitis, tempore nisi. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Tempore ea, animi temporibus debitis iusto
            deleniti similique fugit voluptatem dicta! Iure consequuntur
            laudantium ducimus fugit veniam illum molestiae minus eos vitae?
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam
            vitae atque nam numquam, maxime fugiat culpa earum aspernatur rem
            aperiam qui excepturi iusto aliquam magni ut beatae totam odio nisi!
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Accusantium voluptatibus quia recusandae? Voluptas, vel quos.
            Assumenda, eius tempora fugit deleniti inventore suscipit, culpa
            vitae reprehenderit voluptatem hic, id harum? A.
          </div>
        </ContentDiv>
      </UploadForm>
    </>
  );
}

export default FindingProducerUpload;
