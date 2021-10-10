import React from "react";
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import styled from "@emotion/styled";

const breakpoints = [1200, 576];
const mq = breakpoints.map((bp) => `@media (max-width: ${bp}px)`);

function CommonRule() {
  return (
    <Content>
      <ul>
        <li className="title">가. 기본 환불 규정</li>
        <ul className="list">
          <li>
            1. 전문가와 의뢰인의 상호 협의하에 청약철회 및 환불이 가능합니다.
          </li>
          <li>
            2. 섭외, 대여 등 사전 준비 도중 청약 철회 시, 해당 비용을 공제한
            금액을 환불 가능합니다.
          </li>
          <li>
            3. 촬영 또는 편집 작업 착수 이후 청약 철회 시, 진행된 작업량 또는
            작업 일수를 산정한 금액을 공제한 금액을 환불 가능합니다.
          </li>
        </ul>
        <li className="title">[환불 가이드라인]</li>
        <ul className="list">
          <li>
            (1) 기획 단계에서 청약 철회: 총 결제 금액의 최대 80%까지 환불 가능
          </li>
          <li>
            (2) 작업 착수 후 청약 철회: 총 결제 금액의 최대 20%까지 환불 가능
          </li>
          <li>
            (3) 작업 50% 완료 후 청약 철회: 총 결제 금액의 최대 10%까지 환불
            가능
          </li>
          <li>(4) 작업 100% 완료 후 청약 철회 : 환불 불가 </li>
        </ul>
        <li className="title">나. 전문가 책임 사유</li>
        <ul className="list">
          <li>
            1. 소비자 피해 보상 규정에 의거하여 촬영 원본의 멸실 및 재해로 인한
            피해 발생 시, 전액 환불합니다.
          </li>
          <li>
            2. 작업 기간 미준수, 작업 태만 및 이에 상응하는 전문가 책임으로 인한
            청약 철회 시, 환불 및 촬영 원본 제공이 가능합니다.
          </li>
        </ul>
        <li className="title">다. 의뢰인 책임 사유</li>
        <ul className="list">
          <li>
            작업이 시작되면 단순 변심 또는 의뢰인 책임 사유로 인한 전액 환불이
            불가능합니다.
          </li>
        </ul>
      </ul>
    </Content>
  );
}

export default CommonRule;

const Content = styled.div`
  text-align: left;
  word-break: keep-all;
  ul {
    list-style: none;
    padding-left: 0px;
    li {
      &.title {
        font-weight: bold;
        margin-top: 1rem;
      }
    }
    &.list {
      padding-left: 1rem;
    }
  }
`;
