import React, { useContext, useState, useEffect } from "react";
import Navbar from "../components/Navbar/Navbar.jsx";
import Footer from "../components/Footer.jsx";

function PersonalPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="mx-72 my-12 flex-grow">
        <div className="flex gap-x-12">
          <div className="basic-4/12">
            <img
              src="/photo/person.png"
              className="w-20 rounded-full m-2"
              alt="Profile"
            />
            <span className="text-xl font-bold m-2 items-center">"匿名"</span>
          </div>
          <div className="border basic-8/12 w-full p-5">
            <h3 className="text-2xl font-bold">個人資訊</h3>
            <form>
              <div>
                <label>暱稱</label>
                <input type="text" className="border" />
                <label>Email</label>
                <input type="text" className="border" />
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default PersonalPage;
