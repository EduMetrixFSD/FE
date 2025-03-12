import React, { useState, useEffect } from "react";
import Button from "../button/Button.jsx";
import axios from "axios";

function PersonalPage({ setIsLoggedIn }) {
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

  // 從資料庫撈會員資料;
  const [userData, setUserData] = useState(null); // 用小駝峰命名

  useEffect(() => {
    // 發送 GET 請求
    axios
      .get("http://127.0.0.1:8000/api/auth/user")
      .then((response) => {
        // 檢查回應資料並設置到 state
        console.log(response.data); // 確保這裡的資料結構正確
        setUserData(response.data); // 假設資料是在 response.data
      })
      .catch((error) => {
        // 處理錯誤
        console.error(error);
      });
  }, []); // 空依賴陣列確保只執行一次

  const handleLogout = () => {
    // 清除 localStorage 或其他登錄狀態
    localStorage.removeItem("token"); // 假設你的 token 儲存在 localStorage

    setIsLoggedIn(false); // 更新父組件中的 isLoggedIn 狀態
    alert("登出成功");
  };

  return (
    <div className="relative w-[200px]">
      <Button
        label={<img src="/photo/person.png" className="w-10 rounded-full" />}
        onMouseEnter={showPopover}
        onMouseLeave={hidePopover}
      />
      {isPopoverVisible && (
        <div
          className="absolute top-full mt-3 left-1/2 transform -translate-x-3/4 w-60 p-5 bg-white border border-gray-300 shadow-lg"
          onMouseEnter={showPopover}
          onMouseLeave={hidePopover}
        >
          <div className="flex">
            {/* 根據 userData 顯示圖片和名稱 */}
            <img
              src={userData ? userData.profileImage : "/photo/person.png"}
              className="w-10 rounded-full m-2"
              alt="Profile"
            />
            <span className="text-xl font-bold m-2">
              {userData ? userData.name : "ABC"}
            </span>
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
            <button
              type="button" // 這裡使用 type="button"，防止表單預設提交
              className="my-2 bi bi-box-arrow-right text-left"
              onClick={handleLogout} // 點擊登出處理函數
            >
              &ensp;登出
            </button>
          </form>
        </div>
      )}
    </div>
  );
}

export default PersonalPage;
