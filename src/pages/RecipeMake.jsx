import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import * as R from "../styles/StyledRM";
import Dropdown from "./RecipeDrop"; // ✅ 공통 드롭다운 컴포넌트 가져오기
import TasteDropdown from "./TasteDrop";
// import axios from "axios";

const RecipeMaker = () => {
  // ✅ 각 드롭다운 선택 상태 관리
  const [selectedTime, setSelectedTime] =
    useState("원하는 조리 시간을 선택하세요.");
  const [selectedLevel, setSelectedLevel] =
    useState("원하는 조리 난이도를 선택하세요.");
  const [selectedTaste, setSelectedTaste] = useState("");
  const [selectedSpicy, setSelectedSpicy] =
    useState("매운 맛 정도를 선택하세요.");

  const navigate = useNavigate();

  const gocustom = () => {
    navigate(`/customrecipe`);
  };

  const gome = () => {
    navigate(`/me`);
  };

  const gowrite = () => {
    navigate(`/write`);
  };

  const [isTooltipVisible, setIsTooltipVisible] = useState(false);

  const toggleTooltip = () => {
    setIsTooltipVisible(!isTooltipVisible);
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
      <R.Hrbox></R.Hrbox>
      <R.Content>
        <R.Box>
          <R.Type>
            <input
              id="puttype"
              type="text"
              placeholder="요리 종류를 입력하세요."
            />
          </R.Type>
          <R.Time>
            <Dropdown
              options={["~ 15분", "~ 30분", "~ 1시간", "~ 2시간", "2시간 이상"]}
              selected={selectedTime}
              setSelected={setSelectedTime}
              multiple={false} // 단일 선택
            />
          </R.Time>
          <R.Level>
            <Dropdown
              options={["상", "중", "하"]}
              selected={selectedLevel}
              setSelected={setSelectedLevel}
              multiple={false} // 단일 선택
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
              selected={selectedTaste}
              setSelected={setSelectedTaste}
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
              selected={selectedSpicy}
              setSelected={setSelectedSpicy}
              multiple={false} // 단일 선택
            />
          </R.Spicy>
        </R.Box>
        <R.Go onClick={gocustom}>
          <div id="go">커스텀 레시피 보기</div>
        </R.Go>
      </R.Content>
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
          <R.Search>
            <img
              src={`${process.env.PUBLIC_URL}/images/Search.svg`}
              alt="검색"
            />
            <div>검색</div>
          </R.Search>
          <R.Home>
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
