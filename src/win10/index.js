import update from './update.pug';
import './update.scss';
import './blue.scss';

export const render = () => {
  startProgress();
  return update;
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
async function startProgress() {
  setCrash(Math.floor(Math.random() * 40) + 61);
  setNext(1000);
  const progress = await getProgress();
  let progressValue = 1;
  while (progressValue <= crash) {
    await sleep(Math.random() * 1000 + next);
    progress.innerText = progressValue++;
  }
  const blue = await import('./blue.pug');
  document.querySelector('.app-wrapper').innerHTML = blue;
}

function sleep(ms) {
  return new Promise(res => setTimeout(res, ms));
}

async function getProgress() {
  let progress = null;
  while (!progress) {
    progress = await findProgress();
  }
  return progress;
}
function findProgress() {
  return new Promise(res => {
    setTimeout(() => {
      let progress = document.querySelector('#progress');
      res(progress);
    });
  });
}
