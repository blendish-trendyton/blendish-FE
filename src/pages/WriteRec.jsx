import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import * as W from "../styles/StyledWR";
import WriteDropdown from "./WriteDropdown"; // ✅ 공통 드롭다운 컴포넌트 가져오기
import WriteTasteDropdown from "./WriteTasteDropdown";
// import axios from "axios";

const Writerecipe = () => {
  // ✅ 각 드롭다운 선택 상태 관리
  const [selectedTime, setSelectedTime] = useState("소요시간");
  const [selectedLevel, setSelectedLevel] = useState("난이도");
  const [selectedTaste, setSelectedTaste] = useState("");
  const [selectedSpicy, setSelectedSpicy] = useState("매운 맛 정도");

  // ✅ "필요 재료" 배열 상태 관리
  const [ingredients, setIngredients] = useState([
    { id: 1, name: "", quantity: "" },
  ]);

  // ✅ "조리 단계" 배열 상태 관리
  const [steps, setSteps] = useState([{ id: 1, description: "" }]);

  const navigate = useNavigate();

  // ✅ "필요 재료 추가" 버튼 클릭 시 새로운 재료 추가
  const addIngredient = () => {
    setIngredients([
      ...ingredients,
      { id: ingredients.length + 1, name: "", quantity: "" },
    ]);
  };

  // ✅ "조리 단계 추가" 버튼 클릭 시 새로운 조리 단계 추가
  const addStep = () => {
    setSteps([...steps, { id: steps.length + 1, description: "" }]);
  };

  const gome = () => {
    navigate(`/me`);
  };

  const gomaker = () => {
    navigate(`/recipemaker`);
  };
  return (
    <W.Container>
      <W.Title>
        <div id="name">레시피 작성</div>
      </W.Title>
      <W.Rep>
        <W.Img>
          <img
            src={`${process.env.PUBLIC_URL}/images/Upload.svg`}
            alt="업로드"
          />
          <div>대표 이미지 업로드</div>
        </W.Img>
      </W.Rep>
      <W.Input>
        <W.Select>
          <W.Name>
            <input type="text" placeholder="메뉴 이름 입력 (최대 12자)" />
            <div></div>
          </W.Name>
          <W.Time>
            <WriteDropdown
              options={["~ 15분", "~ 30분", "~ 1시간", "~ 2시간", "2시간 이상"]}
              selected={selectedTime}
              setSelected={setSelectedTime}
              multiple={false} // 단일 선택
            />
          </W.Time>
          <W.Level>
            <WriteDropdown
              options={["상", "중", "하"]}
              selected={selectedLevel}
              setSelected={setSelectedLevel}
              multiple={false} // 단일 선택
            />
          </W.Level>
          <W.Taste>
            <WriteTasteDropdown
              options={[
                "단 맛",
                "짠 맛",
                "신 맛",
                "감칠 맛",
                "기름진 맛",
                "담백한 맛",
                "매운 맛",
              ]}
              selected={selectedTaste}
              setSelected={setSelectedTaste}
            />
          </W.Taste>
          <W.Spicy>
            <WriteDropdown
              options={[
                "선호하지 않음",
                "🌶️",
                "🌶️🌶️",
                "🌶️🌶️🌶️",
                "🌶️🌶️🌶️🌶️",
                "🌶️🌶️🌶️🌶️🌶️",
              ]}
              selected={selectedSpicy}
              setSelected={setSelectedSpicy}
              multiple={false} // 단일 선택
            />
          </W.Spicy>
        </W.Select>
        <W.Expl>
          <W.Det>
            <div>레시피 설명</div>
            <input
              type="text"
              placeholder="레시피에 대한 간단한 설명을 작성 해주세요."
            />
          </W.Det>
        </W.Expl>
        <W.Hr1></W.Hr1>
        <W.Ing>
          <W.IngT>
            <div>필요 재료</div>
          </W.IngT>
          <W.Inghr />

          {ingredients.map((ingredient, index) => (
            <W.Ingin key={ingredient.id}>
              <W.Ingredient>
                <input
                  id="name"
                  type="text"
                  placeholder="재료명"
                  value={ingredient.name}
                  onChange={(e) => {
                    const newIngredients = [...ingredients];
                    newIngredients[index].name = e.target.value;
                    setIngredients(newIngredients);
                  }}
                />
                <input
                  id="quantity"
                  type="text"
                  placeholder="중량 및 양"
                  value={ingredient.quantity}
                  onChange={(e) => {
                    const newIngredients = [...ingredients];
                    newIngredients[index].quantity = e.target.value;
                    setIngredients(newIngredients);
                  }}
                />
              </W.Ingredient>
              <div id="hr"></div>
            </W.Ingin>
          ))}

          {/* ✅ "필요 재료 추가 작성" 버튼 */}
          <W.IngP onClick={addIngredient}>
            <div id="plus">+</div>
            <div id="ingr">필요 재료 추가 작성</div>
          </W.IngP>
        </W.Ing>
        <W.Hr2 />
        <W.Met>
          <div id="title">조리 방법</div>

          {steps.map((step, index) => (
            <W.MDet key={step.id}>
              <W.No>{index + 1}</W.No>
              <W.Upload>
                <img
                  src={`${process.env.PUBLIC_URL}/images/Upload.svg`}
                  alt="업로드"
                />
                <div>조리 이미지 업로드</div>
              </W.Upload>
              <input
                type="text"
                placeholder="상세 설명 입력"
                value={step.description}
                onChange={(e) => {
                  const newSteps = [...steps];
                  newSteps[index].description = e.target.value;
                  setSteps(newSteps);
                }}
              />
              <div id="hr"></div>
            </W.MDet>
          ))}

          {/* ✅ "조리 단계 추가 작성" 버튼 */}
          <W.MetP onClick={addStep}>
            <div id="plus">+</div>
            <div id="step">조리 단계 추가 작성</div>
          </W.MetP>
        </W.Met>
        <W.Upl>
          <div>레시피 업로드</div>
        </W.Upl>
      </W.Input>
      <W.Nav>
        <W.Hr />
        <W.Item>
          <W.Maker onClick={gomaker}>
            <img
              src={`${process.env.PUBLIC_URL}/images/Maker.svg`}
              alt="메이커"
            />
            <div>메이커</div>
          </W.Maker>
          <W.Search>
            <img
              src={`${process.env.PUBLIC_URL}/images/Search.svg`}
              alt="검색"
            />
            <div>검색</div>
          </W.Search>
          <W.Home>
            <img src={`${process.env.PUBLIC_URL}/images/Home.svg`} alt="홈" />
            <div>홈</div>
          </W.Home>
          <W.Write>
            <img
              src={`${process.env.PUBLIC_URL}/images/WriteY.svg`}
              alt="작성"
            />
            <div>작성</div>
          </W.Write>
          <W.Me onClick={gome}>
            <img src={`${process.env.PUBLIC_URL}/images/Me.svg`} alt="나" />
            <div>내정보</div>
          </W.Me>
        </W.Item>
      </W.Nav>
    </W.Container>
  );
};

export default Writerecipe;
