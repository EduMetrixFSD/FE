import React, { Component } from "react";

function MyCollection({ image, title, price }) {
  return (
    <div className="flex m-4 gap-x-4 px-5">
      <img src={image} alt="課程圖片" className="basis-1/12 w-40" />
      <h3 className="basis-10/12 font-bold text-lg">{title}</h3>
      <p className="basis-2/12 font-bold text-2xl">NT${price}</p>
      {/* 收藏刪除 */}

      <div className="flex flex-col basis-2/12 gap-y-2">
        <button>加入購物車</button>
        <button>刪除</button>
      </div>
    </div>
  );
}
export default MyCollection;
