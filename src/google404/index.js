import google from './google.pug';
import './google.scss';

export const render = container => {
  container.innerHTML = google;
  try {
    start();
  } catch (e) {
    throw e
  }
};

function start() {
  const wrapper = document.querySelector('.google-wrapper');
  const enter = wrapper.querySelector('#enter');
  const search = wrapper.querySelector('#search')
  enter.onclick = () => {
    const text = search.value;
    renderSearchPage(text).catch(e => {
      throw e;
    });
  };
  search.onkeypress = e => {
    if (e.keyCode !== 13) return
    renderSearchPage(search.value).catch(e => {
      throw e;
    });
  }
  enter.ontouchend = () => {
    const text = search.value;
    renderSearchPage(text).catch(e => {
      throw e;
    });
  };

  async function renderSearchPage(text) {
    if (!text.length) return;
    await import('./search.scss');
    const searchPageHtml = await import('./search.pug');
    wrapper.innerHTML = searchPageHtml;
    const searchText = wrapper.querySelector('#search-in-content');
    searchText.textContent = text;
    const searchPageSearch = wrapper.querySelector('#search')
    searchPageSearch.value = text
    searchPageSearch.onkeypress = e => {
      if (e.keyCode !== 13) return
      renderSearchPage(searchPageSearch.value).catch(e => {
        throw e;
      });
    }
  }
}
