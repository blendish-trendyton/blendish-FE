import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "../styles/StyledSearch";
import * as L from "../styles/StyledSearchList";
import * as M from "../styles/StyledMain";
import SeachBorder from "../assets/svg/searchBorder.svg";
import makerThin from "../assets/svg/makerThin.svg";
import searchBtn from "../assets/svg/searchBtn.svg";
import blackBackBtn from "../assets/svg/blackBackBtn.svg";
import mainFood1 from "../assets/svg/mainFood1.svg";
import bulgogi2 from "../assets/svg/bulgogi2.svg";
import bulgogi3 from "../assets/svg/bulgogi3.svg";

const RecipeMore = () => {
  const navigate = useNavigate();
  const goHome = () => navigate("/");
  const goBack = () => navigate(-1);
  const gome = () => navigate(`/me`);
  const gowrite = () => navigate(`/write`);
  const goSearch = () => navigate(`/searchPageNext`);
  const goSearchListDetail = () => navigate(`/searchList/detail`);
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
    <L.Container>
      <L.SearchNext>
        <img src={blackBackBtn} className="backBtn" alt="뒤로가기" onClick={goBack}></img>
        <input
          type="text"
          placeholder="레시피의 제목을 입력하세요."
          value={searchInput}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
          className="recipeBtn"
        />
        <img src={searchBtn} alt="레시피 검색"></img>
      </L.SearchNext>
      <L.Result>
        <p>
          <strong>총 3개</strong> 검색 결과
        </p>
        <L.ResultBox>
          <img src={mainFood1}></img>
          <div className="ResultText">
            <p>광양 불고기</p>
            <div>고기를 얇게 저민 후 양념을 바로 묻힌 뒤 숯불 위에 석쇠를 올리고 고기를 얹어서 볶듯이 뒤집어서 굽는다.</div>
            <button onClick={goSearchListDetail}>전체 게시글 보기</button>
          </div>
        </L.ResultBox>
        <L.ResultBox>
          <img src={bulgogi2}></img>
          <div className="ResultText">
            <p>간장 불고기</p>
            <div>짭조름하고 달콤한 간장 양념이 깊은 감칠맛을 내며, 부드러운 육질이 매력적인 한국식 가정 요리.</div>
            <button>전체 게시글 보기</button>
          </div>
        </L.ResultBox>
        <L.ResultBox>
          <img src={bulgogi3}></img>
          <div className="ResultText">
            <p>간장 불고기</p>
            <div>짭고추장과 고춧가루의 매콤한 양념이 어우러져 입맛을 자극하는 화끈한 별미 불고기.</div>
            <button>전체 게시글 보기</button>
          </div>
        </L.ResultBox>
      </L.Result>
      <M.Nav>
        <M.Hr />
        <M.Item>
          <M.Maker>
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
    </L.Container>
  );
};

export default RecipeMore;
