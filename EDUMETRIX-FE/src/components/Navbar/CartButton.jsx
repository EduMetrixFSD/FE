// src/components/navbar/CartButton.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../button/Button.jsx";
import ButtonWithPopover from "../button/ButtonWithPopover.jsx";

function CartButton() {
  const navigate = useNavigate();

  // 處理按鈕點擊導向探索課程事件
  const handleExploreCoursesClick = () => {
    navigate("/CourseCategorySearch"); // 跳轉到 "探索課程" 頁面
  };

  return (
    <a href="/shoppingcart">
      <ButtonWithPopover
        label={<span className="bi bi-cart text-xl"></span>}
        className="text-gray-400"
        popoverContent={
          <div className="flex flex-col items-center my-2">
            <img src="/photo/online-class-19.png" className="w-3/4 my-2" />
            <p className="my-2">購物車是空的，去逛逛吧！​</p>
            <Button
              label={<span>探索課程</span>}
              className="border border-gray-700 px-7 my-2"
              onClick={handleExploreCoursesClick}
            />
          </div>
        }
      />
    </a>
  );
}

export default CartButton;
