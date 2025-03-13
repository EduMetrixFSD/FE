import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Test from "./pages/Test.jsx"; // 測試頁面
import Home from "./pages/Home.jsx";
import CourseCategorySearch from "./pages/CourseCategorySearch.jsx";
import CourseKeywordSearchPage from "./pages/CourseKeywordSearchPage.jsx";
import MyCourse from "./pages/MyCourse.jsx";
import CourseDetail from "./pages/CourseDetail.jsx";
import ShoppingCart from "./pages/ShoppingCart.jsx";
import Checkout from "./pages/Checkout.jsx";
import CourseWatching from "./pages/CourseWatching.jsx";
import Backstage from "./pages/Backstage.jsx";
import PersonalPage from "./pages/PersonalPage.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/test" element={<Test />} exact />
        <Route path="/" element={<Home />} exact />
        <Route
          path="/CourseCategorySearch"
          element={<CourseCategorySearch />}
        />
        <Route
          path="/CourseKeywordSearchPage"
          element={<CourseKeywordSearchPage />}
        />
        <Route path="/MyCourse" element={<MyCourse />} />
        <Route path="/coursedetail" element={<CourseDetail />} />
        <Route path="/shoppingcart" element={<ShoppingCart />} />
        <Route path="/Checkout" element={<Checkout />} />
        <Route path="/CourseWatching" element={<CourseWatching />} />
        <Route path="/Backstage" element={<Backstage />} />
        <Route path="/personalpage" element={<PersonalPage />} />
      </Routes>
    </Router>
  );
}

export default App;
