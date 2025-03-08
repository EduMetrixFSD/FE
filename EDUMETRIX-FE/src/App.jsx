import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home.jsx";
import CourseCategorySearch from "./pages/CourseCategorySearch.jsx";
import CourseKeywordSearchPage from "./pages/CourseKeywordSearchPage.jsx";
import MyCourse from "./pages/MyCourse.jsx";
import CourseDetail from "./pages/CourseDetail.jsx";
import Test from "./pages/Test.jsx"; // 測試頁面

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
      </Routes>
    </Router>
  );
}

export default App;
