import google from './google.pug';
import './google.scss';
import './search.scss';
import searchPage from './search.pug';

export const render = container => {
  container.innerHTML = google;
  try {
    start();
  } catch (e) {
    throw e;
  }
};

function start() {
  const wrapper = document.querySelector('.google-wrapper');
  const enter = wrapper.querySelector('#enter');
  const search = wrapper.querySelector('#search');
  enter.onclick = () => {
    const text = search.value;
    renderSearchPage(text).catch(e => {
      throw e;
    });
  };
  search.onkeypress = e => {
    if (e.keyCode !== 13) return;
    renderSearchPage(search.value)
      .then(() => console.log('what do you want?'))
      .catch(e => {
        throw e;
      });
  };

  async function renderSearchPage(text) {
    if (!text.length) return;
    wrapper.innerHTML = searchPage;

    const searchText = wrapper.querySelector('#search-in-content');
    const searchPageSearch = wrapper.querySelector('#search');
    const logo = wrapper.querySelector('.logo');

    searchText.textContent = text;
    searchPageSearch.value = text;
    searchPageSearch.focus();
    searchPageSearch.onkeypress = e => {
      if (e.keyCode !== 13) return;
      searchText.textContent = searchPageSearch.value;
    };
    logo.onclick = () => {
      wrapper.outerHTML = google;
      start();
    };
  }
}
