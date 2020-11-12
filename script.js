import { toggleBgColor } from "./backgroundToggler.js";

const toggler = document.querySelector("#toggler");
toggler.addEventListener("click", () => {
  toggleBgColor();
});
