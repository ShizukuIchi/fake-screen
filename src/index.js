import 'babel-polyfill';

import './assets/clear.css';
import './assets/font.css';
import './style.scss';

const themes = {
  win10: import('./win10'),
  'win10-update': import('./win10-update'),
  'win10-blue': import('./win10-blue'),
};
const app = document.querySelector('#app');
const options = document.querySelector('.options');

app.querySelector('.close').onclick = onAppClose;
options.onclick = e => {
  if (e.target !== options) render(e.target.closest('.option').id);
};

function render(name) {
  renderTheme(name)
    .then(content => {
      const container = app.querySelector('.content');
      container.innerHTML = content;
      onAppOpen();
    })
    .catch(e => {
      onAppClose();
      console.log(e);
    });
}

async function renderTheme(name) {
  const theme = await themes[name];
  return theme.render();
}

function onAppClose() {
  app.style.visibility = 'hidden';
}
function onAppOpen() {
  app.style.visibility = 'visible';
}
