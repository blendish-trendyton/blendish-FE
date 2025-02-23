import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column; /* 요소들을 위에서 아래로 배치 */
  /* align-items: center; */
  width: 393px;
  min-height: 100vh; /* 화면 전체 높이 유지 */
  background: #fff;
  margin: 0 auto;
  padding: 0;
  box-sizing: border-box;
`;

export const TopImg = styled.div`
  display: flex;
  justify-content: space-between;
  img {
    margin: 25.9px;
  }
  .backFlex {
    display: flex;
    justify-content: left;
    align-items: center;
    font-size: 20px;
    color: #2b2b2b;
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
  .foodImg {
    width: 393.644px;
    height: 318px;
  }
`;

export const UserPro = styled.div`
  display: flex;
  font-family: "Instrument Sans";
  text-align: left;
  width: 100%; /* 부모 너비를 꽉 채움 */
  padding: 25px;
  line-height: 1.3;
  img {
    width: 35.671px;
    height: 35.522px;
  }

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
    width: 35px;
    height: 50px;
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
  .commentSec {
    padding: 0;
    z-index: 1000;
    position: fixed;
    bottom: 82px;
    width: 100%; /* 부모 요소(Container)의 너비에 맞춤 */
    max-width: 393px; /* 최대 너비를 Container와 동일하게 설정 */
    left: 50%;
    transform: translateX(-50%); /* 중앙 정렬 */
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

export const Information = styled.div`
  display: flex;
  padding: 16px 25px;
  font-size: 12px;
  align-self: flex-start; /* 개별 요소만 왼쪽 정렬 */
`;
export const CommentInputBox = styled.div`
  display: flex;
  position: fixed; /* 하단에 고정 */
  bottom: 25px; /* 화면의 맨 아래로 위치 */
  left: 50%;
  transform: translateX(-50%); /* X축 방향으로 50% 되돌려 중앙 정렬 */
  z-index: 1000;
  align-items: center;
  justify-content: center;

  input {
    border-radius: 5px;
    width: 295.233px;
    height: 41px;
    border: 1.5px solid #ddd;
    padding-left: 17px;
  }
  img {
    background-color: #fcb01b;
    padding: 8px 14px;
    border-radius: 5px;
    margin-left: 5px;
  }
`;
