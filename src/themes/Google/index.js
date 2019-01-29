import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Search from './Search';
import Main from './Main';

function Google(props) {
  function onSearch(str) {
    props.history.push(`/google/search?query=${str}`);
  }
  function goMain() {
    props.history.push('/google');
  }
  return (
    <Switch>
      <Route
        path="/google/search"
        render={props => (
          <Search goMain={goMain} onSearch={onSearch} {...props} />
        )}
      />
      <Route
        path="/google"
        render={props => <Main {...props} onSearch={onSearch} />}
      />
    </Switch>
  );
}

export default Google;
