import React, { useState } from "react";
import { RegionData, LocalData } from "./MapData.js";

import styled from "@emotion/styled";

const MapDiv = styled.div`
  position: absolute;
  top: 1rem;
  left: 1rem;

  background-color: white;
  display: grid;
  grid-template-columns: 100px 300px;
  grid-template-rows: 230px;
  padding: 10px 20px;
  box-shadow: 0px 2px 10px rgba(178, 3, 108, 0.03),
    0px 9px 30px rgba(163, 1, 79, 0.05);
  border-radius: 15px;

  grid-template-areas: "regionZone localZone";
  grid-gap: 1rem;
  .regionZone {
    grid-area: regionZone;
  }
  .localZone {
    grid-area: localZone;
  }
  div {
    width: 100%;
    height: 100%;
    padding: 5px 0px;
    &.regionZone {
      overflow: hidden;
      border-right: 0.5px solid #c6c6c6;
    }
    ul {
      padding-left: 0px;
    }
  }
`;
const RegionUl = styled.ul`
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  padding-right: 1.5rem;
  box-sizing: content-box;
  list-style: none;
  li {
    list-style: none;
    width: 100%;
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
    user-select: none;
    cursor: pointer;
    &.active {
      font-weight: bold;
      color: #5a278b;
    }
  }
`;

const LocalUl = styled.ul`
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  list-style: none;
  li {
    list-style: none;
    width: auto;
    height: 14px;
    line-height: 14px;
    font-size: 14px;
    user-select: none;
    cursor: pointer;
    margin-right: 1rem;
    margin-bottom: 1rem;
    &:hover,
    &:focus {
      font-weight: bold;
      color: #5a278b;
    }
  }
`;

function MapPicker(props) {
  const [SelectedRegion, setSelectedRegion] = useState({
    key: "Seoul",
    value: "서울특별시",
  });

  const ClickFunc = (e, text) => {
    e.preventDefault();
    let target = SelectedRegion.value + " " + text;
    let temp = [...props.LocationArr];
    temp.push(target);
    props.setLocationArr([...temp]);
    props.setLocatioFlag(false);
  };

  return (
    <MapDiv style={{ width: "auto", position: "absolute" }}>
      <div className="regionZone">
        <RegionUl>
          {RegionData.map((region, idx) => {
            return (
              <li
                className={region.key == SelectedRegion.key ? "active" : null}
                key={idx}
                onClick={() => setSelectedRegion(region)}
              >
                {region.value}
              </li>
            );
          })}
        </RegionUl>
      </div>
      <div className="localZone">
        <LocalUl>
          {LocalData[SelectedRegion.key].map((local, idx) => {
            return (
              <li key={idx} onClick={(e) => ClickFunc(e, local)}>
                {local}
              </li>
            );
          })}
        </LocalUl>
      </div>
    </MapDiv>
  );
}

export default MapPicker;
