import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import * as F from "../styles/StyledFoodDet";
import * as M from "../styles/StyledMain";
import mainLogo from "../assets/svg/mainLogo.svg";
import Good from "../assets/svg/good.svg";
import Comment from "../assets/svg/comment.svg";
import Heart from "../assets/svg/Heart.svg";
import EmptyHeart from "../assets/svg/EmptyHeart.svg";
import tomato from "../assets/svg/tomato.svg";
import blackBackBtn from "../assets/svg/blackBackBtn.svg";
import profile from "../assets/svg/profile.svg";
import saveBtn from "../assets/svg/saveBtn.svg";
import CommentLine from "../assets/svg/CommentLine.svg";
// import axios from "axios";

const FoodDetail = () => {
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
  const goBack = () => {
    navigate(-1);
  };
  const goRecipe = () => {
    navigate(`RecipeMore`);
  };

  const goComment = () => {
    navigate(`CommentMore`);
  };

  //  하트 on/off
  const [isLiked, setIsLiked] = useState(false);
  const toggleLike = () => {
    setIsLiked(!isLiked);
  };

  return (
    <F.Container>
      <F.TopImg>
        <img src={tomato}></img>
        <img className="backBtn" src={blackBackBtn} onClick={goBack}></img>
        <div className="level-box">
          <button>하</button>
          <button>~15분</button>
        </div>
      </F.TopImg>
      <F.UserPro>
        <img src={profile}></img>
        <div className="date-box">
          <p>2025-02-05</p>
          <span>bestcooker0205</span>
        </div>
        <img src={isLiked ? Heart : EmptyHeart} alt="like button" onClick={toggleLike} style={{ cursor: "pointer", width: "30px", height: "30px" }} />
      </F.UserPro>
      <F.Content>
        <div className="food-info">
          <h4>토마토 파스타</h4>
          <div className="taste">
            <p>#짠맛</p>
            <p>#담백한 맛</p>
            <p>#🌶️</p>
          </div>
        </div>
        <img src={saveBtn}></img>
      </F.Content>
      <F.ReactionBox>
        <M.Reaction>
          <img src={Good} alt="좋아요" />
          <span>12</span>
          <img src={Comment} alt="댓글" />
          <span>3</span>
        </M.Reaction>
        <p onClick={goRecipe}>레시피 더보기</p>
      </F.ReactionBox>
      <F.RecipeExplan>
        싱그러운 토마토와 향긋한 바질 향이 어우러진 기본에 충실한 토마토 파스타! 누구나 쉽게 따라 할 수 있는 레시피로 집에서도 레스토랑 퀄리티를 즐겨보세요
      </F.RecipeExplan>
      <img src={CommentLine}></img>
      <F.CommentBox>
        <div className="comment-header">
          <h4>댓글</h4>
          <p onClick={goComment}>댓글 더보기</p>
        </div>
        <F.Comment>
          <F.CommentInfo>
            <img src={profile}></img>
            <span>bestcooker0205</span>
            <time>2025-02-05</time>
          </F.CommentInfo>
          <p>만들어서 먹어봤는데 너무 간단하고 맛있어서 눈물이 날 뻔 한건 아니지만 그래도 간편하고 한 끼 식사 잘 때웠어요 감사해요</p>
        </F.Comment>
        <F.Comment>
          <F.CommentInfo>
            <img src={profile}></img>
            <span>bestcooker0205</span>
            <time>2025-02-05</time>
          </F.CommentInfo>
          <p>만들어서 먹어봤는데 너무 간단하고 맛있어서 눈물이 날 뻔 한건 아니지만 그래도 간편하고 한 끼 식사 잘 때웠어요 감사해요</p>
        </F.Comment>
        <F.Comment>
          <F.CommentInfo>
            <img src={profile}></img>
            <span>bestcooker0205</span>
            <time>2025-02-05</time>
          </F.CommentInfo>
          <p>만들어서 먹어봤는데 너무 간단하고 맛있어서 눈물이 날 뻔 한건 아니지만 그래도 간편하고 한 끼 식사 잘 때웠어요 감사해요</p>
        </F.Comment>
      </F.CommentBox>
      <F.Nav>
        <F.Hr />
        <F.Item>
          <F.Maker>
            <img src={`${process.env.PUBLIC_URL}/images/MakerY.svg`} alt="메이커" />
            <div>메이커</div>
          </F.Maker>
          <F.Search>
            <img src={`${process.env.PUBLIC_URL}/images/Search.svg`} alt="검색" />
            <div>검색</div>
          </F.Search>
          <F.Home onClick={goHome}>
            <img src={`${process.env.PUBLIC_URL}/images/Home.svg`} alt="홈" />
            <div>홈</div>
          </F.Home>
          <F.Write onClick={gowrite}>
            <img src={`${process.env.PUBLIC_URL}/images/Write.svg`} alt="작성" />
            <div>작성</div>
          </F.Write>
          <F.Me onClick={gome}>
            <img src={`${process.env.PUBLIC_URL}/images/Me.svg`} alt="나" />
            <div>내정보</div>
          </F.Me>
        </F.Item>
      </F.Nav>
    </F.Container>
  );
};

export default FoodDetail;
