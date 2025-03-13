import { useState } from "react";
import { Tabs, TabList, Tab, TabPanel } from "react-tabs"; // 假設你正在使用 react-tabs

const CategoryTabs = () => {
  const [selectedCategory, setSelectedCategory] = useState("全部");

  const images = {
    全部: "../public/photo/world.svg",
    設計: "../public/photo/design.svg",
    商業: "../public/photo/bussiness.svg",
    語言: "../public/photo/language.svg",
    科技: "../public/photo/coding.svg",
    生活: "../public/photo/life.svg",
  };

  return (
    <div className="flex">
      {/* 類別選單 */}
      <Tabs
        className="my-6"
        onSelect={(index) => {
          const categories = ["全部", "設計", "商業", "語言", "科技", "生活"];
          setSelectedCategory(categories[index]);
        }}
      >
        {/* 大類別 */}
        <TabList className="flex text-4xl">
          {Object.keys(images).map((category) => (
            <Tab
              key={category}
              className="border rounded-lg py-3 px-5 cursor-pointer"
              selectedClassName="bg-gray-300"
              style={{ outline: "none" }}
            >
              {category}
            </Tab>
          ))}
        </TabList>

        {/* 小類別及內容 (你可以按照需求增加 TabPanel) */}
        {/* 小類別 */}
        <TabPanel className="mt-2">
          <div className="p-5">
            <button className="border rounded-lg py-2 px-5">所有課程</button>
          </div>
        </TabPanel>
        <TabPanel className="mt-2">
          <div className="p-5 flex gap-x-3">
            <button className="border rounded-lg py-2 px-5">所有</button>
            <button className="border rounded-lg py-2 px-5">平面設計</button>
            <button className="border rounded-lg py-2 px-5">UI/UX設計</button>
            <button className="border rounded-lg py-2 px-5">插畫</button>
          </div>
        </TabPanel>
        <TabPanel className="mt-2">
          <div className="p-5 flex gap-x-3">
            <button className="border rounded-lg py-2 px-5">所有</button>
            <button className="border rounded-lg py-2 px-5">行銷</button>
            <button className="border rounded-lg py-2 px-5">管理</button>
            <button className="border rounded-lg py-2 px-5">創業</button>
          </div>
        </TabPanel>
        <TabPanel className="mt-2">
          <div className="p-5 flex gap-x-3">
            <button className="border rounded-lg py-2 px-5">所有</button>
            <button className="border rounded-lg py-2 px-5">英文</button>
            <button className="border rounded-lg py-2 px-5">日文</button>
            <button className="border rounded-lg py-2 px-5">韓文</button>
          </div>
        </TabPanel>
        <TabPanel className="mt-2">
          <div className="p-5 flex gap-x-3">
            <button className="border rounded-lg py-2 px-5">所有</button>
            <button className="border rounded-lg py-2 px-5">程式設計</button>
            <button className="border rounded-lg py-2 px-5">數據分析</button>
            <button className="border rounded-lg py-2 px-5">網路安全</button>
          </div>
        </TabPanel>
        <TabPanel className="mt-2">
          <div className="p-5 flex gap-x-3">
            <button className="border rounded-lg py-2 px-5">所有</button>
            <button className="border rounded-lg py-2 px-5">烹飪</button>
            <button className="border rounded-lg py-2 px-5">攝影</button>
            <button className="border rounded-lg py-2 px-5">健身</button>
          </div>
        </TabPanel>
      </Tabs>

      {/* 根據選擇的類別顯示對應圖片 */}
      <div className="ml-6">
        <img
          src={images[selectedCategory]}
          alt={selectedCategory}
          className="w-80 h-auto"
        />
      </div>
    </div>
  );
};

export default CategoryTabs;
