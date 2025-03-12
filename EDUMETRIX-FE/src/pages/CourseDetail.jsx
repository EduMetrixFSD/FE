import React from "react";
import { useLocation } from "react-router-dom";

import Navbar from "../components/Navbar/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import Breadcrumb from "../components/Coursedetail/Breadcrumb.jsx";
import CourseInfo from "../components/Coursedetail/CourseInfo.jsx";
import CourseMoreInfo from "../components/Coursedetail/CourseMoreInfo.jsx";

function CourseDetail() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const id = queryParams.get("id"); // 抓取 URL 中的 id 查詢參數
  console.log(id);

  return (
    <div>
      <Navbar />
      <Breadcrumb courseId={id} />
      <CourseInfo courseId={id} /> {/* 傳遞 id 作為 props */}
      <CourseMoreInfo courseId={id} /> {/* 傳遞 id 作為 props */}
      <Footer />
    </div>
  );
}

export default CourseDetail;
