import React from 'react'
import ReviewForm from "./content/ReviewForm.js";
import Rule from "../../../../utils/rule/MakingMedia/FindingProducer/CommonRule.js";

function ProducerContentDetail(props) {
    return (
        <div style={{filter: "drop-shadow(5px 3px 4px rgba(0, 0, 0, 0.25))"}}>
            <ul style={{display: "flex", width: "100%", justifyContent: "space-around", marginTop: "50px", listStyle: "none", padding: "0px", marginBottom: "0px"}}>
                <a href="#detail" style={{width: "100%", marginRight: "0.5rem", padding: "10px 0px", border: "none", textAlign:"center", borderRadius: "10px 10px 0px 0px", background: "#DEC3F8", boxShadow: "0px 2px 10px rgba(178, 3, 108, 0.03), 0px 9px 30px rgba(163, 1, 79, 0.05)", position: "relative", zIndex:"1"}}><li >상세 설명</li></a>
                
                <a href="#price" style={{width: "100%", marginRight: "0.5rem", padding: "10px 0px", border: "none", textAlign:"center", borderRadius: "10px 10px 0px 0px", background: "#F7EFFF", boxShadow: "0px 2px 10px rgba(178, 3, 108, 0.03), 0px 9px 30px rgba(163, 1, 79, 0.05)", position: "relative", zIndex:"1"}}><li>가격정책</li></a>
                <a href="#edit" style={{width: "100%", marginRight: "0.5rem", padding: "10px 0px", border: "none", textAlign:"center", borderRadius: "10px 10px 0px 0px", background: "#F7EFFF", boxShadow: "0px 2px 10px rgba(178, 3, 108, 0.03), 0px 9px 30px rgba(163, 1, 79, 0.05)", position: "relative", zIndex:"1"}}><li>수정/환불 안내</li></a>
                <a href="#review" style={{width: "100%", padding: "10px 0px", border: "none", textAlign:"center", borderRadius: "10px 10px 0px 0px", background: "#F7EFFF", boxShadow: "0px 2px 10px rgba(178, 3, 108, 0.03), 0px 9px 30px rgba(163, 1, 79, 0.05)", position: "relative", zIndex:"1"}}><li>서비스 평가</li></a>
            </ul>
            <div style={{background: "#DEC3F8", padding: "10px", position: "relative", zIndex: "5"}}>
                <div style={{background: "white", padding: "30px", borderRadius: "10px"}}>
                    <div id="detail" style={{marginBottom: "10%"}}>
                        <p style={{borderBottom: "1px solid #CACACA", paddingBottom: "10px", marginBottom: "20px", fontWeight:"bold", fontSize:"20px"}}>상세 설명</p>
                        <div>
                        {
                            props.PostInfo.workTypeArr.length > 0 && (
                                <div style={{marginBottom: "20px"}}>
                                    <p style={{marginBottom: "5px", fontWeight: "bold"}}>작업 유형</p>
                                    {
                                        props.PostInfo.workTypeArr.map((work, idx) => {
                                            return (
                                                <span style={{background: "#F7EFFF", borderRadius:"16px", padding: "0px 10px", marginRight: "10px"}}>{work}</span>
                                            )
                                        })
                                    }
                                </div>
                            )
                        }
                        {
                            props.PostInfo.videoPurposeArr.length > 0 && (
                                <div style={{marginBottom: "20px"}}>
                                    <p style={{marginBottom: "5px", fontWeight: "bold"}}>영상 목적</p>
                                    {
                                        props.PostInfo.videoPurposeArr.map((purpose, idx) => {
                                            return (
                                                <span style={{background: "#F7EFFF", borderRadius:"16px", padding: "0px 10px", marginRight: "10px"}}>{purpose}</span>
                                            )
                                        })
                                    }
                                </div>
                            )
                        }
                            <div style={{marginBottom: "20px"}}>
                                <p style={{fontWeight:"bold", marginBottom: "5px"}}>서비스 설명</p>
                                <div style={{textAlign:"center"}}>{props.PostInfo.description}</div>
                            </div>
                            <div style={{marginBottom: "20px"}}>
                                <p style={{fontWeight:"bold", marginBottom: "5px"}}>포트폴리오</p>
                                <div style={{textAlign:"center"}}>포폴포폴</div>
                            </div>
                        </div>
                    </div>
                    <div id="price" style={{marginBottom: "10%"}}>
                        <p style={{borderBottom: "1px solid #CACACA", paddingBottom: "10px", marginBottom: "20px", fontWeight:"bold", fontSize:"20px"}}>가격 정책</p>
                        <div>
                            {props.PostInfo.priceInfo}
                        </div>
                    </div>
                    <div id="edit" style={{marginBottom: "10%"}}>
                        <p style={{borderBottom: "1px solid #CACACA", paddingBottom: "10px", marginBottom: "20px", fontWeight:"bold", fontSize:"20px"}}>수정/환불 안내</p>
                        <Rule/>
                    </div>
                    {
                    props.PostInfo.FAQList.length > 0 && (
                    <div id="faq" style={{marginBottom: "10%"}}>
                        <p style={{borderBottom: "1px solid #CACACA", paddingBottom: "10px", marginBottom: "20px", fontWeight:"bold", fontSize:"20px"}}>FAQ</p>
                        {
                            props.PostInfo.FAQList.map((faq, idx) => {
                                return (
                                    <>
                                    <div style={{display: "flex", alignItems: "center"}}>
                                        <p style={{width: "5vw", fontWeight: "bold", fontSize: "20px"}}>Q.</p>
                                        <p style={{width: "95vw", border: "1px solid #CACACA", borderRadius: "8px", textAlign: "center", padding: "5px"}}>{faq.q}</p>
                                    </div>
                                    <div style={{display: "flex", alignItems: "center"}}>
                                        <p style={{width: "5vw", fontWeight: "bold", fontSize: "20px"}}>A.</p>
                                        <p style={{width: "95vw", border: "1px solid #CACACA", borderRadius: "8px", textAlign: "center", padding: "5px"}}>{faq.a}</p>
                                    </div>
                                    </>
                                )
                            })
                        }
                    </div>
                    )}
                    <div id="review" style={{marginBottom: "10%"}}>
                      <p style={{borderBottom: "1px solid #CACACA", paddingBottom: "10px", marginBottom: "20px", fontWeight:"bold", fontSize:"20px"}}>서비스 평가</p>
                      <ReviewForm PostURL={props.PostInfo.url} />
                    </div>
                </div>
            </div>
          </div>
  );
}

export default ProducerContentDetail;
