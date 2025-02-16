import React from "react";
import { useNavigate } from "react-router-dom";
import * as M from "../styles/StyledMain";
import startLogo from "../assets/svg/startLogo.svg";

const StartPage = () => {
  return (
    <M.Container>
      <div className="startPage">
        <img src={startLogo} className="logo"></img>
      </div>
    </M.Container>
  );
};

export default StartPage;
