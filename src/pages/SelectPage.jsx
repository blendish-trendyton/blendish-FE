import React from "react";
import Select from "react-select";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "../styles/StyledSignUp";
import Logo from "../assets/svg/logo.svg";
import Back from "../assets/svg/loginBack.svg";
import Line from "../assets/svg/underLine.svg";
import Circle from "../assets/svg/BBCircle.svg";

// import axios from "axios";

const SelectPage = () => {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  const goLogin = () => {
    navigate("/login");
  };

  // 옵션 선택
  const options = [
    { value: "salty", label: "짠 맛" },
    { value: "sweet", label: "단 맛" },
    { value: "spicy", label: "매운 맛" },
    { value: "savory", label: "담백한 맛" },
  ];

  // 선택한 맛 취향 상태 관리
  const [selectedOptions, setSelectedOptions] = useState([]);

  //   비밀번호 입력 상태
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const isMatch = password !== "" && password === confirmPassword;

  return (
    <S.Container>
      <S.Background>
        <img src={Back} alt="backBtn" onClick={goBack} className="back-btn"></img>
        <img src={Logo} alt="blendish_logo"></img>
        <S.ID>
          <h4>국가 / 맛 취향 선택</h4>
          <div className="inputBox">
            <input placeholder="고향 국가 입력"></input>
          </div>
          <img className="under-line" src={Line}></img>
          <div className="inputBox">
            <input placeholder="거주국가 입력"></input>
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
                  backgroundColor: "transparent", // 투명하게 설정
                  border: "none",
                  color: "black",
                }),
                menu: (base) => ({
                  ...base,
                  backgroundColor: "#fff", // 드롭다운 배경색
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
          <div className="inputBox">
            <select placeholder="매운 맛 정도">
              <option value="" hidden>
                매운 맛 정도
              </option>{" "}
              <option>선호하지 않음</option>
              <option>🌶️</option>
              <option>🌶️🌶️</option>
              <option>🌶️🌶️🌶️</option>
            </select>
          </div>
          <img className="under-line" src={Line}></img>
          {/* 비밀번호 불일치 경고 메시지 */}
          {!isMatch && confirmPassword !== "" && <p className="error-message">비밀번호가 일치하지 않습니다</p>}
        </S.ID>
        <S.LoginBox onClick={goLogin}>
          <div>
            <span>로그인 창 이동</span>
          </div>
        </S.LoginBox>
      </S.Background>
    </S.Container>
  );
};

export default SelectPage;
