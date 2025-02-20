import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import * as F from "../styles/StyledFoodDet";
import * as M from "../styles/StyledMain";
import Good from "../assets/svg/good.svg";
import Comment from "../assets/svg/comment.svg";
import Heart from "../assets/svg/Heart.svg";
import EmptyHeart from "../assets/svg/EmptyHeart.svg";
import blackBackBtn from "../assets/svg/blackBackBtn.svg";
import profile from "../assets/svg/profile.svg";
import saveBtn from "../assets/svg/saveBtn.svg";
import CommentLine from "../assets/svg/CommentLine.svg";
import defaultFoodImage from "../assets/svg/mainFood1.svg"; // 기본 이미지 설정

const FoodDetail = () => {
  const navigate = useNavigate();
  const { recipeId } = useParams(); // URL에서 recipeId 가져오기
  const [recipeData, setRecipeData] = useState(null); // 레시피 데이터 저장
  const [isLiked, setIsLiked] = useState(false); // 좋아요 상태 관리
  const [likeCount, setLikeCount] = useState(0); // 좋아요 개수 상태 추가
  const [errorMessage, setErrorMessage] = useState(""); // 오류 메시지 저장

  useEffect(() => {
    const fetchRecipeDetail = async () => {
      try {
        const token =
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJ1c2VybmFtZSI6InVzZXI0NTYiLCJyb2xlIjoiUk9MRV9BRE1JTiIsImlhdCI6MTc0MDAzOTQ1OCwiZXhwIjoxNzQwMjEyMjU4fQ.4GrE6MSLAPqnrIzG48iBaxY4U_IrukJ0W51RDl-KjGM"; // 로그인 후 받은 토큰

        const response = await fetch(`https://junyeongan.store/api/community/DetailRecipe?recipeId=${recipeId}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: token,
          },
        });

        if (!response.ok) {
          throw new Error(`HTTP 오류! 상태 코드: ${response.status}`);
        }

        const result = await response.json();
        console.log(" 레시피 상세 응답:", result);

        if (result.status === 200 && result.data) {
          setRecipeData(result.data);
          setIsLiked(result.data.hart); // 서버에서 받은 좋아요 상태 적용
          setLikeCount(result.data.likeCount); // 좋아요 개수 설정
        } else {
          setErrorMessage("레시피 데이터를 불러올 수 없습니다.");
        }
      } catch (error) {
        console.error(" 레시피 데이터 가져오기 실패:", error.message);
        setErrorMessage("서버 오류가 발생했습니다.");
      }
    };

    if (recipeId) {
      fetchRecipeDetail();
    }
  }, [recipeId]);

  // 좋아요 버튼 클릭 시 API 요청
  const toggleLike = async () => {
    try {
      const token =
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJ1c2VybmFtZSI6InVzZXI0NTYiLCJyb2xlIjoiUk9MRV9BRE1JTiIsImlhdCI6MTc0MDAzOTQ1OCwiZXhwIjoxNzQwMjEyMjU4fQ.4GrE6MSLAPqnrIzG48iBaxY4U_IrukJ0W51RDl-KjGM"; // 로그인 후 받은 토큰

      const url = isLiked ? "https://junyeongan.store/api/community/deleteLike" : "https://junyeongan.store/api/community/updateLike";

      console.log("🛠 좋아요 요청 보냄, recipeId:", recipeId);

      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: token, // Bearer 토큰 추가
        },
        body: JSON.stringify({ recipeId: Number(recipeId) }),
      });

      if (!response.ok) {
        throw new Error(`HTTP 오류! 상태 코드: ${response.status}`);
      }

      const result = await response.json();
      console.log("❤️ 좋아요 API 응답:", result);

      if (result.status === 200) {
        setIsLiked((prev) => !prev);
        setLikeCount((prev) => (isLiked ? prev - 1 : prev + 1));
      } else {
        console.error(" 서버 응답이 정상적이지 않음:", result);
      }
    } catch (error) {
      console.error(" 좋아요 처리 실패:", error.message);
    }
  };

  return (
    <F.Container>
      <F.TopImg>
        <img src={recipeData?.foodImage ? recipeData.foodImage : defaultFoodImage} alt="음식 이미지" className="foodImg" />
        <img className="backBtn" src={blackBackBtn} onClick={() => navigate(-1)} alt="뒤로 가기" />
        <div className="level-box">
          <button>{recipeData?.level || "N/A"}</button>
          <button>{recipeData?.time || "시간 정보 없음"}</button>
        </div>
      </F.TopImg>

      {errorMessage ? (
        <p style={{ color: "red", textAlign: "center", marginTop: "20px" }}>{errorMessage}</p>
      ) : recipeData ? (
        <>
          <F.UserPro>
            <img src={recipeData.profilePic || profile} alt="프로필" />
            <div className="date-box">
              <p>{recipeData.postDate}</p>
              <span>{recipeData.userId}</span>
            </div>
            <img
              src={isLiked ? Heart : EmptyHeart}
              alt="like button"
              onClick={toggleLike} //  좋아요 토글 함수 적용
              style={{ cursor: "pointer", width: "30px", height: "30px" }}
            />
          </F.UserPro>

          <F.Content>
            <div className="food-info">
              <h4>{recipeData.name}</h4>
              <div className="taste">
                {recipeData.flavor.length > 0 ? recipeData.flavor.map((flavor, index) => <p key={index}>#{flavor}</p>) : <p>#맛 정보 없음</p>}
              </div>
            </div>
            <img src={saveBtn} alt="저장 버튼" />
          </F.Content>

          <F.ReactionBox>
            <M.Reaction>
              <img src={Good} alt="좋아요" />
              <span>{likeCount}</span>
              <img src={Comment} alt="댓글" />
              <span>{recipeData.commentCount}</span>
            </M.Reaction>
            <p onClick={() => navigate(`/recipeMore/${recipeId}`)}>레시피 ></p>
          </F.ReactionBox>
        </>
      ) : (
        <p style={{ textAlign: "center", marginTop: "20px" }}>로딩 중...</p>
      )}
    </F.Container>
  );
};

export default FoodDetail;
