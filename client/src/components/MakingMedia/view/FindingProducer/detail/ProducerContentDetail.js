import React from 'react'

function ProducerContentDetail(props) {
    return (
        <div style={{filter: "drop-shadow(5px 3px 4px rgba(0, 0, 0, 0.25))"}}>
            <ul style={{display: "flex", width: "100%", justifyContent: "space-around", marginTop: "50px", listStyle: "none", padding: "0px", marginBottom: "0px"}}>
                <a href="#detail" style={{width: "100%", marginRight: "0.5rem", border: "none", textAlign:"center", borderRadius: "10px 10px 0px 0px", background: "#DEC3F8", boxShadow: "0px 2px 10px rgba(178, 3, 108, 0.03), 0px 9px 30px rgba(163, 1, 79, 0.05)", position: "relative", zIndex:"1"}}><li >상세 설명</li></a>
                
                <a href="#price" style={{width: "100%", marginRight: "0.5rem", border: "none", textAlign:"center", borderRadius: "10px 10px 0px 0px", background: "#F7EFFF", boxShadow: "0px 2px 10px rgba(178, 3, 108, 0.03), 0px 9px 30px rgba(163, 1, 79, 0.05)", position: "relative", zIndex:"1"}}><li>가격정책</li></a>
                <a href="#edit" style={{width: "100%", marginRight: "0.5rem", border: "none", textAlign:"center", borderRadius: "10px 10px 0px 0px", background: "#F7EFFF", boxShadow: "0px 2px 10px rgba(178, 3, 108, 0.03), 0px 9px 30px rgba(163, 1, 79, 0.05)", position: "relative", zIndex:"1"}}><li>수정/환불 안내</li></a>
                <a href="#review" style={{width: "100%", border: "none", textAlign:"center", borderRadius: "10px 10px 0px 0px", background: "#F7EFFF", boxShadow: "0px 2px 10px rgba(178, 3, 108, 0.03), 0px 9px 30px rgba(163, 1, 79, 0.05)", position: "relative", zIndex:"1"}}><li>서비스 평가</li></a>
            </ul>
            <div style={{background: "#DEC3F8", padding: "10px", position: "relative", zIndex: "5"}}>
                <div id="detail" style={{background: "whitesmoke", padding: "15px"}}>
                    <p style={{borderBottom: "1px solid #CACACA", paddingBottom: "10px", marginBottom: "20px", fontWeight:"bold", fontSize:"20px"}}>상세 설명</p>
                    <div>
                    {
                        props.PostInfo.workTypeArr.length > 0 && (
                            <div>
                                <p>작업 유형</p>
                                {
                                    props.PostInfo.workTypeArr.map((work, idx) => {
                                        return (
                                            <span>{work}</span>
                                        )
                                    })
                                }
                            </div>
                        )
                    }
                    {
                        props.PostInfo.videoPurposeArr.length > 0 && (
                            <div>
                                <p>영상 목적</p>
                                {
                                    props.PostInfo.videoPurposeArr.map((purpose, idx) => {
                                        return (
                                            <span>{purpose}</span>
                                        )
                                    })
                                }
                            </div>
                        )
                    }
                        <div>
                            <p style={{fontWeight:"bold"}}>서비스 설명</p>
                            <div style={{textAlign:"center"}}>{props.PostInfo.description}</div>
                        </div>
                        <div>
                            <p style={{fontWeight:"bold"}}>포트폴리오</p>
                            <div style={{textAlign:"center"}}>포폴포폴</div>
                        </div>
                    </div>
                </div>
                <div id="price" style={{background: "whitesmoke", padding: "15px"}}>
                    <p style={{borderBottom: "1px solid #CACACA", paddingBottom: "10px", marginBottom: "20px", fontWeight:"bold", fontSize:"20px"}}>가격 정책</p>
                    <div>
                        {props.PostInfo.priceInfo}
                    </div>
                </div>
                <div id="edit" style={{background: "whitesmoke", padding: "15px"}}>
                    <p style={{borderBottom: "1px solid #CACACA", paddingBottom: "10px", marginBottom: "20px", fontWeight:"bold", fontSize:"20px"}}>수정/환불 안내</p>
                    <div>
                        가. 기본 환불 규정<br />
                        1. 전문가와 의뢰인의 상호 협의하에 청약 철회 및 환불이 가능합니다.<br />
                        2. 섭외, 대여 등 사전 준비 도중 청약 철회 시, 해당 비용을 공제한 금액을 환불 가능합니다.<br />
                        3. 촬영 또는 편집 작업 착수 이후 청약 철회 시, 진행된 작업량 또는 작업 일수를 산정한 금액을 공제한 금액을 환불 가능합니다.<br /><br />
                        [환불 가이드라인]<br />
                        (1) 기획 단계에서 청약 철회: 총 결제 금액의 최대 80%까지 환불 가능<br />
                        (2) 작업 착수 후 청약 철회: 총 결제 금액의 최대 20%까지 환불 가능<br />
                        (3) 작업 50% 완료 후 청약 철회: 총 결제 금액의 최대 10%까지 환불 가능<br />
                        (4) 작업 100% 완료 후 청약 철회 : 환불 불가<br /><br />

                        나. 전문가 책임 사유<br />
                        1. 소비자 피해 보상 규정에 의거하여 촬영 원본의 멸실 및 재해로 인한 피해 발생 시, 전액 환불합니다.<br />
                        2. 작업 기간 미준수, 작업 태만 및 이에 상응하는 전문가 책임으로 인한 청약 철회 시, 환불 및 촬영 원본 제공이 가능합니다.<br /><br />

                        다. 의뢰인 책임 사유<br />
                        작업이 시작되면 단순 변심 또는 의뢰인 책임 사유로 인한 전액 환불이 불가능합니다.<br />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProducerContentDetail
