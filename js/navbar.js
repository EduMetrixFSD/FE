// 取得課程總覽與類別選單元素
const selectC = document.getElementById("selectC");
const selectCL = document.getElementById("selectCL");
let timer; // 用於延遲隱藏，避免快速移動造成閃爍

// 當滑鼠移入「課程總覽」時，顯示類別選單
selectC.addEventListener("mouseenter", function () {
  clearTimeout(timer);
  selectCL.style.display = "block";
});

// 當滑鼠離開「課程總覽」時，延遲檢查是否也離開類別選單，若是則隱藏
selectC.addEventListener("mouseleave", function () {
  timer = setTimeout(function () {
    if (!selectCL.matches(":hover")) {
      selectCL.style.display = "none";
    }
  }, 200);
});

// 當滑鼠移入類別選單時，清除隱藏計時器
selectCL.addEventListener("mouseenter", function () {
  clearTimeout(timer);
});

// 當滑鼠離開類別選單時，延遲檢查是否也離開「課程總覽」，若是則隱藏
selectCL.addEventListener("mouseleave", function () {
  timer = setTimeout(function () {
    if (!selectC.matches(":hover")) {
      selectCL.style.display = "none";
    }
  }, 200);
});
