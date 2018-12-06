import win10 from './win10.pug';
import './update.scss';
import './blue.scss';

export const render = () => {
  setTimeout(start)
  return win10;
};
let crash;
let next;

function setCrash(v) {
  crash = v;
  console.log(`Blue screen when progress reach ${v}%`);
}
function setNext(second) {
  next = second;
  console.log(`Add progress every ${next} milliseconds`);
}
async function start() {
  let originHTML = document.querySelector('.win10-wrapper').innerHTML
  setCrash(Math.floor(Math.random() * 40) + 61);
  setNext(1000);
  const progress = document.querySelector('#progress');
  let progressValue = 1;
  while (progressValue <= crash) {
    await sleep(Math.random() * 1000 + next);
    progress.innerText = progressValue++;
  }
  let wrapper = document.querySelector('.win10-wrapper')
  if (wrapper) {
    const blue = await import('./blue.pug');
    wrapper.innerHTML = blue;
    await sleep(10000)  
    wrapper.innerHTML = originHTML
    start()
  }
}

function sleep(ms) {
  return new Promise(res => setTimeout(res, ms));
}
