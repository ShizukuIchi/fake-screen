import React from 'react';
import queryString from 'query-string';

import Result from './Result';
import Search from './Search';

export function getQuery(qs) {
  const qsObj = queryString.parse(qs);
  return qsObj.query || '';
}

function Google(props) {
  const [query, setQuery] = React.useState(getQuery(props.location.search));
  function onSearch(str) {
    props.history.push(`/google?query=${str}`);
  }
  function goBack() {
    props.history.push('/google');
  }
  React.useEffect(() => {
    const q = getQuery(props.location.search);
    setQuery(q);
  });
  return query.length === 0 ? (
    <Search onSearch={onSearch} />
  ) : (
    <Result goBack={goBack} query={query} onSearch={onSearch} />
  );
}

export default Google;
