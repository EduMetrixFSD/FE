document.querySelectorAll('.profile-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        btn.classList.toggle('active');
    });
});

document.querySelector('.back-to-top').addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
// 登入註冊開啟視窗
function openModal() {
    document.getElementById("loginModal").style.display = "flex";
}
function closeModal() {
    document.getElementById("loginModal").style.display = "none";
}
function loginWithGoogle() {
    alert("使用 Google 登入");
}
function loginWithFacebook() {
    alert("使用 Facebook 登入");
}
function loginWithApple() {
    alert("使用 Apple 登入");
}
// 登入註冊轉換
function showLogin() {
    document.getElementById("loginForm").classList.add("active");
    document.getElementById("registerForm").classList.remove("active");
}
function showRegister() {
    document.getElementById("registerForm").classList.add("active");
    document.getElementById("loginForm").classList.remove("active");
}

// 會員中心
function toggleProfileMenu() {
    const menu = document.getElementById("profileMenu");
    menu.classList.toggle("active");
}

// 輪播圖
document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll('.carousel-img');
    const dots = document.querySelectorAll('.dot');
    let index = 0;
    let interval;

    function startCarousel() {
        interval = setInterval(nextSlide, 3000); // 每 3 秒自動切換
    }

    function showSlide(i) {
        // 移除所有圖片與點的 active 樣式
        images.forEach(img => img.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));

        // 顯示當前索引的圖片與點
        images[i].classList.add('active');
        dots[i].classList.add('active');
    }

    function nextSlide() {
        index = (index + 1) % images.length;
        showSlide(index);
    }

    function prevSlide() {
        index = (index - 1 + images.length) % images.length;
        showSlide(index);
    }

    function setSlide(i) {
        index = i;
        showSlide(index);
        resetInterval(); // 重新啟動計時器
    }

    function resetInterval() {
        clearInterval(interval);
        startCarousel();
    }

    // 綁定按鈕事件
    document.querySelector(".prev").addEventListener("click", () => {
        prevSlide();
        resetInterval();
    });

    document.querySelector(".next").addEventListener("click", () => {
        nextSlide();
        resetInterval();
    });

    // 點擊圓點切換
    dots.forEach((dot, i) => {
        dot.addEventListener("click", () => {
            setSlide(i);
        });
    });

    // 初始化
    showSlide(index);
    startCarousel();
});


// 購物車
function toggleModal(id) {
    var modal = document.getElementById(id);
    modal.style.display = modal.style.display === 'block' ? 'none' : 'block';
}