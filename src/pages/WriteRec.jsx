import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import * as W from "../styles/StyledWR";
// import axios from "axios";

const Writerecipe = () => {
  const navigate = useNavigate();

  const gome = () => {
    navigate(`/me`);
  };

  const gomaker = () => {
    navigate(`/recipemaker`);
  };
  return (
    <W.Container>
      <W.Title>
        <div id="name">레시피 작성</div>
      </W.Title>
      <W.Rep>
        <W.Img>
          <img
            src={`${process.env.PUBLIC_URL}/images/Upload.svg`}
            alt="업로드"
          />
          <div>대표 이미지 업로드</div>
        </W.Img>
      </W.Rep>
      <W.Nav>
        <W.Hr />
        <W.Item>
          <W.Maker onClick={gomaker}>
            <img
              src={`${process.env.PUBLIC_URL}/images/Maker.svg`}
              alt="메이커"
            />
            <div>메이커</div>
          </W.Maker>
          <W.Search>
            <img
              src={`${process.env.PUBLIC_URL}/images/Search.svg`}
              alt="검색"
            />
            <div>검색</div>
          </W.Search>
          <W.Home>
            <img src={`${process.env.PUBLIC_URL}/images/Home.svg`} alt="홈" />
            <div>홈</div>
          </W.Home>
          <W.Write>
            <img
              src={`${process.env.PUBLIC_URL}/images/WriteY.svg`}
              alt="작성"
            />
            <div>작성</div>
          </W.Write>
          <W.Me onClick={gome}>
            <img src={`${process.env.PUBLIC_URL}/images/Me.svg`} alt="나" />
            <div>내정보</div>
          </W.Me>
        </W.Item>
      </W.Nav>
    </W.Container>
  );
};

export default Writerecipe;
