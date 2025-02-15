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
    width: 142px;
    height: 101px;
    margin-top: 28px;
    margin-bottom: 93px;
  }
  .back-btn {
    position: absolute;
    top: 40px;
    left: 37px;
    width: 18px;
    height: auto;
    cursor: pointer;
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

export const ID = styled.div`
  display: block;
  text-align: left;
  align-items: center;
  color: #fff;
  margin-left: 37px;
  font-family: "Instrument Sans";
  .inputBox {
    display: flex;
    align-items: center;
    justify-content: space-between;
    input {
      color: #fff;
      font-size: 18px;
      margin-left: 10px;
      width: 160px;
      height: 25px;
      display: flex;
      align-self: flex-end;
      background-color: transparent;
      border: none;
      outline: none;
    }
    p {
      color: #fff;
      font-size: 18px;
      font-style: normal;
      line-height: normal;
      opacity: 0.85;
    }
  }
  h4 {
    margin-bottom: 66px;
    font-size: 32px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }

  img {
    width: 235px;
    height: 1px;
    margin: 5px 0 44px 0;
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
  justify-content: center;
  align-items: center;
  box-shadow: 2px 4px 6px rgba(0, 0, 0, 0.2);
  margin: 0 auto;
  margin-top: 22px;

  span {
    color: #fff;
    text-align: center;
    font-family: "Instrument Sans";
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    opacity: 0.85;
  }
  &.c-num {
    width: 75px;
    height: 37px;
    margin: 0 20px;
    span {
      font-size: 14px;
    }
  }
`;

export const Search = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  color: #fff;
  font-weight: 0;

  p {
    margin-right: 10px;
    opacity: 0.85;
  }
`;
