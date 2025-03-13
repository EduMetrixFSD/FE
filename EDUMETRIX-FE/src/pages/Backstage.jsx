import React, { Component } from "react";

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css"; // 自定義CSS可覆蓋這部分

function Backstage() {
  // 抓取課程資料
  const teacherclasses = [
    {
      image: "../photo/class2.jpg",
      title: "macrame 花邊結編織課｜8 款質感織物親手做",
      teacher: "Jiajiamacrame",
      rating: 4.7,
      duration: "3",
      people: "1500",
      price: "3500",
    },
    {
      image: "../photo/class2.jpg",
      title: "macrame 花邊結編織課｜8 款質感織物親手做",
      teacher: "Jiajiamacrame",
      rating: 4.7,
      duration: "3",
      people: "1500",
      price: "3500",
    },
    {
      image: "../photo/class2.jpg",
      title: "macrame 花邊結編織課｜8 款質感織物親手做",
      teacher: "Jiajiamacrame",
      rating: 4.7,
      duration: "3",
      people: "1500",
      price: "3500",
    },
    {
      image: "../photo/class2.jpg",
      title: "macrame 花邊結編織課｜8 款質感織物親手做",
      teacher: "Jiajiamacrame",
      rating: 4.7,
      duration: "3",
      people: "1500",
      price: "3500",
    },
    {
      image: "../photo/class2.jpg",
      title: "macrame 花邊結編織課｜8 款質感織物親手做",
      teacher: "Jiajiamacrame",
      rating: 4.7,
      duration: "3",
      people: "1500",
      price: "3500",
    },
    {
      image: "../photo/class2.jpg",
      title: "macrame 花邊結編織課｜8 款質感織物親手做",
      teacher: "Jiajiamacrame",
      rating: 4.7,
      duration: "3",
      people: "1500",
      price: "3500",
    },
  ];
  return (
    <div className="min-h-screen flex flex-col">
      <Tabs>
        <div className="flex flex-row">
          {/* 側邊導覽列 */}
          <TabList className="w-64 flex flex-col flex-shrink-0 h-screen border text-lg py-6 bg-green-200">
            <h1 className="text-3xl font-bold px-4 py-6 text-center">
              EDUMETRIX
            </h1>
            <Tab
              className="px-4 py-4 cursor-pointer text-center"
              selectedClassName="bg-gray-200"
              style={{ outline: "none" }}
            >
              課程內容修改
            </Tab>
            <Tab
              className="px-4 py-4 cursor-pointer text-center"
              selectedClassName="bg-gray-200"
              style={{ outline: "none" }}
            >
              回復評論
            </Tab>
            <p
              className="px-4 py-4 cursor-pointer text-center"
              selectedClassName="bg-gray-200"
              style={{ outline: "none" }}
            >
              登出
            </p>
          </TabList>

          {/* 內容 */}
          <div className="my-12 mx-12">
            {/* 老師所有開課課程 */}
            <TabPanel>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 my-4">
                {teacherclasses.map((course, index) => (
                  <a
                    key={index}
                    href="/"
                    className="rounded-lg mx-2  overflow-hidden group"
                  >
                    <div>
                      {/* 課程圖片 */}
                      <img
                        src={course.image}
                        className="w-full h-40 object-cover rounded my-1"
                        alt="課程圖片"
                      />
                      <div className="p-2">
                        {/* 課程標題 */}
                        <h3 className="text-xl font-semibold my-2">
                          {course.title}
                        </h3>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </TabPanel>
            {/* 回復評論 */}
            <TabPanel>回復評論</TabPanel>
          </div>
        </div>
      </Tabs>
    </div>
  );
}

export default Backstage;
