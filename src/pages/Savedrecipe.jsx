import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "../styles/StyledSR";
// import axios from "axios";

const Savedrecipe = () => {
  const navigate = useNavigate();

  const goback = () => {
    navigate(-1);
  };
  return (
    <S.Container>
      <S.Nav>
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
        />
      </S.Nav>
      <S.Title>
        <div>저장된 레시피</div>
      </S.Title>
      <S.List></S.List>
    </S.Container>
  );
};

export default Savedrecipe;
