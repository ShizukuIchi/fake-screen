import google from "./google.pug";
import "./google.scss";

export const render = container => {
  container.innerHTML = google;
  start();
};

function start() {
  console.log("hi");
}
