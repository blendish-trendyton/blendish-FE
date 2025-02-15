import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import * as M from "../styles/StyledMR";
// import axios from "axios";

const Myrecipe = () => {
  const navigate = useNavigate();

  const goback = () => {
    navigate(-1);
  };
  return (
    <M.Container>
      <M.Nav>
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
      </M.Nav>
      <M.Title>
        <div>나의 레시피</div>
      </M.Title>
      <M.List></M.List>
    </M.Container>
  );
};

export default Myrecipe;
