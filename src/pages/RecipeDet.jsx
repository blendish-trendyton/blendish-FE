import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import * as R from "../styles/StyledRD";
// import axios from "axios";

const Recipedet = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleBookmark = () => {
    setIsActive(!isActive); // 북마크 활성화 상태 토글
  };

  const navigate = useNavigate();

  const goback = () => {
    navigate(-1);
  };
  const goHome = () => {
    navigate(`/`);
  };

  return (
    <R.Container>
      <R.Nav>
        <img id="back" src={`${process.env.PUBLIC_URL}/images/Goback.svg`} alt="뒤로가기기" onClick={goback} />
        <img id="home" src={`${process.env.PUBLIC_URL}/images/Gohome.svg`} alt="홈" onClick={goHome} />
      </R.Nav>
      <R.Title>
        <div>블루베리 식빵</div>
        <img src={`${process.env.PUBLIC_URL}/images/${isActive ? "BookmarkY.svg" : "Bookmark.svg"}`} alt="북마크" onClick={toggleBookmark} />
      </R.Title>
      <R.Hr />
      <R.Ing>
        <R.Need>
          <div id="title">필요 재료</div>
          <div id="person">(1인분)</div>
        </R.Need>
        <R.Wnf />
        <R.List>
          <R.Food>
            <div id="food">블루베리</div>
            <div id="qunatity">150g</div>
          </R.Food>
          <R.Wnf1></R.Wnf1>
        </R.List>
      </R.Ing>
      <R.Hr1 />
      <R.Cook>
        <R.How>조리 방법</R.How>
        <R.Wnf2 />
        <R.Step>
          <R.No>
            <div>1</div>
          </R.No>
          <R.Content>
            <div>흐르는 물에 블루베리를 먼저 씻어주세요.</div>
          </R.Content>
        </R.Step>
      </R.Cook>
    </R.Container>
  );
};

export default Recipedet;
