"use strict";

const colors = [
  "#FFFFFF",
  "#2196F3",
  "#4CAF50",
  "#FF9800",
  "#009688",
  "#795548",
];

const timeInterval = 1000;

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

class ButtonSet {
  constructor(datasetFieldName) {
    for (const button of document.querySelectorAll("button")) {
      const buttonName = button.dataset[datasetFieldName];
      this[buttonName] = button;
    }
  }
}

const body = document.querySelector("body");
const { start: btnStart, stop: btnStop } = new ButtonSet("action");

let timerID = 0;
btnStop.disabled = true;

btnStart.addEventListener("click", () => {
  timerID = setInterval(() => {
    body.style.backgroundColor =
      colors[randomIntegerFromInterval(0, colors.length - 1)];
  }, timeInterval);
  btnStart.disabled = true;
  btnStop.disabled = false;
});

btnStop.addEventListener("click", () => {
  if (!timerID) return;
  clearInterval(timerID);
  timerID = 0;
  btnStart.disabled = false;
  btnStop.disabled = true;
});
