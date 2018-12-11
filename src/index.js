import 'babel-polyfill';
import screenfull from 'screenfull';
import './assets/clear.css';
import './assets/font.css';
import './style.scss';

const themes = {
  win10: () => import('./win10/index.js'),
  'win10-update': () => import('./win10-update/index.js'),
  'win10-blue': () => import('./win10-blue/index.js'),
  wannacry: () => import('./wannacry/index.js'),
  macOS: () => import('./macOS/index.js'),
  ubuntu1804: () => import('./ubuntu1804/index.js'),
  mcdonalds: () => import('./mcdonalds/index.js'),
};
const app = document.querySelector('#app');
const options = document.querySelector('.options');

app.querySelector('.close').onclick = onAppClose;
options.onclick = e => {
  const target = e.target.closest('.option');
  if (target && target !== options) {
    try {
      render(e.target.closest('.option').id);
    } catch (e) {
      console.log(e);
    }
  } else {
    console.log('please click on a theme');
  }
};

function render(name) {
  screenfull.enabled ? screenfull.request(app) : undefined;
  // API can only be initiated by a user gesture.
  renderTheme(name)
    .then(content => {
      const container = app.querySelector('.content');
      container.innerHTML = content;
      onAppOpen(name);
    })
    .catch(e => {
      onAppClose();
      throw e;
    });
}

async function renderTheme(name) {
  const theme = await themes[name]();
  return theme.render();
}

function onAppClose() {
  history.replaceState(null, '', './');
  screenfull.enabled ? screenfull.exit() : undefined;
  app.style.visibility = 'hidden';
}
function onAppOpen(name) {
  history.pushState({ app: name }, name, name);
  app.style.visibility = 'visible';
}

window.onpopstate = e => {
  if (!e.state) {
    onAppClose();
  }
};
