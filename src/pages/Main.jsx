import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import * as M from "../styles/StyledMain";
import mainLogo from "../assets/svg/mainLogo.svg";
import Good from "../assets/svg/good.svg";
import Comment from "../assets/svg/comment.svg";
// import axios from "axios";

const Main = () => {
  const navigate = useNavigate();

  const gome = () => {
    navigate(`/me`);
  };

  const gowrite = () => {
    navigate(`/write`);
  };
  const goHome = () => {
    navigate("/");
  };
  return (
    <M.Container>
      <M.TodayR>
        <img src={mainLogo}></img>
        <h4>오늘의 레시피</h4>
        <div className="todayR">
          <div>
            <div></div>
            <span>광양 불고기</span>
          </div>
          <div>
            <div></div>
            <span>매운 떡볶이</span>
          </div>
          <div>
            <div></div>
            <span>매콤 치즈 부리또</span>
          </div>
          <div>
            <div></div>
            <span>알리오올리오</span>
          </div>
        </div>
      </M.TodayR>
      <M.Famous>
        <h4>인기 레시피</h4>
        <div className="famousR">
          <div>
            <div></div>
            <p>광양 불고기</p>
            <M.Reaction>
              <img src={Good}></img>
              <span>12</span>
              <img src={Comment}></img>
              <span>3</span>
            </M.Reaction>
          </div>
          <div>
            <div></div>
            <p>매운 떡볶이</p>
            <M.Reaction>
              <img src={Good}></img>
              <span>12</span>
              <img src={Comment}></img>
              <span>3</span>
            </M.Reaction>
          </div>
        </div>
        <div className="famousR">
          <div>
            <div></div>
            <p>광양 불고기</p>
            <M.Reaction>
              <img src={Good}></img>
              <span>12</span>
              <img src={Comment}></img>
              <span>3</span>
            </M.Reaction>
          </div>
          <div>
            <div></div>
            <p>매운 떡볶이</p>
            <M.Reaction>
              <img src={Good}></img>
              <span>12</span>
              <img src={Comment}></img>
              <span>3</span>
            </M.Reaction>
          </div>
        </div>
        <div className="famousR">
          <div>
            <div></div>
            <p>광양 불고기</p>
            <M.Reaction>
              <img src={Good}></img>
              <span>12</span>
              <img src={Comment}></img>
              <span>3</span>
            </M.Reaction>
          </div>
          <div>
            <div></div>
            <p>매운 떡볶이</p>
            <M.Reaction>
              <img src={Good}></img>
              <span>12</span>
              <img src={Comment}></img>
              <span>3</span>
            </M.Reaction>
          </div>
        </div>
      </M.Famous>
      <M.Nav>
        <M.Hr />
        <M.Item>
          <M.Maker>
            <img src={`${process.env.PUBLIC_URL}/images/MakerY.svg`} alt="메이커" />
            <div>메이커</div>
          </M.Maker>
          <M.Search>
            <img src={`${process.env.PUBLIC_URL}/images/Search.svg`} alt="검색" />
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
    </M.Container>
  );
};

export default Main;
