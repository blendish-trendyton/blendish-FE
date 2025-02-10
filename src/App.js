import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import GlobalStyle from "./pages/GlobalStyles";
import Main from "./pages/Main";
import RecipeMaker from "./pages/RecipeMake";
import Customrecipe from "./pages/CustomRec";
import Recipedet from "./pages/RecipeDet";
import Me from "./pages/Me";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/recipemaker" element={<RecipeMaker />} />
        <Route path="/customrecipe" element={<Customrecipe />} />
        <Route path="/recipedet" element={<Recipedet />} />
        <Route path="/me" element={<Me />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
