import ubuntu1804 from "./ubuntu1804.pug";
import "./ubuntu1804.scss";

export const render = () => {
  setTimeout(start);
  return ubuntu1804;
};

function start() {
  const wrapper = document.querySelector(".ubuntu1804-wrapper");
  wrapper.addEventListener("mousemove", setIdleTimer);
  const timeModal = wrapper.querySelector(".ubuntu1804-time-modal");

  let idleTimer = null;
  setIdleTimer();
  function setIdleTimer() {
    clearTimeout(idleTimer);
    idleTimer = setTimeout(function() {
      try {
        timeModal.addEventListener("click", onclick);
        openTimeModal();
      } catch (e) {
        console.log(e);
        wrapper.removeEventListener("mousemove", setIdleTimer);
      }
    }, 6000);
  }
  function onclick() {
    setIdleTimer();
    closeTimeModal();
    timeModal.removeEventListener("click", onclick);
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
