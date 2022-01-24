import React, { useState, useRef } from "react";
import { ProInfoSection } from "../../../CSS/MyPortpolio/UploadCSS.js";
import { Spinner } from "react-bootstrap";
import MapPicker from "../../../../utils/view/Area/MapPicker";
import LinkModal from "./LinkModal.js";
import Select from "react-select";
import axios from "axios";

function Info(props) {
  const ref = useRef();

  const [Loading, setLoading] = useState(false);
  const [LinkFlag, setLinkFlag] = useState(false);
  const [LocatioFlag, setLocatioFlag] = useState(false);

  const options = [
    { value: "배우", label: "배우" },
    { value: "촬영", label: "촬영" },
    { value: "편집", label: "편집" },
    { value: "기획", label: "기획" },
    { value: "조명", label: "조명" },
    { value: "음향", label: "음향" },
    { value: "성우", label: "성우" },
    { value: "미용", label: "미용" },
    { value: "기타", label: "기타" },
  ];

  const genderOptions = [
    { value: "남자", label: "남자" },
    { value: "여자", label: "여자" },
  ];

  const selectStyles = {
    container: (provided) => ({
      ...provided,
      width: "100% !important",
    }),
    valueContainer: (provided) => ({
      ...provided,
      width: "100% !important",
    }),
    indicatorsContainer: (provided) => ({
      ...provided,
      width: "15% !important",
    }),
    menuList: (provided) => ({
      ...provided,
      width: "100% !important",
    }),
    option: (provided) => ({
      ...provided,
      width: "100% !important",
    }),
    control: (provided) => ({
      ...provided,
      width: "100% !important",
      border: "1px solid #acb0b4",
    }),
  };

  const ImgUploadHandler = async (e) => {
    setLoading(true);
    let formData = new FormData();
    const config = {
      header: { "content-type": "multipart.form-data" },
    };
    formData.append("file", e.target.files[0]);
    await axios
      .post("/api/portfolio/prod/profile", formData, config)
      .then((response) => {
        setLoading(false);
        if (response.data.success) {
          props.setProfileImg(response.data.filePath);
        } else {
          alert("파일을 저장하는 데 실패하였습니다.");
        }
      });
  };

  const LinkTypeCheck = (type) => {
    if (type === null) {
      return <i className="bi bi-link-45deg" />;
    }
    // eslint-disable-next-line default-case
    switch (type[0]) {
      case "youtu":
        return <i className="bi bi-youtube" />;
      case "instagram":
        return <i className="bi bi-instagram" />;
      case "facebook":
        return <i className="bi bi-facebook" />;
      case "linkedin":
        return <i className="bi bi-linkedin" />;
      case "twitter":
        return <i className="bi bi-twitter" />;
      case "vimeo":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-vimeo"
            viewBox="0 0 16 16"
          >
            <path d="M15.992 4.204c-.071 1.556-1.158 3.687-3.262 6.393-2.175 2.829-4.016 4.243-5.522 4.243-.933 0-1.722-.861-2.367-2.583L3.55 7.523C3.07 5.8 2.556 4.94 2.007 4.94c-.118 0-.537.253-1.254.754L0 4.724a209.56 209.56 0 0 0 2.334-2.081c1.054-.91 1.845-1.388 2.373-1.437 1.243-.123 2.01.728 2.298 2.553.31 1.968.526 3.19.646 3.666.36 1.631.756 2.446 1.186 2.445.334 0 .836-.53 1.508-1.587.671-1.058 1.03-1.863 1.077-2.415.096-.913-.263-1.37-1.077-1.37a3.022 3.022 0 0 0-1.185.261c.789-2.573 2.291-3.825 4.508-3.756 1.644.05 2.419 1.117 2.324 3.2z" />
          </svg>
        );
    }
  };

  const LocationClickFunc = (e) => {
    e.preventDefault();
    setLocatioFlag(true);
  };

  const LocationDeleteHandler = (idx) => {
    let temp = [...props.Location];
    var removed = temp.splice(idx, 1);
    props.setLocation([...temp]);
  };

  return (
    <>
      <ProInfoSection>
        <div className="profileImg">
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
              <img src={props.ProfileImg} />
            </label>
          )}
          <div className="links">
            <div>
              {props.LinkArr.map((item, idx) => {
                let key = item.value.match(
                  /youtu|instagram|facebook|linkedin|twitter|vimeo/i
                );
                let Tag = LinkTypeCheck(key);
                return (
                  <span
                    className={item.value !== "" ? "active" : null}
                    key={idx}
                    onClick={() => setLinkFlag(idx + 1)}
                  >
                    {Tag}
                  </span>
                );
              })}
            </div>
          </div>
        </div>

        <div className="name infoDiv">
          <label>이름</label>
          <div className="contentDiv">
            <input
              type="text"
              value={props.Name}
              onChange={(e) => props.setName(e.currentTarget.value)}
            />
          </div>
        </div>
        <div className="proName infoDiv">
          <label>활동명</label>
          <div className="contentDiv">
            <input
              type="text"
              value={props.ProName}
              onChange={(e) => props.setProName(e.currentTarget.value)}
            />
          </div>
        </div>
        <div className="gender infoDiv">
          <label>성별</label>
          <div className="dropdown">
            <Select
              options={genderOptions}
              styles={selectStyles}
              className="test"
              placeholder="성별"
              blurInputOnSelect="true"
              menuShouldBlockScroll="true"
              defaultValue={
                props.Gender &&
                options[
                  options.findIndex((obj, idx) => {
                    if (obj.value === props.Gender) return idx;
                  })
                ]
              }
              onChange={(e) => props.setGender(e.value)}
            />
          </div>
        </div>
        <div className="field infoDiv">
          <label>전문분야</label>
          <div className="dropdown">
            <Select
              options={options}
              styles={selectStyles}
              placeholder="파트"
              blurInputOnSelect="true"
              menuShouldBlockScroll="true"
              defaultValue={
                props.Field &&
                options[
                  options.findIndex((obj, idx) => {
                    if (obj.value === props.Field) return idx;
                  })
                ]
              }
              onChange={(e) => props.setField(e.value)}
            />
          </div>
        </div>
        <div className="location infoDiv">
          <label>소재지</label>
          <div>
            {props.Location.map((location, idx) => {
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
                  LocationArr={props.Location}
                  setLocationArr={props.setLocation}
                  setLocatioFlag={setLocatioFlag}
                />
              </div>
            )}
            <button
              onClick={(e) => LocationClickFunc(e)}
              disabled={LocatioFlag}
            >
              <i className="bi bi-plus-lg"></i>
            </button>
          </div>
        </div>
      </ProInfoSection>
      {LinkFlag && (
        <LinkModal
          LinkFlag={LinkFlag}
          setLinkFlag={setLinkFlag}
          LinkArr={props.LinkArr}
          setLinkArr={props.setLinkArr}
        />
      )}
    </>
  );
}

export default Info;
