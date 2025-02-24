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

export const SearchNext = styled.div`
  padding: 24px;
  display: flex;
  align-items: center;
  justify-content: center;

  .backBtn {
    width: 10px;
    height: 19px;
    margin-right: 15px;
  }

  /* 검색 바를 감싸는 부모 div */
  .searchContainer {
    position: relative;
    width: 314px;
    display: flex;
    align-items: center;
  }

  /* 입력창 */
  .recipeBtn {
    width: 100%;
    height: 41px;
    padding: 10px 40px 10px 14px; /* 🔹 오른쪽 여백 추가 (아이콘 공간 확보) */
    border-radius: 5px;
    border: 1.5px solid #ddd;
    font-weight: 500;
    font-size: 14px;
    box-sizing: border-box;

    &::placeholder {
      color: #bbb;
    }
  }

  /* 검색 버튼 아이콘 (입력창 내부) */
  .searchIcon {
    position: absolute;
    right: 12px; /* 🔹 오른쪽 여백 */
    top: 50%;
    transform: translateY(-50%);
    width: 20px;
    height: 20px;
    cursor: pointer;
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
      cursor: pointer;
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

export const SearchResults = styled.div``;
