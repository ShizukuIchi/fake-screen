import _ubuntu from "./ubuntu1804.pug";
import "./ubuntu1804.scss";

export const render = () => {
  setTimeout(start);
  return _ubuntu;
};

function start() {
  const wrapper = document.querySelector(".ubuntu1804-wrapper");

  const password = wrapper.querySelector("#password");
  const signIn = wrapper.querySelector("#sign-in");
  const cancel = wrapper.querySelector("#cancel");
  const hint = wrapper.querySelector(".hint");
  password.addEventListener("keydown", submit);
  signIn.addEventListener("click", submit);
  cancel.addEventListener("click", clear);
  function submit({ key }) {
    if (key && key !== "Enter") return;
    hint.style.animation = "";
    // a magic for replaying animation
    void hint.offsetWidth;
    hint.textContent = password.value.length
      ? "Wrong password."
      : "You must enter a password!";
    hint.style.animation = "timeout 1.6s";
  }
  function clear() {
    password.value = "";
  }
  password.addEventListener("mousemove", setIdleTimer);
  document.addEventListener("keydown", setIdleTimer);
  const timeModal = wrapper.querySelector(".ubuntu1804-time-modal");

  let idleTimer = null;
  setIdleTimer();
  function setIdleTimer() {
    clearTimeout(idleTimer);
    idleTimer = setTimeout(function() {
      try {
        timeModal.addEventListener("mousedown", onActive);
        document.addEventListener("keydown", onActive);
        openTimeModal();
      } catch (e) {
        console.log(e);
        wrapper.removeEventListener("mousemove", setIdleTimer);
        document.removeEventListener("keydown", setIdleTimer);
      }
    }, 6000);
  }
  function onActive({ key }) {
    if (key && !["Enter", " "].includes(key)) return;
    setIdleTimer();
    closeTimeModal();
    timeModal.removeEventListener("mousedown", onActive);
    document.removeEventListener("keydown", onActive);
  }

  let timeInterval = null;
  setTime();
  timeInterval = setInterval(setTime, 1000);
  function openTimeModal() {
    timeModal.style.transform = "translateY(0%)";
  }
  function closeTimeModal() {
    timeModal.style.transform = "translateY(-100%)";
  }
  function setTime() {
    try {
      const time = timeModal.querySelector(".time");
      const date = timeModal.querySelector(".date");
      const now = new Date();
      time.textContent = formatDate(now);
      date.textContent = `${getDayStr(now.getDay())}, ${getMonthStr(
        now.getMonth()
      )} ${now.getDate()}`;
    } catch (e) {
      console.log(e);
      clearInterval(timeInterval);
    }
  }
}

function getDayStr(d) {
  return "Sunday,Monday,Tuesday,Wednesday,Thursday,Friday,Saturday".split(",")[
    d
  ];
}

function getMonthStr(m) {
  return "January,February,March,April,May,June,July,August,September,October,November,December".split(
    ","
  )[m];
}

function formatDate(d) {
  let h = d.getHours();
  let m = d.getMinutes();
  h = (h < 10 ? "0" : "") + h;
  m = (m < 10 ? "0" : "") + m;
  return `${h}:${m}`;
}
