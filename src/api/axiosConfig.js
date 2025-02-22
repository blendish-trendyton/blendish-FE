import axios from "axios";

const instance = axios.create({
  baseURL: "https://junyeongan.store", // 요청할 기본 URL
  headers: {
    "Content-Type": "application/json",
  },
});

// 요청 인터셉터 추가 (자동으로 토큰 포함)
instance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("authToken");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`; // 토큰 추가
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default instance;
