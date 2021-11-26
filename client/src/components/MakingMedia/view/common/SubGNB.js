import React, { useEffect } from "react";
import { useHistory, withRouter, Link } from "react-router-dom";
import { SubGNBDiv, TopArea } from "../../css/CommonCSS.js";
import Dropdown from "react-bootstrap/Dropdown";
import qs from "qs";

function SubGNB(props) {
  let history = useHistory();

  useEffect(() => {
    console.log(props.URL);
  }, []);

  const SetUrl = () => {
    switch (props.URL.category) {
      case "영상 제작자 탐색":
        return "/ProducerUpload";
      case "영상 의뢰하기":
        return "/RequestUpload";
      case "제작 영상 알리기":
        return "/ShareUpload";
      default:
        return "/ProducerUpload";
    }
  };

  return (
    <>
      {props.URL.category === "메이킷 페이 안내" ? null : (
        <>
          <SubGNBDiv>
            {(props.URL.category === "영상 제작자 탐색" ||
              props.URL.category === "영상 의뢰하기") && (
              <ul>
                {props.SubCategoryList.map((list, idx) => {
                  return (
                    <li
                      key={idx}
                      className={
                        list === props.URL.subCategory ? "active" : null
                      }
                      onClick={() =>
                        props.history.push(
                          `?category=${props.URL.category}&subCategory=${list}&sort=인기순&pIdx=0`
                        )
                      }
                    >
                      {list}
                    </li>
                  );
                })}
              </ul>
            )}
          </SubGNBDiv>
          <TopArea>
            <Dropdown id="sort">
              <Dropdown.Toggle id="dropdown-basic">
                {props.URL.sort}
              </Dropdown.Toggle>
              <Dropdown.Menu id="dropdown-menu">
                <Dropdown.Item
                  onClick={() => {
                    props.URL.sort = "인기순";
                    props.URL.pIdx = 0;
                    history.push(`?${decodeURI(qs.stringify(props.URL))}`);
                  }}
                  className={props.URL.sort === "인기순" ? "active" : null}
                >
                  인기순
                </Dropdown.Item>
                <Dropdown.Item
                  onClick={() => {
                    props.URL.sort = "최신순";
                    props.URL.pIdx = 0;
                    history.push(`?${decodeURI(qs.stringify(props.URL))}`);
                  }}
                  className={props.URL.sort === "최신순" ? "active" : null}
                >
                  최신순
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <div className="upload">
              <Link to={`/making${SetUrl()}`}>
                <button className="postBtn">게시하기</button>
              </Link>
            </div>
          </TopArea>
        </>
      )}
    </>
  );
}

export default withRouter(SubGNB);
