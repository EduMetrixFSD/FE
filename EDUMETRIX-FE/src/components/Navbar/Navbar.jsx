import React, { useState, useEffect } from "react";
import axios from "axios";
import Button from "../button/Button.jsx";
import ButtonWithPopover from "../button/ButtonWithPopover.jsx";
import CartButton from "./CartButton.jsx";
import CategoryDropdown from "./CategoryDropdown.jsx";
import LoginandRegister from "./LoginandRegister.jsx";
import PersonalPage from "./PersonalPage.jsx";
import { useNavigate } from "react-router-dom"; // 用於導航到結果頁面

function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // 登入登出狀態
  const [user, setUser] = useState(null); // 會員資料
  const [searchQuery, setSearchQuery] = useState(""); // 儲存搜尋詞
  const [searchResults, setSearchResults] = useState([]); // 儲存搜尋結果
  const navigate = useNavigate(); // 用於導航

  // 保持登入狀態
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      axios
        .get("/api/check-auth", {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((response) => {
          setUser(response.data.user);
          setIsLoggedIn(true);
        })
        .catch(() => {
          setIsLoggedIn(false);
        });
    }
  }, []);

  // 登入事件
  const handleLogin = (credentials) => {
    axios
      .post("http://127.0.0.1:8000/api/auth/login", credentials)
      .then((response) => {
        localStorage.setItem("token", response.data.token);
        setUser(response.data.user);
        alert(response.data.message);
        setIsLoggedIn(true);
      })
      .catch((error) => {
        console.error("登入失敗:", error.response.data.message);
        alert("登入失敗:" + error.response.data.message);
      });
  };

  // 註冊事件
  const handleRegister = (registrationData) => {
    axios
      .post("http://127.0.0.1:8000/api/auth/register", registrationData)
      .then((response) => {
        localStorage.setItem("token", response.data.token);
        setUser(response.data.user);
        alert(response.data.message);
        setIsLoggedIn(true);
      })
      .catch((error) => {
        console.error("註冊失敗:", error.response.data.message);
        alert("註冊失敗:" + error.response.data.message);
      });
  };

  // 關鍵字搜尋
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = () => {
    if (searchQuery.trim()) {
      axios
        .get(`http://127.0.0.1:8000/api/courses/search`, {
          params: { query: searchQuery },
        })
        .then((response) => {
          setSearchResults(response.data.courses);
          // 生成包含搜尋字串的 URL，並導航到該頁面
          navigate(
            `/CourseKeywordSearchPage?keyword=${encodeURIComponent(
              searchQuery
            )}`
          );
        })
        .catch((error) => {
          console.error("搜尋錯誤:" + error);
        });
    }
  };

  // 搜尋框Enter鍵事件
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearchSubmit();
    }
  };

  return (
    <nav className="sticky top-0 bg-green-200 py-5 flex items-center justify-between z-50">
      <div className="container mx-40 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <a className="text-3xl font-bold" href="/">
            EDUMETRIX
          </a>

          <CategoryDropdown />
        </div>

        {/* 關鍵字搜尋 */}
        <div className="flex-grow mx-8">
          <div className="relative">
            <span className="absolute left-2 top-2 bi bi-search"></span>
            <input
              type="text"
              placeholder="今天想學什麼呢？"
              className="w-full border border-gray-500 rounded p-2 pl-8"
              value={searchQuery}
              onChange={handleSearchChange}
              onKeyDown={handleKeyDown} // 綁定鍵盤事件
            />
          </div>
        </div>

        <div className="flex justify-between space-x-4">
          <CartButton />
          {isLoggedIn ? (
            <>
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

              <PersonalPage setIsLoggedIn={setIsLoggedIn} />
            </>
          ) : (
            <LoginandRegister
              onLogin={handleLogin}
              onRegister={handleRegister}
            />
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
