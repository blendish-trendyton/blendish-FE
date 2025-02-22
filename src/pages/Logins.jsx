import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import * as L from "../styles/StyledLogins";
import Logo from "../assets/svg/logo.svg";
import LoginBtnPeople from "../assets/img/loginBtnPeople.png";

const Logins = () => {
  const navigate = useNavigate();

  // 배포된 백엔드 URL 설정
  const BACKEND_URL = "https://junyeongan.store";

  // 구글 로그인 요청 (redirect_uri 포함)
  const handleGoogleLogin = () => {
    const redirectUri = `${BACKEND_URL}/oauth2/callback/google`;
    const googleLoginUrl = "https://junyeongan.store/oauth2/authorization/google";

    window.location.href = googleLoginUrl;
  };

  // 로그인 후 리디렉션된 경우 처리
  useEffect(() => {
    // 로컬스토리지 초기화 (오류 방지)
    localStorage.removeItem("nextRotationAttemptTs");

    const queryParams = new URLSearchParams(window.location.search);
    const token = queryParams.get("token");
    const isNewUser = queryParams.get("newUser");

    if (token) {
      localStorage.setItem("authToken", token);

      if (isNewUser === "true") {
        navigate("/signUp");
      } else {
        navigate("/");
      }
    }
  }, [navigate]);

  return (
    <L.Container>
      <L.Background>
        <img src={Logo} alt="blendish_logo"></img>
        <L.LoginBox>
          <div onClick={handleGoogleLogin}>
            <img src={LoginBtnPeople} alt="google_login" />
            <span>구글 로그인</span>
          </div>
        </L.LoginBox>
        <L.LoginBox>
          <div onClick={() => navigate("/login")}>
            <img src={LoginBtnPeople} alt="existing_login" />
            <span>기존 계정으로 로그인</span>
          </div>
        </L.LoginBox>
      </L.Background>
    </L.Container>
  );
};

export default Logins;
