import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import Button from "../components/button/Button.jsx";

function ShoppingCart() {
  const navigate = useNavigate();

  // 處理按鈕點擊導向結帳頁
  const handleCourseCheckout = () => {
    navigate("/Checkout");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <div className="mx-40 my-12 flex-grow">
        <div>
          <h1 className="text-2xl bi bi-cart-fill my-3">&ensp;購物車</h1>
        </div>
        <div className="flex gap-x-6">
          {/* 購物車清單 */}
          <div className="flex flex-col basis-9/12  gap-y-3 p-3">
            {/* 全選 */}
            <div className="text-lg ms-4 px-5">
              <input type="checkbox" className="me-4" id="selecrAll" />
              <label className="font-bold" htmlFor="selectAll">
                全選
              </label>
            </div>
            {/* 課程清單 */}
            <div className="flex m-4 gap-x-4 px-5">
              <input type="checkbox" />
              <img
                src="../photo/class1.jpg"
                alt="課程圖片"
                className="basis-1/12 w-40"
              />
              <h3 className="basis-10/12 font-bold text-lg">
                沙發上的插畫課，用ipad畫出你的專屬童話
              </h3>
              <p className="basis-2/12 font-bold text-2xl">NT$3000</p>
              {/* 收藏刪除 */}

              <div className="flex flex-col basis-2/12 gap-y-2">
                <button>移至收藏</button>
                <button>刪除</button>
              </div>
            </div>
            <hr />
          </div>
          {/* 訂單明細 */}
          <div className="basis-3/12 border p-3">
            <p className="text-xl font-bold my-3">我的訂單</p>
            <hr />
            <div className="flex justify-between my-3">
              <p className="text-gray-500">?件小計</p>
              <p className="text-gray-500">NT$ ?</p>
            </div>
            <p className="text-2xl text-right font-bold my-3">NT$?</p>
            <Button
              className="border bg-green-200 w-full my-3"
              label="來去結帳"
              onClick={handleCourseCheckout}
            />
          </div>
        </div>
      </div>
      <div className="m-40"></div>
      <Footer />
    </div>
  );
}

export default ShoppingCart;
