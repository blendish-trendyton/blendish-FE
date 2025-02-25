import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import * as E from "../styles/StyledEPW";
import axios from "axios";

const api = axios.create({
  baseURL: "https://junyeongan.store/api",
  headers: {
    "Content-Type": "application/json",
  },
});

const EditPW = () => {
  const navigate = useNavigate();

  const goback = () => {
    navigate(-1);
  };

  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [savedPassword, setSavedPassword] = useState("");
  const [passwordMatchError, setPasswordMatchError] = useState(false);
  const [confirmMatchError, setConfirmMatchError] = useState(false);

  useEffect(() => {
    const fetchUserPassword = async () => {
      try {
        const token = localStorage.getItem("user_token");
        const response = await api.get("/user/me", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        console.log("전체 응답 데이터:", response.data);
        if (response.data && response.data.userPw) {
          setSavedPassword(response.data.userPw);
          console.log("가져온 비밀번호:", response.data.userPw);
        } else {
          console.error("응답 데이터에 비밀번호가 없습니다.");
        }
      } catch (error) {
        console.error("❌ 비밀번호 정보 가져오기 실패:", error);
      }
    };

    fetchUserPassword();
  }, []);

  const handleCurrentPasswordChange = (e) => {
    const value = e.target.value;
    setCurrentPassword(value);
    setPasswordMatchError(value !== savedPassword);
  };

  const handleNewPasswordChange = (e) => {
    setNewPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    const value = e.target.value;
    setConfirmPassword(value);
    setConfirmMatchError(value !== newPassword);
  };

  const handlePasswordUpdate = () => {
    if (!passwordMatchError && !confirmMatchError && newPassword) {
      navigate("/editprofile", { state: { updatedPassword: newPassword } });
    } else {
      alert("비밀번호를 정확히 입력해주세요.");
    }
  };

  return (
    <E.Container>
      <E.Nav>
        <img
          id="back"
          src={`${process.env.PUBLIC_URL}/images/Goback.svg`}
          alt="뒤로가기기"
          onClick={goback}
        />
        <img
          id="home"
          src={`${process.env.PUBLIC_URL}/images/Gohome.svg`}
          alt="홈"
        />
      </E.Nav>
      <E.Title>
        <div>비밀번호 변경</div>
      </E.Title>
      <E.Box>
        <E.Now>
          <div>현재 비밀번호</div>
          <input
            type="text"
            defaultValue={savedPassword}
            value={currentPassword}
            onChange={handleCurrentPasswordChange}
          />
          {passwordMatchError && (
            <div style={{ color: "red" }}>
              기존 비밀번호와 일치하지 않습니다.
            </div>
          )}
        </E.Now>
        <E.New>
          <div>새 비밀번호</div>
          <input
            type="password"
            value={newPassword}
            onChange={handleNewPasswordChange}
          />
        </E.New>
        <E.Re>
          <div>새 비밀번호 확인</div>
          <input
            type="password"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
          />
          {confirmMatchError && (
            <div style={{ color: "red" }}>새 비밀번호와 일치하지 않습니다.</div>
          )}
        </E.Re>
      </E.Box>
      <E.Move>
        <E.Hr />
        <E.Edit onClick={handlePasswordUpdate}>
          <div>비밀번호 변경</div>
        </E.Edit>
      </E.Move>
    </E.Container>
  );
};

export default EditPW;
