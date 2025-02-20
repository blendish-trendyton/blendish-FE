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
        body: formData, // FormData 전송
      });

      console.log(`📡 서버 응답 상태 코드: ${response.status}`);

      // 응답 상태 코드 체크 (201, 200, 204 등)
      if (response.ok) {
        let result = null;

        // 응답 본문이 있는지 체크 후 JSON 파싱
        const responseText = await response.text();
        if (responseText) {
          try {
            result = JSON.parse(responseText);
            console.log("서버 응답 JSON:", result);
          } catch (jsonError) {
            console.warn("JSON 파싱 오류. 응답이 JSON이 아님.");
            console.warn("서버 응답 (텍스트):", responseText);
          }
        } else {
          console.warn("서버 응답이 비어 있음");
        }

        alert("로그인 성공!");
        if (result && result.data) {
          localStorage.setItem("userData", JSON.stringify(result.data)); // 사용자 정보 저장
        }
        navigate("/"); // 로그인 후 이동할 페이지
        return;
      }

      // 응답이 실패한 경우
      setErrorMessage(`로그인 실패 (HTTP ${response.status})`);
    } catch (error) {
      console.error("로그인 오류:", error);
      setErrorMessage(`서버 오류: ${error.message}`);
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
