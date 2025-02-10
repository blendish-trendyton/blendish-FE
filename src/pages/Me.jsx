import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import * as M from "../styles/StyledMe";
// import axios from "axios";

const Me = () => {
  const navigate = useNavigate();

  const gomaker = () => {
    navigate(`/recipemaker`);
  };
  return (
    <M.Container>
      <M.Back></M.Back>
      <M.Info>
        <M.Prof></M.Prof>
        <M.Name>bestcooker0205</M.Name>
        <M.Country>
          <M.Hometown>
            <div id="home">고향 국가</div>
            <div id="homec">대한민국</div>
          </M.Hometown>
          <M.Hr2 />
          <M.Live>
            <div id="live">거주 국가</div>
            <div id="livec">미국</div>
          </M.Live>
        </M.Country>
        <M.Edit>
          <div>내 정보 수정</div>
        </M.Edit>
      </M.Info>
      <M.Hr1></M.Hr1>
      <M.Myr>
        <M.Myrecipe>나의 레시피</M.Myrecipe>
      </M.Myr>
      <M.Nav>
        <M.Hr />
        <M.Item>
          <M.Maker onClick={gomaker}>
            <img
              src={`${process.env.PUBLIC_URL}/images/Maker.svg`}
              alt="메이커"
            />
            <div>메이커</div>
          </M.Maker>
          <M.Search>
            <img
              src={`${process.env.PUBLIC_URL}/images/Search.svg`}
              alt="검색"
            />
            <div>검색</div>
          </M.Search>
          <M.Home>
            <img src={`${process.env.PUBLIC_URL}/images/Home.svg`} alt="홈" />
            <div>홈</div>
          </M.Home>
          <M.Write>
            <img
              src={`${process.env.PUBLIC_URL}/images/Write.svg`}
              alt="작성"
            />
            <div>작성</div>
          </M.Write>
          <M.Me>
            <img src={`${process.env.PUBLIC_URL}/images/MeY.svg`} alt="나" />
            <div>내정보</div>
          </M.Me>
        </M.Item>
      </M.Nav>
    </M.Container>
  );
};

export default Me;
