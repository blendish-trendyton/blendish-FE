import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import * as L from "../styles/StyledLogin";
import Logo from "../assets/svg/logo.svg";
import Back from "../assets/svg/loginBack.svg";
import Line from "../assets/svg/underLine.svg";

// import axios from "axios";

const Login = () => {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  const SearchID = () => {
    navigate("/searchID");
  };
  const SearchBB = () => {
    navigate("/searchBB");
  };
  const SignUp = () => {
    navigate("/signUp");
  };
  return (
    <L.Container>
      <L.Background>
        <img src={Back} alt="backBtn" onClick={goBack} className="back-btn"></img>
        <img src={Logo} alt="blendish_logo"></img>
        <L.ID>
          <h4>로그인</h4>
          <div className="inputBox">
            <p>아이디</p>
            <input></input>
          </div>
          <img className="under-line" src={Line}></img>
          <div className="inputBox">
            <p>비밀번호</p>
            <input></input>
          </div>
          <img className="under-line" src={Line}></img>
        </L.ID>
        <L.LoginBox>
          <div>
            <span>로그인</span>
          </div>
        </L.LoginBox>
        <L.Search>
          <p onClick={SearchID}>아이디 찾기</p>
          <p onClick={SearchBB}>비밀번호 찾기</p>
          <p onClick={SignUp}>회원가입</p>
        </L.Search>
      </L.Background>
    </L.Container>
  );
};

export default Login;
