import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as R from "../styles/StyledRecipeMore";
import * as M from "../styles/StyledMain";
import backBtn from "../assets/svg/blackBackBtn.svg";
import home from "../assets/svg/home.svg";
import CommentLine from "../assets/svg/CommentLine.svg";
import blackUnderLine from "../assets/svg/blackUnderLine.svg";
import grayUnderLine from "../assets/svg/grayUnderLine.svg";
import Recipe1 from "../assets/svg/Recipe1.svg";

const LocalRecipeMore = () => {
  const navigate = useNavigate();
  const goHome = () => navigate("/");
  const goBack = () => navigate(-1);

  //   현재 선택된 버튼 상태 (기본 식재료 or 현지 식재료)
  const [activeButton, setActiveButton] = useState("basic");

  //   기본 식재료 리스트
  const basicIngredients = [
    { name: "토마토 소스", amount: "150g" },
    { name: "양파", amount: "1/3개" },
    { name: "다진 돼지고기", amount: "100g" },
    { name: "스파게티 면", amount: "150g" },
    { name: "파마산 치즈가루", amount: "1 큰술" },
  ];

  //   현지 식재료 리스트
  const localIngredients = [
    { name: "쇠고기", amount: "250g" },
    { name: "양파", amount: "1/3개" },
    { name: "대파", amount: "1/9개" },
    { name: "간장", amount: "6큰술" },
    { name: "다진마늘", amount: "1 큰술" },
    { name: "참기름", amount: "1 큰술" },
    { name: "깨", amount: "1 큰술" },
    { name: "후추", amount: "1/16 작은술" },
  ];

  return (
    <R.Container>
      <R.Header>
        <img src={backBtn} onClick={goBack} alt="뒤로가기" />
        <img src={home} className="home" onClick={goHome} alt="홈" />
      </R.Header>

      <R.FoodInfoBox>
        집에서 하는 광양 불고기
        <R.FoodInfo>
          <button>난이도 : 중</button>
          <button>소요시간 : ~ 30분</button>
        </R.FoodInfo>
      </R.FoodInfoBox>

      {/* 섹션 변경 라인 */}
      <img src={CommentLine} alt="구분선" />

      {/*   버튼: 기본 식재료 / 현지 식재료 */}
      <R.LocalFlag>
        <button
          onClick={() => setActiveButton("basic")}
          style={{
            backgroundColor: activeButton === "basic" ? "#3d3d3d" : "#D9D9D9",
            color: activeButton === "basic" ? "#fff" : "#000",
          }}
        >
          기본 식재료
        </button>
        <button
          onClick={() => setActiveButton("local")}
          style={{
            backgroundColor: activeButton === "local" ? "#3d3d3d" : "#D9D9D9",
            color: activeButton === "local" ? "#fff" : "#000",
          }}
        >
          현지 식재료
        </button>
      </R.LocalFlag>

      {/*   식재료 리스트 */}
      <R.IngredientBox>
        <R.Ingredient>
          <h4>필요 재료</h4>
          <span>(1인분)</span>
        </R.Ingredient>
        <img src={blackUnderLine} alt="구분선" />

        {/* 선택된 식재료 리스트 출력 */}
        {(activeButton === "basic" ? basicIngredients : localIngredients).map((item, index) => (
          <div key={index}>
            <R.IngredientList>
              <span>{item.name}</span>
              <strong>{item.amount}</strong>
            </R.IngredientList>
            <img src={grayUnderLine} alt="구분선" />
          </div>
        ))}
      </R.IngredientBox>

      <img src={CommentLine} style={{ marginTop: "20px" }} alt="구분선" />

      {/* 조리 방법 */}
      <R.RecipeBox>
        <h4>조리 방법</h4>
        <img src={blackUnderLine} alt="구분선" />
        <R.Recipe>
          <button>1</button>
          <img src={Recipe1} alt="조리 과정" />
          <span>냄비에 물 1L정도를 붓고 강불에서 끓입니다. 물이 끓기 시작하면 소금 1작은술을 넣습니다.</span>
        </R.Recipe>
        <R.Recipe>
          <button>2</button>
          <img src={Recipe1} alt="조리 과정" />
        </R.Recipe>
      </R.RecipeBox>
    </R.Container>
  );
};

export default LocalRecipeMore;
