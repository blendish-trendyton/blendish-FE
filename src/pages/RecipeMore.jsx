import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import * as R from "../styles/StyledRecipeMore";
import * as M from "../styles/StyledMain";
import backBtn from "../assets/svg/blackBackBtn.svg";
import home from "../assets/svg/home.svg";
import CommentLine from "../assets/svg/CommentLine.svg";
import blackUnderLine from "../assets/svg/blackUnderLine.svg";
import grayUnderLine from "../assets/svg/grayUnderLine.svg";
import Recipe1 from "../assets/svg/Recipe1.svg";

// import axios from "axios";

const RecipeMore = () => {
  const navigate = useNavigate();

  const goHome = () => {
    navigate("/");
  };
  const goBack = () => {
    navigate(-1);
  };

  return (
    <R.Container>
      <R.Header>
        <img src={backBtn} onClick={goBack}></img>
        <img src={home} className="home" onClick={goHome}></img>
      </R.Header>
      <R.FoodInfoBox>
        토마토 파스타
        <R.FoodInfo>
          <button>난이도 : 하</button>
          <button>소요시간 : ~ 15분</button>
        </R.FoodInfo>
      </R.FoodInfoBox>
      {/* 섹션 변경 라인*/}
      <img src={CommentLine}></img>
      <R.IngredientBox>
        <R.Ingredient>
          <h4>필요 재료</h4>
          <span>(1인분)</span>
        </R.Ingredient>
        <img src={blackUnderLine}></img>
        <R.IngredientList>
          <span>토마토 소스</span>
          <strong>150g</strong>
        </R.IngredientList>
        <img src={grayUnderLine}></img>
        <R.IngredientList>
          <span>양파</span>
          <strong>1/3개</strong>
        </R.IngredientList>
        <img src={grayUnderLine}></img>
        <R.IngredientList>
          <span>다진 돼지고기</span>
          <strong>100g</strong>
        </R.IngredientList>
        <img src={grayUnderLine}></img>
        <R.IngredientList>
          <span>스파게티 면</span>
          <strong>150g</strong>
        </R.IngredientList>
        <img src={grayUnderLine}></img>
        <R.IngredientList>
          <span>파마산 치즈가루</span>
          <strong>1 큰술</strong>
        </R.IngredientList>
        <img src={grayUnderLine}></img>
      </R.IngredientBox>
      <img src={CommentLine} style={{ marginTop: "20px" }}></img> {/* 섹션 변경 라인*/}
      <R.RecipeBox>
        <h4>조리 방법</h4>
        <img src={blackUnderLine}></img>
        <R.Recipe>
          <button>1</button>
          <img src={Recipe1}></img>
          <span>냄비에 물 1L정도를 붓고 강불에서 끓입니다. 물이 끓기 시작하면 소금 1작은술을 넣습니다.</span>
        </R.Recipe>
        <R.Recipe>
          <button>2</button>
          <img src={Recipe1}></img>
        </R.Recipe>
      </R.RecipeBox>
    </R.Container>
  );
};

export default RecipeMore;
