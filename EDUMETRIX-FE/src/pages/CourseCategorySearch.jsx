import React, { Component } from "react";
import Navbar from "../components/Navbar/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import CategoryTabs from "../components/CategoeySearch/CategoryTabs.jsx";
import ClassCard from "../components/ClassCard.jsx";

function CourseCategorySearch() {
  // 課程假資料
  const recommendedCourses = [
    {
      image: "../photo/class1.jpg",
      title: "團購伴手禮親手做｜羅爸 13 款熱賣甜點接單到手軟",
      teacher: "羅因福師傅（羅爸）",
      rating: 4.5,
      duration: "2",
      people: "1500",
      price: "5000",
    },
    {
      image: "../photo/class1.jpg",
      title: "團購伴手禮親手做｜羅爸 13 款熱賣甜點接單到手軟",
      teacher: "羅因福師傅（羅爸）",
      rating: 4.5,
      duration: "2",
      people: "1500",
      price: "5000",
    },
    {
      image: "../photo/class1.jpg",
      title: "團購伴手禮親手做｜羅爸 13 款熱賣甜點接單到手軟",
      teacher: "羅因福師傅（羅爸）",
      rating: 4.5,
      duration: "2",
      people: "1500",
      price: "5000",
    },
    {
      image: "../photo/class1.jpg",
      title: "團購伴手禮親手做｜羅爸 13 款熱賣甜點接單到手軟",
      teacher: "羅因福師傅（羅爸）",
      rating: 4.5,
      duration: "2",
      people: "1500",
      price: "5000",
    },
  ];
  return (
    <>
      <Navbar />
      <div className="mx-40 my-12">
        {/* 類別提示 */}
        <div className="flex gap-x-5 items-center inline-block my-6">
          <h3 className="text-4xl font-bold">探索</h3>
          <p className="text-lg font-bold">大類別</p>
        </div>
        {/* 類別選項 */}
        <CategoryTabs />

        <hr />
        {/* 篩選器 */}
        <form className="my-2">
          <select className=" px-6 py-2 border">
            <span className="bi bi-filter-left"></span>
            <option value="最新課程">最新課程</option>
            <option value="最高人氣">最高人氣</option>
            <option value="最低價格">最低價格</option>
          </select>
        </form>
        {/* 課程顯示區 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 my-4">
          {recommendedCourses.map((course, index) => (
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
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default CourseCategorySearch;
