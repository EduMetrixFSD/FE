import React, { Component } from "react";
import Navbar from "../components/Navbar/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import MyCourseCard from "../components/MyCourse/MyCouseCard.jsx";
import MyCollection from "../components/MyCourse/MyCollection.jsx";

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css"; // 自定義CSS可覆蓋這部分

function MyCourse() {
  // 課程假資料
  const mycourseprogress = [
    {
      image: "../photo/class2.jpg",
      title: "macrame 花邊結編織課｜8 款質感織物親手做",
      price: "3000",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="mx-40 my-12 flex-grow">
        {/* 會員頭像、暱稱 */}
        <div className="flex my-3">
          <img src="../photo/person.png" className="w-12" />
          <span className="font-bold text-4xl">&nbsp;ABC</span>
        </div>

        {/* Tabs */}
        <div className="my-12">
          <Tabs>
            <TabList className="flex justify-start sticky top-0 bg-white text-xl gap-x-6 font-bold">
              <Tab
                className="px-4 py-2 cursor-pointer"
                selectedClassName=" border-b-2 border-blue-500"
                style={{ outline: "none" }}
              >
                我的課程
              </Tab>
              <Tab
                className="px-4 py-2 cursor-pointer"
                selectedClassName="border-b-2 border-blue-500"
                style={{ outline: "none" }}
              >
                我的訂單
              </Tab>
              <Tab
                className="px-4 py-2 cursor-pointer"
                selectedClassName="border-b-2 border-blue-500"
                style={{ outline: "none" }}
              >
                已完成
              </Tab>
              <Tab
                className="px-4 py-2 cursor-pointer"
                selectedClassName="border-b-2 border-blue-500"
                style={{ outline: "none" }}
              >
                我的收藏
              </Tab>
            </TabList>
            <hr />

            {/* 我的課程 */}
            <TabPanel className="mt-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 my-4">
                {mycourseprogress.map((course, index) => (
                  <MyCourseCard
                    key={index}
                    image={course.image}
                    title={course.title}
                  />
                ))}
              </div>
            </TabPanel>

            {/* 我的訂單 */}
            <TabPanel className="mt-5">
              <div>我的訂單</div>
            </TabPanel>

            {/* 已完成 */}
            <TabPanel className="mt-5"></TabPanel>

            {/* 我的收藏 */}
            <TabPanel className="mt-5">
              <div className="my-4">
                {mycourseprogress.map((course, index) => (
                  <MyCollection
                    key={index}
                    image={course.image}
                    title={course.title}
                    price={course.price}
                  />
                ))}
              </div>
            </TabPanel>
          </Tabs>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default MyCourse;
