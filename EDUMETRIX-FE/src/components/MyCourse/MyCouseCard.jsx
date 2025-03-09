import React, { useState } from "react";

function MyCourseCard({ image, title }) {
  const [progress, setProgress] = useState(50); // 設定初始進度為 50%

  return (
    <>
      <div className="rounded-lg mx-2 transform transition-transform duration-300 hover:-translate-y-1 overflow-hidden group">
        <div>
          {/* 課程圖片 */}
          <img
            src={image}
            className="w-full h-40 object-cover rounded my-1"
            alt="課程圖片"
          />
          <div className="p-2">
            {/* 課程標題 */}
            <h3 className="text-xl font-semibold my-2">{title}</h3>
          </div>
          {/* 進度條 */}
          <div className="w-full bg-gray-200 h-1 mb-2">
            <div
              className="bg-blue-600 h-1"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          {/* 進度百分比 */}
          <p className="text-sm text-gray-600">{progress}%完成</p>
        </div>
      </div>
    </>
  );
}

export default MyCourseCard;
