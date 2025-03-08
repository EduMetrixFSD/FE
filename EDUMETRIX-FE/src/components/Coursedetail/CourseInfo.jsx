import React, { Component } from "react";
import Button from "../button/Button";
import TooltipButton from "../button/TooltipButton.jsx";

function CourseInfo() {
  return (
    <>
      <div className="mx-40 my-12 flex flex-row gap-x-6">
        {/* 介紹影片 */}
        <iframe
          className="flex-auto basis-7/12 h-96"
          src="https://www.youtube.com/embed/1Kz2-OLx5n4?si=se_2o5WTu0QpwfjN"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
        {/* 簡介 */}
        <div className="flex flex-col gap-y-3 basis-5/12">
          {/* 課程名稱 */}
          <h1 className="text-3xl font-bold">
            日式甜點製作課程｜從基礎到專業的甜點技巧
          </h1>
          {/* 老師名稱 */}
          <a className="text-lg">by 木村浩志</a>
          {/* 課程短簡介 */}
          <p>
            本課程教您從零開始掌握日式甜點技巧，製作和菓子、抹茶甜品等經典款。適合新手及進階學員，輕鬆學習精緻甜點的製作方法，打造專業級甜點。
          </p>
          {/* 課程評價、購買人數、時長 */}
          <div className="flex justify-start text-md my-2 gap-x-5">
            <span>
              <i className="bi bi-star-fill text-yellow-300"></i>
              &nbsp;4.7
            </span>
            <span>
              <i className="bi bi-people"></i>
              &nbsp;3000
            </span>
            <span>
              <i className="bi bi-clock"></i>
              &nbsp;6.4小時
            </span>
          </div>
          {/* 價格 */}
          <p className="text-2xl">NT$5000</p>
          {/* 購物車、收藏按鈕區 */}
          <div className="flex gap-x-3">
            <Button
              className="border basis-10/12 bg-green-300"
              label="立即購買"
            />
            <TooltipButton
              label={<span className="bi bi-cart"></span>}
              className="border basis-1/12"
              tooltipContent="加入購物車"
              tooltipId="tooltip-1"
              tooltipPlace="top"
            />
            <TooltipButton
              label={<span className="bi bi-heart"></span>}
              className="border basis-1/12"
              tooltipContent="加入收藏"
              tooltipId="tooltip-1"
              tooltipPlace="top"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default CourseInfo;
