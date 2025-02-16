import React from "react";
import { useNavigate } from "react-router-dom";
import * as M from "../styles/StyledMain";
import mainLogo from "../assets/svg/mainLogo.svg";
import Good from "../assets/svg/good.svg";
import Comment from "../assets/svg/comment.svg";
import mainFood1 from "../assets/svg/mainFood1.svg";
import mainFood2 from "../assets/svg/mainFood2.svg";
import mainFood3 from "../assets/svg/mainFood3.svg";
import mainFood4 from "../assets/svg/mainFood4.svg";
import home from "../assets/img/home.png";
import makerThin from "../assets/svg/makerThin.svg";
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
  const goFoodDetail = () => {
    navigate(`/foodDetail`);
  };
  const goSearchPage = () => {
    navigate(`/searchPage`);
  };
  const goMaker = () => {
    navigate(`/recipemaker`);
  };
  return (
    <M.Container>
      <M.TodayR>
        <img src={mainLogo} alt="Main Logo" className="mainLogo" />
        <h4>오늘의 레시피</h4>
        <div className="todayR">
          <div onClick={goFoodDetail}>
            <img src={mainFood1} alt="광양 불고기" className="recipe-box" />
            <span>광양 불고기</span>
          </div>
          <div>
            <img src={mainFood2} alt="매운 떡볶이" className="recipe-box" />
            <span>매운 떡볶이</span>
          </div>
          <div>
            <img src={mainFood3} alt="매콤 치즈 부리또" className="recipe-box" />
            <span>매콤 치즈 부리또</span>
          </div>
          <div>
            <img src={mainFood4} alt="알리오올리오" className="recipe-box" />
            <span>알리오올리오</span>
          </div>
        </div>
      </M.TodayR>
      <M.Famous>
        <h4>인기 레시피</h4>
        <div className="famousR">
          <div>
            <img src={mainFood1} alt="광양 불고기" className="recipe-box" />
            <p>광양 불고기</p>
            <M.Reaction>
              <img src={Good} alt="좋아요" />
              <span>12</span>
              <img src={Comment} alt="댓글" />
              <span>3</span>
            </M.Reaction>
          </div>
          <div>
            <img src={mainFood2} alt="매운 떡볶이" className="recipe-box" />
            <p>매운 떡볶이</p>
            <M.Reaction>
              <img src={Good} alt="좋아요" />
              <span>12</span>
              <img src={Comment} alt="댓글" />
              <span>3</span>
            </M.Reaction>
          </div>
        </div>
        <div className="famousR">
          <div>
            <img src={mainFood3} alt="매콤 치즈 부리또" className="recipe-box" />
            <p>매콤 치즈 부리또</p>
            <M.Reaction>
              <img src={Good} alt="좋아요" />
              <span>12</span>
              <img src={Comment} alt="댓글" />
              <span>3</span>
            </M.Reaction>
          </div>
          <div>
            <img src={mainFood4} alt="알리오올리오" className="recipe-box" />
            <p>알리오올리오</p>
            <M.Reaction>
              <img src={Good} alt="좋아요" />
              <span>12</span>
              <img src={Comment} alt="댓글" />
              <span>3</span>
            </M.Reaction>
          </div>
        </div>
      </M.Famous>
      <M.Nav>
        <M.Hr />
        <M.Item>
          <M.Maker onClick={goMaker}>
            <img src={makerThin} alt="메이커" />
            <div>메이커</div>
          </M.Maker>
          <M.Search onClick={goSearchPage}>
            <img src={`${process.env.PUBLIC_URL}/images/Search.svg`} alt="검색" />
            <div>검색</div>
          </M.Search>
          <M.Home onClick={goHome}>
            <img src={home} alt="홈" />
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
