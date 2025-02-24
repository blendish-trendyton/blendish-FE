import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import * as R from "../styles/StyledRecipeMore";
import * as M from "../styles/StyledMain";
import backBtn from "../assets/svg/blackBackBtn.svg";
import home from "../assets/svg/home.svg";
import CommentLine from "../assets/svg/CommentLine.svg";
import blackUnderLine from "../assets/svg/blackUnderLine.svg";
import grayUnderLine from "../assets/svg/grayUnderLine.svg";
import Recipe1 from "../assets/svg/Recipe1.svg"; // 디폴트 이미지

const RecipeMore = () => {
  const navigate = useNavigate();
  const { recipeId } = useParams(); // URL에서 recipeId 가져오기

  const [recipeData, setRecipeData] = useState(null); // 레시피 데이터 저장
  const [errorMessage, setErrorMessage] = useState(""); // 오류 메시지 저장
  const [loading, setLoading] = useState(true); // 로딩 상태 추가

  // ✅ 로컬스토리지에서 토큰 가져오기
  const token = localStorage.getItem("user_token");

  // ✅ 로그인되지 않은 경우 로그인 페이지로 리디렉트
  useEffect(() => {
    if (!token) {
      console.warn("🔑 토큰이 없음, 로그인 페이지로 이동");
      navigate("/login");
    }
  }, [token, navigate]);

  useEffect(() => {
    const fetchRecipeDetails = async () => {
      if (!token) return;

      try {
        const response = await fetch(`https://junyeongan.store/api/community/AllDetailRecipe?recipeId=${recipeId}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          throw new Error(`HTTP 오류! 상태 코드: ${response.status}`);
        }

        const result = await response.json();
        console.log("📩 레시피 전체 상세 응답:", result);

        if (result.status === 200 && result.data) {
          setRecipeData(result.data);
        } else {
          setErrorMessage("레시피 데이터를 불러올 수 없습니다.");
        }
      } catch (error) {
        console.error("❌ 레시피 데이터 가져오기 실패:", error.message);
        setErrorMessage("서버 오류가 발생했습니다.");
      } finally {
        setLoading(false);
      }
    };

    if (recipeId) {
      fetchRecipeDetails();
    }
  }, [recipeId, token]);

  const goHome = () => navigate("/");
  const goBack = () => navigate(-1);

  return (
    <R.Container>
      <R.Header>
        <img src={backBtn} onClick={goBack} alt="뒤로 가기" />
        <img src={home} className="home" onClick={goHome} alt="홈" />
      </R.Header>

      {loading ? (
        <p style={{ textAlign: "center", marginTop: "20px" }}>로딩 중...</p>
      ) : errorMessage ? (
        <p style={{ color: "red", textAlign: "center", marginTop: "20px" }}>{errorMessage}</p>
      ) : recipeData ? (
        <>
          <R.FoodInfoBox>
            {recipeData.name}
            <R.FoodInfo>
              <button>난이도 : {recipeData.level || "N/A"}</button>
              <button>소요시간 : {recipeData.time || "정보 없음"}</button>
            </R.FoodInfo>
          </R.FoodInfoBox>

          <img src={CommentLine} alt="구분선" />

          {/* 필요 재료 렌더링 */}
          <R.IngredientBox>
            <R.Ingredient>
              <h4>필요 재료</h4>
              <span>(1인분)</span>
            </R.Ingredient>
            <img src={blackUnderLine} alt="구분선" />

            {recipeData.ingredients && recipeData.ingredients.length > 0 ? (
              recipeData.ingredients.map((ingredient, index) => (
                <React.Fragment key={index}>
                  <R.IngredientList>
                    <strong>{ingredient.amount}</strong>
                    <span>{ingredient.name}</span>
                  </R.IngredientList>
                  <img src={grayUnderLine} alt="구분선" />
                </React.Fragment>
              ))
            ) : (
              <p style={{ textAlign: "center", marginTop: "10px" }}>재료 정보가 없습니다.</p>
            )}
          </R.IngredientBox>

          <img src={CommentLine} style={{ marginTop: "20px" }} alt="구분선" />

          {/* 조리 방법 렌더링 */}
          <R.RecipeBox>
            <h4>조리 방법</h4>
            <img src={blackUnderLine} alt="구분선" />

            {recipeData.recipeSteps && recipeData.recipeSteps.length > 0 ? (
              recipeData.recipeSteps.map((step, index) => (
                <R.Recipe key={index}>
                  <button>{step.stepNum || index + 1}</button>
                  <img src={step.stepImage || Recipe1} alt={`조리 과정 ${step.stepNum}`} />
                  <span>{step.details || "조리 방법 정보가 없습니다."}</span>
                </R.Recipe>
              ))
            ) : (
              <p style={{ textAlign: "center", marginTop: "10px" }}>조리 방법 정보가 없습니다.</p>
            )}
          </R.RecipeBox>
        </>
      ) : null}
    </R.Container>
  );
};

export default RecipeMore;
