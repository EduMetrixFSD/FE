import React, { useEffect, useState } from "react";
import axios from "axios";

function Breadcrumb({ courseId }) {
  const [course, setCourse] = useState(null); // 預設為 null，避免 undefined 錯誤
  const [error, setError] = useState(null); // 用來儲存錯誤信息

  useEffect(() => {
    if (courseId) {
      axios
        .get(`http://127.0.0.1:8000/api/courses/${courseId}`)
        .then((response) => {
          console.log(response.data); // 檢查回應結構
          setCourse(response.data); // 設置為物件
        })
        .catch((error) => {
          console.error("搜尋錯誤:", error);
          setError("無法取得搜尋結果，請稍後再試。");
        });
    }
  }, [courseId]);

  // 如果 course 尚未加載，顯示 loading 或錯誤訊息
  if (error) {
    return <div>{error}</div>;
  }

  if (!course) {
    return <div>載入中...</div>;
  }

  return (
    <div className="mx-40 my-12">
      <ol className="flex items-center whitespace-nowrap">
        <li className="inline-flex items-center">
          <a
            className="flex items-center text-sm text-gray-500 hover:text-blue-600 focus:outline-hidden focus:text-blue-600 dark:text-neutral-500 dark:hover:text-blue-500 dark:focus:text-blue-500"
            href="/CourseCategorySearch"
          >
            所有課程
          </a>
          <svg
            className="shrink-0 mx-2 size-4 text-gray-400 dark:text-neutral-600"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m9 18 6-6-6-6"></path>
          </svg>
        </li>
        <li className="inline-flex items-center">
          <a
            className="flex items-center text-sm text-gray-500 hover:text-blue-600 focus:outline-hidden focus:text-blue-600 dark:text-neutral-500 dark:hover:text-blue-500 dark:focus:text-blue-500"
            href="/CourseCategorySearch"
          >
            {course.category?.name}
            <svg
              className="shrink-0 mx-2 size-4 text-gray-400 dark:text-neutral-600"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m9 18 6-6-6-6"></path>
            </svg>
          </a>
        </li>
        <li
          className="inline-flex items-center text-sm font-semibold text-gray-800 truncate dark:text-neutral-200"
          aria-current="page"
        >
          等新的資料進來
        </li>
      </ol>
    </div>
  );
}

export default Breadcrumb;
