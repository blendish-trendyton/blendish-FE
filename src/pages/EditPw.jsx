import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import * as E from "../styles/StyledEPW";
// import axios from "axios";

const EditPW = () => {
  const navigate = useNavigate();

  const goback = () => {
    navigate(-1);
  };

  const goprof = () => {
    navigate(`/editprofile`);
  };

  return (
    <E.Container>
      <E.Nav>
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
      </E.Nav>
      <E.Title>
        <div>비밀번호 변경</div>
      </E.Title>
      <E.Box>
        <E.Now>
          <div>현재 비밀번호</div>
          <input type="text" />
        </E.Now>
        <E.New>
          <div>새 비밀번호</div>
          <input type="text" />
        </E.New>
        <E.Re>
          <div>새 비밀번호 확인</div>
          <input type="text" />
        </E.Re>
      </E.Box>
      <E.Move>
        <E.Hr />
        <E.Edit onClick={goprof}>
          <div>비밀번호 변경</div>
        </E.Edit>
      </E.Move>
    </E.Container>
  );
};

export default EditPW;
