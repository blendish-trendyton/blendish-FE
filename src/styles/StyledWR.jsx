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
`;

export const Rep = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Img = styled.div`
  width: 346px;
  height: 242px;
  flex-shrink: 0;
  border-radius: 10px;
  background: #f2f2f2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin-top: 17px;

  img {
    width: 41px;
    height: 41px;
    flex-shrink: 0;
  }

  div {
    color: #5d5d5d;
    text-align: center;
    font-family: "Instrument Sans";
    font-size: 15px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
`;

export const Input = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 43px;
`;

export const Select = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
`;

export const Name = styled.div`
  display: flex;
  flex-direction: column;

  input {
    color: #4b4b4b;
    text-align: left;
    font-family: "Instrument Sans";
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    border: none;

    &:focus {
      border: none;
      outline: none;
    }

    &::placeholder {
      color: #8d8d8d;
    }
  }

  div {
    margin-top: 8px;
    width: 346px;
    height: 1.5px;
    flex-shrink: 0;
    background: #dcdbdb;
  }
`;

export const Time = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Level = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Taste = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Spicy = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Expl = styled.div`
  display: flex;
`;

export const Det = styled.div`
  dipslay: flex;
  flex-direction: column;
  margin-top: 21px;
  justify-content: start;
  align-items: start;

  div {
    color: #1f1f1f;
    text-align: left;
    font-family: "Instrument Sans";
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }

  input {
    width: 348px;
    height: 110px;
    flex-shrink: 0;
    border-radius: 5px;
    background: #f2f2f2;
    margin-top: 10px;
    border: none;
    color: #4b4b4b;
    text-align: left; /* 텍스트 오른쪽 정렬 */
    font-family: "Instrument Sans";
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    padding: 12px 10px; /* 위아래 12px, 양옆 10px */

    /* Placeholder 스타일 */
    &::placeholder {
      text-align: left; /* Placeholder는 왼쪽 정렬 */
      color: ##8d8d8d; /* 연한 회색 (선택 사항) */
    }

    &:focus {
      border: none;
      outline: none;
    }
  }
`;

export const Exin = styled.div`
  width: 348px;
  height: 110px;
  flex-shrink: 0;
  border-radius: 5px;
  background: #f2f2f2;
  display: flex;
  margin-top: 10px;
`;

export const Hr1 = styled.div`
  width: 346px;
  height: 1.5px;
  flex-shrink: 0;
  background: #dcdbdb;
  margin-top: 16px;
`;

export const Ing = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
`;

export const IngT = styled.div`
  display: flex;
  flex-direction: row;

  div {
    color: #1f1f1f;
    font-family: "Instrument Sans";
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 24px; /* 150% */
  }
`;

export const Inghr = styled.div`
  margin-top: 12px;
  width: 340.001px;
  height: 1px;
  transform: rotate(0.167deg);
  flex-shrink: 0;
  background: #202020;
  margin-bottom: 16px;
`;

export const Ingin = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  #hr {
    width: 340.001px;
    height: 1px;
    transform: rotate(0.167deg);
    flex-shrink: 0;
    background: #dadada;
    margin-top: 6px;
    margin-bottom: 15px;
  }
`;

export const Ingredient = styled.div`
  display: flex;
  flex-direction: row;
  height: 30px;
  align-items: center;

  #name {
    width: 200px;
    color: black;
    font-family: "Instrument Sans";
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px; /* 171.429% */
    border: none;
  }

  #quantity {
    width: 130px;
    color: black;
    font-family: "Instrument Sans";
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px; /* 171.429% */
    border: none;
    text-align: right;
  }

  input::placeholder {
    color: #494949;
    font-family: "Instrument Sans";
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px; /* 171.429% */
  }
`;

export const IngP = styled.div`
  width: 342px;
  height: 76px;
  flex-shrink: 0;
  border-radius: 5px;
  background: #edebeb;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  #plus {
    color: #3b3b3b;
    font-family: "Instrument Sans";
    font-size: 32px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px; /* 75% */
  }

  #ingr {
    color: #3b3b3b;
    font-family: "Instrument Sans";
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px; /* 171.429% */
  }
`;

export const Hr2 = styled.div`
  margin-top: 14px;
  width: 346px;
  height: 1.5px;
  flex-shrink: 0;
  background: #dcdbdb;
`;

export const Met = styled.div`
  margin-top: 23px;
  #title {
    color: #1f1f1f;
    text-align: left;
    font-family: "Instrument Sans";
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }
`;

export const MDet = styled.div`
  display: flex;
  flex-direction: column;

  input {
    margin-top: 13px;
    margin-bottom: 6px;
    border: none;
  }

  #hr {
    width: 339px;
    height: 1.5px;
    flex-shrink: 0;
    background: #dcdbdb;
  }
`;

export const No = styled.div`
  margin-top: 25px;
  width: 25px;
  height: 25px;
  flex-shrink: 0;
  border-radius: 5px;
  background: #fcb01b;
  color: #fff;
  font-family: "Instrument Sans";
  font-size: 15px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px; /* 160% */
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Upload = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 346px;
  height: 335px;
  flex-shrink: 0;
  border-radius: 10px;
  background: #eee;
  margin-top: 15px;

  img {
    width: 41px;
    height: 41px;
    flex-shrink: 0;
  }

  div {
    color: #5d5d5d;
    text-align: center;
    font-family: "Instrument Sans";
    font-size: 15px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    margin-top: 10px;
  }
`;

export const MetP = styled.div`
  margin-top: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 346px;
  height: 79px;
  flex-shrink: 0;
  border-radius: 5px;
  background: #edebeb;

  #plus {
    color: #3b3b3b;
    font-family: "Instrument Sans";
    font-size: 32px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px; /* 75% */
  }

  #step {
    color: #3b3b3b;
    font-family: "Instrument Sans";
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px; /* 171.429% */
  }
`;

export const Upl = styled.div`
  margin-top: 19px;
  width: 348px;
  height: 61px;
  flex-shrink: 0;
  border-radius: 5px;
  background: #ffb31f;
  display: flex;
  align-items: center;
  justify-content: center;

  div {
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
