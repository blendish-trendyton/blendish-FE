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

export const Title = styled.div`
  position: relative; /* 툴팁 위치 기준 */
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;

  #name {
    display: flex;
    width: 116px;
    height: 31px;
    flex-direction: column;
    justify-content: center;
    flex-shrink: 0;
    color: #000;
    text-align: center;
    font-family: "Instrument Sans";
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    margin-left: 22px;
  }

  #info {
    margin-left: 7px;
    width: 14px;
    height: 14px;
    flex-shrink: 0;
  }
`;

export const Tooltip = styled.div`
  position: absolute; /* 툴팁을 레이아웃에서 제외 */
  top: 50%; /* 아이콘의 수직 중앙에 맞춤 */
  left: calc(39% + 8px); /* 아이콘의 오른쪽에서 8px 떨어진 위치 */
  transform: translateY(-50%); /* 수직 중앙 정렬 */
  width: 214px;
  height: 36px;
  flex-shrink: 0;
  border-radius: 5px;
  background: rgba(227, 227, 227, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-left: 8px;

  div {
    display: flex;
    width: 200px;
    height: 30px;
    flex-direction: column;
    justify-content: center;
    flex-shrink: 0;
    color: #000;
    font-family: "Instrument Sans";
    font-size: 7px;
    font-style: normal;
    font-weight: 500;
    line-height: 10px; /* 142.857% */
  }
`;

export const Hrbox = styled.div`
  width: 390px;
  height: 9px;
  flex-shrink: 0;
  background: #f3f3f3;
  margin-top: 14px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  margin-top: 27px;
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  gap: 36px;
`;

export const Type = styled.div`
  width: 348px;
  height: 61px;
  flex-shrink: 0;
  border-radius: 5px;
  border: 1.5px solid #fcb01b;
  background: #fff;
  text-align: center;
  align-items: center;
  display: flex;

  #puttype {
    width: 195px;
    margin-left: 18px;
    height: 24px;
    flex-shrink: 0;
    color: #202020;
    font-family: "Instrument Sans";
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    background: transparent;
    border: none;
    outline: none; /* 포커스 시 기본 테두리 제거 */

    &::placeholder {
      color: #202020; /* 원하는 색상으로 변경 */
      opacity: 1; /* 투명도 설정 */
    }
  }
`;

export const Time = styled.div`
  width: 348px;
  height: 61px;
  flex-shrink: 0;
  border-radius: 5px;
  border: 1.5px solid #fcb01b;
  background: #fff;
  display: flex;
  flex-direction: row;
  text-align: center;
  align-items: center;
`;

export const Level = styled.div`
  width: 348px;
  height: 61px;
  flex-shrink: 0;
  border-radius: 5px;
  border: 1.5px solid #fcb01b;
  background: #fff;
  text-align: center;
  align-items: center;
  display: flex;
  flex-direction: row;
`;

export const Taste = styled.div`
  width: 348px;
  height: 61px;
  flex-shrink: 0;
  border-radius: 5px;
  border: 1.5px solid #fcb01b;
  background: #fff;
  text-align: center;
  align-items: center;
  display: flex;
  flex-direction: row;
`;

export const Spicy = styled.div`
  width: 348px;
  height: 61px;
  flex-shrink: 0;
  border-radius: 5px;
  border: 1.5px solid #fcb01b;
  background: #fff;
  text-align: center;
  align-items: center;
  display: flex;
  flex-direction: row;
`;

export const Go = styled.div`
  display: flex;
  margin-top: 59px;
  width: 348px;
  height: 61px;
  flex-shrink: 0;
  border-radius: 5px;
  background: #ffb31f;
  text-align: center;
  justify-content: center;
  align-items: center;

  #go {
    color: #fff;
    font-family: "Instrument Sans";
    font-size: 22px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }
`;

export const Nav = styled.div`
  position: fixed; /* 하단에 고정 */
  bottom: 0; /* 화면의 맨 아래로 위치 */
  z-index: 1000; /* 다른 요소 위에 표시 */
  display: flex;
  flex-direction: column;
  width: 391px;
  height: 81px;
  flex-shrink: 0;
  border-radius: 0px 0px 30px 30px;
  background: #fff;
`;

export const Hr = styled.div`
  width: 391px;
  height: 1px;
  flex-shrink: 0;
  stroke-width: 1px;
  background: #ebeaea;
`;

export const Item = styled.div`
  display: flex;
  felx-direction: row;
  justify-content: center;
  align- items: center;
  text-align: center;
  margin-top: 15px;
  gap: 50px;
`;

export const Maker = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 6px;

  img {
    width: 24.746px;
    height: 24.746px;
    flex-shrink: 0;
  }

  div {
    color: #363636;
    text-align: center;
    font-family: "Instrument Sans";
    font-size: 10px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }
`;

export const Search = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 6px;

  img {
    width: 24.746px;
    height: 24.746px;
    flex-shrink: 0;
  }

  div {
    color: #363636;
    text-align: center;
    font-family: "Instrument Sans";
    font-size: 10px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
`;

export const Home = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 6px;

  img {
    width: 24.746px;
    height: 24.746px;
    flex-shrink: 0;
  }

  div {
    color: #363636;
    text-align: center;
    font-family: "Instrument Sans";
    font-size: 10px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
`;

export const Write = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 6px;

  img {
    width: 24.746px;
    height: 24.746px;
    flex-shrink: 0;
  }

  div {
    color: #363636;
    text-align: center;
    font-family: "Instrument Sans";
    font-size: 10px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
`;

export const Me = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 6px;

  img {
    width: 24.746px;
    height: 24.746px;
    flex-shrink: 0;
  }

  div {
    color: #363636;
    text-align: center;
    font-family: "Instrument Sans";
    font-size: 10px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
`;
