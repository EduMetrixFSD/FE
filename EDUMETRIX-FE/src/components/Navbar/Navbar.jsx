import React, { useState } from "react";
import Button from "../button/Button.jsx";
import ButtonWithPopover from "../button/ButtonWithPopover.jsx";
import CartButton from "./CartButton.jsx";
import CategoryDropdown from "./CategoryDropdown.jsx";
import LoginandRegister from "./LoginandRegister.jsx"; // 引入 LoginandRegister 組件
import PersonalPage from "./PersonalPage.jsx";

function Navbar() {
  // 模擬登入狀態，true 表示已登入，false 表示未登入
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  return (
    <nav className="sticky top-0 bg-green-200  py-5 flex items-center justify-between z-50">
      <div className="container mx-40 flex items-center justify-between">
        {/* 左側：logo 和 課程總覽 */}
        <div className="flex items-center space-x-4">
          {/* logo，點擊回到首頁 */}
          <a className="text-3xl font-bold" href="/">
            EDUMETRIX
          </a>

          {/* 課程總覽按鈕 */}
          <CategoryDropdown />
        </div>

        {/* 中間：搜尋欄位 */}
        <div className="flex-grow mx-8">
          <div className="relative">
            <span className="absolute left-2 top-2 bi bi-search"></span>
            <input
              type="text"
              placeholder="今天想學什麼呢？"
              className="w-full border border-gray-500 rounded p-2 pl-8"
            />
          </div>
        </div>

        {/* 右側：根據登入狀態顯示不同按鈕 */}
        <div className="flex justify-between space-x-4">
          {isLoggedIn ? (
            <>
              {/* 已登入時顯示購物車、通知、我的課程、會員中心 */}
              <CartButton />

              <ButtonWithPopover
                label={<span className="bi bi-bell text-xl"></span>}
                className="text-gray-400"
                popoverContent={
                  <div className="flex flex-col items-center my-2">
                    <img
                      src="/photo/message-received-1-3.png"
                      className="w-3/4 my-2"
                    />
                    <p className="my-2">現在沒有通知</p>
                  </div>
                }
              />

              <a href="/MyCourse">
                <Button
                  label={
                    <span className="bi bi-person-video3 text-xl">
                      &ensp;我的課程
                    </span>
                  }
                  className="text-gray-400"
                />
              </a>

              <PersonalPage />
            </>
          ) : (
            // 未登入時只顯示登入/註冊按鈕
            <LoginandRegister />
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
