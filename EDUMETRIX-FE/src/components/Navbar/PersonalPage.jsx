import React, { useState } from "react";
import Button from "../button/Button.jsx";

function PersonalPage() {
  const [isPopoverVisible, setIsPopoverVisible] = useState(false);
  let timeoutId;

  const showPopover = () => {
    clearTimeout(timeoutId);
    setIsPopoverVisible(true);
  };

  const hidePopover = () => {
    timeoutId = setTimeout(() => {
      setIsPopoverVisible(false);
    }, 30);
  };

  return (
    <div className="relative w-[200px]">
      {" "}
      {/* 增加寬度 */}
      {/* 使用基礎 Button 組件 */}
      <Button
        label={<img src="/photo/person.png" className="w-10 rounded-full" />}
        onMouseEnter={showPopover}
        onMouseLeave={hidePopover}
      />
      {/* 彈跳視窗 */}
      {isPopoverVisible && (
        <div
          className="absolute top-full mt-3 left-1/2 transform -translate-x-3/4 w-60 p-5 bg-white border border-gray-300 shadow-lg"
          onMouseEnter={showPopover}
          onMouseLeave={hidePopover}
        >
          {/* 頭像、名字 */}
          <div className="flex">
            <img src="/photo/person.png" className="w-10 rounded-full m-2" />
            <span className="text-xl font-bold m-2">ABC</span>
          </div>
          <form className="flex flex-col m-2">
            <a href="/MyCourse" className="my-2 bi bi-person-video3">
              &ensp;我的課程
            </a>
            <hr />
            <a href="" className="my-2 bi bi-emoji-smile">
              &ensp;個人檔案
            </a>
            <a href="/MyCourse" className="my-2 bi bi-heart">
              &ensp;我的收藏
            </a>
            <button className="my-2 bi bi-box-arrow-right text-left">
              &ensp;登出
            </button>
          </form>
        </div>
      )}
    </div>
  );
}

export default PersonalPage;
