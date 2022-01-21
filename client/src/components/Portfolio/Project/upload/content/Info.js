import React, { useState, useEffect, useRef } from "react";
import { Spinner } from "react-bootstrap";
import MapPicker from "../../../../utils/view/Area/MapPicker.js";

import axios from "axios";

import { InfoSection } from "../../../CSS/Project/ProjectUploadCSS.js";

function Info(props) {
  const ref = useRef();
  useOnClickOutside(ref, () => setLocatioFlag(false));

  const [Loading, setLoading] = useState(false);
  const [LocatioFlag, setLocatioFlag] = useState(false);

  const ImgUploadHandler = async (e) => {
    setLoading(true);
    let formData = new FormData();
    const config = {
      header: { "content-type": "multipart.form-data" },
    };
    formData.append("file", e.target.files[0]);
    await axios
      .post("/api/portfolio/project/profile", formData, config)
      .then((response) => {
        setLoading(false);
        if (response.data.success) {
          props.setImage(response.data.filePath);
        } else {
          alert("파일을 저장하는 데 실패하였습니다.");
        }
      });
  };

  const LocationClickFunc = (e) => {
    e.preventDefault();
    setLocatioFlag(true);
  };

  const LocationDeleteHandler = (idx) => {
    let temp = [...props.LocationArr];
    var removed = temp.splice(idx, 1);
    props.setLocationArr([...temp]);
  };

  return (
    <InfoSection>
      <div className="img">
        {Loading ? (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#c4c4c4",
              height: "auto",
              minHeight: "200px",
              borderRadius: "5px",
            }}
          >
            <Spinner animation="border" role="status">
              <span className="visually-hidden"></span>
            </Spinner>
          </div>
        ) : (
          <label>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => ImgUploadHandler(e)}
            />
            <img src={props.Image} />
          </label>
        )}
      </div>
      <div className="infoDiv introduce">
        <label>소개</label>
        <input
          type="text"
          value={props.Introduce}
          onChange={(e) => props.setIntroduce(e.currentTarget.value)}
        />
      </div>
      <div className="infoDiv detailContent">
        <label>세부내용</label>
        <textarea
          value={props.DetailContent}
          onChange={(e) => props.setDetailContent(e.currentTarget.value)}
        />
      </div>
      <div className="infoDiv location">
        <label>로케이션</label>
        <div>
          {props.LocationArr.map((location, idx) => {
            return (
              <div
                className="list"
                key={idx}
                onClick={() => LocationDeleteHandler(idx)}
              >
                {location}
              </div>
            );
          })}
          {LocatioFlag && (
            <div ref={ref}>
              <MapPicker
                LocationArr={props.LocationArr}
                setLocationArr={props.setLocationArr}
                setLocatioFlag={setLocatioFlag}
              />
            </div>
          )}
          <button onClick={(e) => LocationClickFunc(e)} disabled={LocatioFlag}>
            <i className="bi bi-plus-lg"></i>
          </button>
        </div>
      </div>
    </InfoSection>
  );
}

function useOnClickOutside(ref, handler) {
  useEffect(() => {
    const listener = (event) => {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      handler(event);
    };
    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);
    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, handler]);
}

export default Info;
