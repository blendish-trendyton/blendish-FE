import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import * as E from "../styles/StyledEP";
import EditDropdown from "./EditDropdown"; // ✅ 공통 드롭다운 컴포넌트 가져오기
import EditTasteDropdown from "./EditTasteDropdown";
import axios from "axios";

// ✅ Axios 인스턴스 생성
const api = axios.create({
  baseURL: "https://junyeongan.store/api", // 기본 API 주소 설정
  headers: {
    "Content-Type": "application/json",
  },
});

const EditProf = () => {
  const [selectedTaste, setSelectedTaste] = useState("");
  const [selectedSpicy, setSelectedSpicy] =
    useState("매운 맛 정도를 선택하세요.");
  const [profileImage, setProfileImage] = useState(
    `${process.env.PUBLIC_URL}/images/Profile.svg`
  ); // 초기 프로필 이미지

  // ✅ 사용자 데이터 상태 관리
  const [userData, setUserData] = useState({
    userId: "",
    email: "",
    hometown: "",
    country: "",
    profilePic: `${process.env.PUBLIC_URL}/images/Profile.svg`,
    tastePreference: [],
  });

  const navigate = useNavigate();

  const goback = () => {
    navigate(-1);
  };

  const gopsedit = () => {
    navigate(`/editprofile/password`);
  };

  const goHome = () => {
    navigate(`/`);
  };

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        // ✅ 로컬 스토리지에서 토큰 가져오기
        const token = localStorage.getItem("user_token");
        console.log("📌 요청에 사용된 토큰:", token);

        // ✅ 새로운 API 엔드포인트 요청
        const response = await api.get("/user/me/details", {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        });

        // ✅ 응답 데이터 구조에 맞게 데이터 처리
        const userData = response.data.data || response.data;
        console.log("응답 받은 사용자 데이터:", userData);

        if (userData) {
          setUserData({
            userId: userData.userId || "",
            email: userData.email || "",
            hometown: userData.hometown || "",
            country: userData.country || "",
            profilePic:
              userData.profilePic ||
              `${process.env.PUBLIC_URL}/images/Profile.svg`,
            tastePreference: Array.isArray(userData.tastePreference)
              ? userData.tastePreference
              : [],
          });

          // ✅ 맛 취향 및 매운 맛 정도 설정
          if (userData.tastePreference.length > 0) {
            setSelectedTaste(
              Array.isArray(userData.tastePreference)
                ? userData.tastePreference.map((pref) => pref.taste)
                : []
            );
            setSelectedSpicy(
              userData.tastePreference[0].spicyLevel !== null
                ? userData.tastePreference[0].spicyLevel.toString()
                : "매운 맛 정도를 선택하세요."
            );
          }
        }
      } catch (error) {
        console.error("❌ 사용자 정보 요청 중 오류 발생:", error);
      }
    };

    fetchUserData();
  }, []);

  const [uploadedFile, setUploadedFile] = useState(null); // 파일 업로드 상태 관리

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  // 🔹 프로필 이미지 변경 함수
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setUserData({ ...userData, profilePic: imageUrl });

      setUploadedFile(file);
    }
  };

  const convertSpicyLevel = (spicyString) => {
    if (spicyString === "선호하지 않음") return 0;
    return (spicyString.match(/🌶️/g) || []).length;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem("user_token");
    const formData = new FormData();

    const userInfo = {
      userId: userData.userId,
      email: userData.email,
      hometown: userData.hometown,
      country: userData.country,
      tastePreference: [
        {
          taste: selectedTaste,
          spicyLevel: convertSpicyLevel(selectedSpicy),
        },
      ],
    };

    formData.append(
      "user",
      new Blob([JSON.stringify(userInfo)], { type: "application/json" })
    );
    if (uploadedFile) {
      formData.append("profilePic", uploadedFile);
    }

    try {
      const response = await api.put("/user/update", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });

      if (response.status === 200) {
        alert("사용자 정보가 성공적으로 수정되었습니다.");
        navigate("/");
      }
    } catch (error) {
      console.error("❌ 사용자 정보 수정 실패:", error);
      alert("정보 수정에 실패했습니다. 다시 시도해주세요.");
    }
  };

  return (
    <E.Container>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <E.Nav>
          <img
            id="back"
            src={`${process.env.PUBLIC_URL}/images/Goback.svg`}
            alt="뒤로가기기"
            onClick={goback}
          />
          <img
            id="home"
            src={`${process.env.PUBLIC_URL}/images/Gohome.svg`}
            alt="홈"
            onClick={goHome}
          />
        </E.Nav>
        <E.Title>
          <div>내 정보 수정</div>
        </E.Title>

        {/* 🔹 프로필 이미지 변경 UI */}
        <E.Img>
          <img id="profile" src={profileImage} alt="프로필" />
          <label htmlFor="fileUpload">
            <img
              id="edit"
              src={`${process.env.PUBLIC_URL}/images/Edit.svg`}
              alt="수정"
            />
          </label>
          <input
            id="fileUpload"
            type="file"
            accept="image/*"
            style={{ display: "none" }}
            onChange={handleImageUpload}
          />
        </E.Img>

        <E.Box>
          <E.Id>
            <div>아이디</div>
            <input
              type="id"
              defaultValue={userData.userId}
              onChange={handleInputChange}
            />
          </E.Id>
          <E.Email>
            <div>이메일</div>
            <input
              type="email"
              defaultValue={userData.email}
              onChange={handleInputChange}
            />
          </E.Email>
          <E.Password>
            <div>비밀번호</div>
            <E.Pw onClick={gopsedit}>
              <div>눌러서 변경하기</div>
            </E.Pw>
          </E.Password>
          <E.Home>
            <div>고향 국가</div>
            <input
              type="text"
              defaultValue={userData.hometown}
              onChange={handleInputChange}
            />
          </E.Home>
          <E.Live>
            <div>거주 국가</div>
            <input
              type="text"
              defaultValue={userData.country}
              onChange={handleInputChange}
            />
          </E.Live>
          <E.Taste>
            <div>맛 취향</div>
            <E.Tastebox>
              <EditTasteDropdown
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
            </E.Tastebox>
          </E.Taste>
          <E.Spicy>
            <div>매운 맛 정도</div>
            <E.Spicybox>
              <EditDropdown
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
            </E.Spicybox>
          </E.Spicy>
        </E.Box>
        <E.Submit>
          <E.Hr />
          <E.Complete>
            <button type="submit">수정 완료</button>
          </E.Complete>
        </E.Submit>
      </form>
    </E.Container>
  );
};

export default EditProf;
