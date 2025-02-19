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

  const [recipeData, setRecipeData] = useState(null);

  const location = useLocation();
  const { title } = location.state || {}; // Customrecipe에서 넘긴 제목 정보

  useEffect(() => {
    // 🔹 특정 레시피 데이터를 가져오기
    const fetchRecipe = async () => {
      try {
        const response = await axios.get("/api/gpt/recipe");
        const recipes = response.data.data.generatedRecipe
          .split("\n\n") // 두 줄 개행 기준으로 나눔
          .find((item) => item.includes(`[${title}]`)); // 해당 제목을 포함하는 부분 찾기

        if (!recipes) {
          console.error("❌ 해당 레시피를 찾을 수 없습니다.");
          return;
        }

        setRecipeData(recipes);
      } catch (error) {
        console.error("❌ 레시피 데이터를 불러오는 데 실패했습니다.", error);
      }
    };

    if (title) {
      fetchRecipe();
    }
  }, [title]);

  if (!recipeData) {
    return <R.Container>로딩 중...</R.Container>;
  }

  // 🔹 `재료:` 부분에서 음식과 단위 분리
  const ingredientsMatch = recipeData.match(
    /재료:\s*(.*?)(?=\n- 조리 순서:|\n- 난이도:|\n- 요약:)/
  );
  const ingredients = ingredientsMatch ? ingredientsMatch[1].split(", ") : [];

  const formattedIngredients = ingredients.map((item) => {
    const match = item.match(/(.+?)\s([\d\D]+)/); // '음식명 단위' 패턴 추출
    return {
      food: match ? match[1] : item, // 음식명
      quantity: match ? match[2] : "", // 단위 (예: '1컵', '약간')
    };
  });

  // 🔹 `조리 순서:` 부분에서 조리 단계 추출
  const stepsMatch = recipeData.match(/조리 순서:\s*(.*)/);
  const steps = stepsMatch
    ? stepsMatch[1].split("\n").map((step, index) => ({
        number: index + 1, // 순서 번호
        content: step.replace(/^\d+\.\s*/, ""), // 숫자 제거 후 내용만
      }))
    : [];

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
        <div>{title}</div>
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
