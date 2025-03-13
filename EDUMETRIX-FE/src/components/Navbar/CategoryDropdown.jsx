import React, { useState } from "react";
import { Link } from "react-router-dom"; // 引入 Link
import Button from "../button/Button.jsx";
import BigCategoryButton from "../button/BigCategoryButton.jsx";

function CategoryDropdown() {
  const [isPopoverVisible, setIsPopoverVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState(null);
  let timeoutId;

  const categories = {
    全部: [{ name: "所有課程", link: "/CourseCategorySearch" }],
    設計: [
      { name: "平面設計", link: "/CourseCategorySearch" },
      { name: "UI/UX設計", link: "/CourseCategorySearch" },
      { name: "插畫", link: "/CourseCategorySearch" },
    ],
    商業: [
      { name: "行銷", link: "/CourseCategorySearch" },
      { name: "管理", link: "/CourseCategorySearch" },
      { name: "創業", link: "/CourseCategorySearch" },
    ],
    語言: [
      { name: "英文", link: "/CourseCategorySearch" },
      { name: "日文", link: "/CourseCategorySearch" },
      { name: "韓文", link: "/CourseCategorySearch" },
    ],
    科技: [
      { name: "程式設計", link: "/CourseCategorySearch" },
      { name: "數據分析", link: "/CourseCategorySearch" },
      { name: "網路安全", link: "/CourseCategorySearch" },
    ],
    生活: [
      { name: "烹飪", link: "/CourseCategorySearch" },
      { name: "攝影", link: "/CourseCategorySearch" },
      { name: "健身", link: "/CourseCategorySearch" },
    ],
  };

  const showPopover = () => {
    clearTimeout(timeoutId);
    setIsPopoverVisible(true);
  };

  const hidePopover = () => {
    timeoutId = setTimeout(() => {
      setIsPopoverVisible(false);
      setActiveCategory(null);
    }, 50);
  };

  const handleMouseEnterCategory = (category) => {
    clearTimeout(timeoutId);
    setActiveCategory(category);
  };

  return (
    <div>
      <Button
        label={
          <div>
            <span>課程總覽&ensp;</span>
            <span className="bi bi-chevron-double-down"></span>
          </div>
        }
        className=""
        onMouseEnter={showPopover}
        onMouseLeave={hidePopover}
      />
      {/* 彈跳視窗 */}
      {isPopoverVisible && (
        <div
          className="absolute top-full left-1/2 transform -translate-x-1/2 w-full p-4 bg-white border-gray-300 shadow-lg px-12"
          onMouseEnter={showPopover}
          onMouseLeave={hidePopover}
        >
          {/* 大類別 */}
          <div className="flex justify-center">
            {Object.keys(categories).map((category) => (
              <Link
                key={category}
                to={`/CourseCategorySearch?category=${category}`} // 傳遞大類別作為查詢參數
              >
                <BigCategoryButton
                  label={<span>{category}</span>}
                  onMouseEnter={() => handleMouseEnterCategory(category)}
                />
              </Link>
            ))}
          </div>

          {/* 小類別內容作為連結顯示 */}
          {activeCategory && (
            <div className="mt-4 flex justify-center">
              {categories[activeCategory].map((subCategory, index) => (
                <a
                  key={index}
                  href={subCategory.link}
                  className="text-base border bg-gray-200 rounded-2xl p-3 m-2"
                >
                  {subCategory.name}
                </a>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default CategoryDropdown;
