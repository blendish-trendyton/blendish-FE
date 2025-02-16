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

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;

  .home {
    width: 24px;
  }
  img {
    width: 10px;
    height: 20px;
    margin: 20px;
    cursor: pointer;
  }
`;

export const FoodInfoBox = styled.div`
  display: block;
  font-size: 28px;
  font-weight: 600;
`;

export const FoodInfo = styled.div`
  display: flex;
  gap: 7px;
  margin: 25px 0;
  button {
    background-color: #ffb31f;
    box-sizing: border-box;
    width: 126px;
    height: 34px;
    border-radius: 5px;
    border: none;
    color: #fff;
  }
`;

export const IngredientBox = styled.div`
  display: block;
  text-align: left;
`;

export const Ingredient = styled.div`
  display: flex;
  text-align: left;
  align-items: center;
  margin-top: 25px;

  h4 {
    font-size: 20px;
    margin-right: 5px;
  }
  span {
    font-size: 15px;
  }
`;

export const IngredientList = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 18px;
  margin-top: 10px;
  strong {
    font-weight: 500;
  }
`;

export const RecipeBox = styled.div`
  display: block;
  margin: 25px;
  text-align: left;
  align-items: flex-start;
  h4 {
    font-size: 20px;
    font-weight: 600;
    line-height: 24px;
    text-align: left;
  }
`;
export const Recipe = styled.div`
  display: block;
  span {
    font-size: 14px;
  }
  button {
    margin: 20px 0;
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

export const LocalFlag = styled.div`
  margin-top: 30px;
  display: flex;
  gap: 10px;
  button {
    width: 167px;
    height: 40px;
    color: #fff;
    font-size: 15px;
    font-weight: 600px;
    box-sizing: border-box;
    border: none;
    background-color: #3d3d3d;
    border-radius: 5px;
  }
`;
