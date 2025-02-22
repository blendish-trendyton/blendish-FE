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
  const token = localStorage.getItem("authToken");
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

  // // ✅ 사용자 데이터 조회 요청
  // useEffect(() => {
  //   const fetchUserData = async () => {
  //     try {
  //       const response = await api.get("/user/me");
  //       if (response.data) {
  //         setUserData({
  //           userId: response.data.userId,
  //           hometown: response.data.hometown,
  //           country: response.data.country,
  //           profilePic: response.data.profilePic,
  //           tastePreference: response.data.tastePreference || [],
  //         });
  //       }
  //     } catch (error) {
  //       console.error("Error fetching user data:", error);
  //     }
  //   };

  //   fetchUserData();
  // }, []);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        // ✅ 로컬 스토리지에서 토큰 가져오기
        const token = localStorage.getItem("authToken");
        console.log("📌 요청에 사용된 토큰:", token); // ✅ 콘솔에 토큰 출력

        // ✅ 토큰이 있으면 헤더에 추가
        const response = await api.get("/user/me", {
          headers: {
            Authorization: `Bearer ${token}`, // 토큰 포함
            "Content-Type": "application/json",
          },
        });

        // ✅ 응답 데이터 처리
        if (response.data) {
          setUserData({
            userId: response.data.userId,
            hometown: response.data.hometown,
            country: response.data.country,
            profilePic: response.data.profilePic,
            tastePreference: response.data.tastePreference || [],
          });
        }
      } catch (error) {
        console.error("❌ 사용자 정보 요청 중 오류 발생:", error);
      }
    };

    fetchUserData();
  }, []);

  // ✅ 모든 요청에 토큰 자동 포함
  api.interceptors.request.use((config) => {
    const token = localStorage.getItem("authToken");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  });

  // ✅ 로그아웃 함수 추가
  const handleLogout = () => {
    localStorage.removeItem("authToken"); // 토큰 제거
    navigate("/"); // 홈으로 이동
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
      <M.Myr>
        <M.Myrecipe>나의 레시피</M.Myrecipe>
        <M.Myrecs>
          <M.Rec1></M.Rec1>
          <M.Rec2></M.Rec2>
          <M.Rec3></M.Rec3>
          <M.Rec4
            image={`${process.env.PUBLIC_URL}/images/Food.svg`}
            onClick={gomyrec}
          >
            <span>더보기 ></span>
          </M.Rec4>
        </M.Myrecs>
      </M.Myr>
      <M.Hr3 />
      <M.Sar>
        <M.Savedrecipe>저장된 레시피</M.Savedrecipe>
        <M.Savedrecs>
          <M.Sar1></M.Sar1>
          <M.Sar2></M.Sar2>
          <M.Sar3></M.Sar3>
          <M.Sar4
            image={`${process.env.PUBLIC_URL}/images/Food.svg`}
            onClick={savedrec}
          >
            <span>더보기 ></span>
          </M.Sar4>
        </M.Savedrecs>
      </M.Sar>
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
