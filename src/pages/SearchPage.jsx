import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "../styles/StyledSearch";
import * as M from "../styles/StyledMain";
import SeachBorder from "../assets/svg/searchBorder.svg";
import makerThin from "../assets/svg/makerThin.svg";
import searchBtn from "../assets/svg/searchBtn.svg";
import mainFood1 from "../assets/svg/mainFood1.svg";
import mainFood2 from "../assets/svg/mainFood2.svg";
// import axios from "axios";

const RecipeMore = () => {
  const navigate = useNavigate();

  const goHome = () => {
    navigate("/");
  };
  const goBack = () => {
    navigate(-1);
  };

  const gome = () => {
    navigate(`/me`);
  };

  const gowrite = () => {
    navigate(`/write`);
  };
  const goSearch = () => {
    navigate(`/searchPageNext`);
  };
  const goMaker = () => {
    navigate(`/recipemaker`);
  };
  return (
    <S.Container>
      <S.Search>
        <input placeholder="레시피의 제목을 입력하세요." onClick={goSearch}></input>
        <img src={searchBtn} alt="레시피 검색"></img>
      </S.Search>
      <h4>최근에 봤던 레시피</h4>
      <S.RecentlyBox>
        <S.Recently>
          <img src={mainFood1}></img>
          <p style={{ margin: "8px 0 " }}>광양 불고기</p>
        </S.Recently>
        <S.Recently>
          <img src={mainFood2}></img>
          <p style={{ margin: "8px 0 " }}>매운 떡볶이</p>
        </S.Recently>
      </S.RecentlyBox>
      <S.Fdiv>
        <h4>인기 검색어</h4>
      </S.Fdiv>
      <S.FamouseBox>
        <S.Famouse>
          <S.Fcontent>
            <button>1</button>
            <div>불고기</div>
          </S.Fcontent>
          <S.Fcontent>
            <button>2</button>
            <div>김치볶음밥</div>
          </S.Fcontent>
        </S.Famouse>
        <S.Famouse>
          <S.Fcontent>
            <button>3</button>
            <div>타코불고기</div>
          </S.Fcontent>
          <S.Fcontent>
            <button>4</button>
            <div>떡볶이</div>
          </S.Fcontent>
        </S.Famouse>
      </S.FamouseBox>
      <M.Nav>
        <M.Hr />
        <M.Item>
          <M.Maker onClick={goMaker}>
            <img src={makerThin} alt="메이커" />
            <div>메이커</div>
          </M.Maker>
          <M.Search>
            <img src={SeachBorder} alt="검색" />
            <div>검색</div>
          </M.Search>
          <M.Home onClick={goHome}>
            <img src={`${process.env.PUBLIC_URL}/images/Home.svg`} alt="홈" />
            <div>홈</div>
          </M.Home>
          <M.Write onClick={gowrite}>
            <img src={`${process.env.PUBLIC_URL}/images/Write.svg`} alt="작성" />
            <div>작성</div>
          </M.Write>
          <M.Me onClick={gome}>
            <img src={`${process.env.PUBLIC_URL}/images/Me.svg`} alt="나" />
            <div>내정보</div>
          </M.Me>
        </M.Item>
      </M.Nav>
    </S.Container>
  );
};

export default RecipeMore;
