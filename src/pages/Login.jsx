import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as L from "../styles/StyledLogin";
import Logo from "../assets/svg/logo.svg";
import Back from "../assets/svg/loginBack.svg";
import Line from "../assets/svg/underLine.svg";

const Login = () => {
  const navigate = useNavigate();
  const goBack = () => navigate(-1);
  const SearchID = () => navigate("/searchID");
  const SearchBB = () => navigate("/searchBB");
  const SignUp = () => navigate("/signUp");

  // 입력값 상태 관리
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleLogin = async () => {
    if (!username || !password) {
      setErrorMessage("아이디와 비밀번호를 입력해주세요.");
      return;
    }

    try {
      const formData = new FormData();
      formData.append("username", username);
      formData.append("password", password);

      const response = await fetch("https://junyeongan.store/login", {
        method: "POST",
        body: formData,
      });

      console.log(`서버 응답 상태 코드: ${response.status}`);

      if (response.ok) {
        // 헤더에서 `Authorization` 토큰 가져오기
        const token = response.headers.get("Authorization");
        console.log("🔑 응답 헤더에서 가져온 토큰:", token);

        if (token) {
          const cleanToken = token.replace("Bearer ", ""); // `Bearer` 제거
          localStorage.setItem("user_token", cleanToken);

          // 로그인 후 사용자 정보 불러오기
          await fetchUserData(cleanToken);
        } else {
          console.warn("⚠️ `Authorization` 헤더에 토큰이 없음!");
        }

        // 로그인 성공 후 페이지 이동
        navigate("/");
        return;
      }

      // 로그인 실패 처리
      setErrorMessage(`로그인 실패 (HTTP ${response.status})`);
    } catch (error) {
      console.error("로그인 오류:", error);
      setErrorMessage(`서버 오류: ${error.message}`);
    }
  };

  // 사용자 정보 가져와서 저장하는 함수
  const fetchUserData = async (token) => {
    try {
      const response = await fetch("https://junyeongan.store/api/user/me/details", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error(`사용자 정보 가져오기 실패! 상태 코드: ${response.status}`);
      }

      const result = await response.json();
      console.log("🧑‍💻 사용자 정보 응답:", result);

      if (result.status === 200 && result.data) {
        // 사용자 정보를 로컬 스토리지에 저장
        localStorage.setItem("userData", JSON.stringify(result.data));
      } else {
        console.warn("⚠️ 사용자 정보가 없습니다.");
      }
    } catch (error) {
      console.error("사용자 정보 가져오기 실패:", error.message);
    }
  };

  return (
    <L.Container>
      <L.Background>
        <img src={Back} alt="backBtn" onClick={goBack} className="back-btn" />
        <img src={Logo} alt="blendish_logo" />
        <L.ID>
          <h4>로그인</h4>
          <div className="inputBox">
            <p>아이디</p>
            <input value={username} onChange={(e) => setUsername(e.target.value)} />
          </div>
          <img className="under-line" src={Line} />

          <div className="inputBox">
            <p>비밀번호</p>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          <img className="under-line" src={Line} />
        </L.ID>

        {/* 로그인 버튼 */}
        <L.LoginBox onClick={handleLogin}>
          <div>
            <span>로그인</span>
          </div>
        </L.LoginBox>

        {/* 오류 메시지 표시 */}
        {errorMessage && <p className="error-message">{errorMessage}</p>}

        <L.Search>
          <p onClick={SearchID}>아이디 찾기</p>
          <p>|</p>
          <p onClick={SearchBB}>비밀번호 찾기</p>
          <p>|</p>
          <p onClick={SignUp}>회원가입</p>
        </L.Search>
      </L.Background>
    </L.Container>
  );
};

export default Login;
