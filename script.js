window.onload = () => {
  setTimeout(() => {
    document.querySelector("body").classList.add("display");
  }, 4000);
};

/* 🍀c43 메뉴버튼 누르면 메뉴가 밖에서 안으로 transform-transition함
 1. transform 으로 효과 넣음
 2. .change.container의 child인 .sidebar에 효과 넣음
*/
document.querySelector(".hamburger-menu").addEventListener("click", () => {
  document.querySelector(".container").classList.toggle("change");
});

document.querySelector(".scroll-btn").addEventListener("click", () => {
  document.querySelector("html").style.scrollBehavior = "smooth";
  setTimeout(() => {
    document.querySelector("html").style.scrollBehavior = "unset";
  }, 1000);
});
