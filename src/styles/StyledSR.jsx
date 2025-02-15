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

export const List = styled.div`
  margin-top: 27px;
  display: grid;
  grid-template-columns: repeat(2, 1fr); /* 두 개의 열 */
  gap: 11px 15px; /* [세로 간격] 11px, [가로 간격] 15px */
  width: fit-content; /* 내용에 맞게 크기 조절 (필요 시 변경 가능) */
`;
