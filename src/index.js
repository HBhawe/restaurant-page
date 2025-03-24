import { heading, text } from "./pageLoad";

const body = document.querySelector("body");
const content = document.querySelector("#content");
console.log(content);

const pageLoad = function () {
  content.insertAdjacentHTML("beforeend", heading);
  content.insertAdjacentHTML("beforeend", text);
};

body.addEventListener("DOMContentLoaded", pageLoad);
