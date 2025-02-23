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
import defaultFoodImage from "../assets/svg/mainFood1.svg";
import CommentLine from "../assets/svg/CommentLine.svg";
import sendBtn from "../assets/svg/sendBtn.svg";
import grayUnderLine from "../assets/svg/grayUnderLine.svg";
import EmptySave from "../assets/svg/EmptySave.svg";
const FoodDetail = () => {
  const navigate = useNavigate();
  const { recipeId } = useParams(); // URL에서 recipeId 가져오기

  const [recipeData, setRecipeData] = useState(null); // 레시피 데이터 저장
  const [isLiked, setIsLiked] = useState(false); // 좋아요 상태 관리
  const [likeCount, setLikeCount] = useState(0); // 좋아요 개수 상태 추가
  const [errorMessage, setErrorMessage] = useState(""); // 오류 메시지 저장
  const [comments, setComments] = useState([]); // 댓글 목록
  const [newComment, setNewComment] = useState(""); // 새 댓글 입력 값
  const [isScrapped, setIsScrapped] = useState(false); // 스크랩 상태
  const [scrapCount, setScrapCount] = useState(0); // 스크랩한 사람 수

  // 로컬스토리지에서 토큰 가져오기
  const token = localStorage.getItem("user_token");

  const payload = JSON.parse(atob(token.split(".")[1]));
  console.log("JWT Payload:", payload);

  useEffect(() => {
    const fetchRecipeDetail = async () => {
      if (!token) return;

      try {
        const response = await fetch(`https://junyeongan.store/api/community/DetailRecipe?recipeId=${recipeId}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          throw new Error(`HTTP 오류! 상태 코드: ${response.status}`);
        }

        const result = await response.json();
        console.log("레시피 상세 API 응답:", result);

        if (result.status === 200 && result.data) {
          setRecipeData(result.data);
          setIsLiked(result.data.hart); // 서버에서 받은 좋아요 상태 적용
          setLikeCount(result.data.likeCount); // 좋아요 개수 설정
          setComments(result.data.comments || []); //댓글 데이터 추가
          setIsScrapped(result.data.scrapped); // 스크랩 여부
          setScrapCount(result.data.scrapCount || 0); // 스크랩한 사람 수 설정
        } else {
          setErrorMessage("레시피 데이터를 불러올 수 없습니다.");
        }
      } catch (error) {
        console.error("레시피 데이터 가져오기 실패:", error.message);
        setErrorMessage("서버 오류가 발생했습니다.");
      }
    };

    if (recipeId) {
      fetchRecipeDetail();
    }
  }, [recipeId, token]);

  //좋아요 처리
  const toggleLike = async () => {
    const token = localStorage.getItem("user_token");

    if (!token) {
      console.error("토큰이 없습니다. 로그인 필요");
      alert("로그인이 필요합니다.");
      navigate("/login");
      return;
    }

    if (!recipeId) {
      console.error("recipeId 값이 없습니다.");
      return;
    }

    // 현재 좋아요 상태에 따라 요청할 URL 선택
    const url = isLiked ? "https://junyeongan.store/api/community/deleteLike" : "https://junyeongan.store/api/community/updateLike";

    console.log("좋아요 요청 URL:", url);
    console.log("전송되는 recipeId:", Number(recipeId));
    console.log("전송되는 토큰:", token);

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`, // JWT 토큰 포함
        },
        body: JSON.stringify(Number(recipeId)), // recipeId를 Long 타입으로 직접 전송
      });

      console.log("서버 응답 상태 코드:", response.status);

      if (response.status === 403) {
        console.error("403 오류 발생: 인증이 필요합니다.");
        localStorage.removeItem("user_token");
        alert("세션이 만료되었습니다. 다시 로그인해주세요.");
        navigate("/login");
        return;
      }

      if (!response.ok) {
        throw new Error(`HTTP 오류! 상태 코드: ${response.status}`);
      }

      const result = await response.json();
      console.log("좋아요 API 응답:", result);

      if (result.status === 200) {
        // UI 상태 업데이트
        setIsLiked((prevLiked) => {
          const newLikedState = !prevLiked;
          setLikeCount((prevCount) => (newLikedState ? prevCount + 1 : prevCount - 1));

          // recipeData도 최신 상태로 업데이트
          setRecipeData((prevData) => ({
            ...prevData,
            hart: newLikedState,
            likeCount: newLikedState ? prevData.likeCount + 1 : prevData.likeCount - 1,
          }));

          return newLikedState;
        });
      } else {
        console.error("서버 응답이 정상적이지 않음:", result);
      }
    } catch (error) {
      console.error("좋아요 처리 실패:", error.message);
    }
  };

  // 스크랩 처리 함수 수정
  const toggleScrap = async () => {
    const token = localStorage.getItem("user_token");

    if (!token) {
      console.error("토큰이 없습니다. 로그인 필요");
      navigate("/login");
      return;
    }

    const url = isScrapped ? "https://junyeongan.store/api/community/deleteScrap" : "https://junyeongan.store/api/community/updateScrap";

    console.log(`스크랩 요청 보냄 (isScrapped: ${isScrapped}), recipeId: ${recipeId}`);

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(Number(recipeId)), // recipeId를 Long 타입으로 직접 전송
      });

      console.log("서버 응답 상태 코드:", response.status);

      if (response.status === 403) {
        console.error("403 오류 발생: 인증이 필요합니다.");
        localStorage.removeItem("user_token");
        navigate("/login");
        return;
      }

      if (!response.ok) {
        throw new Error(`HTTP 오류! 상태 코드: ${response.status}`);
      }

      const result = await response.json();
      console.log("스크랩 API 응답:", result);

      if (result.status === 200) {
        setIsScrapped((prev) => {
          const newState = !prev;
          setScrapCount((prevCount) => (newState ? prevCount + 1 : prevCount - 1));
          return newState;
        });
      }
    } catch (error) {
      console.error("스크랩 처리 실패:", error.message);
    }
  };

  // 댓글 전송 함수 수정
  const handleCommentSubmit = async () => {
    if (!newComment.trim()) return; // 빈 댓글 방지

    const token = localStorage.getItem("user_token");
    if (!token) {
      console.error("토큰이 없습니다. 로그인 필요");
      alert("로그인이 필요합니다.");
      navigate("/login");
      return;
    }

    console.log("전송할 댓글 데이터:", newComment);
    console.log("전송할 recipeId:", Number(recipeId));

    try {
      const response = await fetch("https://junyeongan.store/api/Comment/InsertComment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          recipeId: Number(recipeId), // recipeId를 Long 타입으로 변환
          parentCommentId: null,
          content: newComment,
        }),
      });

      console.log("서버 응답 상태 코드:", response.status);

      if (!response.ok) {
        throw new Error(`HTTP 오류! 상태 코드: ${response.status}`);
      }

      const result = await response.json();
      console.log("댓글 추가 API 응답:", result);

      if (result.status === 200) {
        setComments((prevComments) => [
          {
            commentId: prevComments.length + 1,
            userId: payload.username, // JWT 토큰에서 username 가져오기
            profilePic: null, // 프로필 이미지 없을 경우 null 처리
            content: newComment,
            createdAt: new Date().toISOString().split("T")[0], // YYYY-MM-DD 형식
            numOfReply: 0,
          },
          ...prevComments,
        ]);
        setNewComment(""); // 입력 필드 초기화
      }
    } catch (error) {
      console.error("댓글 작성 실패:", error.message);
    }
  };

  return (
    <F.Container>
      <F.TopImg>
        <img src={recipeData?.foodImage || defaultFoodImage} alt="음식 이미지" className="foodImg" />
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
            <img src={isLiked ? Heart : EmptyHeart} alt="like button" onClick={toggleLike} style={{ cursor: "pointer", width: "30px", height: "30px" }} />
          </F.UserPro>

          <F.Content>
            <div className="food-info">
              <h4>{recipeData.name}</h4>
              <div className="taste">
                {recipeData.flavor.length > 0 ? recipeData.flavor.map((flavor, index) => <p key={index}>#{flavor}</p>) : <p>#맛 정보 없음</p>}
              </div>
            </div>
            <F.ScrapBox onClick={toggleScrap} style={{ color: isScrapped ? "#fff" : "#fcb01b" }}>
              <img src={isScrapped ? saveBtn : EmptySave} alt="스크랩 버튼" />
              <span>{scrapCount}</span>
            </F.ScrapBox>
          </F.Content>

          <F.ReactionBox>
            <M.Reaction>
              <img src={Good} alt="좋아요" />
              <span>{likeCount}</span>
              <img src={Comment} alt="댓글" />
              <span>{recipeData.commentCount}</span>
            </M.Reaction>
            <p onClick={() => navigate(`/recipeMore/${recipeId}`)}>레시피 보기 ></p>
          </F.ReactionBox>
        </>
      ) : (
        <p style={{ textAlign: "center", marginTop: "20px" }}>로딩 중...</p>
      )}

      {/* 레시피 소개 */}
      <F.Information>{recipeData?.information || "정보 없음"}</F.Information>

      {/* 댓글 구분선 */}
      <img src={CommentLine}></img>

      <F.CommentBox>
        <div className="comment-header">
          <h4>댓글</h4>
          <p onClick={() => navigate(`/commentMore/${recipeId}`)}>댓글 더보기</p>
        </div>

        <img src={grayUnderLine} alt="댓글 구분선" className="commentSec"></img>
        {/* 댓글 입력창 추가 */}
        <F.CommentInputBox>
          <input type="text" value={newComment} onChange={(e) => setNewComment(e.target.value)} placeholder="댓글을 입력하세요." />
          <img src={sendBtn} onClick={handleCommentSubmit}></img>
        </F.CommentInputBox>

        {comments.map((comment, index) => (
          <F.Comment key={index}>
            <F.CommentInfo>
              <img src={profile} alt="프로필" />
              <span>{comment.userId || "익명"}</span>
              <time>{new Date(comment.createdAt).toLocaleDateString()}</time>
            </F.CommentInfo>
            <p>{comment.content}</p>
          </F.Comment>
        ))}
      </F.CommentBox>
    </F.Container>
  );
};

export default FoodDetail;
