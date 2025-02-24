import React from "react";
import Select from "react-select";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import * as S from "../styles/StyledSignUp";
import Logo from "../assets/svg/logo.svg";
import Back from "../assets/svg/loginBack.svg";
import Line from "../assets/svg/underLine.svg";

const SelectPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { userId, password, email } = location.state || {};

  // 입력값 상태
  const [country, setCountry] = useState("");
  const [hometown, setHometown] = useState("");
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [spicyLevel, setSpicyLevel] = useState("");

  // 맛 취향 옵션
  const options = [
    { value: "salty", label: "짠 맛" },
    { value: "sweet", label: "단 맛" },
    { value: "sour", label: "신 맛" },
    { value: "spicy", label: "매운 맛" },
    { value: "umami", label: "감칠 맛" },
    { value: "plain", label: "담백한 맛" },
    { value: "oily", label: "기름진 맛" },
  ];

  // 페이지 이동
  const goBack = () => {
    navigate(-1);
  };

  // 회원가입 완료 요청
  const completeSignUp = async () => {
    try {
      // 회원가입 요청
      await fetch("https://junyeongan.store/join/user", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userId, userPw: password, email }),
      });

      // tastePreferences 구성
      const preferences = selectedOptions.map((option) => ({
        taste: option.label,
        spicyLevel: option.label === "매운 맛" ? (spicyLevel ? parseInt(spicyLevel) : null) : null,
      }));

      // 추가 정보 저장
      await fetch("https://junyeongan.store/join/preferences", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userId, country, hometown, tastePreferences: preferences }),
      });

      alert("회원가입이 완료되었습니다!");
      navigate("/login"); // 로그인 페이지로 이동
    } catch (error) {
      console.error("회원가입 오류:", error);
    }
  };

  return (
    <S.Container>
      <S.Background>
        <img src={Back} alt="backBtn" onClick={goBack} className="back-btn" />
        <img src={Logo} alt="blendish_logo" />
        <S.ID>
          <h4>국가 / 맛 취향 선택</h4>
          <div className="inputBox">
            <input placeholder="고향 국가 입력" value={hometown} onChange={(e) => setHometown(e.target.value)} />
          </div>
          <img className="under-line" src={Line} />
          <div className="inputBox">
            <input placeholder="거주국가 입력" value={country} onChange={(e) => setCountry(e.target.value)} />
          </div>
          <img className="under-line" src={Line} />
          <div className="inputBox">
            <Select
              options={options}
              isMulti
              value={selectedOptions}
              onChange={setSelectedOptions}
              placeholder="맛 취향 (최대 4개)"
              menuPortalTarget={document.body} // 메뉴가 body에서 렌더링되도록 설정
              menuShouldScrollIntoView={false} // 자동 스크롤 방지
              styles={{
                control: (base) => ({
                  ...base,
                  backgroundColor: "transparent",
                  border: "none",
                  color: "black",
                  zIndex: 9999,
                }),
                menu: (base) => ({
                  ...base,
                  backgroundColor: "#fff",
                  zIndex: 9999,
                  position: "absolute", // ✅ 다른 요소 밀림 방지
                }),
                menuPortal: (base) => ({
                  ...base,
                  zIndex: 9999, // ✅ 메뉴를 최상위 레이어로 올리기
                }),
                option: (base, { isFocused }) => ({
                  ...base,
                  backgroundColor: isFocused ? "#ededed" : "#D9D9D9",
                  color: "black",
                }),
                multiValue: (base) => ({
                  ...base,
                  backgroundColor: "#ededed",
                  color: "black",
                }),
                placeholder: (base) => ({
                  ...base,
                  color: "#fff",
                }),
              }}
            />
          </div>
          <img className="under-line" src={Line} />

          {/* 🔹 항상 매운 맛 정도 선택 가능하도록 수정 */}
          <div className="inputBox">
            <select value={spicyLevel} onChange={(e) => setSpicyLevel(e.target.value)}>
              <option value="" hidden>
                매운 맛 정도
              </option>
              <option>선호하지 않음</option>
              <option value="1">🌶️</option>
              <option value="2">🌶️🌶️</option>
              <option value="3">🌶️🌶️🌶️</option>
              <option value="4">🌶️🌶️🌶️🌶️</option>
              <option value="5">🌶️🌶️🌶️🌶️🌶️</option>
            </select>
          </div>
          <img className="under-line" src={Line} />
        </S.ID>
        <S.LoginBox onClick={completeSignUp}>
          <div>
            <span>로그인 창 이동</span>
          </div>
        </S.LoginBox>
      </S.Background>
    </S.Container>
  );
};

export default SelectPage;
