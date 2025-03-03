import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import * as L from "../styles/StyledLogin";
import Logo from "../assets/svg/logo.svg";
import Back from "../assets/svg/loginBack.svg";
import Line from "../assets/svg/underLine.svg";
import Circle from "../assets/svg/BBCircle.svg";

// import axios from "axios";

const EditBB = () => {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  const goLogin = () => {
    navigate("/login");
  };
  //   비밀번호 입력 상태
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const isMatch = password !== "" && password === confirmPassword;
  return (
    <L.Container>
      <L.Background>
        <img src={Back} alt="backBtn" onClick={goBack} className="back-btn"></img>
        <img src={Logo} alt="blendish_logo"></img>
        <L.ID>
          <h4>비밀번호 변경</h4>
          <div className="inputBox">
            <p>새 비밀번호</p>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          <img className="under-line" src={Line}></img>
          {/* 새 비밀번호 확인 입력 */}
          <div className="inputBox">
            <p>새 비밀번호 확인</p>
            <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
            {isMatch && <img src={Circle} alt="correct" className="check-icon" />}
          </div>
          <img className="under-line" src={Line} style={{ marginBottom: "5px" }}></img>
          {/* 비밀번호 불일치 경고 메시지 */}
          {!isMatch && confirmPassword !== "" && <p className="error-message">비밀번호가 일치하지 않습니다</p>}
        </L.ID>
        <L.LoginBox onClick={goLogin}>
          <span>로그인창으로 이동</span>
        </L.LoginBox>
      </L.Background>
    </L.Container>
  );
};

export default EditBB;
