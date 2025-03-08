import React, { Component } from "react";

import Navbar from "../components/Navbar/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import Breadcrumb from "../components/Coursedetail/Breadcrumb.jsx";
import CourseInfo from "../components/Coursedetail/CourseInfo.jsx";
import CourseMoreInfo from "../components/Coursedetail/CourseMoreInfo.jsx";

function CourseDetail() {
  return (
    <div>
      <Navbar />
      <Breadcrumb />
      <CourseInfo />
      <CourseMoreInfo />
      <Footer />
    </div>
  );
}

export default CourseDetail;
