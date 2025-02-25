import React from "react";
import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import * as R from "../styles/StyledRD";
import axios from "axios";

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

  const location = useLocation();
  const { recipe } = location.state || {}; // 🔥 전달받은 레시피 데이터

  if (!recipe) {
    return <R.Container>로딩 중...</R.Container>;
  }
  // 🔍 재료 데이터 추출 (재료 팁 전까지 추출)
  const ingredientsMatch = recipe.fullContent.match(
    /- ([\s\S]*?)(?=- 재료 팁:|- 조리 순서:)/
  );
  const ingredients = ingredientsMatch
    ? ingredientsMatch[1]
        .trim()
        .split(/\n\s*-\s*/) // 각 재료 항목을 줄바꿈과 '-'로 분리
        .map((item) => item.trim()) // 공백 제거
        .filter((item) => item.length > 0) // 빈 항목 제거
    : [];

  // 🔍 재료 데이터 정제 (음식명과 수량 구분)
  const formattedIngredients = ingredients.map((item) => {
    // 1️⃣ 음식명과 수량을 ":" 기준으로 분리
    const splitByColon = item.split(/:\s*/);

    if (splitByColon.length === 2) {
      return {
        food: splitByColon[0].trim(), // 음식명
        quantity: splitByColon[1].trim(), // 수량
      };
    } else {
      // 2️⃣ ":"이 없는 경우 → 마지막 단어를 음식명으로 추출, 앞부분은 수량 처리
      const words = item.split(" ");
      const food = words.pop(); // 마지막 단어를 음식명으로 설정
      const quantity = words.join(" "); // 나머지는 수량으로 처리
      return {
        food: food,
        quantity: quantity || "약간", // 수량 없으면 기본값으로 '약간'
      };
    }
  });

  // 🔍 조리 순서 추출 (fullContent에서 직접 추출)
  const stepsMatch = recipe.fullContent.match(/조리 순서:\s*([\s\S]*)/);
  const steps = stepsMatch
    ? stepsMatch[1]
        .trim()
        .split(/\n/) // 줄바꿈 기준으로 분리
        .map((step, index) => ({
          number: index + 1, // 순서 번호
          content: step.replace(/^\s*\d+[\.\s]*/, ""), // 🔥 숫자, 점, 공백 모두 제거
        }))
    : [];

  console.log("레시피 내용:", recipe.fullContent);
  console.log("원본 재료 목록:", ingredients);
  console.log("정제된 재료 데이터:", formattedIngredients);

  return (
    <R.Container>
      <R.Nav>
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
          onClick={goHome}
        />
      </R.Nav>
      <R.Title>
        <div>{recipe.title}</div>
        <img
          src={`${process.env.PUBLIC_URL}/images/${
            isActive ? "BookmarkY.svg" : "Bookmark.svg"
          }`}
          alt="북마크"
          onClick={toggleBookmark}
        />
      </R.Title>
      <R.Hr />
      <R.Ing>
        <R.Need>
          <div id="title">필요 재료</div>
          <div id="person">(1인분)</div>
        </R.Need>
        <R.Wnf />
        <R.List>
          {formattedIngredients.map((ingredient, index) => (
            <R.Food key={index}>
              <div id="food">{ingredient.food}</div>
              <div id="quantity">{ingredient.quantity}</div>
            </R.Food>
          ))}
          <R.Wnf1 />
        </R.List>
      </R.Ing>
      <R.Hr1 />
      <R.Cook>
        <R.How>조리 방법</R.How>
        <R.Wnf2 />
        {steps.map((step, index) => (
          <R.Step key={index}>
            <R.No>
              <div>{step.number}</div> {/* 🔹 순서 번호 */}
            </R.No>
            <R.Content>
              <div>{step.content}</div> {/* 🔹 조리 내용 */}
            </R.Content>
          </R.Step>
        ))}
      </R.Cook>
    </R.Container>
  );
};

export default Recipedet;
