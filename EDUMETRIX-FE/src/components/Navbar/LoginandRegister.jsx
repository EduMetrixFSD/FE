import React, { useState } from "react";
import Button from "../button/Button.jsx";

function LoginandRegister() {
  const [isOpen, setIsOpen] = useState(false); // 控制彈跳視窗的開關
  const [isLogin, setIsLogin] = useState(true); // 判斷顯示登入或註冊頁面

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <Button
        label="登入/註冊"
        className="text-gray-400"
        onClick={toggleModal} // 點擊按鈕時開啟或關閉彈跳視窗
      />

      {isOpen && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg w-96">
            <div className="flex justify-end items-center mb-4">
              <button
                className="text-gray-500"
                onClick={toggleModal} // 關閉彈跳視窗
              >
                X
              </button>
            </div>

            <div className="text-lg flex justify-center space-x-20">
              <button
                className={`px-6 ${
                  isLogin
                    ? "text-blue-500 border-b-2 border-blue-500"
                    : "text-gray-400"
                }`}
                onClick={() => setIsLogin(true)} // 顯示登入頁面
              >
                登入
              </button>
              <button
                className={`px-6 ${
                  !isLogin
                    ? "text-blue-500 border-b-2 border-blue-500"
                    : "text-gray-400"
                }`}
                onClick={() => setIsLogin(false)} // 顯示註冊頁面
              >
                註冊
              </button>
            </div>

            {/* 登入頁面 */}
            {isLogin && (
              <div className="flex flex-col items-center m-4 mt-6">
                <div>
                  <div className="py-3">
                    <a href="" className="px-8 text-3xl">
                      <i className="bi bi-google"></i>
                    </a>
                    <a href="" className="px-8 text-3xl">
                      <i className="bi bi-facebook "></i>
                    </a>
                    <a href="" className="px-8 text-3xl">
                      <i className="bi bi-apple"></i>
                    </a>
                  </div>
                </div>

                <hr className="w-full m-4 border-gray-300" />

                <div>
                  <p className="text-gray-500 m-2 mb-4 flex justify-center">
                    使用帳號登入
                  </p>
                  <div className="relative w-full">
                    <span className="absolute left-4 top-2 bi bi-envelope text-gray-500"></span>
                    <input
                      type="email"
                      placeholder="信箱"
                      className="mb-2 px-12 py-2 border rounded "
                    />
                  </div>
                  <div className="relative w-full">
                    <span className="absolute left-4 top-2 bi bi-shield-lock text-gray-500"></span>
                    <input
                      type="password"
                      placeholder="密碼"
                      className="mb-2 px-12 py-2 border rounded "
                    />
                  </div>
                </div>

                <div className="flex justify-between w-full mt-4">
                  <label className="flex items-center cursor-pointer">
                    <input type="checkbox" className="mr-1" />
                    記住我
                  </label>
                  <a href="" className="text-blue-500">
                    忘記密碼
                  </a>
                </div>

                <Button label="登入" className="mt-4 bg-gray-300 px-12" />
              </div>
            )}

            {/* 註冊頁面 */}
            {!isLogin && (
              <div className="flex flex-col items-center m-4 mt-6">
                <div>
                  <div className="py-3">
                    <a href="" className="px-8 text-3xl">
                      <i className="bi bi-google"></i>
                    </a>
                    <a href="" className="px-8 text-3xl">
                      <i className="bi bi-facebook "></i>
                    </a>
                    <a href="" className="px-8 text-3xl">
                      <i className="bi bi-apple"></i>
                    </a>
                  </div>
                </div>

                <hr className="w-full m-4 border-gray-300" />

                <p className="text-gray-500 m-2 mb-4">建立帳號</p>
                <div className="relative w-full">
                  <span className="absolute left-4 top-2 bi bi-envelope text-gray-500"></span>
                  <input
                    type="email"
                    placeholder="輸入電子信箱"
                    className="mb-2 px-12 py-2 border rounded "
                  />
                </div>
                <div className="relative w-full">
                  <span className="absolute left-4 top-2 bi bi-shield-lock text-gray-500"></span>
                  <input
                    type="password"
                    placeholder="設定登入密碼"
                    className="mb-2 px-12 py-2 border rounded "
                  />
                </div>
                <div className="relative w-full">
                  <span className="absolute left-4 top-2 bi bi-shield-lock text-gray-500"></span>
                  <input
                    type="password"
                    placeholder="再次輸入登入密碼"
                    className="mb-2 px-12 py-2 border rounded "
                  />
                </div>
                <p className="text-sm my-2">
                  註冊後，即表示已閱讀且同意
                  <a href="" className="text-blue-500">
                    使用條款
                  </a>
                  和
                  <a href="" className="text-blue-500">
                    隱私政策
                  </a>
                </p>

                <Button label="註冊" className="mt-4 bg-gray-300 px-12" />
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default LoginandRegister;
