import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import GlobalStyle from "./pages/GlobalStyles";
import Logins from "./pages/Logins";
import Login from "./pages/Login";
import Main from "./pages/Main";
import RecipeMaker from "./pages/RecipeMake";
import Customrecipe from "./pages/CustomRec";
import Recipedet from "./pages/RecipeDet";
import Me from "./pages/Me";
import EditProf from "./pages/EditProf";
import EditPW from "./pages/EditPw";
import Myrecipe from "./pages/Myrecipe";
import Savedrecipe from "./pages/Savedrecipe";
import Writerecipe from "./pages/WriteRec";
import SearchID from "./pages/SearchID";
import SearchBB from "./pages/SearchBB";
import EditBB from "./pages/EditBB";
import SignUp from "./pages/SignUp";
import SelectPage from "./pages/SelectPage";
import FoodDetail from "./pages/FoodDetail";
function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/foodDetail" element={<FoodDetail />} />
        <Route path="/logins" element={<Logins />} />
        <Route path="/login" element={<Login />} />
        <Route path="/searchID" element={<SearchID />} />
        <Route path="/searchBB" element={<SearchBB />} />
        <Route path="/searchBB/EditBB" element={<EditBB />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/signUp/selectPage" element={<SelectPage />} />
        <Route path="/recipemaker" element={<RecipeMaker />} />
        <Route path="/customrecipe" element={<Customrecipe />} />
        <Route path="/recipedet" element={<Recipedet />} />
        <Route path="/me" element={<Me />} />
        <Route path="/editprofile" element={<EditProf />} />
        <Route path="/editprofile/password" element={<EditPW />} />
        <Route path="/me/myrecipe" element={<Myrecipe />} />
        <Route path="/me/savedrecipe" element={<Savedrecipe />} />
        <Route path="/write" element={<Writerecipe />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
