import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { themes } from 'src/assets/data';
import Theme from './Theme';

const Themes = props => {
  return (
    <div className={props.className}>
      {themes.map(({ id, fullScreen, name, ...rest }) => (
        <Link key={id} to={{ pathname: `/${name}`, state: { fullScreen } }}>
          <Theme name={name} {...rest} />
        </Link>
      ))}
    </div>
  );
};

export default styled(Themes)``;
