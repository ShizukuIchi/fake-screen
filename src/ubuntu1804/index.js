import ubuntu1804 from "./ubuntu1804.pug";
import "./ubuntu1804.scss";

export const render = () => {
  setTimeout(start);
  return ubuntu1804;
};

function start() {
  const wrapper = document.querySelector(".ubuntu1804-wrapper");
  wrapper.addEventListener("mousemove", mousemove);
  const timeModal = wrapper.querySelector(".ubuntu1804-time-modal");

  let timeInterval = null;
  let isIdle = false;
  setTime();
  let idleTimer = setTimeout(function() {
    isIdle = true;
    openTimeModal();
  }, 3000);
  function mousemove() {
    clearTimeout(idleTimer);
    if (!document.querySelector(".ubuntu1804-wrapper")) {
      wrapper.removeEventListener("mousemove", mousemove);
      return;
    }
    idleTimer = setTimeout(function() {
      isIdle = true;
      openTimeModal();
    }, 3000);
    if (isIdle) {
      isIdle = false;
      closeTimeModal();
    }
  }
  timeInterval = setInterval(setTime, 1000);
  function openTimeModal() {
    console.log("should open modal");
  }
  function closeTimeModal() {
    console.log("should close modal");
  }
  function setTime() {
    const time = timeModal.querySelector(".time");
    const date = timeModal.querySelector(".date");
    if (time && date) {
      const now = new Date();
      time.textContent = formatDate(now);
      date.textContent = `${getDayStr(now.getDay())}, ${getMonthStr(
        now.getMonth()
      )} ${now.getDate()}`;
    } else {
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
  return "January,February,March,April,May,June,July,August,Septimber,October,November,Devember".split(
    ","
  )[m];
}

function formatDate(d) {
  let h = d.getHours();
  let m = d.getMinutes();
  h = h < 10 ? "0" : "" + h;
  m = m < 10 ? "0" : "" + m;
  return `${h}:${m}`;
}
