"use strict";

import "./styles.css";
import { heading, text } from "./pageLoad";

const content = document.querySelector("#content");

const pageLoad = function () {
  content.insertAdjacentHTML("beforeend", heading);
  content.insertAdjacentHTML("beforeend", text);
};

const menuLoad = function () {
  const markup = `<h2>Menu</h2>
      <div class="drinks">
        <h3>Beverages</h3>
        <ul>
          <li>Coffee : ₹50</li>
          <li>Tea : ₹50</li>
          <li>Fresh Lime Soda : ₹40</li>
        </ul>
      </div>
      <div class="food">
        <h3>Food</h3>
        <ul>
          <li>Poha : ₹120</li>
          <li>Upma : ₹110</li>
          <li>Misal pav : ₹135</li>
        </ul>
      </div>`;
  content.insertAdjacentHTML("beforeend", markup);
};

const aboutLoad = function () {
  const markup = `<div class="about">
        <h3>Made by Harshal</h3>
        <p>A software developer in eHealth</p>
      </div>`;
  content.insertAdjacentHTML("beforeend", markup);
};

window.addEventListener("load", pageLoad);

const buttons = document.querySelectorAll("button");

const changeTab = function (event) {
  const id = event.target.id;
  content.innerHTML = "";
  if (id === "home-button") {
    pageLoad();
  } else if (id === "menu-button") {
    menuLoad();
  } else if (id === "about-button") {
    aboutLoad();
  }
};

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    changeTab(e);
  });
});
