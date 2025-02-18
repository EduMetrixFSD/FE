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

// 連結登入api，成功跳轉頁面
document
  .getElementById("loginButton")
  .addEventListener("click", async (event) => {
    event.preventDefault(); // 防止表單默認提交行為
    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;

    try {
      console.log("發送請求中...");
      const response = await fetch("http://127.0.0.1:8000/api/auth/login", {
        /* ... */
      });
      console.log("API 回應：", response);
    } catch (error) {
      console.error("發生錯誤:", error);
    }

    try {
      const response = await fetch("http://127.0.0.1:8000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });
      console.log(response);
      const data = await response.json();
      if (response.ok) {
        alert("登入成功！");
        console.log("登入成功");
        // window.location.href = "../plug/navbarMember.html"; // 替換成你的目標頁面
        // 登入成功後的操作，例如跳轉到首頁
      } else {
        alert(`登入失敗：${data.message}`);
        console.log("失敗");
      }
    } catch (error) {
      console.error("發生錯誤a:", error);
      alert("無法完成登入，請稍後再試。");
    }
  });

// 註冊
document
  .getElementById("registerButton")
  .addEventListener("click", async () => {
    const email = document.getElementById("registerEmail").value;
    const password = document.getElementById("registerPassword").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    if (password !== confirmPassword) {
      alert("密碼不匹配！");
      return;
    }

    try {
      const response = await fetch("http://127.0.0.1:8000/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });

      const data = await response.json();
      if (response.ok) {
        alert("註冊成功！");
        // 註冊成功後的操作，例如自動登入
      } else {
        alert(`註冊失敗：${data.message}`);
      }
    } catch (error) {
      console.error("發生錯誤:", error);
      alert("無法完成註冊，請稍後再試。");
    }
  });
