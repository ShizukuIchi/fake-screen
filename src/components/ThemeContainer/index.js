import React from 'react';
import { Switch, Route } from 'react-router-dom';
import posed, { PoseGroup } from 'react-pose';
import styled from 'styled-components';
import { themes, Placeholder } from 'src/themes';

const RoutesContainer = posed.div({
  enter: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
  },
});

const ThemeContainer = ({ location, className }) => {
  function renderTheme(component) {
    return component;
    // return component || Placeholder;
  }
  return (
    <PoseGroup>
      <RoutesContainer className={className} key={location.pathname}>
        <Switch location={location}>
          {themes.map(theme => (
            <Route
              key={theme.id}
              path={`/${theme.name}`}
              component={renderTheme(theme.component)}
            />
          ))}
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
