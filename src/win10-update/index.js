import update from './update-only.pug';
import '../win10/update.scss';

export const render = () => {
  startProgress();
  return update;
};
async function startProgress() {
  const progress = await getProgress();
  let progressValue = 1;
  while (progressValue <= 100) {
    await sleep(Math.random() * 5000 + 5000);
    progress.innerText = progressValue++;
  }
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
