import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "../styles/StyledSR";
import axios from "axios";

// ✅ Axios 인스턴스 생성 및 토큰 자동 포함 설정
const api = axios.create({
  baseURL: "https://junyeongan.store/api",
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("user_token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

const Savedrecipe = () => {
  const navigate = useNavigate();

  const goback = () => {
    navigate(-1);
  };

  // ✅ 등록한 레시피 상태 관리
  const [recipes, setRecipes] = useState([]);

  // ✅ 등록한 레시피 데이터 불러오기
  useEffect(() => {
    const fetchMyRecipes = async () => {
      try {
        const token = localStorage.getItem("user_token");
        const response = await api.get("/user/savedrecipes", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        // ✅ 응답 데이터 처리
        if (response.data && response.data.data) {
          setRecipes(response.data.data);
        }
      } catch (error) {
        console.error(
          "❌ 등록한 레시피 데이터를 불러오는 중 오류 발생:",
          error
        );
      }
    };

    fetchMyRecipes();
  }, []);

  return (
    <S.Container>
      <S.Nav>
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
      </S.Nav>
      <S.Title>
        <div>저장된 레시피</div>
      </S.Title>
      <S.Box>
        <S.List>
          {recipes.map((recipe) => (
            <S.RecipeItem key={recipe.recipeId}>
              <img src={recipe.foodImage} alt={`레시피 - ${recipe.name}`} />
            </S.RecipeItem>
          ))}
        </S.List>
      </S.Box>
    </S.Container>
  );
};

export default Savedrecipe;
