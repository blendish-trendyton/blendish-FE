import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import * as R from "../styles/StyledRM";
import Dropdown from "./RecipeDrop"; // ✅ 공통 드롭다운 컴포넌트 가져오기
import TasteDropdown from "./TasteDrop";
import axios from "../api/axiosConfig"; // ✅ 설정된 axios 가져오기

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
    navigate(`/searchPage`);
  };
  const goMaker = () => {
    navigate(`/recipemaker`);
  };
  const goHome = () => {
    navigate(`/`);
  };

  const [isLoading, setIsLoading] = useState(false); // ✅ 로딩 상태 추가

  const [isTooltipVisible, setIsTooltipVisible] = useState(false);

  const toggleTooltip = () => {
    setIsTooltipVisible(!isTooltipVisible);
  };

  // 🔹 Taste(복수 선택) -> 쉼표(", ") 없이 배열 그대로 유지
  const handleTasteChange = (selected) => {
    setTastes(selected);
  };

  const handleSpicyChange = (selected) => {
    if (selected === "선호하지 않음") {
      setSpiceLevel(0); // 명시적으로 0 설정
    } else {
      // 선택된 고추 개수만큼 매운 정도 설정
      const spicyCount = (selected.match(/🌶️/g) || []).length;
      setSpiceLevel(spicyCount);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      !category ||
      cookingTime === "원하는 조리 시간을 선택하세요." ||
      difficulty === "원하는 조리 난이도를 선택하세요." ||
      tastes.length === 0 ||
      spiceLevel === 0
    ) {
      alert("모든 창을 입력해주세요!");
      return;
    }

    const requestData = {
      category,
      cookingTime,
      difficulty,
      tastes,
      spiceLevel,
    };

    try {
      setIsLoading(true); // ✅ 로딩 시작
      const token = localStorage.getItem("user_token");
      const response = await api.post("/gpt/recipe", requestData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      navigate(`/customrecipe`, { state: { recipeData: response.data.data } });
    } catch (error) {
      console.error("레시피 생성 실패:", error);
      alert("레시피 생성에 실패했습니다.");
    } finally {
      setIsLoading(false); // ✅ 로딩 종료
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

      {isLoading ? (
        <R.LoadingOverlay>
          {" "}
          {/* ✅ 로딩 중일 때 표시 */}
          <div>
            레시피를 생성 중입니다... <br />
            잠시만 기다려주세요 🙌
          </div>
        </R.LoadingOverlay>
      ) : (
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
                    spiceLevel === 0 ? "선호하지 않음" : "🌶️".repeat(spiceLevel)
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
      )}
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
