import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "../styles/StyledSignUp";
import Logo from "../assets/svg/logo.svg";
import Back from "../assets/svg/loginBack.svg";
import Line from "../assets/svg/underLine.svg";
import Circle from "../assets/svg/BBCircle.svg";

// import axios from "axios";

const SignUp = () => {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  const goSelect = () => {
    navigate("/signUp/selectPage");
  };

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
          <h4>회원가입</h4>
          <div className="inputBox">
            <p>아이디</p>
            <input></input>
            <S.LoginBox className="c-num">
              <span>중복확인</span>
            </S.LoginBox>
          </div>
          <img className="under-line" src={Line} style={{ width: "235px" }}></img>
          <div className="inputBox">
            <p>이메일</p>
            <input></input>
          </div>
          <img className="under-line" src={Line}></img>
          <div className="inputBox">
            <p>비밀번호</p>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          <img className="under-line" src={Line}></img>
          <div className="inputBox">
            <p>비밀번호 확인</p>
            <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
            {isMatch && <img src={Circle} alt="correct" className="check-icon" />}
          </div>
          <img className="under-line" src={Line}></img>
          {/* 비밀번호 불일치 경고 메시지 */}
          {!isMatch && confirmPassword !== "" && <p className="error-message">비밀번호가 일치하지 않습니다</p>}
        </S.ID>
        <S.LoginBox onClick={goSelect}>
          <div>
            <span>국가 / 맛 취향 선택</span>
          </div>
        </S.LoginBox>
      </S.Background>
    </S.Container>
  );
};

export default SignUp;
