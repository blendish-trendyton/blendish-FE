import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as M from "../styles/StyledMain";
import mainLogo from "../assets/svg/mainLogo.svg";
import Good from "../assets/svg/good.svg";
import Comment from "../assets/svg/comment.svg";
import defaultFoodImage from "../assets/svg/mainFood1.svg"; // 기본 이미지 설정
import mainFood1 from "../assets/svg/mainFood1.svg"; // 기본 이미지 설정
import mainFood2 from "../assets/svg/mainFood2.svg";
import mainFood3 from "../assets/svg/mainFood3.svg";
import mainFood4 from "../assets/svg/mainFood4.svg";
import home from "../assets/img/home.png";
import makerThin from "../assets/svg/makerThin.svg";
const Main = () => {
  // 페이지 이동
  const navigate = useNavigate();
  const gome = () => navigate(`/me`);
  const gowrite = () => navigate(`/write`);
  const goHome = () => navigate("/");
  const goSearchPage = () => navigate(`/searchPage`);
  const goMaker = () => navigate(`/recipemaker`);

  const [errorMessage, setErrorMessage] = useState(""); // 오류 메시지 상태 추가
  const [todayRecipes, setTodayRecipes] = useState([]); // API 데이터 저장
  const [hotRecipes, setHotRecipes] = useState([]); // 인기 레시피 API 데이터 저장

  // 오늘의 레시피
  useEffect(() => {
    const fetchTodayRecipes = async () => {
      try {
        const token =
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJ1c2VybmFtZSI6InVzZXI0NTYiLCJyb2xlIjoiUk9MRV9BRE1JTiIsImlhdCI6MTc0MDAzOTQ1OCwiZXhwIjoxNzQwMjEyMjU4fQ.4GrE6MSLAPqnrIzG48iBaxY4U_IrukJ0W51RDl-KjGM"; // 로그인 후 받은 토큰

        const response = await fetch("https://junyeongan.store/api/community/TodayRecipe", {
          method: "GET",
          mode: "cors",
          headers: {
            "Content-Type": "application/json",
            Authorization: token, // Bearer 토큰 추가
          },
        });

        if (!response.ok) {
          throw new Error(`HTTP 오류! 상태 코드: ${response.status}`);
        }

        const result = await response.json();
        console.log("📩 오늘의 레시피 API 응답:", result);

        if (result.status === 200 && Array.isArray(result.data)) {
          setTodayRecipes(result.data);
        } else {
          console.error("데이터 형식이 올바르지 않음");
        }
      } catch (error) {
        console.error("오늘의 레시피 데이터 가져오기 실패:", error.message);
      }
    };

    // 인기 레시피
    const fetchHotRecipes = async () => {
      try {
        const token =
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJ1c2VybmFtZSI6InVzZXI0NTYiLCJyb2xlIjoiUk9MRV9BRE1JTiIsImlhdCI6MTc0MDAzOTQ1OCwiZXhwIjoxNzQwMjEyMjU4fQ.4GrE6MSLAPqnrIzG48iBaxY4U_IrukJ0W51RDl-KjGM"; // 로그인 후 받은 토큰

        const response = await fetch("https://junyeongan.store/api/community/HotRecipe", {
          method: "GET",
          mode: "cors",
          headers: {
            "Content-Type": "application/json",
            Authorization: token,
          },
        });

        if (!response.ok) {
          throw new Error(`HTTP 오류! 상태 코드: ${response.status}`);
        }

        const result = await response.json();
        console.log("인기 레시피 API 응답:", result);

        if (result.status === 200 && Array.isArray(result.data)) {
          setHotRecipes(result.data);
        } else {
          console.error("인기 레시피 데이터 형식이 올바르지 않음");
        }
      } catch (error) {
        console.error("인기 레시피 데이터 가져오기 실패:", error.message);
      }
    };

    fetchTodayRecipes();
    fetchHotRecipes();
  }, []);

  const goFoodDetail = (recipeId) => {
    navigate(`/foodDetail/${recipeId}`);
  };

  return (
    <M.Container>
      <M.TodayR>
        <img src={mainLogo} alt="Main Logo" className="mainLogo" />
        <h4>오늘의 레시피</h4>
        <div className="todayR">
          {todayRecipes.length > 0 ? (
            todayRecipes.map((recipe) => (
              <div key={recipe.recipeId} onClick={() => goFoodDetail(recipe.recipeId)}>
                {/* 이미지가 없을 경우 기본 이미지 사용 */}
                <img src={recipe.foodImage ? recipe.foodImage : defaultFoodImage} alt={recipe.name} className="recipe-box" />
                <span>{recipe.name}</span>
              </div>
            ))
          ) : (
            <p>오늘의 추천 레시피가 없습니다.</p>
          )}
        </div>
      </M.TodayR>
      <M.Famous>
        <h4>인기 레시피</h4>
        <div className="famousR">
          {hotRecipes.length > 0 ? (
            hotRecipes.map((recipe) => (
              <div key={recipe.recipeId} onClick={() => goFoodDetail(recipe.recipeId)}>
                <img src={recipe.foodImage ? recipe.foodImage : defaultFoodImage} alt={recipe.name} className="recipe-box" />
                <p>{recipe.name}</p>
                <M.Reaction>
                  <img src={Good} alt="좋아요" />
                  <span>{recipe.likeCount}</span>
                  <img src={Comment} alt="댓글" />
                  <span>{recipe.commentCount}</span>
                </M.Reaction>
              </div>
            ))
          ) : (
            <p>인기 레시피가 없습니다.</p>
          )}
        </div>
      </M.Famous>
      <M.Nav>
        <M.Hr />
        <M.Item>
          <M.Maker onClick={goMaker}>
            <img src={makerThin} alt="메이커" />
            <div>메이커</div>
          </M.Maker>
          <M.Search onClick={goSearchPage}>
            <img src={`${process.env.PUBLIC_URL}/images/Search.svg`} alt="검색" />
            <div>검색</div>
          </M.Search>
          <M.Home onClick={goHome}>
            <img src={home} alt="홈" />
            <div>홈</div>
          </M.Home>
          <M.Write onClick={gowrite}>
            <img src={`${process.env.PUBLIC_URL}/images/Write.svg`} alt="작성" />
            <div>작성</div>
          </M.Write>
          <M.Me onClick={gome}>
            <img src={`${process.env.PUBLIC_URL}/images/Me.svg`} alt="나" />
            <div>내정보</div>
          </M.Me>
        </M.Item>
      </M.Nav>
    </M.Container>
  );
};

export default Main;
