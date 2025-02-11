import { styled } from "styled-components";

export const Container = styled.div`
  position: relative;
  margin: 0 auto;
  margin-top: 0px;
  min-height: 100vh;
  padding: 0; /* 불필요한 패딩 제거 */
  box-sizing: border-box; /* 패딩이 width에 포함되도록 설정 */
  display: flex;
  flex-direction: column;
  background: #fff;
  width: 393px;
  flex-shrink: 0;
  padding-bottom: 200px;
`;

export const Nav = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between; /* 양쪽 끝으로 배치 */
  align-items: center;
  padding: 0 20px; /* 컨테이너 양쪽에 20px 마진 */
`;

export const Title = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 34px;
  justify-content: center;
  align-items: start;

  div {
    margin-left: 25px;
    color: #000;
    font-family: "Instrument Sans";
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }
`;

export const Box = styled.div`
  margin-top: 28px;
  gap: 26px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Now = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  gap: 19px;

  div {
    color: #424242;
    font-family: "Instrument Sans";
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }

  input {
    width: 341px;
    height: 46px;
    flex-shrink: 0;
    border-radius: 5px;
    border: 1.5px solid #d6d3d3;
    padding-left: 14px;
    background: transparent;
    outline: none; /* 포커스 시 기본 테두리 제거 */
  }
`;

export const New = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  gap: 19px;

  div {
    color: #424242;
    font-family: "Instrument Sans";
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }

  input {
    width: 341px;
    height: 46px;
    flex-shrink: 0;
    border-radius: 5px;
    border: 1.5px solid #d6d3d3;
    padding-left: 14px;
    background: transparent;
    outline: none; /* 포커스 시 기본 테두리 제거 */
  }
`;

export const Re = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  gap: 19px;

  div {
    color: #424242;
    font-family: "Instrument Sans";
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }

  input {
    width: 341px;
    height: 46px;
    flex-shrink: 0;
    border-radius: 5px;
    border: 1.5px solid #d6d3d3;
    padding-left: 14px;
    background: transparent;
    outline: none; /* 포커스 시 기본 테두리 제거 */
  }
`;

export const Move = styled.div`
  height: 108px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed; /* 하단에 고정 */
  bottom: 0; /* 화면의 맨 아래로 위치 */
  z-index: 1000; /* 다른 요소 위에 표시 */
  background: #fff;
`;

export const Hr = styled.div`
  width: 392px;
  height: 1px;
  flex-shrink: 0;
  background: #e8e8e8;
`;

export const Edit = styled.div`
  margin-top: 19px;
  width: 341px;
  height: 61px;
  flex-shrink: 0;
  border-radius: 5px;
  background: #ffb31f;
  display: flex;
  justify-content: center;
  align-items: center;

  div {
    color: #fff;
    font-family: "Instrument Sans";
    font-size: 22px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }
`;
