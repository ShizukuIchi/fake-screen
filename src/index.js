import 'babel-polyfill';
import screenfull from 'screenfull';
import './assets/clear.css';
import './assets/font.css';
import './style.scss';

// wierd module not found bug walk around
import u from './ubuntu1804/ubuntu1804.pug';
const themes = {
  win10: () => import('./win10/index.js'),
  'win10-update': () => import('./win10-update/index.js'),
  'win10-blue': () => import('./win10-blue/index.js'),
  wannacry: () => import('./wannacry/index.js'),
  macOS: () => import('./macOS/index.js'),
  ubuntu1804: () => import('./ubuntu1804/index.js'),
  mcdonalds: () => import('./mcdonalds/index.js'),
  google404: () => import('./google404/index.js'),
};
const app = document.querySelector('#app');
const options = document.querySelector('.options');
app.querySelector('.close').onclick = onAppClose;
options.onclick = e => {
  const target = e.target.closest('.option');
  if (target && target !== options) {
    try {
      renderTheme(target.id, target.dataset.fullscreen !== 'no');
    } catch (e) {
      console.log(e);
    }
  } else {
    console.log('please click on a theme');
  }
};

function renderTheme(name, isFullscreen = true) {
  screenfull.enabled && isFullscreen ? screenfull.request(app) : undefined;
  const container = app.querySelector('.content');
  // API can only be initiated by a user gesture.
  loadThemeIn(name, container)
    .then(content => {
      if (content) {
        container.innerHTML = content;
      }
      onAppOpen(name);
    })
    .catch(e => {
      onAppClose();
      throw e;
    });
}

async function loadThemeIn(name, container) {
  const theme = await themes[name]();
  if (typeof theme.render === 'function') {
    return theme.render(container);
  } else {
    location.reload();
  }
}

function onAppClose() {
  history.replaceState(null, '', './');
  screenfull.enabled && screenfull.isFullscreen ? screenfull.exit() : undefined;
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

if ('serviceWorker' in navigator) {
  navigator.serviceWorker
    .register('/sw.js', { scope: '/' })
    .then(function(registration) {
      console.log('Service Worker Registered');
    });

  navigator.serviceWorker.ready.then(function(registration) {
    console.log('Service Worker Ready');
  });
}
