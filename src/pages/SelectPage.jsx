import React from "react";
import Select from "react-select";
import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import * as S from "../styles/StyledSignUp";
import Logo from "../assets/svg/logo.svg";
import Back from "../assets/svg/loginBack.svg";
import Line from "../assets/svg/underLine.svg";
import Circle from "../assets/svg/BBCircle.svg";

// import axios from "axios";

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

  //   비밀번호 입력 상태
  const [confirmPassword, setConfirmPassword] = useState("");
  const isMatch = password !== "" && password === confirmPassword;

  // 회원가입 완료 요청
  const completeSignUp = async () => {
    try {
      // 회원가입 요청
      await fetch("https://junyeongan.store/join/user", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userId, userPw: password, email }),
      });

      // "매운 맛" 선택 시 spicyLevel을 반영한 tastePreferences 구성
      const preferences = selectedOptions.map((option) => {
        return option.label === "매운 맛"
          ? { taste: option.label, spicyLevel: spicyLevel ? parseInt(spicyLevel) : null }
          : { taste: option.label, spicyLevel: null };
      });

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
        <img src={Back} alt="backBtn" onClick={goBack} className="back-btn"></img>
        <img src={Logo} alt="blendish_logo"></img>
        <S.ID>
          <h4>국가 / 맛 취향 선택</h4>
          <div className="inputBox">
            <input placeholder="고향 국가 입력" value={hometown} onChange={(e) => setHometown(e.target.value)}></input>
          </div>
          <img className="under-line" src={Line}></img>
          <div className="inputBox">
            <input placeholder="거주국가 입력" value={country} onChange={(e) => setCountry(e.target.value)}></input>
          </div>
          <img className="under-line" src={Line}></img>
          <div className="inputBox">
            {/* <p>맛 취향 (최대 4개)</p> */}
            <Select
              options={options}
              isMulti
              value={selectedOptions}
              onChange={setSelectedOptions}
              placeholder="맛 취향 (최대 4개)"
              styles={{
                control: (base) => ({
                  ...base,
                  backgroundColor: "transparent", // 투명 배경
                  border: "none",
                  color: "black",
                  zIndex: 9999, // 선택 영역도 z-index 적용
                }),
                menu: (base) => ({
                  ...base,
                  backgroundColor: "#fff", // 드롭다운 배경색
                  zIndex: 9999, // 🚀 최상위 레이어로 배치하여 가려지지 않도록 설정
                  position: "relative",
                }),
                option: (base, { isFocused }) => ({
                  ...base,
                  backgroundColor: isFocused ? "#ededed" : "#D9D9D9", // ✅ 포커스 시 스타일
                  color: "black",
                }),
                multiValue: (base) => ({
                  ...base,
                  backgroundColor: "#ededed", // 선택된 값 스타일
                  color: "black",
                }),
                placeholder: (base) => ({
                  ...base,
                  color: "#fff", // placeholder 색상을 흰색(#fff)으로 설정
                }),
              }}
            />
          </div>
          <img className="under-line" src={Line}></img>

          {/* 매운맛 선택 시만 레벨 선택 */}
          {selectedOptions.some((option) => option.label === "매운 맛") && (
            <>
              <div className="inputBox">
                <select value={spicyLevel} onChange={(e) => setSpicyLevel(e.target.value)} placeholder="매운 맛 정도">
                  <option value="" hidden>
                    매운 맛 정도
                  </option>{" "}
                  <option>선호하지 않음</option>
                  <option value="1">🌶️</option>
                  <option value="2">🌶️🌶️</option>
                  <option value="3">🌶️🌶️🌶️</option>
                  <option value="4">🌶️🌶️🌶️🌶️</option>
                  <option value="5">🌶️🌶️🌶️🌶️🌶️</option>
                </select>
              </div>
              <img className="under-line" src={Line}></img>
            </>
          )}
          {/* 비밀번호 불일치 경고 메시지 */}
          {!isMatch && confirmPassword !== "" && <p className="error-message">비밀번호가 일치하지 않습니다</p>}
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
