import mcdonalds from './mcdonalds.pug';
import './mcdonalds.scss';
import clock from './clock.svg';
import clockB from './clock-b.svg';
import CountDowner from '../assets/CountDowner.js';

export const render = () => {
  setTimeout(start);
  return mcdonalds;
};

function start() {
  const wrapper = document.querySelector('.mcdonalds-wrapper');
  const couponPage = wrapper.querySelector('.coupon-page');
  const coupons = wrapper.querySelector('.coupons');
  const header = wrapper.querySelector('header');
  const hamburgerIcon = header.querySelector('.hamburger img');
  const nextHamburgerIcon = header.querySelector('.next-hamburger');
  const title = header.querySelector('.title-text');
  const nextTitle = header.querySelector('.next-title-text');
  const how = header.querySelector('.how-text');
  const nextHow = header.querySelector('.next-how-text');
  const hamburger = header.querySelector('.hamburger');
  const status = coupons.querySelector('.status');
  const exp = coupons.querySelector('.exp');
  const couponFooter = couponPage.querySelector('footer');
  const couponFooterText = couponFooter.querySelector('.exchange');

  status.onclick = handleExchange;
  function handleExchange(e) {
    e.preventDefault();
    openCouponPage();
  }
  exp.textContent = setExp();
  couponFooter.onclick = () => {
    couponFooter.onclick = () => {};
    onExchange();
  };
  function setExp() {
    const date = new Date();
    return `期限：${date.getFullYear()} 年 ${date.getMonth() +
      1} 月 ${date.getDate() + 3} 日`;
  }
  function onExchange() {
    couponFooter.style.height = '13.5%';
    couponFooterText.innerHTML = `<img class="clock" src=${clock} alt="clock"/>優惠倒數<span class="exchanged-exp">2:00</span>`;
    status.className = 'status exchange no-letter-spacing';
    status.innerHTML = `<img class="clock" src=${clockB} alt="clock"/>優惠倒數<span class="exchanged-exp">2:00</span>`;
    const expTime = new Date();
    expTime.setMinutes(expTime.getMinutes() + 2);
    const countDowner = new CountDowner(expTime);
    const getLast = countDowner.formatFromCB(
      timeArray => `${timeArray[2]}:${countDowner.toFixStr(timeArray[3])}`,
    );
    countDowner.on('second', function onSecond() {
      try {
        const exchangedExps = wrapper.querySelectorAll('.exchanged-exp');
        Array.from(exchangedExps).forEach(
          exchangeExp => (exchangeExp.textContent = getLast()),
        );
      } catch (e) {
        countDowner.stop();
      }
    });
    countDowner.on('stop', function onStop() {
      closeCouponPage();
      status.onclick = () => {};
      status.className = 'status';
      status.textContent = '已兌換';
    });
  }
  function openCouponPage() {
    hamburgerIcon.style.opacity = '0';
    nextHamburgerIcon.style.opacity = '100';
    title.style.transform = `translateX(-200%)`;
    title.style.opacity = '0';
    nextTitle.style.transform = `translateX(0%)`;
    nextTitle.style.opacity = '100';
    how.style.opacity = '0';
    nextHow.style.opacity = '100';
    couponPage.style.transform = 'translateX(0%)';
    hamburger.onclick = closeCouponPage;
  }
  function closeCouponPage() {
    couponPage.style.transform = 'translateX(100%)';
    hamburgerIcon.style.opacity = '100';
    nextHamburgerIcon.style.opacity = '0';
    title.style.transform = `translateX(0%)`;
    title.style.opacity = '100';
    nextTitle.style.transform = `translateX(200%)`;
    nextTitle.style.opacity = '0';
    how.style.opacity = '100';
    nextHow.style.opacity = '0';
    hamburger.onclick = () => {};
  }
}
