import { useState } from "react";
import { Tabs, TabList, Tab, TabPanel } from "react-tabs"; // 假設你正在使用 react-tabs

const CategoryTabs = () => {
  const [selectedCategory, setSelectedCategory] = useState("全部");
  const [selectedSubCategory, setSelectedSubCategory] = useState(""); // 新增追蹤小類別的狀態

  const images = {
    全部: "../public/photo/world.svg",
    設計: "../public/photo/design.svg",
    商業: "../public/photo/bussiness.svg",
    語言: "../public/photo/language.svg",
    科技: "../public/photo/coding.svg",
    生活: "../public/photo/life.svg",
  };

  return (
    <div className="flex justify-around">
      {/* 類別選單 */}
      <Tabs
        className="my-6"
        onSelect={(index) => {
          const categories = ["全部", "設計", "商業", "語言", "科技", "生活"];
          setSelectedCategory(categories[index]);
          setSelectedSubCategory(""); // 重設小類別選擇
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
        <TabPanel className="mt-2">
          <div className="p-5">
            <button
              className={`border rounded-lg py-2 px-5 ${
                selectedSubCategory === "所有課程" ? "bg-gray-300" : ""
              }`}
              onClick={() => setSelectedSubCategory("所有課程")}
            >
              所有
            </button>
          </div>
        </TabPanel>
        <TabPanel className="mt-2">
          <div className="p-5 flex gap-x-3">
            {["所有", "平面設計", "UI/UX設計", "插畫"].map((subCategory) => (
              <button
                key={subCategory}
                className={`border rounded-lg py-2 px-5 ${
                  selectedSubCategory === subCategory ? "bg-gray-300" : ""
                }`}
                onClick={() => setSelectedSubCategory(subCategory)}
              >
                {subCategory}
              </button>
            ))}
          </div>
        </TabPanel>
        <TabPanel className="mt-2">
          <div className="p-5 flex gap-x-3">
            {["所有", "行銷", "管理", "創業"].map((subCategory) => (
              <button
                key={subCategory}
                className={`border rounded-lg py-2 px-5 ${
                  selectedSubCategory === subCategory ? "bg-gray-300" : ""
                }`}
                onClick={() => setSelectedSubCategory(subCategory)}
              >
                {subCategory}
              </button>
            ))}
          </div>
        </TabPanel>
        <TabPanel className="mt-2">
          <div className="p-5 flex gap-x-3">
            {["所有", "英文", "日文", "韓文"].map((subCategory) => (
              <button
                key={subCategory}
                className={`border rounded-lg py-2 px-5 ${
                  selectedSubCategory === subCategory ? "bg-gray-300" : ""
                }`}
                onClick={() => setSelectedSubCategory(subCategory)}
              >
                {subCategory}
              </button>
            ))}
          </div>
        </TabPanel>
        <TabPanel className="mt-2">
          <div className="p-5 flex gap-x-3">
            {["所有", "程式設計", "數據分析", "網路安全"].map((subCategory) => (
              <button
                key={subCategory}
                className={`border rounded-lg py-2 px-5 ${
                  selectedSubCategory === subCategory ? "bg-gray-300" : ""
                }`}
                onClick={() => setSelectedSubCategory(subCategory)}
              >
                {subCategory}
              </button>
            ))}
          </div>
        </TabPanel>
        <TabPanel className="mt-2">
          <div className="p-5 flex gap-x-3">
            {["所有", "烹飪", "攝影", "健身"].map((subCategory) => (
              <button
                key={subCategory}
                className={`border rounded-lg py-2 px-5 ${
                  selectedSubCategory === subCategory ? "bg-gray-300" : ""
                }`}
                onClick={() => setSelectedSubCategory(subCategory)}
              >
                {subCategory}
              </button>
            ))}
          </div>
        </TabPanel>
      </Tabs>

      {/* 根據選擇的類別顯示對應圖片 */}
      <div className="ml-6">
        <img
          src={images[selectedCategory]}
          alt={selectedCategory}
          className="w-60 h-auto"
        />
      </div>
    </div>
  );
};

export default CategoryTabs;
