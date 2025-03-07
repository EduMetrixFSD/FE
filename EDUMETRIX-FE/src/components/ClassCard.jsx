import React from "react";
import Button from "../components/button/Button.jsx";

function ClassCard({ image, title, teacher, rating, duration, people, price }) {
  return (
    <div className="rounded-lg mx-2 transform transition-transform duration-300 hover:-translate-y-1 overflow-hidden group">
      <div>
        {/* 課程圖片 */}
        <img
          src={image}
          className="w-full h-40 object-cover rounded my-1"
          alt="課程圖片"
        />
        <div className="p-2">
          {/* 課程標題 */}
          <h3 className="text-xl font-semibold my-2">{title}</h3>
          {/* 講師名字 */}
          <a className="text-gray-400 my-2" href="">
            by {teacher}
          </a>
          <br />
          {/* 評價/時間 */}
          <div
            className="flex justify-between text-md my-2
          "
          >
            <span>
              <i className="bi bi-star-fill text-yellow-300"></i>
              &nbsp;{rating}
            </span>
            <span>
              <i classNmae="bi bi-people"></i>
              &nbsp;{people}
            </span>
            <span>
              <i className="bi bi-clock"></i>
              &nbsp;{duration}小時
            </span>
          </div>
          {/* 價格 */}
          <h4 className="text-2xl font-bold my-2 text-green-500">NT${price}</h4>
        </div>
        <button className="bi bi-heart px-3 absolute top-0 left-4 transform -translate-y-10 opacity-0 group-hover:translate-y-4 group-hover:opacity-100 transition-all duration-300 bg-stone-300/50 text-white rounded-full p-2 hover:bg-stone-700/50"></button>
      </div>
    </div>
  );
}

export default ClassCard;
