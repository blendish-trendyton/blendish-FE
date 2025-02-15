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

export const Back = styled.div`
  width: 393px;
  height: 230px;
  flex-shrink: 0;
  background: #ffe8a2;
`;

export const Info = styled.div`
  position: relative; /* Prof의 절대 위치 기준 */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Prof = styled.div`
  position: absolute; /* 절대 위치 */
  top: -80px; /* 배경 위로 걸쳐지도록 조정 */
  left: 50%; /* 부모 컨테이너 기준으로 수평 중앙 */
  transform: translateX(-50%); /* 수평 중앙 정렬 */
  width: 138px;
  height: 138px;
  flex-shrink: 0;
  border-radius: 50%; /* 원형 프로필 */
  background: white; /* 프로필 배경색 */
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* 그림자 추가 */

  img {
    width: 100%; /* 이미지가 프로필 영역에 맞게 */
    height: 100%;
    border-radius: 50%; /* 이미지도 원형 */
    object-fit: cover; /* 이미지 비율 유지 */
  }
`;

export const Name = styled.div`
  color: #2a2a2a;
  font-family: "Instrument Sans";
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-top: 78px;
`;

export const Country = styled.div`
  margin-top: 34px;
  display: flex;
  flex-direction: row;
  gap: 45px;
  justify-content: ceter;
  align-items: center;
`;

export const Hometown = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  #home {
    color: #000;
    font-family: "Instrument Sans";
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }

  #homec {
    margin-top: 10px;
    color: #000;
    font-family: "Instrument Sans";
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
`;

export const Hr2 = styled.div`
  width: 1px;
  height: 61px;
  flex-shrink: 0;
  stroke-width: 1px;
  background: #878787;
`;

export const Live = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  #live {
    color: #000;
    font-family: "Instrument Sans";
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }

  #livec {
    margin-top: 10px;
    color: #000;
    font-family: "Instrument Sans";
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
`;

export const Edit = styled.div`
  margin-top: 22px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 34px;
  flex-shrink: 0;
  border-radius: 5px;
  background: #ffbb35;

  div {
    color: #fff;
    font-family: "Instrument Sans";
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }
`;

export const Hr1 = styled.div`
  width: 389px;
  height: 6px;
  flex-shrink: 0;
  background: #eee;
  margin-top: 32px;
`;

export const Myr = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Myrecipe = styled.div`
  margin-top: 30px;
  color: #000;
  font-family: "Instrument Sans";
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  align-items: center; /* 텍스트 수직 정렬 */
  align-self: flex-start; /* 상위 flex 정렬에서 벗어나 왼쪽 정렬 */
  margin-left: 28px;
`;

export const Myrecs = styled.div`
  margin-top: 16px;
  display: grid;
  grid-template-columns: repeat(2, 1fr); /* 두 개의 열 */
  gap: 11px 15px; /* [세로 간격] 11px, [가로 간격] 15px */
  width: fit-content; /* 내용에 맞게 크기 조절 (필요 시 변경 가능) */
`;

export const Rec1 = styled.div`
  width: 165px;
  height: 166px;
  flex-shrink: 0;
  border-radius: 5px;
  background: #d5d5d5;
`;
export const Rec2 = styled.div`
  width: 165px;
  height: 166px;
  flex-shrink: 0;
  border-radius: 5px;
  background: #d5d5d5;
`;
export const Rec3 = styled.div`
  width: 165px;
  height: 166px;
  flex-shrink: 0;
  border-radius: 5px;
  background: #d5d5d5;
`;
export const Rec4 = styled.div`
  width: 165px;
  height: 166px;
  flex-shrink: 0;
  border-radius: 5px;
  background: #d5d5d5;
`;

export const Hr3 = styled.div`
  width: 389px;
  height: 6px;
  flex-shrink: 0;
  background: #eee;
  margin-top: 29px;
`;

export const Sar = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Savedrecipe = styled.div`
  margin-top: 30px;
  color: #000;
  font-family: "Instrument Sans";
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  align-items: center; /* 텍스트 수직 정렬 */
  align-self: flex-start; /* 상위 flex 정렬에서 벗어나 왼쪽 정렬 */
  margin-left: 28px;
`;

export const Savedrecs = styled.div`
  margin-top: 16px;
  display: grid;
  grid-template-columns: repeat(2, 1fr); /* 두 개의 열 */
  gap: 11px 15px; /* [세로 간격] 11px, [가로 간격] 15px */
  width: fit-content; /* 내용에 맞게 크기 조절 (필요 시 변경 가능) */
`;

export const Sar1 = styled.div`
  width: 165px;
  height: 166px;
  flex-shrink: 0;
  border-radius: 5px;
  background: #d5d5d5;
`;

export const Sar2 = styled.div`
  width: 165px;
  height: 166px;
  flex-shrink: 0;
  border-radius: 5px;
  background: #d5d5d5;
`;

export const Sar3 = styled.div`
  width: 165px;
  height: 166px;
  flex-shrink: 0;
  border-radius: 5px;
  background: #d5d5d5;
`;

export const Sar4 = styled.div`
  width: 165px;
  height: 166px;
  flex-shrink: 0;
  border-radius: 5px;
  background: #d5d5d5;
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
