import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import * as M from "../styles/StyledMe";
import axios from "axios";

// ✅ Axios 인스턴스 생성
const api = axios.create({
  baseURL: "https://junyeongan.store/api", // 기본 API 주소 설정
  headers: {
    "Content-Type": "application/json",
  },
});

// ✅ 모든 요청에 토큰 자동 포함
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("user_token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

const Me = () => {
  const navigate = useNavigate();

  const gomaker = () => {
    navigate(`/recipemaker`);
  };

  const goedit = () => {
    navigate(`/editprofile`);
  };

  const gomyrec = () => {
    navigate(`/me/myrecipe`);
  };

  const savedrec = () => {
    navigate(`/me/savedrecipe`);
  };

  const gowrite = () => {
    navigate(`/write`);
  };
  const goHome = () => {
    navigate(`/`);
  };
  const goSearch = () => {
    navigate(`/searchPage`);
  };

  // ✅ 사용자 데이터 상태 관리
  const [userData, setUserData] = useState({
    userId: "",
    hometown: "",
    country: "",
    profilePic: "",
    tastePreference: [],
  });

  // ✅ 마이 레시피 & 저장된 레시피 상태 관리
  const [myRecipes, setMyRecipes] = useState([]);
  const [savedRecipes, setSavedRecipes] = useState([]);

  // ✅ 사용자 정보, 마이 레시피, 저장된 레시피 데이터 요청
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem("user_token");

        // 사용자 정보 요청
        const userResponse = await api.get("/user/me", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (userResponse.data && userResponse.data.data) {
          setUserData({
            userId: userResponse.data.data.userId,
            hometown: userResponse.data.data.hometown,
            country: userResponse.data.data.country,
            profilePic: userResponse.data.data.profilePic,
            tastePreference: userResponse.data.data.tastePreference || [],
          });
        }

        // 마이 레시피 요청
        const myRecipesResponse = await api.get("/user/myrecipes", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (myRecipesResponse.data && myRecipesResponse.data.data) {
          const recentMyRecipes = myRecipesResponse.data.data
            .slice(-4)
            .reverse();
          setMyRecipes(recentMyRecipes);
        }

        // 저장된 레시피 요청
        const savedRecipesResponse = await api.get("/user/savedrecipes", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (savedRecipesResponse.data && savedRecipesResponse.data.data) {
          const recentSavedRecipes = savedRecipesResponse.data.data
            .slice(-4)
            .reverse();
          setSavedRecipes(recentSavedRecipes);
        }
      } catch (error) {
        console.error("❌ 데이터 요청 중 오류 발생:", error);
      }
    };

    fetchUserData();
  }, []);

  // ✅ 모든 요청에 토큰 자동 포함
  api.interceptors.request.use((config) => {
    const token = localStorage.getItem("user_token");
    if (token) {
      config.headers.Authorization = ` ${token}`;
    }
    return config;
  });

  // ✅ 로그아웃 함수 추가
  const handleLogout = () => {
    localStorage.removeItem("user_token"); // 토큰 제거
    navigate("/"); // 메인페이지로 이동
  };

  return (
    <M.Container>
      <M.Back></M.Back>
      <M.Info>
        <M.Prof>
          {userData.profilePic && (
            <img src={userData.profilePic} alt="Profile" />
          )}{" "}
        </M.Prof>
        <M.Name>{userData.userId}</M.Name>
        <M.Country>
          <M.Hometown>
            <div id="home">고향 국가</div>
            <div id="homec">{userData.hometown}</div>
          </M.Hometown>
          <M.Hr2 />
          <M.Live>
            <div id="live">거주 국가</div>
            <div id="livec">{userData.country}</div>
          </M.Live>
        </M.Country>
        <M.Edit onClick={goedit}>
          <div>내 정보 수정</div>
        </M.Edit>
        <M.Logout onClick={handleLogout}>
          <div>로그아웃</div>
        </M.Logout>
      </M.Info>
      <M.Hr1></M.Hr1>

      {/* ✅ 마이 레시피 섹션 */}
      <M.Myr>
        <M.Myrecipe>나의 레시피</M.Myrecipe>
        <M.Myrecs>
          {myRecipes.map((recipe, index) => (
            <M.Rec1
              onClick={gomyrec}
              key={index}
              image={recipe.foodImage}
              isLast={index === myRecipes.length - 1} // 마지막 요소만 스타일 적용
            >
              {index === myRecipes.length - 1 ? (
                <>
                  <span>더보기 ></span>
                </>
              ) : (
                <img
                  src={recipe.foodImage}
                  alt={`레시피 이미지 ${index + 1}`}
                />
              )}
            </M.Rec1>
          ))}
        </M.Myrecs>
      </M.Myr>

      <M.Hr3 />

      {/* ✅ 저장된 레시피 섹션 */}
      <M.Sar>
        <M.Savedrecipe>저장된 레시피</M.Savedrecipe>
        <M.Savedrecs>
          {savedRecipes.map((recipe, index) => (
            <M.Sar1
              onClick={savedrec}
              key={index}
              image={recipe.foodImage}
              isLast={index === savedRecipes.length - 1} // 마지막 요소만 스타일 적용
            >
              {index === savedRecipes.length - 1 ? (
                <>
                  <span>더보기 ></span>
                </>
              ) : (
                <img
                  src={recipe.foodImage}
                  alt={`레시피 이미지 ${index + 1}`}
                />
              )}
            </M.Sar1>
          ))}
        </M.Savedrecs>
      </M.Sar>

      <M.Hr4 />
      <M.Save>
        <M.SaTi>저장된 커스텀 레시피</M.SaTi>
        <M.Slist>
          <M.Sl1>
            <div id="title">꿀 마늘 버터 토스트</div>
            <div id="btn">레시피 보기</div>
          </M.Sl1>
          <M.Sl2>
            <div id="title">치즈 인절미 토스트</div>
            <div id="btn">레시피 보기</div>
          </M.Sl2>
          <M.Sl3>
            <div id="title">고구마 치즈 스콘</div>
            <div id="btn">레시피 보기</div>
          </M.Sl3>
          <M.Sl4>
            <div id="title">옥수수 콘 브레드</div>
            <div id="btn">레시피 보기</div>
          </M.Sl4>
        </M.Slist>
        <M.Number>
          <img src={`${process.env.PUBLIC_URL}/images/Left.svg`} />
          <div id="black">1</div>
          <div>2</div>
          <div>3</div>
          <div>4</div>
          <img src={`${process.env.PUBLIC_URL}/images/Right.svg`} />
        </M.Number>
      </M.Save>

      <M.Nav>
        <M.Hr />
        <M.Item>
          <M.Maker onClick={gomaker}>
            <img
              src={`${process.env.PUBLIC_URL}/images/Maker.svg`}
              alt="메이커"
            />
            <div>메이커</div>
          </M.Maker>
          <M.Search onClick={goSearch}>
            <img
              src={`${process.env.PUBLIC_URL}/images/Search.svg`}
              alt="검색"
            />
            <div>검색</div>
          </M.Search>
          <M.Home onClick={goHome}>
            <img src={`${process.env.PUBLIC_URL}/images/Home.svg`} alt="홈" />
            <div>홈</div>
          </M.Home>
          <M.Write onClick={gowrite}>
            <img
              src={`${process.env.PUBLIC_URL}/images/Write.svg`}
              alt="작성"
            />
            <div>작성</div>
          </M.Write>
          <M.Me>
            <img src={`${process.env.PUBLIC_URL}/images/MeY.svg`} alt="나" />
            <div>내정보</div>
          </M.Me>
        </M.Item>
      </M.Nav>
    </M.Container>
  );
};

export default Me;
