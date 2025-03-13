import React, { Component } from "react";

import Navbar from "../components/Navbar/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import Button from "../components/button/Button.jsx";

function Checkout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="mx-40 my-12">
        <h1 className="text-3xl font-bold my-6">結帳</h1>
        <p className="m-4 px-5 text-xl font-bold">確認清單</p>
        {/* 確認清單 */}
        <div className="flex m-4 gap-x-4 px-5">
          <img
            src="../photo/class1.jpg"
            alt="課程圖片"
            className="basis-1/12 w-40"
          />
          <h3 className="basis-10/12 font-bold text-md">
            沙發上的插畫課，用ipad畫出你的專屬童話
          </h3>
          <p className="basis-2/12 font-bold text-2xl">NT$3000</p>
        </div>
        {/* 總計 */}
        <div className="flex justify-end mb-12">
          <span className="text-gray-500">共?件</span>
          <span className="text-gray-500 mx-4">總金額</span>
          <span className="font-bold text-3xl">NT$?</span>
        </div>
        {/* 付款方式 */}
        <p className="m-4 px-5 text-xl font-bold">付款方式</p>
        <div className="m-4 px-5">
          {/* 付款方式選項 */}
          <div className="flex gap-x-4 my-4">
            <div>
              <input
                type="radio"
                name="payment"
                id="payByCard"
                className="peer"
              />
              <label
                htmlFor="payByCard"
                className="peer-checked:font-bold cursor-pointer"
              >
                &nbsp;信用卡一次付清
              </label>
            </div>
            <div>
              <input
                type="radio"
                name="payment"
                id="payByLine"
                className="peer"
              />
              <label
                htmlFor="payByLine"
                className="peer-checked:font-bold cursor-pointer"
              >
                &nbsp;Line Pay
              </label>
            </div>
            <div>
              <input
                type="radio"
                name="payment"
                id="payBy711"
                className="peer"
              />
              <label
                htmlFor="payBy711"
                className="peer-checked:font-bold cursor-pointer"
              >
                &nbsp;超商代碼繳費
              </label>
            </div>
            <div>
              <input
                type="radio"
                name="payment"
                id="payByATM"
                className="peer"
              />
              <label
                htmlFor="payByATM"
                className="peer-checked:font-bold cursor-pointer"
              >
                &nbsp;ATM轉帳
              </label>
            </div>
          </div>

          {/* 信用卡付款內容 */}
          <div className="my-4">
            <span className="font-bold">信用卡號：</span>
            <input
              type="text"
              className="border w-24 text-center"
              maxLength="4"
              onInput={(e) => {
                e.target.value = e.target.value.replace(/\D/g, ""); // 移除所有非數字字符
                if (e.target.value.length >= 4) {
                  e.target.nextElementSibling?.focus();
                }
              }}
            />
            -
            <input
              type="text"
              className="border w-24 text-center"
              maxLength="4"
              onInput={(e) => {
                e.target.value = e.target.value.replace(/\D/g, ""); // 移除所有非數字字符
                if (e.target.value.length >= 4) {
                  e.target.nextElementSibling?.focus();
                }
              }}
            />
            -
            <input
              type="text"
              className="border w-24 text-center"
              maxLength="4"
              onInput={(e) => {
                e.target.value = e.target.value.replace(/\D/g, ""); // 移除所有非數字字符
                if (e.target.value.length >= 4) {
                  e.target.nextElementSibling?.focus();
                }
              }}
            />
            -
            <input
              type="text"
              className="border w-24 text-center"
              maxLength="4"
              onInput={(e) => {
                e.target.value = e.target.value.replace(/\D/g, ""); // 移除所有非數字字符
              }}
            />
          </div>
          {/* 有效年月 */}
          <div className="my-4">
            <span className="font-bold">有效年月：</span>
            <input
              type="text"
              className="border w-12 text-center"
              placeholder="MM"
              maxLength="2"
              onInput={(e) => {
                e.target.value = e.target.value.replace(/\D/g, ""); // 只允許數字
                if (parseInt(e.target.value, 10) > 12) {
                  e.target.value = "12"; // 限制最大值為 12
                } else if (parseInt(e.target.value, 10) < 1) {
                  e.target.value = "01"; // 限制最小值為 1
                }
              }}
            />
            -
            <input
              type="text"
              className="border w-20 text-center"
              placeholder="YYYY"
              maxLength="4"
              onInput={(e) => {
                e.target.value = e.target.value.replace(/\D/g, ""); // 只允許數字
              }}
            />
            年
          </div>
          {/* 背面末三碼 */}
          <div className="my-4">
            <span className="font-bold">背面末三碼：</span>
            <input
              type="text"
              className="border w-20 text-center"
              placeholder="末三碼"
              maxLength="3"
              onInput={(e) => {
                e.target.value = e.target.value.replace(/\D/g, ""); // 只允許數字
              }}
            />
          </div>
          <Button
            label={<span>送出結帳</span>}
            className="bg-green-200 w-60 my-4"
            onClick={() => alert("已完成結帳")}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Checkout;
