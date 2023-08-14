"use strict";

let buubleString = "";

const makeBubble = function () {
  for (let i = 0; i < 160; i++) {
    const rn = Math.floor(Math.random() * 9 + 1);
    buubleString += `<span class="bubble">${rn}</span>`;
  }
};

makeBubble();
document.querySelector(".bubbles").innerHTML = buubleString;
