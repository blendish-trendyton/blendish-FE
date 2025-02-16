import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import * as L from "../styles/StyledSearchList";
import * as R from "../styles/StyledRecipeMore";
import * as M from "../styles/StyledMain";
import backBtn from "../assets/svg/blackBackBtn.svg";
import home from "../assets/svg/home.svg";
import mainFood1 from "../assets/svg/mainFood1.svg";
import bulgogi1 from "../assets/svg/bulgogi1.svg";
import bulgogi4 from "../assets/svg/bulgogi4.svg";
import Good from "../assets/svg/good.svg";
import Comment from "../assets/svg/comment.svg";

// import axios from "axios";

const SearchListDetail = () => {
  const navigate = useNavigate();

  const goHome = () => {
    navigate("/");
  };
  const goBack = () => {
    navigate(-1);
  };
  const goLocalRecipe = () => {
    navigate(`/localRecipeMore`);
  };
  return (
    <L.Container>
      <R.Header>
        <img src={backBtn} onClick={goBack}></img>
        <img src={home} className="home" onClick={goHome}></img>
      </R.Header>
      <L.FoodName>
        <div>광양 불고기</div>
      </L.FoodName>
      <L.Result>
        <p>
          <strong>총 10개</strong> 검색 결과
        </p>
        <L.ResultBox onClick={goLocalRecipe}>
          <img src={bulgogi1}></img>
          <button className="localMark">현지</button>
          <div className="ResultText">
            <p>집에서 하는 광양 불고기</p>
            <div>짭조름하고 달콤한 간장 양념이 깊은 감칠맛을 내며, 부드러운 육질이 매력적인 한국식 가정 요리.</div>
            <M.Reaction style={{ marginBottom: "0" }}>
              <img src={Good} alt="좋아요" style={{ margin: "0 5px 0 0" }} />
              <span style={{ fontSize: "16px" }}>12</span>
              <img src={Comment} alt="댓글" />
              <span style={{ fontSize: "16px" }}>3</span>
            </M.Reaction>
          </div>
        </L.ResultBox>
        <L.ResultBox>
          <img src={mainFood1}></img>
          <div className="ResultText">
            <p>광양 불고기</p>
            <div>참숯 위에서 천천히 구워내는 광양 불고기. 불향이 어우러져 깊고 고소한 맛을 자랑합니다.</div>
            <M.Reaction style={{ marginBottom: "0" }}>
              <img src={Good} alt="좋아요" style={{ margin: "0 5px 0 0" }} />
              <span style={{ fontSize: "16px" }}>12</span>
              <img src={Comment} alt="댓글" />
              <span style={{ fontSize: "16px" }}>3</span>
            </M.Reaction>
          </div>
        </L.ResultBox>
        <L.ResultBox>
          <img src={bulgogi4}></img>
          <div className="ResultText">
            <p>리메이크 광양 불고기</p>
            <div>남은 광양 불고기를 리베이크로 다시 즐기는 간편 레시피! 오븐이나 에어프라이어로 재가열해도 촉촉함을 유지할 수 있어요.</div>
            <M.Reaction style={{ marginBottom: "0" }}>
              <img src={Good} alt="좋아요" style={{ margin: "0 5px 0 0" }} />
              <span style={{ fontSize: "16px" }}>12</span>
              <img src={Comment} alt="댓글" />
              <span style={{ fontSize: "16px" }}>3</span>
            </M.Reaction>
          </div>
        </L.ResultBox>
      </L.Result>
    </L.Container>
  );
};

export default SearchListDetail;
