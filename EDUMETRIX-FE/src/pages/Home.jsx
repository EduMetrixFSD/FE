import React from "react";
import Navbar from "../components/Navbar/Navbar.jsx";
import Carousel from "../components/Carousel";
import ClassCard from "../components/ClassCard.jsx";
import Footer from "../components/Footer.jsx";

function Home() {
  const bestSellingCourses = [
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

  const recommendedCourses = [
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
      image: "../photo/class1.jpg",
      title: "團購伴手禮親手做｜羅爸 13 款熱賣甜點接單到手軟",
      teacher: "羅因福師傅（羅爸）",
      rating: 4.5,
      duration: "2",
      people: "1500",
      price: "5000",
    },
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
      image: "../photo/class1.jpg",
      title: "團購伴手禮親手做｜羅爸 13 款熱賣甜點接單到手軟",
      teacher: "羅因福師傅（羅爸）",
      rating: 4.5,
      duration: "2",
      people: "1500",
      price: "5000",
    },
  ];
  return (
    <>
      <Navbar />
      <Carousel />
      {/* 暢銷課程*/}
      <div className="px-12 my-12 mx-40">
        <h1 className="text-3xl font-bold my-4">暢銷課程</h1>
        <a href="#" className="flex justify-end">
          see more...
        </a>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 my-4">
          {bestSellingCourses.map((course, index) => (
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
      {/* 推薦課程*/}
      <div className="px-12 my-12 mx-40">
        <h1 className="text-3xl font-bold my-4">推薦課程</h1>
        <a href="#" className="flex justify-end">
          see more...
        </a>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 my-4">
          {recommendedCourses.map((course, index) => (
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

export default Home;
