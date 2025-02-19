import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import * as C from "../styles/StyledCustom";
import axios from "axios";

const Customrecipe = () => {
  const navigate = useNavigate();

  const goback = () => {
    navigate(-1);
  };

  const goHome = () => {
    navigate(`/`);
  };

  const [recipeData, setRecipeData] = useState(null);

  useEffect(() => {
    // 🔹 백엔드에서 데이터 가져오기
    const fetchRecipe = async () => {
      try {
        const response = await axios.get("/api/gpt/recipe");
        setRecipeData(response.data.data); // API 응답에서 'data' 객체 가져옴
      } catch (error) {
        console.error("❌ 레시피 데이터를 불러오는 데 실패했습니다.", error);
      }
    };

    fetchRecipe();
  }, []);

  if (!recipeData) {
    return <C.Container>로딩 중...</C.Container>;
  }

  // 🔹 데이터 변환

  const formattedData = [
    { label: "카테고리", value: recipeData.request.category },
    { label: "조리 시간", value: `~${recipeData.request.cookingTime}분` },
    {
      label: "매운 정도",
      value:
        recipeData.request.spiceLevel === 0
          ? "선호하지 않음"
          : "🌶️".repeat(recipeData.request.spiceLevel),
    },
    ...recipeData.request.tastes.map((taste) => ({
      label: "맛",
      value: taste,
    })),
  ];

  const parsedRecipes = recipeData.generatedRecipe.split("\n\n").map((item) => {
    const match = item.match(/\[(.*?)\]/); // 🔥 대괄호 안의 제목만 추출
    const title = match ? match[1] : "제목 없음";
    const content = item.split("요약:")[1]?.trim() || "내용 없음";
    return { title, content };
  });

  // 🔹 특정 레시피 페이지로 이동하는 함수 (title 전달)
  const gorec = (title) => {
    navigate("/recipedet", { state: { title } }); // 🔥 title 값을 함께 전송
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
            <div>
              {info.label}: {info.value}
            </div>
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
          {parsedRecipes.map((recipe, index) => (
            <C.Recipe key={index}>
              <div id="title">{recipe.title}</div>
              <div id="content">{recipe.content}</div>
              <C.Gorecipe onClick={gorec}>
                <div>레시피 보기</div>
              </C.Gorecipe>
            </C.Recipe>
          ))}
        </C.List>
      </C.Result>
    </C.Container>
  );
};

export default Customrecipe;
