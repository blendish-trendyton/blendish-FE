import { styled } from "styled-components";
import * as M from "../styles/StyledMain";

export const Container = styled.div`
  /* display: flex; */
  flex-wrap: wrap;
  justify-content: center;
  position: relative;
  margin: 0 auto;
  min-height: 100vh;
  padding: 0;
  box-sizing: border-box;
  background: #fff;
  width: 393px;
  align-items: center; /* 기본적으로 중앙 정렬 */
  h4 {
    font-size: 16px;
    text-align: left;
    width: 100%; /* 텍스트가 컨테이너를 가득 채우도록 설정 */
    padding-left: 30px; /* 좌측 여백 추가 */
  }
  .localMark {
    position: absolute;
    top: 240px;
    left: 40px;
    box-sizing: border-box;
    border-radius: 50%;
    border: none;
    background-color: #6a6a6a;
    width: 34px;
    height: 34px;
    color: #fff;
    font-size: 12px;
    font-weight: 600;
  }
`;

export const Search = styled.div`
  padding: 24px;
  .backBtn {
    width: 10px;
    height: 19px;
    position: absolute;
    left: 37px;
    top: 34px;
  }
  input {
    box-sizing: border-box;
    border-radius: 5px;
    border: 1.5px solid #ddd;
    width: 348px;
    height: 41px;
    padding: 14px;
    font-weight: 500;
    font-size: 14px;
    &::placeholder {
      color: #bbb;
    }
  }

  img {
    position: absolute;
    right: 37px;
    top: 34px;
  }
`;

export const SearchNext = styled.div`
  padding: 24px;
  .backBtn {
    width: 10px;
    height: 19px;
    position: absolute;
    left: 30px;
    top: 34px;
  }
  .recipeBtn {
    box-sizing: border-box;
    border-radius: 5px;
    border: 1.5px solid #ddd;
    width: 314px;
    height: 41px;
    padding: 14px;
    font-weight: 500;
    font-size: 14px;
    position: absolute;
    right: 20px;

    &::placeholder {
      color: #bbb;
    }
  }
  img {
    position: absolute;
    right: 37px;
    top: 34px;
  }
`;

export const SearchBox = styled.div`
  display: block;
  h4 {
    margin-top: 40px !important;
    width: 80%;
    font-size: 20px;
  }
`;
export const SearchIn = styled.div`
  display: flex;
  justify-content: space-between;
  span {
    color: #6a6a6a;
  }
  img {
    margin-right: 20px;
  }
`;

export const Result = styled.div`
  margin: 40px 30px;
  font-size: 16px;
`;

export const ResultBox = styled.div`
  display: flex;
  text-align: justify;
  margin: 38px 0;
  cursor: pointer;
  .ResultText {
    display: flex;
    flex-direction: column; /* 요소들을 세로로 정렬 */
    margin-left: 30px;
    flex-grow: 1; /* 부모 요소 안에서 확장 */

    p {
      font-size: 18px;
      font-weight: 600;
      margin: 0; /* 기본 마진 제거 */
    }
    div {
      font-size: 10px;
      margin-bottom: auto; /* 위의 텍스트 요소를 위쪽으로 밀어내기 */
    }
    button {
      margin: 10px 0;
      color: #fff;
      background-color: #fcb01b;
      border-radius: 5px;
      width: 100%;
      height: 40px;
      border: none;
      font-size: 15px;
      font-weight: 600;
    }
  }
  img {
    width: 127px;
    height: 127px;
  }
  ${M.Reaction} {
    margin-top: auto; /* Reaction을 가장 아래로 밀어냄 */
  }
`;

export const FoodName = styled.div`
  margin: 0;
  font-size: 31px;
  font-weight: 600;
  color: #202020;
  text-align: center;
`;
