import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import * as C from "../styles/StyledCustom";
// import axios from "axios";

const Customrecipe = () => {
  const navigate = useNavigate();

  const goback = () => {
    navigate(-1);
  };

  const gorec = () => {
    navigate(`/recipedet`);
  };

  return (
    <C.Container>
      <C.Nav>
        <img
          id="back"
          src={`${process.env.PUBLIC_URL}/images/Goback.svg`}
          alt="뒤로가기기"
          onClick={goback}
        />
        <img
          id="home"
          src={`${process.env.PUBLIC_URL}/images/Gohome.svg`}
          alt="홈"
        />
      </C.Nav>
      <C.Title>커스텀 레시피</C.Title>
      <C.Hash>
        <C.Cate>
          <div>빵</div>
        </C.Cate>
      </C.Hash>
      <C.Hr />
      <C.Result>
        <C.Figure>
          <div id="bold">총 4개</div>
          <div id="letter">레시피</div>
        </C.Figure>
        <C.List>
          <C.Recipe>
            <div id="title">블루베리 베이글</div>
            <div id="content">
              고기를 얇게 저민 후 양념을 바로 묻힌 뒤 숯불 위에 석쇠를 올리고
              고기를 얹어서 볶듯이 뒤집어서 굽는다.
            </div>
            <C.Gorecipe onClick={gorec}>
              <div>레시피 보기</div>
            </C.Gorecipe>
          </C.Recipe>
        </C.List>
      </C.Result>
    </C.Container>
  );
};

export default Customrecipe;
