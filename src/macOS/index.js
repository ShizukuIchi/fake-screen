import 'babel-polyfill'

import macOS from './macOS.pug'
import './macOS.scss'

export const render = () => {
  setTimeout(start);
  return macOS;
};

const sleep = ms => new Promise(res => setTimeout(res, ms))

async function start() {
  let progressBar = document.querySelector('.macos-wrapper .progress-bar')
  let text = document.querySelector('.macos-wrapper .hint')
  let value = 0;
  while(value < 101) {
    await sleep(Math.random()*4000+400)
    value += 0.4
    progressBar.style.width = `${value}%`;
    text.textContent = showText(value)
  }
  await sleep(10000)
  if (document.querySelector('.macos-wrapper')) {
    start()
  }
}

function showText(value) {
  switch(true) {
    case value < 3:
      return 'About an hour remaining';
    case value <= 5.2:
      return 'Installation is in progress. Calculating time remaining...'
    case value <= 6:
      return 'About an hour remaining';
    default:
      let remianMin = Math.ceil((((100 - value)*2.5)*2.4)/60)
      return `About ${remianMin} minutes remaining`
  }
}
