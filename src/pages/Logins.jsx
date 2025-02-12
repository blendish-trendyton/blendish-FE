import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import * as L from "../styles/StyledLogins";
import Logo from "../assets/svg/logo.svg";
import LoginBtnPeople from "../assets/img/loginBtnPeople.png";
// import axios from "axios";

const Logins = () => {
  const navigate = useNavigate();
  const goLogin = () => {
    navigate("/login");
  };
  return (
    <L.Container>
      <L.Background>
        <img src={Logo} alt="blendish_logo"></img>
        <L.LoginBox>
          <div onClick={goLogin}>
            <img src={LoginBtnPeople} />
            <span>기존 계정으로 로그인</span>
          </div>
        </L.LoginBox>
      </L.Background>
    </L.Container>
  );
};

export default Logins;
