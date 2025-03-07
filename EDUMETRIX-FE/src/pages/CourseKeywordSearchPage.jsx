import React, { Component } from "react";
import Navbar from "../components/Navbar/Navbar";
import ClassCard from "../components/ClassCard.jsx";
import Footer from "../components/Footer.jsx";

function CourseKeywordSearchPage() {
  const RelatedCourses = [
    {
      image: "../photo/class1.jpg",
      title: "團購伴手禮親手做｜羅爸 13 款熱賣甜點接單到手軟",
      teacher: "羅因福師傅（羅爸）",
      rating: 4.5,
      duration: "2",
      people: "1500",
      price: "5000",
    },
    {
      image: "../photo/class2.jpg",
      title: "花藝設計入門｜跟著庭庭老師學習浪漫花藝搭配",
      teacher: "庭庭老師",
      rating: 4.7,
      duration: "3",
      people: "1200",
      price: "3500",
    },
    {
      image: "../photo/class1.jpg",
      title: "商業攝影必修｜構圖與光影的藝術",
      teacher: "王曉明",
      rating: 4.8,
      duration: "4",
      people: "1800",
      price: "4500",
    },
    {
      image: "../photo/class1.jpg",
      title: "日式家常料理輕鬆學｜小野老師的簡單美味",
      teacher: "小野老師",
      rating: 4.6,
      duration: "3",
      people: "1600",
      price: "3800",
    },
    {
      image: "../photo/class2.jpg",
      title: "健身訓練進階課程｜增肌與減脂的科學方法",
      teacher: "陳建宇",
      rating: 4.9,
      duration: "5",
      people: "2000",
      price: "6000",
    },
    {
      image: "../photo/class2.jpg",
      title: "繪畫基礎訓練｜從素描到色彩的藝術",
      teacher: "林小慧",
      rating: 4.5,
      duration: "6",
      people: "1400",
      price: "4000",
    },
    {
      image: "../photo/class1.jpg",
      title: "數位行銷入門｜打造個人品牌與社群影響力",
      teacher: "張維俊",
      rating: 4.7,
      duration: "3",
      people: "1300",
      price: "3200",
    },
    {
      image: "../photo/class2.jpg",
      title: "咖啡拉花藝術｜從基礎到創意設計",
      teacher: "李宇涵",
      rating: 4.9,
      duration: "2",
      people: "1700",
      price: "2700",
    },
    {
      image: "../photo/class1.jpg",
      title: "家庭理財與投資｜學會資金管理與風險控制",
      teacher: "楊天倫",
      rating: 4.6,
      duration: "4",
      people: "1100",
      price: "3500",
    },
    {
      image: "../photo/class2.jpg",
      title: "瑜伽與冥想｜提升身心靈的平衡與健康",
      teacher: "張欣怡",
      rating: 4.8,
      duration: "3",
      people: "1900",
      price: "3100",
    },
    {
      image: "../photo/class1.jpg",
      title: "UI/UX 設計基礎｜創建用戶友好介面的實戰技巧",
      teacher: "劉冠霖",
      rating: 4.7,
      duration: "4",
      people: "1500",
      price: "5200",
    },
    {
      image: "../photo/class2.jpg",
      title: "旅遊攝影精選課｜捕捉風景中的動人瞬間",
      teacher: "徐瑋庭",
      rating: 4.9,
      duration: "3",
      people: "1400",
      price: "4300",
    },
    {
      image: "../photo/class1.jpg",
      title: "生活花藝輕鬆學｜打造屬於你的家居美感",
      teacher: "廖詠晴",
      rating: 4.6,
      duration: "3",
      people: "1600",
      price: "3700",
    },
    {
      image: "../photo/class2.jpg",
      title: "速食文化與創新料理｜輕鬆創作健康快餐",
      teacher: "黃志豪",
      rating: 4.5,
      duration: "2",
      people: "1100",
      price: "2900",
    },
    {
      image: "../photo/class1.jpg",
      title: "商業簡報技巧｜用故事打動聽眾",
      teacher: "陳智軒",
      rating: 4.7,
      duration: "3",
      people: "1750",
      price: "4000",
    },
    {
      image: "../photo/class2.jpg",
      title: "手作皮革工藝｜從基礎到高階製作技巧",
      teacher: "張以翔",
      rating: 4.8,
      duration: "4",
      people: "1250",
      price: "5300",
    },
    {
      image: "../photo/class1.jpg",
      title: "Python 程式設計入門｜成為程式新手高手",
      teacher: "李俊毅",
      rating: 4.9,
      duration: "6",
      people: "1800",
      price: "5200",
    },
    {
      image: "../photo/class2.jpg",
      title: "電腦繪圖基礎｜從零開始的設計技巧",
      teacher: "楊宗翰",
      rating: 4.5,
      duration: "4",
      people: "1400",
      price: "3800",
    },
    {
      image: "../photo/class1.jpg",
      title: "行為心理學｜解析人類行為背後的秘密",
      teacher: "陳怡婷",
      rating: 4.8,
      duration: "5",
      people: "1300",
      price: "4500",
    },
    {
      image: "../photo/class2.jpg",
      title: "日式甜點製作課程｜從基礎到專業的甜點技巧",
      teacher: "木村浩志",
      rating: 4.7,
      duration: "3",
      people: "1250",
      price: "4100",
    },
  ];

  return (
    <>
      <Navbar />
      <div className="mx-40">
        <h2 className="text-4xl font-bold my-8 text-green-600">
          關鍵字「」的結果（　筆相關資料）
        </h2>
        <hr />
        <p className="text-2xl font-bold my-8">相關課程</p>
        {/* 相關課程 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 my-4">
          {RelatedCourses.map((course, index) => (
            <ClassCard
              key={index}
              image={course.image}
              title={course.title}
              teacher={course.teacher}
              rating={course.rating}
              duration={course.duration}
              people={course.people}
              price={course.price}
            />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default CourseKeywordSearchPage;
