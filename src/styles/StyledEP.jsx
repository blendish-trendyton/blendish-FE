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
  padding-bottom: 290px;
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

export const Img = styled.div`
  width: 89px;
  height: 89px;
  flex-shrink: 0;
  margin-top: 40px;
  // justify-content: end;
  align-items: start;
  display: flex;

  #profile {
    margin-left: 25px;
    width: 89px;
    height: 89px;
    flex-shrink: 0;
    border-radius: 50%; /* 원형 프로필 */
    object-fit: cover; /* 이미지 비율 유지 + 중앙 크롭 */
  }

  #edit {
    width: 28px;
    height: 28px;
    position: absolute;
    top: 202px; /* 프로필 이미지 내부에서 아래쪽으로 조금 띄움 */
    left: 85px; /* 오른쪽으로 조금 띄움 */
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const Box = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  gap: 17px;
  justify-content: center;
  align-items: center;
`;

export const Id = styled.div`
  gap: 17px;
  display: flex;
  flex-direction: column;

  div {
    color: #424242;
    font-family: "Instrument Sans";
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }

  input {
    display: flex;
    justify-content: center;
    width: 341px;
    height: 46px;
    flex-shrink: 0;
    border-radius: 5px;
    border: 1.5px solid #d6d3d3;
    color: #333;
    font-family: "Instrument Sans";
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    background: transparent;
    outline: none; /* 포커스 시 기본 테두리 제거 */
    padding-left: 14px;
  }
`;
export const Email = styled.div`
  gap: 17px;
  display: flex;
  flex-direction: column;

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
    color: #333;
    font-family: "Instrument Sans";
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    background: transparent;
    outline: none; /* 포커스 시 기본 테두리 제거 */
    padding-left: 14px;
  }
`;

export const Password = styled.div`
  gap: 17px;
  display: flex;
  flex-direction: column;

  div {
    display: flex;
    align-items: center;
    color: #424242;
    font-family: "Instrument Sans";
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
`;

export const Pw = styled.div`
  width: 341px;
  height: 46px;
  flex-shrink: 0;
  border-radius: 5px;
  background: #eee;

  div {
    margin-left: 14px;
    color: #757373;
    font-family: "Instrument Sans";
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
`;

export const Home = styled.div`
  gap: 17px;
  display: flex;
  flex-direction: column;

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
    color: #333;
    font-family: "Instrument Sans";
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    padding-left: 14px;
    background: transparent;
    outline: none; /* 포커스 시 기본 테두리 제거 */
  }
`;

export const Live = styled.div`
  gap: 17px;
  display: flex;
  flex-direction: column;

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
    color: #333;
    font-family: "Instrument Sans";
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    padding-left: 14px;
    background: transparent;
    outline: none; /* 포커스 시 기본 테두리 제거 */
  }
`;

export const Taste = styled.div`
  gap: 17px;
  display: flex;
  flex-direction: column;

  div {
    color: #424242;
    font-family: "Instrument Sans";
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
`;

export const Tastebox = styled.div`
  width: 341px;
  height: 46px;
  flex-shrink: 0;
  background: #fff;
  text-align: center;
  align-items: center;
  display: flex;
  flex-direction: row;
`;

export const Spicy = styled.div`
  gap: 17px;
  display: flex;
  flex-direction: column;
  width: 341px;
  height: 46px;
  flex-shrink: 0;

  div {
    color: #424242;
    font-family: "Instrument Sans";
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
`;

export const Spicybox = styled.div`
  width: 341px;
  height: 46px;
  flex-shrink: 0;
  background: #fff;
  text-align: center;
  align-items: center;
  display: flex;
  flex-direction: row;
`;

export const Submit = styled.div`
  height: 108px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
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

export const Complete = styled.div`
  margin-top: 19px;
  width: 341px;
  height: 61px;
  flex-shrink: 0;
  border-radius: 5px;
  background: #ffb31f;
  align-items: center;
  justify-content: center;
  display: flex;

  button {
    color: #fff;
    font-family: "Instrument Sans";
    font-size: 22px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    background: transparent;
    border: none;
  }
`;
