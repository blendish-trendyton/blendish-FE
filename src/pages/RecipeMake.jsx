import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import * as R from "../styles/StyledRM";
import Dropdown from "./RecipeDrop"; // ✅ 공통 드롭다운 컴포넌트 가져오기
import TasteDropdown from "./TasteDrop";
import axios from "../api/axiosConfig"; // ✅ 설정된 axios 가져오기

const RecipeMaker = () => {
  // ✅ 각 드롭다운 선택 상태 관리
  const [category, setCategory] = useState("");
  const [cookingTime, setCookingTime] =
    useState("원하는 조리 시간을 선택하세요.");
  const [difficulty, setDifficulty] =
    useState("원하는 조리 난이도를 선택하세요.");
  const [tastes, setTastes] = useState([]);
  const [spiceLevel, setSpiceLevel] = useState("선호하지 않음"); // 초기값 설정

  const navigate = useNavigate();

  const gome = () => {
    navigate(`/me`);
  };

  const gowrite = () => {
    navigate(`/write`);
  };

  const goSearch = () => {
    navigate(`/searchPageNext`);
  };
  const goMaker = () => {
    navigate(`/recipemaker`);
  };
  const goHome = () => {
    navigate(`/`);
  };

  const [isTooltipVisible, setIsTooltipVisible] = useState(false);

  const toggleTooltip = () => {
    setIsTooltipVisible(!isTooltipVisible);
  };

  // 🔹 Taste(복수 선택) -> 쉼표(", ") 없이 배열 그대로 유지
  const handleTasteChange = (selected) => {
    setTastes(selected);
  };

  // 🔹 Spicy(🌶️ 개수) -> 숫자로 변환
  const handleSpicyChange = (selected) => {
    setSpiceLevel(selected === "선호하지 않음" ? 0 : selected.length);
  };

  // ✅ Form 제출 (POST 요청)
  const handleSubmit = async (e) => {
    e.preventDefault();

    // 🔸 필수 입력 값 확인
    if (
      !category ||
      cookingTime === "원하는 조리 시간을 선택하세요." ||
      difficulty === "원하는 조리 난이도를 선택하세요." ||
      tastes.length === 0 ||
      spiceLevel === 0
    ) {
      alert("모든 창을 입력해주세요!");
      return; // 🚨 입력이 안 된 경우 요청을 보내지 않음
    }

    const requestData = {
      category,
      cookingTime: parseInt(cookingTime),
      difficulty,
      tastes,
      spiceLevel: typeof spiceLevel === "number" ? spiceLevel : 0,
    };

    try {
      const response = await axios.post("/api/gpt/recipe", requestData);
      console.log("✅ 성공:", response.data);
      // alert("레시피가 성공적으로 생성되었습니다!");
      navigate(`/customrecipe`);
    } catch (error) {
      console.error("❌ 에러:", error);
      alert("레시피 생성에 실패했습니다.");
    }
  };

  return (
    <R.Container>
      <R.Title>
        <div id="name">레시피 메이커</div>
        <img
          id="info"
          src={`${process.env.PUBLIC_URL}/images/Information.svg`}
          alt="info"
          onClick={toggleTooltip} // 이미지 클릭 시 툴팁 표시/숨김 토글
        />
        {isTooltipVisible && (
          <R.Tooltip>
            <div>
              AI를 기반으로 사용자의 옵션 선택에 따라 기존에 없던 새로운
              레시피를
              <br />
              기존의 레시피와 함께 제공합니다. 더욱 다양한 요리를 만들어 보세요!
            </div>
          </R.Tooltip>
        )}
      </R.Title>
      <R.Hrbox />
      <form onSubmit={handleSubmit}>
        <R.Content>
          <R.Box>
            <R.Type>
              <input
                id="puttype"
                type="text"
                placeholder="요리 종류를 입력하세요."
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              />
            </R.Type>
            <R.Time>
              <Dropdown
                options={[
                  "~ 15분",
                  "~ 30분",
                  "~ 1시간",
                  "~ 2시간",
                  "2시간 이상",
                ]}
                selected={cookingTime}
                setSelected={setCookingTime}
                multiple={false}
              />
            </R.Time>
            <R.Level>
              <Dropdown
                options={["상", "중", "하"]}
                selected={difficulty}
                setSelected={setDifficulty}
                multiple={false}
              />
            </R.Level>
            <R.Taste>
              <TasteDropdown
                options={[
                  "단 맛",
                  "짠 맛",
                  "신 맛",
                  "감칠 맛",
                  "기름진 맛",
                  "담백한 맛",
                  "매운 맛",
                ]}
                selected={tastes}
                setSelected={handleTasteChange}
              />
            </R.Taste>
            <R.Spicy>
              <Dropdown
                options={[
                  "선호하지 않음",
                  "🌶️",
                  "🌶️🌶️",
                  "🌶️🌶️🌶️",
                  "🌶️🌶️🌶️🌶️",
                  "🌶️🌶️🌶️🌶️🌶️",
                ]}
                selected={
                  typeof spiceLevel === "number"
                    ? "🌶️".repeat(spiceLevel)
                    : spiceLevel
                }
                setSelected={handleSpicyChange}
                multiple={false}
              />
            </R.Spicy>
          </R.Box>
          <R.Go>
            <button type="submit" id="go">
              커스텀 레시피 보기
            </button>
          </R.Go>
        </R.Content>
      </form>
      <R.Nav>
        <R.Hr />
        <R.Item>
          <R.Maker>
            <img
              src={`${process.env.PUBLIC_URL}/images/MakerY.svg`}
              alt="메이커"
            />
            <div>메이커</div>
          </R.Maker>
          <R.Search onClick={goSearch}>
            <img
              src={`${process.env.PUBLIC_URL}/images/Search.svg`}
              alt="검색"
            />
            <div>검색</div>
          </R.Search>
          <R.Home onClick={goHome}>
            <img src={`${process.env.PUBLIC_URL}/images/Home.svg`} alt="홈" />
            <div>홈</div>
          </R.Home>
          <R.Write onClick={gowrite}>
            <img
              src={`${process.env.PUBLIC_URL}/images/Write.svg`}
              alt="작성"
            />
            <div>작성</div>
          </R.Write>
          <R.Me onClick={gome}>
            <img src={`${process.env.PUBLIC_URL}/images/Me.svg`} alt="나" />
            <div>내정보</div>
          </R.Me>
        </R.Item>
      </R.Nav>
    </R.Container>
  );
};

export default RecipeMaker;
