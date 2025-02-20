import { styled } from "styled-components";

export const Container = styled.div`
  /* display: flex; */
  flex-wrap: wrap;
  justify-content: center;
  position: relative;
  margin: 0 auto;
  min-height: 100vh;
  padding: 0;
  box-sizing: border-box;
  background: #ebebeb;
  width: 393px;
  align-items: center; /* 기본적으로 중앙 정렬 */
  h4 {
    font-size: 16px;
    text-align: left;
    width: 100%; /* 텍스트가 컨테이너를 가득 채우도록 설정 */
    padding-left: 30px; /* 좌측 여백 추가 */
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

export const RecentlyBox = styled.div`
  display: flex;
  font-size: 16px;
  text-align: left;
  gap: 14px;
  margin: 15px 22px;
`;
export const Recently = styled.div`
  img {
    width: 166px;
    height: 166px;
  }
`;

export const Fdiv = styled.div`
  width: 100%;
  margin-top: 22px;
`;

export const FamouseBox = styled.div`
  display: flex;
  width: 100%;
  justify-content: left;
  margin-left: 22px;
`;

export const Famouse = styled.div`
  display: block;
  margin-right: 40px;
`;
export const Fcontent = styled.div`
  display: flex;
  align-items: center;
  font-size: 14px;
  button {
    margin: 20px 14px;
    color: #fff;
    background-color: #fcb01b;
    border-radius: 5px;
    width: 25px;
    height: 25px;
    border: none;
    font-size: 15px;
    font-weight: 600;
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
    font-size: 16px;
  }
`;
export const SearchIn = styled.div`
  display: flex;
  justify-content: space-between;
  span {
    color: #6a6a6a;
    font-size: 12px;
  }
  img {
    margin-right: 23px;
  }
`;

export const MenuBox = styled.div`
  display: flex;
  padding: 15px 30px 0 22px;
  align-items: center;
  img {
    width: 22px;
    margin-right: 8px;
  }
  span {
    color: #000;
    font-size: 12px;
  }
`;

export const Section = styled.div`
  background-color: #fff;
`;
