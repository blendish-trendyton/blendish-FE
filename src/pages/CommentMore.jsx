import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import * as F from "../styles/StyledCommentM";
import blackBackBtn from "../assets/svg/blackBackBtn.svg";
import profile from "../assets/svg/profile.svg";
import sendBtn from "../assets/svg/sendBtn.svg";
import home from "../assets/svg/home.svg";

const CommentMore = () => {
  const navigate = useNavigate();
  const { recipeId } = useParams(); // URL에서 recipeId 가져오기
  const [errorMessage, setErrorMessage] = useState(""); // 오류 메시지 저장
  const [comments, setComments] = useState([]); // 댓글 목록
  const [newComment, setNewComment] = useState(""); // 새 댓글 입력 값

  // 로컬스토리지에서 토큰 가져오기
  const token = localStorage.getItem("user_token");

  // 로그인되지 않은 경우 로그인 페이지로 리디렉트
  useEffect(() => {
    if (!token) {
      console.warn("🔑 토큰이 없음, 로그인 페이지로 이동");
      navigate("/login");
    }
  }, [token, navigate]);

  // 전체 댓글 및 대댓글 불러오기
  useEffect(() => {
    const fetchComments = async () => {
      if (!token || !recipeId) return;

      try {
        const response = await fetch(`https://junyeongan.store/api/Comment/AllComment?recipeId=${recipeId}`, {
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
        console.log("📝 전체 댓글 API 응답:", result);

        if (result.status === 200 && Array.isArray(result.data)) {
          setComments(result.data);
        } else {
          setErrorMessage("댓글 데이터를 불러올 수 없습니다.");
        }
      } catch (error) {
        console.error("❌ 전체 댓글 불러오기 실패:", error.message);
        setErrorMessage("서버 오류가 발생했습니다.");
      }
    };

    fetchComments();
  }, [recipeId, token]);

  // 댓글 전송 함수
  const handleCommentSubmit = async () => {
    if (!newComment.trim()) return; // 빈 댓글 방지

    // JSON 데이터 타입 변환
    const requestBody = {
      recipeId: Number(recipeId),
      parentCommentId: null, // 부모 댓글 (대댓글 아님)
      content: newComment.trim(),
    };

    console.log("요청 바디:", JSON.stringify(requestBody));

    try {
      const response = await fetch(`https://junyeongan.store/api/Comment/InsertComment`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(requestBody),
      });

      console.log("📢 서버 응답 상태 코드:", response.status);

      if (!response.ok) {
        throw new Error(`HTTP 오류! 상태 코드: ${response.status}`);
      }

      const result = await response.json();
      console.log("댓글 추가 API 응답:", result);

      if (result.status === 200) {
        // 새로운 댓글을 리스트에 추가
        setComments((prevComments) => [
          {
            commentId: prevComments.length + 1,
            userId: "현재 사용자",
            profilePic: null,
            content: newComment,
            createdAt: new Date().toISOString().split("T")[0],
            replyList: [],
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
        <div className="backFlex">
          <img src={blackBackBtn} onClick={() => navigate(-1)} alt="뒤로 가기" />
          <h4>전체 댓글</h4>
        </div>
        <img className="homeBtn" src={home} onClick={() => navigate(`/`)} alt="홈"></img>
      </F.TopImg>

      {errorMessage ? (
        <p style={{ color: "red", textAlign: "center", marginTop: "20px" }}>{errorMessage}</p>
      ) : (
        <>
          {/* 댓글 입력창 추가 */}
          <F.CommentInputBox>
            <input type="text" value={newComment} onChange={(e) => setNewComment(e.target.value)} placeholder="댓글을 입력하세요." />
            <img src={sendBtn} onClick={handleCommentSubmit} alt="전송 버튼" />
          </F.CommentInputBox>

          <F.CommentBox>
            {comments.length > 0 ? (
              comments.map((comment) => (
                <div key={comment.commentId}>
                  {/* 부모 댓글 */}
                  <F.Comment>
                    <F.CommentInfo>
                      <img src={comment.profilePic || profile} alt="프로필" />
                      <span>{comment.userId || "익명"}</span>
                      <time>{comment.createdAt}</time>
                    </F.CommentInfo>
                    <p>{comment.content}</p>
                  </F.Comment>

                  {/* 🔹 대댓글 렌더링 */}
                  {comment.replyList && comment.replyList.length > 0 && (
                    <div style={{ marginLeft: "30px", borderLeft: "2px solid #ddd", paddingLeft: "10px" }}>
                      {comment.replyList.map((reply) => (
                        <F.Reply key={reply.commentId}>
                          <F.CommentInfo>
                            <img src={reply.profilePic || profile} alt="프로필" />
                            <span>{reply.userId || "익명"}</span>
                            <time>{reply.createdAt}</time>
                          </F.CommentInfo>
                          <p>{reply.content}</p>
                        </F.Reply>
                      ))}
                    </div>
                  )}
                </div>
              ))
            ) : (
              <p style={{ textAlign: "center", marginTop: "20px" }}>댓글이 없습니다.</p>
            )}
          </F.CommentBox>
        </>
      )}
    </F.Container>
  );
};

export default CommentMore;
