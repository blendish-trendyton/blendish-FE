import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import * as W from "../styles/StyledWR";
import WriteDropdown from "./WriteDropdown"; // ✅ 공통 드롭다운 컴포넌트 가져오기
import WriteTasteDropdown from "./WriteTasteDropdown";
import axios from "axios";
// import axios from "../api/axiosConfig"; // ✅ 설정된 axios 가져오기

// ✅ Axios 인스턴스 설정
const api = axios.create({
  baseURL: "https://junyeongan.store/api",
  headers: {
    Accept: "application/json",
    // "Content-Type": "application/json; charset=utf-8",
  },
});

// ✅ 요청 전에 토큰 삽입
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("user_token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

const Writerecipe = () => {
  // ✅ 각 드롭다운 선택 상태 관리
  const [selectedTime, setSelectedTime] = useState("소요시간");
  const [selectedLevel, setSelectedLevel] = useState("난이도");
  const [selectedTaste, setSelectedTaste] = useState("");
  const [selectedSpicy, setSelectedSpicy] = useState("매운 맛 정도");
  const [recipeName, setRecipeName] = useState("");

  // ✅ "필요 재료" 배열 상태 관리
  const [ingredients, setIngredients] = useState([
    { id: 1, name: "", quantity: "" },
  ]);

  // ✅ 조리 단계별 이미지 배열 상태 (기존 steps 유지)
  const [steps, setSteps] = useState([{ id: 1, description: "", image: null }]);

  const navigate = useNavigate();

  // ✅ "필요 재료 추가" 버튼 클릭 시 새로운 재료 추가
  const addIngredient = () => {
    setIngredients([
      ...ingredients,
      { id: ingredients.length + 1, name: "", quantity: "" },
    ]);
  };

  // ✅ 대표 이미지 상태
  const [mainImage, setMainImage] = useState(null);

  // ✅ 대표 이미지 업로드 함수
  const handleMainImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setMainImage(URL.createObjectURL(file));
    }
  };

  // ✅ 조리 단계 이미지 업로드 함수
  const handleStepImageUpload = (event, index) => {
    const file = event.target.files[0];
    if (file) {
      const newSteps = [...steps];
      newSteps[index].image = URL.createObjectURL(file);
      setSteps(newSteps);
    }
  };

  // ✅ 조리 단계 추가 함수 (이미지 필드 포함)
  const addStep = () => {
    setSteps([
      ...steps,
      { id: steps.length + 1, description: "", image: null },
    ]);
  };

  // ✅ 레시피 설명 상태 (줄바꿈 가능 & 글자 수 카운트)
  const [recipeText, setRecipeText] = useState("");

  // 🔹 글자 입력 처리 함수
  const handleTextChange = (event) => {
    const inputText = event.target.value;

    if (inputText.length <= 200) {
      setRecipeText(inputText); // 200자까지만 저장
    }
  };

  // ✅ 폼 제출 함수
  const handleSubmit = async (e) => {
    e.preventDefault();

    // // ✅ FormData 객체 생성
    // const formData = new FormData();
    // formData.append("name", recipeName);
    // formData.append("level", selectedLevel);
    // formData.append("time", selectedTime);
    // formData.append("information", recipeText);
    // formData.append("isAiGenerated", false);

    // // ✅ 재료 목록 추가
    // ingredients.forEach((ing, index) => {
    //   formData.append(`ingredients[${index}][name]`, ing.name);
    //   formData.append(`ingredients[${index}][amount]`, ing.quantity);
    // });

    // // ✅ 조리 단계 추가
    // steps.forEach((step, index) => {
    //   formData.append(`steps[${index}][stepNumber]`, index + 1);
    //   formData.append(`steps[${index}][details]`, step.description);
    // });

    const formData = new FormData();
    const addRecipeDTO = {
      name: recipeName,
      level: selectedLevel,
      time: selectedTime,
      information: recipeText,
      isAiGenerated: false,
      ingredients: ingredients.map((ing) => ({
        name: ing.name,
        amount: ing.quantity,
      })),
      steps: steps.map((step, index) => ({
        stepNumber: index + 1,
        details: step.description,
      })),
    };

    formData.append("addRecipeDTO", JSON.stringify(addRecipeDTO));

    if (mainImage) {
      formData.append("image", mainImage); // 대표 이미지
    }

    steps.forEach((step, index) => {
      if (step.image) {
        formData.append(`stepImages`, step.image); // 조리 이미지 배열로 추가
      }
    });

    try {
      const token = localStorage.getItem("user_token");

      // 로그로 확인
      console.log("현재 저장된 토큰:", token);
      for (let pair of formData.entries()) {
        console.log(`${pair[0]}: ${pair[1]}`);
      }

      // ✅ 요청 보내기 (multipart/form-data로 전송)
      const response = await api.post("/recipe", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: "application/json",
          // ✅ Content-Type은 명시하지 않고 자동으로 설정
        },
        withCredentials: true, // CORS 문제 해결
      });

      if (response.status === 200) {
        alert("레시피가 성공적으로 업로드되었습니다.");
        navigate("/");
      }
    } catch (error) {
      console.error("레시피 업로드 실패:", error);
      alert("레시피 업로드에 실패했습니다.");
    }
  };

  const requestData = {
    name: recipeName,
    level: selectedLevel.toString(), // 문자열로 변환
    time: selectedTime.replace("~ ", ""), // ~ 제거
    ingredients: ingredients.map((ing) => ({
      name: ing.name,
      amount: ing.quantity,
    })),
    information: recipeText,
    isAiGenerated: false,
    steps: steps.map((step, index) => ({
      stepNumber: index + 1,
      details: step.description,
    })),
  };

  console.log("최종 전송 데이터:", requestData);

  const gome = () => {
    navigate(`/me`);
  };

  const goHome = () => {
    navigate(`/`);
  };

  const gomaker = () => {
    navigate(`/recipemaker`);
  };
  const goSearch = () => navigate(`/searchPageNext`);

  return (
    <W.Container>
      <form onSubmit={handleSubmit}>
        <W.Title>
          <div id="name">레시피 작성</div>
        </W.Title>

        {/* 🔹 대표 이미지 업로드 */}
        <W.Rep>
          <W.Img className={mainImage ? "uploaded" : ""}>
            <label htmlFor="mainImageUpload">
              <input
                id="mainImageUpload"
                type="file"
                accept="image/*"
                onChange={handleMainImageUpload}
              />
              <img
                className="upload-icon"
                src={`${process.env.PUBLIC_URL}/images/Upload.svg`}
                alt="업로드"
              />
              {mainImage && (
                <img
                  className="uploaded-image"
                  src={mainImage}
                  alt="대표 이미지"
                />
              )}
              <div>대표 이미지 업로드</div>
            </label>
          </W.Img>
        </W.Rep>

        <W.Input>
          <W.Select>
            <W.Name>
              <input
                type="text"
                placeholder="메뉴 이름 입력 (최대 12자)"
                value={recipeName}
                onChange={(e) => setRecipeName(e.target.value)}
              />
              <div></div>
            </W.Name>
            <W.Time>
              <WriteDropdown
                options={[
                  "~ 15분",
                  "~ 30분",
                  "~ 1시간",
                  "~ 2시간",
                  "2시간 이상",
                ]}
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
              <W.Recipe>
                <textarea
                  placeholder="레시피에 대한 간단한 설명을 작성 해주세요."
                  value={recipeText}
                  onChange={(e) => setRecipeText(e.target.value)}
                />
                <div className="char-count">{recipeText.length} / 200</div>
              </W.Recipe>
            </W.Det>
          </W.Expl>
          <W.Hr1></W.Hr1>
          <W.Ing>
            <W.IngT>
              <div id="title">필요 재료</div>
              <div id="first">( </div>
              <input id="number" type="text" />
              <div id="last">인분 )</div>
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

                {/* 🔹 조리 과정별 이미지 업로드 */}
                <W.Upload className={step.image ? "uploaded" : ""}>
                  <label htmlFor={`stepImageUpload-${index}`}>
                    <input
                      id={`stepImageUpload-${index}`}
                      type="file"
                      accept="image/*"
                      onChange={(e) => handleStepImageUpload(e, index)}
                    />
                    <img
                      className="upload-icon"
                      src={`${process.env.PUBLIC_URL}/images/Upload.svg`}
                      alt="업로드"
                    />
                    {step.image && (
                      <img
                        className="uploaded-image"
                        src={step.image}
                        alt={`조리 단계 ${index + 1}`}
                      />
                    )}
                    <div>조리 이미지 업로드</div>
                  </label>
                </W.Upload>

                {/* 🔹 조리 단계 설명 */}
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
            <button type="submit">레시피 업로드</button>
          </W.Upl>
        </W.Input>
      </form>
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
          <W.Search onClick={goSearch}>
            <img
              src={`${process.env.PUBLIC_URL}/images/Search.svg`}
              alt="검색"
            />
            <div>검색</div>
          </W.Search>
          <W.Home onClick={goHome}>
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
