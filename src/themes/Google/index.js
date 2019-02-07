import React, { useState } from 'react';
import Search from './Search';
import Main from './Main';

function Google() {
  const [state, setState] = useState({
    route: 'main',
    query: '',
  });
  function onSearch(str) {
    if (str.length) {
      setState({
        route: 'search',
        query: str,
      });
    }
  }
  function goMain() {
    setState({
      route: 'main',
      query: '',
    });
  }
  if (state.route === 'main') return <Main onSearch={onSearch} />;
  else
    return <Search goMain={goMain} onSearch={onSearch} query={state.query} />;
}

export default Google;
