import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import Navbar from "../components/Navbar/Navbar";
import ClassCard from "../components/ClassCard.jsx";
import Footer from "../components/Footer.jsx";

function CourseKeywordSearchPage() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const keyword = queryParams.get("keyword"); // 抓取 URL 中的 keyword 查詢參數

  const [courses, setCourses] = useState([]); // 預設為空陣列，避免 undefined 錯誤
  const [error, setError] = useState(null); // 用來儲存錯誤信息

  useEffect(() => {
    if (keyword) {
      axios
        .get(`http://127.0.0.1:8000/api/courses/search`, {
          params: { query: keyword },
        })
        .then((response) => {
          setCourses(response.data.courses || []); // 確保 courses 是一個陣列
        })
        .catch((error) => {
          console.error("搜尋錯誤:", error);
          setError("無法取得搜尋結果，請稍後再試。");
        });
    }
  }, [keyword]);

  return (
    <>
      <Navbar />
      <div className="mx-40">
        <h2 className="text-4xl font-bold my-8 text-green-600">
          關鍵字「{keyword}」的結果（{courses.length} 筆相關資料）
        </h2>
        <hr />
        <p className="text-2xl font-bold my-8">相關課程</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 my-4">
          {/* 防止 courses 是 undefined */}
          {courses.length > 0 ? (
            courses.map((course, index) => (
              <ClassCard
                key={index}
                image={course.image}
                title={course.title}
                teacher={course.teacher}
                rating={course.rating}
                duration={course.duration}
                people={course.people}
                price={course.price}
              />
            ))
          ) : (
            <p>找不到符合的課程</p>
          )}
        </div>
        {error && <p className="text-red-500">{error}</p>}
      </div>
      <Footer />
    </>
  );
}

export default CourseKeywordSearchPage;
