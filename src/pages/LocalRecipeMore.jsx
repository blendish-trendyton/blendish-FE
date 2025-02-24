import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as R from "../styles/StyledRecipeMore";
import * as M from "../styles/StyledMain";
import backBtn from "../assets/svg/blackBackBtn.svg";
import home from "../assets/svg/home.svg";
import CommentLine from "../assets/svg/CommentLine.svg";
import blackUnderLine from "../assets/svg/blackUnderLine.svg";
import grayUnderLine from "../assets/svg/grayUnderLine.svg";
import local1 from "../assets/img/local1.png";
import local2 from "../assets/img/local2.png";
import local3 from "../assets/img/local3.png";
import local4 from "../assets/img/local4.png";
import local5 from "../assets/img/local5.png";
import local6 from "../assets/img/local6.png";

const LocalRecipeMore = () => {
  const navigate = useNavigate();
  const goHome = () => navigate("/");
  const goBack = () => navigate(-1);

  //   현재 선택된 버튼 상태 (기본 식재료 or 현지 식재료)
  const [activeButton, setActiveButton] = useState("basic");

  //   기본 식재료 리스트
  const basicIngredients = [
    { name: "쇠고기", amount: "250g" },
    { name: "설탕", amount: "1 큰술" },
    { name: "다진마늘", amount: "1 큰술" },
    { name: "맛술", amount: "1 큰술" },
    { name: "간장", amount: "6 큰술" },
    { name: "매실액", amount: "1 큰술" },
    { name: "후추", amount: "1/16 큰술" },
  ];

  //   현지 식재료 리스트
  const localIngredients = [
    { name: "쇠고기", amount: "250g" },
    { name: "leak", amount: "1/9개" },
    { name: "애플사이더 비니거", amount: "1 큰술" },
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
          <img src={local1} alt="조리 과정" />
          <span>
            소고기(등심 또는 채끝) 250g을 얇게 썬 후 키친타월로 핏물을 제거한 후에 소고기, 마늘, 후추, 진간장, 설탕, 맛술, 참기름을 넣고 조물조물 재워두어
            냉장실에 30분 보관합니다.
          </span>
        </R.Recipe>
        <R.Recipe>
          <button>2</button>
          <img src={local2} alt="조리 과정" />
          <span>프라이팬에 식용유를 넣고 데워줍니다.</span>
        </R.Recipe>
        <R.Recipe>
          <button>3</button>
          <img src={local3} alt="조리 과정" />
          <span>프라이팬이 뜨거워지면 센 불에서 고기를 볶아 줍니다.</span>
        </R.Recipe>
        <R.Recipe>
          <button>4</button>
          <img src={local4} alt="조리 과정" />
          <span>고기에 물기가 생기지 않게 계속 강불에서 빠르게 볶아 주세요.</span>
        </R.Recipe>
        <R.Recipe>
          <button>5</button>
          <img src={local5} alt="조리 과정" />
          <span>계속 강불에서 물기 생기지 않게 빠르게 볶아 줍니다. 고기가 바삭될 때 까지 계속 볶아 줍니다.</span>
        </R.Recipe>
        <R.Recipe>
          <button>6</button>
          <img src={local6} alt="조리 과정" />
          <span>바삭불고기 완성입니다.</span>
        </R.Recipe>
      </R.RecipeBox>
    </R.Container>
  );
};

export default LocalRecipeMore;
