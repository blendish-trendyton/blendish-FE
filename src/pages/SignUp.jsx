import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "../styles/StyledSignUp";
import Logo from "../assets/svg/logo.svg";
import Back from "../assets/svg/loginBack.svg";
import Line from "../assets/svg/underLine.svg";
import Circle from "../assets/svg/BBCircle.svg";

const SignUp = () => {
  const navigate = useNavigate();
  const goBack = () => navigate(-1);

  // 상태 변수 설정
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [email, setEmail] = useState("");
  const [isIdAvailable, setIsIdAvailable] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [passwordError, setPasswordError] = useState(""); // 비밀번호 오류 메시지

  const isMatch = password !== "" && password === confirmPassword;

  // 아이디 중복 확인
  const handleCheckId = async () => {
    try {
      const response = await fetch("https://junyeongan.store/join/check", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userId }),
      });

      const result = await response.json();
      if (response.ok) {
        setIsIdAvailable(true);
        setErrorMessage("사용 가능한 아이디입니다.");
      } else {
        setIsIdAvailable(false);
        setErrorMessage(result.message || "이미 사용 중인 아이디입니다.");
      }
    } catch (error) {
      setErrorMessage("서버 오류가 발생했습니다.");
    }
  };

  // 비밀번호 입력 중 오류 메시지 초기화
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setPasswordError(""); // 입력 시 오류 메시지 삭제
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
    setPasswordError(""); // 입력 시 오류 메시지 삭제
  };

  // `회원가입`을 나중에 진행하므로, 다음 페이지로 이동하면서 필요한 정보 전달
  const goToSelectPage = () => {
    if (!isMatch) {
      setPasswordError("비밀번호가 일치하지 않습니다.");
      return;
    }
    if (!isIdAvailable) {
      setErrorMessage("아이디 중복 확인을 먼저 해주세요.");
      return;
    }

    // `state`를 사용하여 `SelectPage`로 데이터를 전달
    navigate("/signUp/selectPage", {
      state: { userId, password, email },
    });
  };

  return (
    <S.Container>
      <S.Background>
        <img src={Back} alt="backBtn" onClick={goBack} className="back-btn" />
        <img src={Logo} alt="blendish_logo" />
        <S.ID>
          <h4>회원가입</h4>
          <div className="inputBox">
            <p>아이디</p>
            <input value={userId} onChange={(e) => setUserId(e.target.value)} />
            <S.LoginBox className="c-num" onClick={handleCheckId}>
              <span>중복확인</span>
            </S.LoginBox>
          </div>

          <img className={`under-line ${errorMessage ? "no-margin" : ""}`} src={Line} style={{ width: "235px" }} />
          {/* 아이디 중복 확인 메시지 추가 */}
          {errorMessage && <p className="id-check-message">{errorMessage}</p>}

          <div className="inputBox">
            <p>이메일</p>
            <input value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <img className="under-line" src={Line} />

          <div className="inputBox">
            <p>비밀번호</p>
            <input type="password" value={password} onChange={handlePasswordChange} />
          </div>
          <img className="under-line" src={Line} />

          <div className="inputBox">
            <p>비밀번호 확인</p>
            <input type="password" value={confirmPassword} onChange={handleConfirmPasswordChange} />
            {isMatch && <img src={Circle} alt="correct" className="check-icon" />}
          </div>

          {/* 항상 존재하는 밑줄 */}
          <img className="under-line" src={Line} />

          {/* 비밀번호 오류 메시지 (없을 때도 height 유지) */}
          <div className="error-message-container">{passwordError && <p className="password-error-message">{passwordError}</p>}</div>
        </S.ID>

        {/* 회원가입 요청을 하지 않고, 다음 페이지로 이동 */}
        <S.LoginBox onClick={goToSelectPage}>
          <div>
            <span>국가 / 맛 취향 선택</span>
          </div>
        </S.LoginBox>
      </S.Background>
    </S.Container>
  );
};

export default SignUp;
