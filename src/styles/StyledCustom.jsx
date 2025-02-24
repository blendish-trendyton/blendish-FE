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
  text-align: center;
  color: #202020;
  font-family: "Instrument Sans";
  font-size: 31px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px; /* 77.419% */
  margin-top: 30px;
`;

export const Hash = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr); /* 한 줄에 4개 */
  gap: 10px; /* 항목 간의 간격 */
  margin-top: 29px;
  justify-content: center; /* 그리드 전체를 화면 중앙에 배치 */
`;

export const Cate = styled.div`
  flex: 0 0 calc(25% - 10px); /* 한 줄에 4개, gap 포함 크기 계산 */
  width: 78px;
  height: 31px;
  flex-shrink: 0;
  border-radius: 5px;
  background: #ffebc4;
  text-align: center;
  display: flex; /* 중앙 정렬을 위해 flex 사용 */
  align-items: center; /* 수직 중앙 정렬 */
  justify-content: center; /* 수평 중앙 정렬 */
  margin: 0 auto; /* 그리드 항목 내에서 중앙 정렬 유지 */

  div {
    color: #343434;
    font-family: "Instrument Sans";
    font-size: 11px;
    font-style: normal;
    font-weight: 600;
    line-height: 24px; /* 218.182% */
  }
`;

export const Hr = styled.div`
  width: 390px;
  height: 9px;
  flex-shrink: 0;
  background: #f3f3f3;
  margin-top: 19px;
`;

export const Result = styled.div`
  display: flex;
  flex-direction: column;
  background: #ebebeb;
  padding-bottom: 253px;
`;

export const Figure = styled.div`
  display: flex;
  flex-direction: row;
  padding-top: 15px;
  background: #fff;

  #bold {
    color: #000;
    text-align: center;
    font-family: "Instrument Sans";
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    margin-left: 21px;
  }

  #letter {
    margin-left: 3px;
    color: #000;
    font-family: "Instrument Sans";
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
`;

export const List = styled.div`
  padding-top: 21px;
  display: grid;
  grid-template-columns: repeat(2, 1fr); /* 두 개씩 배치 */
  gap: 28px;
  justify-content: center;
  padding-left: 28px;
  background: #fff;
  padding-bottom: 30px;
  padding: 0 auto; /* 그리드 항목 내에서 중앙 정렬 유지 */
  height: 440px;

  /* 마지막 행의 항목이 1개일 경우 왼쪽 정렬 */
  & > *:nth-child(odd):last-child {
    grid-column: span 1; /* 마지막 행의 아이템을 왼쪽으로 */
    justify-self: start;
  }
`;

export const Recipe = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  text-align: left;
  width: 147px;
  height: 115px;
  align-items: start;
  justify-content: space-between; /* 내용 사이 공간 확보 */

  #title {
    color: #000;
    text-align: center;
    font-family: "Instrument Sans";
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }

  #content {
    color: #000;
    font-family: "Instrument Sans";
    font-size: 10px;
    font-style: normal;
    font-weight: 500;
    line-height: 16px; /* 160% */
  }
`;

export const Gorecipe = styled.div`
  width: 152px;
  height: 40px;
  flex-shrink: 0;
  border-radius: 5px;
  background: #fcb01b;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: -2px;
  margin-top: auto;

  div {
    color: #fff;
    text-align: center;
    font-family: "Instrument Sans";
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }
`;
