import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "../styles/StyledSearch";
import * as M from "../styles/StyledMain";
import SeachBorder from "../assets/svg/searchBorder.svg";
import makerThin from "../assets/svg/makerThin.svg";
import searchBtn from "../assets/svg/searchBtn.svg";
import blackBackBtn from "../assets/svg/blackBackBtn.svg";
import menuSearchBtn from "../assets/svg/menuSearchBtn.svg";
import searchDelete from "../assets/svg/searchDelete.svg";
import grayUnderLine from "../assets/svg/grayUnderLine.svg";

const RecipeMore = () => {
  const navigate = useNavigate();
  const goHome = () => navigate("/");
  const goBack = () => navigate(-1);
  const gome = () => navigate(`/me`);
  const gowrite = () => navigate(`/write`);
  const goSearch = () => navigate(`/searchPageNext`);
  const goMaker = () => navigate(`/recipemaker`);
  //  검색 기록 상태
  const [searchHistory, setSearchHistory] = useState(["불고기", "김치볶음밥", "타코불고기"]);

  //  검색 입력값 상태
  const [searchInput, setSearchInput] = useState("");

  //  검색어 입력 핸들러
  const handleInputChange = (e) => {
    setSearchInput(e.target.value);
  };

  //  검색어 저장 핸들러 (Enter 키)
  const handleKeyPress = (e) => {
    if (e.key === "Enter" && searchInput.trim() !== "") {
      addSearchHistory(searchInput.trim());
      setSearchInput(""); // 입력창 초기화
    }
  };

  //  검색어 목록에 추가하는 함수
  const addSearchHistory = (newSearch) => {
    setSearchHistory((prevHistory) => {
      // 중복된 검색어가 있다면 삭제하고 가장 최근 위치로 이동
      const filteredHistory = prevHistory.filter((item) => item !== newSearch);
      return [newSearch, ...filteredHistory]; // 가장 앞에 추가
    });
  };

  //  전체 삭제 함수
  const clearHistory = () => {
    setSearchHistory([]);
  };

  //  개별 삭제 함수
  const deleteItem = (index) => {
    setSearchHistory(searchHistory.filter((_, i) => i !== index));
  };

  //  최근 검색어 클릭 시 입력창에 반영
  const handleSearchClick = (search) => {
    setSearchInput(search);
  };

  return (
    <S.Container>
      <S.Section>
        <S.SearchNext>
          <img src={blackBackBtn} className="backBtn" alt="뒤로가기"></img>
          <input
            type="text"
            placeholder="레시피의 제목을 입력하세요."
            value={searchInput}
            onChange={handleInputChange}
            onKeyPress={handleKeyPress}
            className="recipeBtn"
          />
          <img src={searchBtn} alt="레시피 검색"></img>
        </S.SearchNext>

        {/*  검색 기록이 있을 때만 렌더링 */}
        {searchHistory.length > 0 && (
          <S.SearchBox>
            <S.SearchIn>
              <h4>최근 검색어</h4>
              <span style={{ margin: "40px 23px 0 0", cursor: "pointer" }} onClick={clearHistory}>
                전체삭제
              </span>
            </S.SearchIn>

            {/*  검색어 목록 표시 */}
            {searchHistory.map((item, index) => (
              <S.SearchIn key={index}>
                <S.MenuBox onClick={() => handleSearchClick(item)}>
                  <img src={menuSearchBtn} alt="검색 아이콘"></img>
                  <span>{item}</span>
                </S.MenuBox>
                <img src={searchDelete} alt="삭제" style={{ cursor: "pointer" }} onClick={() => deleteItem(index)} />
              </S.SearchIn>
            ))}
          </S.SearchBox>
        )}

        <img src={grayUnderLine} style={{ width: "100%" }} alt="구분선"></img>
        <p style={{ padding: "8px 26px", color: "#6A6A6A" }}>자동 저장 끄기</p>
      </S.Section>

      <M.Nav>
        <M.Hr />
        <M.Item>
          <M.Maker onClick={goMaker}>
            <img src={makerThin} alt="메이커" />
            <div>메이커</div>
          </M.Maker>
          <M.Search>
            <img src={SeachBorder} alt="검색" />
            <div>검색</div>
          </M.Search>
          <M.Home onClick={goHome}>
            <img src={`${process.env.PUBLIC_URL}/images/Home.svg`} alt="홈" />
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
    </S.Container>
  );
};

export default RecipeMore;
