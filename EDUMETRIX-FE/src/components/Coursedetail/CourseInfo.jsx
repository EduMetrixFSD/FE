import React, { useEffect, useState } from "react";
import axios from "axios";
import Button from "../button/Button";
import TooltipButton from "../button/TooltipButton.jsx";

function CourseInfo({ courseId }) {
  const [course, setCourse] = useState(null); // 預設為 null，避免 undefined 錯誤
  const [error, setError] = useState(null); // 用來儲存錯誤信息

  useEffect(() => {
    if (courseId) {
      console.log(courseId);

      axios
        .get(`http://127.0.0.1:8000/api/courses/${courseId}`)
        .then((response) => {
          console.log(response.data); // 檢查回應結構
          console.log(response.data.id); // 檢查回應結構
          setCourse(response.data); // 設置為物件
        })
        .catch((error) => {
          console.error("搜尋錯誤:", error);
          setError("無法取得搜尋結果，請稍後再試。");
        });
    }
  }, [courseId]);

  // 處理加入購物車的邏輯，目前還有問題
  const addToCart = () => {
    if (!course) return;

    const cartData = {
      id: course.id, // 確保傳送正確的課程 ID
    };

    axios
      .post("http://127.0.0.1:8000/api/cart/add", cartData)
      .then((response) => {
        console.log("課程已成功加入購物車", response.data);
      })
      .catch((error) => {
        console.error(
          "加入購物車失敗",
          error.response ? error.response.data : error.message
        );
      });
  };

  // 如果資料尚未加載，顯示 loading
  if (!course) {
    return <div>載入中...</div>;
  }

  return (
    <>
      <div className="mx-40 my-12 flex flex-row gap-x-6">
        {/* 介紹影片 */}
        <iframe
          className="flex-auto basis-7/12 h-96"
          src="https://www.youtube.com/embed/1Kz2-OLx5n4?si=se_2o5WTu0QpwfjN"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
        {/* 簡介 */}
        <div className="flex flex-col gap-y-3 basis-5/12">
          {/* 課程名稱 */}
          <h1 className="text-3xl font-bold">{course.title}</h1>
          {/* 老師名稱 */}
          <a className="text-lg">by {course.teacher?.name}</a>{" "}
          {/* 確保 teacher 存在 */}
          {/* 課程短簡介 */}
          <p>{course.description}</p>
          {/* 課程評價、購買人數、時長 */}
          <div className="flex justify-start text-md my-2 gap-x-5">
            <span>
              <i className="bi bi-star-fill text-yellow-300"></i>
              &nbsp;
              {course.reviews_avg_rating
                ? parseFloat(course.reviews_avg_rating).toFixed(1)
                : "N/A"}{" "}
              {/* 將評價轉為數字取到小數點後一位 */}
            </span>
            <span>
              <i className="bi bi-people"></i>
              &nbsp;{course.enrollments_count}
            </span>
            <span>
              <i className="bi bi-clock"></i>
              &nbsp;6.4小時
            </span>
          </div>
          {/* 價格 */}
          <p className="text-2xl">
            NT${course.price ? parseInt(course.price, 10) : "未定價"}
          </p>{" "}
          {/* 顯示價格 */}
          {/* 購物車、收藏按鈕區 */}
          <div className="flex gap-x-3">
            <Button
              className="border basis-10/12 bg-green-300"
              label="立即購買"
              onClick={addToCart} // 按下時執行 addToCart 函式
            />
            <TooltipButton
              label={<span className="bi bi-cart"></span>}
              className="border basis-1/12"
              tooltipContent="加入購物車"
              tooltipId="tooltip-1"
              tooltipPlace="top"
              onClick={addToCart} // 按下時執行 addToCart 函式
            />
            <TooltipButton
              label={<span className="bi bi-heart"></span>}
              className="border basis-1/12"
              tooltipContent="加入收藏"
              tooltipId="tooltip-1"
              tooltipPlace="top"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default CourseInfo;
