import { toggleBgColor } from "./backgroundToggler.js";
// import classNames from "./main.css";

// console.log(classNames.main);

const toggler = document.querySelector("#toggler");
toggler.addEventListener("click", () => {
  toggleBgColor();
});
