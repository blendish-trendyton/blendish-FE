import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  text-align: center; /* 가로 중앙 정렬 */
  position: relative;
  margin: 0 auto;
  /* min-height: 100vh; */
  padding: 0;
  box-sizing: border-box;
  background: #fff;
  width: 393px;
`;

export const TopImg = styled.div`
  .backBtn {
    position: absolute;
    top: 68px;
    left: 29px;
  }
  button {
    display: block;
    margin: 5px;
    width: 72px;
    height: 34px;
    border-radius: 5px;
    background: rgba(255, 157, 0, 0.85);
    box-sizing: border-box;
    border: none;
    color: #fff;
    opacity: 0.9;
    font-size: 17px;
  }
  .level-box {
    position: absolute;
    right: 15px;
    top: 220px;
  }
`;

export const UserPro = styled.div`
  display: flex;
  font-family: "Instrument Sans";
  text-align: left;
  width: 100%; /* 부모 너비를 꽉 채움 */
  margin: 25px; /* 왼쪽에 여유 공간 추가 */
  line-height: 1.3;

  .date-box {
    margin-left: 15px;
    justify-content: space-between;
    width: 100%;
    p {
      color: #747474;
      font-size: 11px;
      margin: 0;
    }
    span {
      color: #000;
      font-size: 14px;
      margin: 0;
    }
  }
`;

export const Content = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  img {
    margin-right: 25px;
  }
  .food-info {
    width: 100%;
    margin: 0 25px;
    text-align: left;
    h4 {
      font-size: 22px;
    }
    .taste {
      display: flex;
      p {
        margin-right: 7px;
      }
    }
  }
`;

export const ReactionBox = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding: 25px 25px 0 25px;
  p {
    font-weight: 600;
  }
`;

export const RecipeExplan = styled.div`
  padding: 25px;
  font-size: 12px;
  text-align: justify;
`;

export const CommentBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 25px;

  /* h4와 p를 한 줄에 정렬 */
  .comment-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
  }

  h4 {
    font-size: 15px;
    font-weight: 600;
    line-height: 24px;
  }

  p {
    font-size: 12px;
    cursor: pointer;
  }
`;

export const Comment = styled.div`
  display: flex;
  flex-direction: column;
  p {
    font-size: 12px;
    text-align: justify;
    margin-left: 30px;
  }
`;

export const CommentInfo = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;

  img {
    width: 24px;
    height: 24px;
    margin-right: 8px;
  }

  span {
    color: #a96800;
    font-size: 12px;
    font-weight: 600;
    margin-right: 8px;
  }

  time {
    font-size: 11px;
    font-weight: 400;
    color: #747474;
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
  align-items: center;
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
