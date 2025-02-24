import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "../styles/StyledSearch";
import * as M from "../styles/StyledMain";
import SeachBorder from "../assets/svg/searchBorder.svg";
import makerThin from "../assets/svg/makerThin.svg";
import searchBtn from "../assets/svg/searchBtn.svg";
import mainFood1 from "../assets/svg/mainFood1.svg";
import mainFood2 from "../assets/svg/mainFood2.svg";

const SearchPage = () => {
  const navigate = useNavigate();
  const [popularSearches, setPopularSearches] = useState([]); // 🔹 인기 검색어 상태
  const [searchInput, setSearchInput] = useState(""); // 🔹 검색 입력 상태

  // 로컬스토리지에서 토큰 가져오기
  const token = localStorage.getItem("user_token");

  // 로그인되지 않은 경우 로그인 페이지로 리디렉트
  useEffect(() => {
    if (!token) {
      console.warn("🔑 토큰이 없음, 로그인 페이지로 이동");
      navigate("/login");
    }
  }, [token, navigate]);

  // 인기 검색어 가져오기
  useEffect(() => {
    const fetchPopularSearches = async () => {
      try {
        const response = await fetch("https://junyeongan.store/api/community/getTenhigher", {
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
        console.log("인기 검색어 API 응답:", result);

        if (result.status === 200 && Array.isArray(result.data)) {
          setPopularSearches(result.data); // 데이터 저장
        } else {
          console.error("인기 검색어 데이터 형식이 올바르지 않음");
        }
      } catch (error) {
        console.error("인기 검색어 가져오기 실패:", error.message);
      }
    };

    fetchPopularSearches();
  }, [token]);

  // 검색 실행 함수
  const handleSearch = () => {
    if (!searchInput.trim()) return;
    navigate(`/searchList/detail?query=${encodeURIComponent(searchInput.trim())}`);
  };

  // 인기 검색어 클릭 시 검색 결과 페이지로 이동
  const handlePopularSearchClick = (query) => {
    navigate(`/searchList/detail?query=${encodeURIComponent(query)}`);
  };

  // 엔터 키 입력 시 검색 실행
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  const goHome = () => navigate("/");
  const goMe = () => navigate(`/me`);
  const goWrite = () => navigate(`/write`);
  const goMaker = () => navigate(`/recipemaker`);
  return (
    <S.Container>
      {/* 검색 입력 필드 */}
      <S.Search>
        <input
          placeholder="레시피의 제목을 입력하세요."
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          onKeyPress={handleKeyPress} // 🔹 엔터 키 이벤트 추가
          onClick={() => navigate("/SearchPageNext")} // 🔹 클릭 시 바로 이동
        />
        <img src={searchBtn} alt="레시피 검색" onClick={handleSearch} />
      </S.Search>

      <h4>최근에 봤던 레시피</h4>
      <S.RecentlyBox>
        <S.Recently>
          <img src={mainFood1} alt="최근 레시피 1" />
          <p style={{ margin: "8px 0 " }}>광양 불고기</p>
        </S.Recently>
        <S.Recently>
          <img src={mainFood2} alt="최근 레시피 2" />
          <p style={{ margin: "8px 0 " }}>매운 떡볶이</p>
        </S.Recently>
      </S.RecentlyBox>

      <S.Fdiv>
        <h4>인기 검색어</h4>
      </S.Fdiv>

      {/* 인기 검색어 목록 */}
      <S.FamouseBox>
        {popularSearches.length > 0 ? (
          popularSearches.map((item, index) => (
            <S.Famouse key={item.recipeId} onClick={() => handlePopularSearchClick(item.name)}>
              <S.Fcontent>
                <button>{index + 1}</button>
                <div>{item.name}</div>
              </S.Fcontent>
            </S.Famouse>
          ))
        ) : (
          <p style={{ textAlign: "center", margin: "10px 0" }}>데이터 없음</p>
        )}
      </S.FamouseBox>

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
          <M.Write onClick={goWrite}>
            <img src={`${process.env.PUBLIC_URL}/images/Write.svg`} alt="작성" />
            <div>작성</div>
          </M.Write>
          <M.Me onClick={goMe}>
            <img src={`${process.env.PUBLIC_URL}/images/Me.svg`} alt="나" />
            <div>내정보</div>
          </M.Me>
        </M.Item>
      </M.Nav>
    </S.Container>
  );
};

export default SearchPage;
