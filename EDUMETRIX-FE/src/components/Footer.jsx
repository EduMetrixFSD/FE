import React, { Component } from "react";

function Footer() {
  return (
    <div className="bg-green-300 p-12 flex justify-evenly">
      <h1 className="text-5xl  font-bold">EDUMETRIX</h1>
      <div className="flex flex-col">
        <a href="#" className="m-1">
          常見問題
        </a>
        <a href="#" className="m-1">
          關於我們
        </a>
        <a href="#" className="m-1">
          聯絡我們
        </a>
      </div>
    </div>
  );
}

export default Footer;
