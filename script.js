// انیمیشن ظاهر شدن محصولات در اسکرول
const products = document.querySelectorAll(".product");

const showOnScroll = () => {
  const triggerBottom = window.innerHeight * 0.85;

  products.forEach(product => {
    const boxTop = product.getBoundingClientRect().top;
    if (boxTop < triggerBottom) {
      product.classList.add("visible");
    } else {
      product.classList.remove("visible");
    }
  });
};

window.addEventListener("scroll", showOnScroll);
showOnScroll();

// فرم تماس (ارسال جعلی برای تست)
const form = document.getElementById("contactForm");
if (form) {
  form.addEventListener("submit", function(e) {
    e.preventDefault();
    alert("✅ پیام شما با موفقیت ارسال شد! به زودی با شما تماس می‌گیریم.");
    form.reset();
  });
}

// منوی موبایل
const nav = document.querySelector("header nav ul");
const toggleBtn = document.createElement("button");
toggleBtn.innerText = "☰";
toggleBtn.classList.add("menu-toggle");

document.querySelector("header").insertBefore(toggleBtn, nav);

toggleBtn.addEventListener("click", () => {
  nav.classList.toggle("active");
});
