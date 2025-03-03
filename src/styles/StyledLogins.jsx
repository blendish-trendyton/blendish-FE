import { styled } from "styled-components";
import loginBack from "../assets/img/loginBack.png";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  text-align: center; /* 가로 중앙 정렬 */
  position: relative;
  margin: 0 auto;
  min-height: 100vh;
  padding: 0;
  box-sizing: border-box;
  background: #fff;
  width: 393px;

  img {
    display: inline-block; /* 가운데 정렬을 유지하기 위해 */
    max-width: 100%;
    height: auto;
    margin-top: 167px;
    margin-bottom: 93px;
  }
`;
export const Background = styled.div`
  position: relative; /* 부모 요소 기준 */
  width: 100%;
  min-height: 100vh;
  background-image: url(${loginBack});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;

  /* 검정 반투명 레이어 */
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5); /* 투명도 조절 */
    z-index: 1;
  }

  /* 내부 요소가 잘 보이도록 설정 */
  > * {
    position: relative;
    z-index: 2;
    color: white;
  }
`;

export const LoginBox = styled.div`
  display: flex;
  box-sizing: border-box;
  background-color: #ff9d00;
  border: 0cap;
  width: 300px;
  height: 45px;
  border-radius: 5px;
  align-items: center;
  box-shadow: 2px 4px 6px rgba(0, 0, 0, 0.2);
  margin: 0 auto;
  img {
    width: 14px;
    margin: 0 58px 0 38px;
  }
  span {
    color: #fff;
    text-align: center;
    font-family: "Instrument Sans";
    font-size: 13px;
    font-style: normal;
    font-weight: 600;
  }
`;
