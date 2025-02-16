import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import * as E from "../styles/StyledEP";
import EditDropdown from "./EditDropdown"; // ✅ 공통 드롭다운 컴포넌트 가져오기
import EditTasteDropdown from "./EditTasteDropdown";
// import axios from "axios";

const EditProf = () => {
  const [selectedTaste, setSelectedTaste] = useState("");
  const [selectedSpicy, setSelectedSpicy] = useState("매운 맛 정도를 선택하세요.");
  const [profileImage, setProfileImage] = useState(`${process.env.PUBLIC_URL}/images/Profile.svg`); // 초기 프로필 이미지

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
  // 🔹 프로필 이미지 변경 함수
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file); // 이미지 URL 생성
      setProfileImage(imageUrl); // 프로필 이미지 변경
    }
  };

  return (
    <E.Container>
      <E.Nav>
        <img id="back" src={`${process.env.PUBLIC_URL}/images/Goback.svg`} alt="뒤로가기기" onClick={goback} />
        <img id="home" src={`${process.env.PUBLIC_URL}/images/Gohome.svg`} alt="홈" onClick={goHome} />
      </E.Nav>
      <E.Title>
        <div>내 정보 수정</div>
      </E.Title>

      {/* 🔹 프로필 이미지 변경 UI */}
      <E.Img>
        <img id="profile" src={profileImage} alt="프로필" />
        <label htmlFor="fileUpload">
          <img id="edit" src={`${process.env.PUBLIC_URL}/images/Edit.svg`} alt="수정" />
        </label>
        <input
          id="fileUpload"
          type="file"
          accept="image/*"
          style={{ display: "none" }}
          onChange={handleImageUpload} // 이미지 업로드 이벤트
        />
      </E.Img>

      <E.Box>
        <E.Id>
          <div>아이디</div>
          <input type="id" defaultValue={"아이디"} />
        </E.Id>
        <E.Email>
          <div>이메일</div>
          <input type="email" defaultValue={"이메일"} />
        </E.Email>
        <E.Password>
          <div>비밀번호</div>
          <E.Pw onClick={gopsedit}>
            <div>눌러서 변경하기</div>
          </E.Pw>
        </E.Password>
        <E.Home>
          <div>고향 국가</div>
          <input type="text" defaultValue={"고향"} />
        </E.Home>
        <E.Live>
          <div>거주 국가</div>
          <input type="text" defaultValue={"거주"} />
        </E.Live>
        <E.Taste>
          <div>맛 취향</div>
          <E.Tastebox>
            <EditTasteDropdown
              options={["단 맛", "짠 맛", "신 맛", "감칠 맛", "기름진 맛", "담백한 맛", "매운 맛"]}
              selected={selectedTaste}
              setSelected={setSelectedTaste}
            />
          </E.Tastebox>
        </E.Taste>
        <E.Spicy>
          <div>매운 맛 정도</div>
          <E.Spicybox>
            <EditDropdown
              options={["선호하지 않음", "🌶️", "🌶️🌶️", "🌶️🌶️🌶️", "🌶️🌶️🌶️🌶️", "🌶️🌶️🌶️🌶️🌶️"]}
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
          <div>수정 완료</div>
        </E.Complete>
      </E.Submit>
    </E.Container>
  );
};

export default EditProf;
