import React, { useState } from "react";
import Button from "../button/Button.jsx";
import BigCategoryButton from "../button/BigCategoryButton.jsx";

function CategoryDropdown() {
  const [isPopoverVisible, setIsPopoverVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState(null);
  let timeoutId;

  const categories = {
    全部: [{ name: "所有課程", link: "/all-courses" }],
    設計: [
      { name: "平面設計", link: "/design/graphic" },
      { name: "UI/UX設計", link: "/design/ui-ux" },
      { name: "插畫", link: "/design/illustration" },
    ],
    商業: [
      { name: "行銷", link: "/business/marketing" },
      { name: "管理", link: "/business/management" },
      { name: "創業", link: "/business/entrepreneurship" },
    ],
    語言: [
      { name: "英文", link: "/language/english" },
      { name: "日文", link: "/language/japanese" },
      { name: "韓文", link: "/language/korean" },
    ],
    科技: [
      { name: "程式設計", link: "/tech/programming" },
      { name: "數據分析", link: "/tech/data-analysis" },
      { name: "網路安全", link: "/tech/cybersecurity" },
    ],
    生活: [
      { name: "烹飪", link: "/lifestyle/cooking" },
      { name: "攝影", link: "/lifestyle/photography" },
      { name: "健身", link: "/lifestyle/fitness" },
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
        label="課程總覽"
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
              <BigCategoryButton
                key={category}
                label={<span>{category}</span>}
                onMouseEnter={() => handleMouseEnterCategory(category)}
              />
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
