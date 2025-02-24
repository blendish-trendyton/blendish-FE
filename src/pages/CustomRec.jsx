import React from "react";
import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import * as C from "../styles/StyledCustom";
import axios from "axios";

const api = axios.create({
  baseURL: "https://junyeongan.store/api",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json; charset=utf-8",
  },
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("user_token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

const Customrecipe = () => {
  const navigate = useNavigate();

  const goback = () => {
    navigate(-1);
  };

  const goHome = () => {
    navigate(`/`);
  };

  const location = useLocation();
  const [recipeData, setRecipeData] = useState(
    location.state?.recipeData || null
  );

  if (!recipeData) {
    return <C.Container>로딩 중...</C.Container>;
  }

  console.log(recipeData);

  // 🔹 데이터 변환
  const formattedData = [
    { value: recipeData.request.category },
    { value: recipeData.request.cookingTime },
    {
      label: "",
      value:
        recipeData.request.spiceLevel === 0
          ? "선호하지 않음"
          : "🌶️".repeat(recipeData.request.spiceLevel),
    },
    ...recipeData.request.tastes.map((taste) => ({
      label: "",
      value: taste,
    })),
  ];

  const generatedRecipeText = recipeData.generatedRecipe;

  // ✅ 도입부 텍스트 제거 (### 또는 숫자 시작 기준)
  const startIndex = generatedRecipeText.search(/###|^\d+\./m);
  const cleanedData = generatedRecipeText.slice(startIndex);

  // ✅ 레시피 분리 (### 또는 숫자 기준으로 분리)
  const recipeBlocks = cleanedData
    .split(/(?:###\s+|\n(?=\d+\.\s))/)
    .filter((block) => block.trim() !== "");

  const parsedRecipes = recipeBlocks
    .map((item, index) => {
      console.log(`🔥 레시피 블록 [${index + 1}]:`, item);

      // ✅ 제목 추출: ### 이후 제목 또는 숫자 이후 제목
      const titleMatch = item.match(/^(?:\d+\.\s+)?([^\n]+)/);
      const title = titleMatch ? titleMatch[1].trim() : `레시피 ${index + 1}`;

      // ✅ 요약 추출 (요약: ~ 재료: 사이)
      const contentMatch = item.match(/요약:\s*(.*?)\s*- 재료:/s);
      const content = contentMatch ? contentMatch[1].trim() : "요약 내용 없음";

      // ✅ 재료 추출 (재료: ~ 재료 팁: 또는 조리 순서: 사이)
      const ingredientsMatch = item.match(
        /재료:\s*([\s\S]*?)(?=- 재료 팁:|- 조리 순서:|$)/s
      );
      const ingredients = ingredientsMatch
        ? ingredientsMatch[1].trim()
        : "재료 정보 없음";

      // ✅ 전체 내용 추출 (재료부터 끝까지)
      const fullContentMatch = item.match(/재료:\s*([\s\S]*)/);
      const fullContent = fullContentMatch
        ? fullContentMatch[1].trim()
        : "전체 내용 없음";

      return {
        title,
        content,
        ingredients,
        fullContent,
      };
    })
    .filter((recipe) => recipe.title && recipe.content) // ❌ 제목과 요약이 없는 경우 제외
    .slice(0, 4); // ✅ 최대 4개만 추출

  console.log("✅ 최종 추출된 레시피 목록:", parsedRecipes);

  // 🔹 특정 레시피 페이지로 이동하는 함수 (전체 레시피 데이터 전달)
  const gorec = (recipe) => {
    navigate("/recipedet", { state: { recipe } }); // 🔥 전체 데이터 전송
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
          onClick={goHome}
          id="home"
          src={`${process.env.PUBLIC_URL}/images/Gohome.svg`}
          alt="홈"
        />
      </C.Nav>
      <C.Title>커스텀 레시피</C.Title>

      {/* 🔹 API 데이터를 `Cate`에 grid 배치 */}
      <C.Hash>
        {formattedData.map((info, index) => (
          <C.Cate key={index}>
            <div>{info.value}</div>
          </C.Cate>
        ))}
      </C.Hash>

      <C.Hr />
      <C.Result>
        <C.Figure>
          <div id="bold">총 4개</div>
          <div id="letter">레시피</div>
        </C.Figure>

        {/* 🔹 Recipe 리스트 (grid 적용) */}
        <C.List>
          {parsedRecipes && parsedRecipes.length > 0 ? (
            parsedRecipes.map((recipe, index) => (
              <C.Recipe key={index}>
                <div id="title">{recipe.title}</div>
                <div id="content">{recipe.content}</div>
                <C.Gorecipe onClick={() => gorec(recipe)}>
                  <div>레시피 보기</div>
                </C.Gorecipe>
              </C.Recipe>
            ))
          ) : (
            <div>레시피 데이터가 없습니다.</div> // 데이터가 없을 때 출력
          )}
        </C.List>
      </C.Result>
    </C.Container>
  );
};

export default Customrecipe;
