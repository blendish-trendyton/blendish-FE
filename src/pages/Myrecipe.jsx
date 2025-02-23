import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import * as M from "../styles/StyledMR";
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

const Myrecipe = () => {
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
        const response = await api.get("/user/myrecipes", {
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
    <M.Container>
      <M.Nav>
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
      </M.Nav>
      <M.Title>
        <div>나의 레시피</div>
      </M.Title>
      <M.Box>
        <M.List>
          {recipes.map((recipe) => (
            <M.RecipeItem key={recipe.recipeId}>
              <img src={recipe.foodImage} alt={`레시피 - ${recipe.name}`} />
            </M.RecipeItem>
          ))}
        </M.List>
      </M.Box>
    </M.Container>
  );
};

export default Myrecipe;
