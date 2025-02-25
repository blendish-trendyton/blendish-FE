import React, { useState } from "react";
import styled from "styled-components";

const TasteDropdown = ({ options, selected, setSelected }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (option) => {
    if (selected.includes(option)) {
      // 선택 해제
      setSelected(selected.filter((item) => item !== option));
    } else {
      // 선택 추가
      setSelected([...selected, option]);
    }
  };

  return (
    <DropdownContainer>
      <DropdownHeader onClick={toggleDropdown}>
        {selected.length > 0
          ? selected.join(", ") // 선택된 옵션을 쉼표로 구분하여 표시
          : "원하는 맛 취향을 선택하세요"}{" "}
        {/* 빈 배열일 때 placeholder */}
        <img
          src={`${process.env.PUBLIC_URL}/images/${
            isOpen ? "Upbtn.svg" : "Downbtn.svg"
          }`}
          alt="화살표"
        />
      </DropdownHeader>
      {isOpen && (
        <DropdownList>
          {options.map((option) => (
            <DropdownItem key={option} onClick={() => handleSelect(option)}>
              <CheckBox isChecked={selected.includes(option)} />
              <label>{option}</label>
            </DropdownItem>
          ))}
        </DropdownList>
      )}
    </DropdownContainer>
  );
};

export default TasteDropdown;

// 스타일은 동일
const DropdownContainer = styled.div`
  position: relative;
  width: 100%;
  cursor: pointer;
  border: transparent;
  background: transparent;
`;

const DropdownHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px;
  background-color: ${(props) =>
    props.isOpen ? "#fffbe6" : "#ffffff"}; /* 배경색 유지 */
  cursor: pointer;
  font-size: 16px;
  color: #333;
  font-weight: 500;

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
  border-bottom: 1px solid #dddddd;

  &:last-child {
    border-bottom: none;
  }

  label {
    display: inline-block; /* 텍스트를 체크박스 옆에 배치 */
    margin-left: 10px; /* 체크박스와 텍스트 사이의 간격 */
    cursor: pointer;
    font-size: 16px;
    color: #333;
  }
`;

const CheckBox = styled.div`
  width: 20px;
  height: 20px;
  background-color: ${(props) => (props.isChecked ? "#FF9D00" : "#f1f1f1")};
  border: 2px solid ${(props) => (props.isChecked ? "#FF9D00" : "#ccc")};
  border-radius: 3px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  /* 체크 표시 구현 */
  &::after {
    content: "";
    display: ${(props) =>
      props.isChecked ? "block" : "none"}; /* 선택된 경우만 표시 */
    width: 6px;
    height: 12px;
    border: solid white; /* 체크 표시 색상 */
    border-width: 0 2px 2px 0;
    position: absolute;
    top: 0px;
    left: 5px;
    transform: rotate(45deg); /* 체크 모양 각도 */
  }
`;
