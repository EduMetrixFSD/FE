import React, { useEffect, useState } from "react";
import axios from "axios";
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

function CourseMoreInfo({ courseId }) {
  const [course, setCourse] = useState(null); // 預設為 null，避免 undefined 錯誤
  const [error, setError] = useState(null); // 用來儲存錯誤信息

  useEffect(() => {
    if (courseId) {
      axios
        .get(`http://127.0.0.1:8000/api/courses/${courseId}`)
        .then((response) => {
          console.log(response.data); // 檢查回應結構
          setCourse(response.data); // 設置為物件
        })
        .catch((error) => {
          console.error("搜尋錯誤:", error);
          setError("無法取得搜尋結果，請稍後再試。");
        });
    }
  }, [courseId]);

  // 如果資料尚未加載，顯示 loading
  if (!course) {
    return <div className="flex justify-center text-5xl h-dvh">載入中...</div>;
  }

  return (
    <div className="mx-40 my-12">
      {/* Tabs 切換區 */}
      <Tabs>
        <TabList className="flex justify-around sticky top-0 bg-white">
          <Tab
            className="px-4 py-2 cursor-pointer"
            selectedClassName=" border-b-2 border-blue-500 font-bold"
            style={{ outline: "none" }}
          >
            介紹
          </Tab>
          <Tab
            className="px-4 py-2 cursor-pointer"
            selectedClassName="border-b-2 border-blue-500 font-bold"
            style={{ outline: "none" }}
          >
            章節
          </Tab>
          <Tab
            className="px-4 py-2 cursor-pointer"
            selectedClassName="border-b-2 border-blue-500 font-bold"
            style={{ outline: "none" }}
          >
            購課問答
          </Tab>
          <Tab
            className="px-4 py-2 cursor-pointer"
            selectedClassName="border-b-2 border-blue-500 font-bold"
            style={{ outline: "none" }}
          >
            公告
          </Tab>
          <Tab
            className="px-4 py-2 cursor-pointer"
            selectedClassName="border-b-2 border-blue-500 font-bold"
            style={{ outline: "none" }}
          >
            課程評價
          </Tab>
        </TabList>
        <hr />

        {/* 介紹，使用圖片 */}
        <TabPanel className="mt-5">
          <div className="p-5 px-40">
            <h3 className="text-2xl font-bold mb-4">{course.description}</h3>
          </div>
        </TabPanel>

        {/* 章節 */}
        <TabPanel>
          <div className="p-5 px-40">
            {/* 簡易詳細資訊 */}
            <div className="flex justify-center m-5">
              <div className="grid grid-cols-2 gap-4">
                {/* 學員人數 */}
                <div className="border w-28 h-28 rounded-lg flex flex-col items-center inline-block p-3 shadow">
                  <span className="bi bi-person text-2xl"></span>
                  <span>{course.enrollments_count}</span>
                  <span>學員</span>
                </div>
                {/* 觀看期限 */}
                <div className="border w-28 h-28 rounded-lg flex flex-col items-center inline-block p-3 shadow">
                  <span className="bi bi-hourglass-split text-2xl"></span>
                  <span>永久</span>
                  <span>觀看</span>
                </div>
                {/* 課程時長 */}
                <div className="border w-28 h-28 rounded-lg flex flex-col items-center inline-block p-3 shadow">
                  <span className="bi bi-clock text-2xl"></span>
                  <span>?小時</span>
                  <span>?分鐘</span>
                </div>
                {/* 章節單元 */}
                <div className="border w-28 h-28 rounded-lg flex flex-col items-center inline-block p-3 shadow">
                  <span className="bi bi-journal text-2xl"></span>
                  <span>?章</span>
                  <span>?節</span>
                </div>
              </div>
            </div>

            {/* 手風琴 */}
            <Accordion allowZeroExpanded>
              {course.chapters.map((chapter, chapterIndex) => (
                <AccordionItem key={chapter.id}>
                  <AccordionItemHeading>
                    <AccordionItemButton>{chapter.title}</AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    {chapter.lessons.map((lesson, lessonIndex) => (
                      <button
                        key={lesson.id}
                        className="block w-full text-left p-2 flex justify-between"
                      >
                        <span>
                          {chapterIndex + 1}-{lessonIndex + 1} {lesson.title}
                        </span>
                        <span>單元時長</span>
                      </button>
                    ))}
                  </AccordionItemPanel>
                </AccordionItem>
              ))}
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
            {course.questions && course.questions.length > 0 ? (
              course.questions.map((question, index) => {
                // 將 question.created_at 轉換為日期格式
                const createdDate = new Date(question.created_at)
                  .toLocaleDateString("zh-TW", {
                    year: "numeric",
                    month: "2-digit",
                    day: "2-digit",
                  })
                  .replace(/\//g, "-"); // 將 / 替換為 -;

                return (
                  <div
                    key={index}
                    className="border p-4 rounded-md shadow-md my-4 "
                  >
                    <img
                      src={question.user.avater || "/photo/person.png"}
                      className="rounded-full w-14 h-14 mr-4 float-left"
                      alt="提問者頭像"
                    />
                    <div className="overflow-hidden">
                      <span className="font-bold">{question.user.name}</span>
                      <span className="text-gray-500 ml-2">
                        {createdDate}
                      </span>{" "}
                      {/* 這裡顯示年月日 */}
                      <h3 className="font-bold text-lg mt-2">
                        {question.title}
                      </h3>
                      <p className="mt-2">{question.content}</p>
                    </div>
                  </div>
                );
              })
            ) : (
              <p>尚無問題。</p>
            )}
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
              {course.announcements && course.announcements.length > 0 ? (
                course.announcements.map((announcements, index) => {
                  // 將 announcements.created_at 轉換為日期格式
                  const createdDate = new Date(announcements.updated_at)
                    .toLocaleDateString("zh-TW", {
                      year: "numeric",
                      month: "2-digit",
                      day: "2-digit",
                    })
                    .replace(/\//g, "-"); // 將 / 替換為 -;

                  return (
                    <div key={index}>
                      <h4 className="font-bold">
                        {createdDate} 【{announcements.title}】
                      </h4>
                      <p className="mt-2">{announcements.content}</p>
                    </div>
                  );
                })
              ) : (
                <p>尚無公告。</p>
              )}
            </div>
          </div>
        </TabPanel>

        {/* 評價 */}
        <TabPanel>
          <div className="p-5 px-40">
            {/* 檢查是否有有效的評價資料 */}
            {course.reviews && course.reviews.length > 0 ? (
              <>
                {/* 計算平均分數 */}
                <h4 className="text-xl font-bold mb-4">
                  {`${(
                    course.reviews
                      .map((review) => Number(review.rating)) // 將所有的 rating 轉為數字
                      .filter((rating) => !isNaN(rating)) // 過濾掉無效的數字
                      .reduce((sum, rating) => sum + rating, 0) /
                    course.reviews.filter(
                      (review) => !isNaN(Number(review.rating))
                    ).length
                  ).toFixed(1)} / 5.0 星星 (${course.reviews.length} 則評價)`}
                </h4>

                {/* 評價卡片 */}
                {course.reviews.map((review, index) => {
                  // 將 review.created_at 轉換為日期格式，並將 / 替換為 -
                  const createdDate = new Date(review.created_at)
                    .toLocaleDateString("zh-TW", {
                      year: "numeric",
                      month: "2-digit",
                      day: "2-digit",
                    })
                    .replace(/\//g, "-"); // 將 / 替換為 -

                  return (
                    <div
                      key={index}
                      className="border p-4 rounded-md shadow-md my-4"
                    >
                      <img
                        src="/photo/person.png" // 如果有頭像資料，這裡可以動態替換為 `review.user.avatar`
                        className="rounded-full w-14 h-14 mr-4 float-left"
                        alt="評價者頭像"
                      />
                      <div className="overflow-hidden">
                        <div className="flex justify-between">
                          <span className="font-bold">{review.user.name}</span>
                          <span className="text-gray-500 ml-2">
                            {createdDate}
                          </span>
                        </div>
                        <p className="font-bold">{`${Number(
                          review.rating
                        )} 星星`}</p>
                        <h3 className="font-bold text-lg mt-2">評價標題</h3>
                        <p className="mt-2">{review.comment || "無評論內容"}</p>
                      </div>
                    </div>
                  );
                })}
              </>
            ) : (
              <p>尚無評價。</p>
            )}
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
}

export default CourseMoreInfo;
