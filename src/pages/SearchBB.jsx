import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import * as L from "../styles/StyledSearchID";
import Logo from "../assets/svg/logo.svg";
import Back from "../assets/svg/loginBack.svg";
import Line from "../assets/svg/underLine.svg";

// import axios from "axios";

const SearchBB = () => {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  const goEditBB = () => {
    navigate("/searchBB/EditBB");
  };
  return (
    <L.Container>
      <L.Background>
        <img src={Back} alt="backBtn" onClick={goBack} className="back-btn"></img>
        <img src={Logo} alt="blendish_logo"></img>
        <L.ID>
          <h4>비밀번호 찾기</h4>
          <div className="inputBox">
            <p>이메일</p>
            <input></input>
            <L.LoginBox className="c-num">
              <span>인증번호</span>
            </L.LoginBox>
          </div>
          <img className="under-line" src={Line}></img>
          <div className="inputBox">
            <p>인증번호</p>
            <input></input>
            <L.LoginBox className="c-num">
              <span>확인</span>
            </L.LoginBox>
          </div>
          <img className="under-line" src={Line}></img>
        </L.ID>
        <L.LoginBox onClick={goEditBB}>
          <span>비밀번호 변경</span>
        </L.LoginBox>
      </L.Background>
    </L.Container>
  );
};

export default SearchBB;
