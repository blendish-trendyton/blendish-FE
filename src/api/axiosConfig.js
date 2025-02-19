import axios from "axios";

const instance = axios.create({
  baseURL: "https://junyeongan.store", // ✅ 배포된 백엔드 URL을 기본값으로 설정
  headers: {
    "Content-Type": "application/json", // 기본 헤더 설정 (필요에 따라 수정 가능)
  },
});

export default instance;
