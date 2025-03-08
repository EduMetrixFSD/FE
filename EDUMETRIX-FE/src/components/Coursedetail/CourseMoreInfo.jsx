import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css"; // 自定義CSS可覆蓋這部分
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";

function CourseMoreInfo() {
  return (
    <div className="mx-40 my-12">
      {/* Tabs 切換區 */}
      <Tabs>
        <TabList className="flex justify-around sticky top-0 bg-white">
          <Tab
            className="px-4 py-2 cursor-pointer"
            selectedClassName=" border-b-2 border-blue-500"
            style={{ outline: "none" }}
          >
            介紹
          </Tab>
          <Tab
            className="px-4 py-2 cursor-pointer"
            selectedClassName="border-b-2 border-blue-500"
            style={{ outline: "none" }}
          >
            章節
          </Tab>
          <Tab
            className="px-4 py-2 cursor-pointer"
            selectedClassName="border-b-2 border-blue-500"
            style={{ outline: "none" }}
          >
            購課問答
          </Tab>
          <Tab
            className="px-4 py-2 cursor-pointer"
            selectedClassName="border-b-2 border-blue-500"
            style={{ outline: "none" }}
          >
            公告
          </Tab>
          <Tab
            className="px-4 py-2 cursor-pointer"
            selectedClassName="border-b-2 border-blue-500"
            style={{ outline: "none" }}
          >
            評價
          </Tab>
        </TabList>
        <hr />

        {/* 介紹 */}
        <TabPanel className="mt-5">
          <div className="p-5 px-40">
            <h3 className="text-2xl font-bold mb-4">
              對於插畫可能性，你瞭解了多少
            </h3>
            <p className="mb-4">
              插畫一直以來在台灣較多都是關於手繪技法能力的培養與教育，然而在靈感發想、尋找適合自己創作的風格、養成有系統插畫創作習慣的方面...
            </p>
            <img
              src="./photo/5d9d5d36421a860021dc4534.avif"
              alt="課程介紹"
              className="w-full rounded-lg shadow-md"
            />
          </div>
        </TabPanel>

        {/* 章節 */}
        <TabPanel>
          <div className="p-5 px-40">
            <Accordion allowZeroExpanded>
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>第一章</AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <button className="block w-full text-left p-2 ">1-1</button>
                  <button className="block w-full text-left p-2 ">1-2</button>
                </AccordionItemPanel>
              </AccordionItem>
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>第二章</AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <button className="block w-full text-left p-2 border-b">
                    2-1
                  </button>
                  <button className="block w-full text-left p-2 border-b">
                    2-2
                  </button>
                </AccordionItemPanel>
              </AccordionItem>
            </Accordion>
          </div>
        </TabPanel>

        {/* 問答 */}
        <TabPanel>
          <div className="p-5 px-40">
            <h4 className="text-xl font-bold mb-4">
              購課前，提出關於課程內容的疑問吧！
            </h4>
            <p className="mb-4">
              這裡是購課前的問答區，對於課程有任何疑問請隨時提問，讓你的疑問獲得解答！
            </p>
            <input
              className="w-full p-2 border rounded-md"
              type="text"
              value="請先登入以使用此功能"
              readOnly
            />
            <div className="mt-4">
              <div className="border p-4 rounded-md shadow-md">
                <img
                  src="./photo/圖片一.png"
                  className="rounded-full w-14 h-14 mr-4 float-left"
                  alt="提問者頭像"
                />
                <div className="overflow-hidden">
                  <span className="font-bold">布丁狗</span>
                  <span className="text-gray-500 ml-2">2024-11-23</span>
                  <p className="mt-2">
                    希望知道如何尋找插畫創作的靈感，這部分老師可以多講一些~謝謝
                  </p>
                  <div className="bg-gray-100 p-4 mt-2 rounded-lg">
                    <strong className="block mb-1">Yu-Ming Huang</strong>
                    <span className="text-gray-500">2024-12-29</span>
                    <p className="mt-2">第二章的單元會有介紹唷！</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </TabPanel>

        {/* 公告 */}
        <TabPanel>
          <div className="p-5 px-40">
            <h4 className="text-xl font-bold mb-4">來關注最新的課程資訊吧！</h4>
            <p className="mb-4">
              這裡是專屬課程的公告區，老師將在此發佈與課程相關的重要資訊。
            </p>
            <div className="border rounded-lg p-4 shadow-md">
              <h4 className="font-bold">2024/10/24 【課程內容全部完成上架】</h4>
              <p className="mt-2">
                各位學員大家好：再次感謝大家參與這堂課程，所有內容在今天上架完成囉！
              </p>
            </div>
          </div>
        </TabPanel>

        {/* 評價 */}
        <TabPanel>
          <div className="p-5 px-40">
            <h4 className="text-xl font-bold mb-4">評價</h4>
            <p>這裡是評價區域，使用者可在此留下對課程的評價。</p>
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
}

export default CourseMoreInfo;
