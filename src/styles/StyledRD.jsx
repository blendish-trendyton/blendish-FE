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
  margin-top: 36px;
  display: flex;
  flex-direction: row;
  justify-content: space-between; /* 양쪽 끝으로 배치 */
  align-items: center;
  padding: 0 30px; /* 컨테이너 양쪽에 20px 마진 */

  div {
    color: #000;
    font-family: "Instrument Sans";
    font-size: 25px;
    font-style: normal;
    font-weight: 600;
    line-height: 30px; /* 120% */
  }

  img {
    width: 21px;
    height: 28px;
    flex-shrink: 0;
    cursor: pointer; /* 클릭 가능하도록 설정 */
    transition: transform 0.2s ease; /* 클릭 시 애니메이션 효과 */

    &:active {
      transform: scale(0.9); /* 클릭 시 약간 축소 효과 */
    }
  }
`;

export const Hr = styled.div`
  margin-top: 24px;
  width: 391px;
  height: 9px;
  flex-shrink: 0;
  background: #f3f3f3;
`;

export const Ing = styled.div`
  padding: 26px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const Need = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center; /* 텍스트 수직 정렬 */
  align-self: flex-start; /* 상위 flex 정렬에서 벗어나 왼쪽 정렬 */

  #title {
    color: #202020;
    font-family: "Instrument Sans";
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: 24px; /* 120% */
  }

  #person {
    color: #202020;
    font-family: "Instrument Sans";
    font-size: 15px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px;
    margin-left: 5px;
  }
`;

export const Wnf = styled.div`
  width: 340.001px;
  height: 1px;
  transform: rotate(0.167deg);
  flex-shrink: 0;
  stroke-width: 1px;
  background: #202020;
  margin-top: 12px;
`;

export const List = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 32px;
`;

export const Food = styled.div`
  height: 48px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 5px;

  #food {
    color: #000;
    font-family: "Instrument Sans";
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px; /* 133.333% */
  }

  #quantity {
    color: #000;
    font-family: "Instrument Sans";
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px; /* 133.333% */
  }
`;

export const Wnf1 = styled.div`
  width: 340.001px;
  height: 1px;
  transform: rotate(0.167deg);
  flex-shrink: 0;
  background: #dadada;
`;

export const Hr1 = styled.div`
  width: 391px;
  height: 9px;
  flex-shrink: 0;
  background: #f3f3f3;
`;

export const Cook = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 25px;
`;

export const How = styled.div`
  color: #202020;
  font-family: "Instrument Sans";
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px; /* 120% */
  align-items: center; /* 텍스트 수직 정렬 */
  align-self: flex-start; /* 상위 flex 정렬에서 벗어나 왼쪽 정렬 */
`;

export const Wnf2 = styled.div`
  width: 340.001px;
  height: 1px;
  transform: rotate(0.167deg);
  flex-shrink: 0;
  background: #202020;
  margin-top: 12px;
`;

export const Step = styled.div`
  margin-top: 25px;
  display: flex;
  flex-direction: column;
`;

export const No = styled.div`
  width: 25px;
  height: 25px;
  flex-shrink: 0;
  border-radius: 5px;
  background: #fcb01b;
  justify-content: center;
  align-items: center;
  display: flex;

  div {
    color: #fff;
    font-family: "Instrument Sans";
    font-size: 15px;
    font-style: normal;
    font-weight: 600;
    line-height: 24px; /* 160% */
  }
`;

export const Content = styled.div`
  margin-top: 11px;
  width: 333px;
  height: 45px;
  flex-shrink: 0;

  div {
    color: #000;
    font-family: "Instrument Sans";
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 23px; /* 164.286% */
  }
`;
