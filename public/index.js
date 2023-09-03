const burger = document.querySelector("#burger");
const menu = document.querySelector("#menu");

burger.addEventListener("click", () => {
  console.log(menu.classList);
  // console.log(burger.classList);
  if (menu.classList.contains("hidden")) {
    menu.classList.remove("hidden");
  } else {
    menu.classList.add("hidden");
  }
});

// when click the button,the border of 3 divs will change in turn,by changing the 'hidden' class
// use 'count' variable to record the number of clicks ,and use 'count%3' to decide which div to show
// Path: public/index.js
const btn = document.querySelector(".test-btn");
const div1 = document.querySelector("#div1");
const div2 = document.querySelector("#div2");
const div3 = document.querySelector("#div3");
let count = 0;

btn.addEventListener("click", () => {
  console.log(count);
  if (count % 3 == 0) {
    div1.classList.remove("border-hidden");
    div2.classList.add("border-hidden");
    div3.classList.add("border-hidden");
  } else if (count % 3 == 1) {
    div1.classList.add("border-hidden");
    div2.classList.remove("border-hidden");
    div3.classList.add("border-hidden");
  } else {
    div1.classList.add("border-hidden");
    div2.classList.add("border-hidden");
    div3.classList.remove("border-hidden");
  }
  count++;
});
