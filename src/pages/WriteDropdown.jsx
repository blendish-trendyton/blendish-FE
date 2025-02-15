import React, { useState } from "react";
import styled from "styled-components";

const Dropdown = ({ options, selected, setSelected, multiple }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (option) => {
    if (multiple) {
      // 중복 선택 허용
      if (Array.isArray(selected)) {
        if (selected.includes(option)) {
          setSelected(selected.filter((item) => item !== option)); // 선택 해제
        } else {
          setSelected([...selected, option]); // 선택 추가
        }
      } else {
        // selected가 배열이 아닌 경우 초기화
        setSelected([option]);
      }
    } else {
      // 단일 선택
      setSelected(option);
      setIsOpen(false); // 선택 후 드롭다운 닫기
    }
  };

  return (
    <DropdownContainer>
      <DropdownHeader onClick={toggleDropdown}>
        {multiple
          ? Array.isArray(selected) && selected.length > 0
            ? selected.join(", ") // 선택된 옵션 표시 (쉼표로 구분)
            : "원하는 맛 취향을 선택하세요."
          : selected || "원하는 맛 취향을 선택하세요."}
        <img
          src={`${process.env.PUBLIC_URL}/images/${
            isOpen ? "GrayUp.svg" : "GrayDown.svg"
          }`}
          alt="화살표"
        />
      </DropdownHeader>
      {isOpen && (
        <DropdownList>
          {options.map((option) => (
            <DropdownItem key={option}>
              <input
                type={multiple ? "checkbox" : "radio"}
                id={option}
                checked={
                  multiple
                    ? Array.isArray(selected) && selected.includes(option)
                    : selected === option
                }
                onChange={() => handleSelect(option)}
              />
              <label htmlFor={option}>{option}</label>
            </DropdownItem>
          ))}
        </DropdownList>
      )}
    </DropdownContainer>
  );
};

export default Dropdown;

// ✅ 스타일 코드 (styled-components)
const DropdownContainer = styled.div`
  position: relative;
  width: 346px; /* 원하는 크기 설정 */
  height: 46px; /* 원하는 크기 설정 */
  cursor: pointer;
  border: transparent;
  background: transparent;
  display: flex;
  align-items: center; /* 내부 요소 정렬 */
  border-bottom: 1.5px solid #d6d3d3; /* 밑줄만 추가 */
`;

const DropdownHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%; /* 부모의 높이를 그대로 가져가도록 설정 */
  padding: 12px;
  background-color: ${(props) => (props.isOpen ? "#fffbe6" : "#ffffff")};
  cursor: pointer;
  font-size: 16px;
  color: #333;
  font-weight: 500;
  //   border: 1.5px solid #d6d3d3;
  //   border-radius: 5px;

  /* 기존 border 제거 */
  border: none;

  img {
    width: 20px;
    height: 20px;
  }
`;

const DropdownList = styled.ul`
  position: absolute;
  top: calc(100% + 12px);
  left: 0;
  width: 100%;
  background-color: white;
  border-radius: 5px;
  border: 1.5px solid #c5c5c5;
  box-shadow: none; /* 그림자 제거 */
  list-style: none;
  margin: 0;
  padding: 0;
  z-index: 1000;

  max-height: 193px; /* 최대 높이를 설정하여 스크롤이 활성화됨 */
  overflow-y: auto; /* 세로 스크롤 활성화 */

  /* 스크롤바 커스터마이징 */
  ::-webkit-scrollbar {
    width: 8px; /* 스크롤바 너비 */
  }
  ::-webkit-scrollbar-thumb {
    background-color: #c5c5c5; /* 스크롤바 색상 */
    border-radius: 4px; /* 스크롤바 모서리 둥글게 */
  }
  ::-webkit-scrollbar-track {
    background-color: #f0f0f0; /* 스크롤바 배경 */
  }
`;
const DropdownItem = styled.li`
  display: flex;
  align-items: center;
  padding: 12px 16px;
  cursor: pointer;
  border-bottom: 1px solid #dddddd; /* 항목 간 구분선 */
  transition: background-color 0.5s ease;

  &:last-child {
    border-bottom: none; /* 마지막 항목은 선 없음 */
  }

  label {
    display: flex;
    align-items: center;
    width: 100%; /* 클릭 영역을 항목 전체로 확장 */
    cursor: pointer;
    font-size: 16px;
    color: #333;
  }

  input {
    appearance: none; /* 기본 라디오 버튼 제거 */
    width: 20px;
    height: 20px;
    margin-right: 10px;
    border: 2px solid #fcb01b; /* 외곽선 */
    border-radius: 50%; /* 원 모양 */
    position: relative;
    cursor: pointer;

    /* 선택되지 않은 상태 */
    background-color: white;
  }

  input:checked {
    background-color: white; /* 선택된 상태에서도 배경은 흰색 */
  }

  input:checked::before {
    content: "";
    position: absolute;
    top: 3px;
    left: 2px;
    width: 10px;
    height: 10px;
    background-color: #fcb01b; /* 내부 원 노란색 */
    border-radius: 50%; /* 원 모양 */
  }
`;
