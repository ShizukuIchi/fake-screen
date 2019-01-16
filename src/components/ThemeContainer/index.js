import React from 'react';
import { Switch, Route } from 'react-router-dom';
import posed, { PoseGroup } from 'react-pose';
import styled from 'styled-components';

import Themes from 'src/themes';

const RoutesContainer = posed.div({
  enter: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
  },
});

const ThemeContainer = ({ location, className }) => {
  return (
    <PoseGroup>
      <RoutesContainer className={className} key={location.pathname}>
        <Switch location={location}>
          <Route exact path="/win10-crash" component={Themes.Win10Blue} />
          {/* <Route exact path="/win-blue" component={lazy.Win10Blue} /> */}
          {/* {themes.map(theme => (
            <Route
              key={theme.id}
              exact
              path={`/${theme.name}`}
              render={() => <C t={theme.displayName} />}
            />
          ))} */}
        </Switch>
      </RoutesContainer>
    </PoseGroup>
  );
};

export default styled(ThemeContainer)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;
