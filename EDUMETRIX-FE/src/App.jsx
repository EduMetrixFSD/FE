import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home.jsx";
import CourseCategorySearch from "./pages/CourseCategorySearch.jsx";
import CourseKeywordSearchPage from "./pages/CourseKeywordSearchPage.jsx";
import MyCourse from "./pages/MyCourse.jsx";

function App() {
  return (
    <Router>
      <Routes>
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
      </Routes>
    </Router>
  );
}

export default App;
