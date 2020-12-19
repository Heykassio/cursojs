import React from 'react';
import PropTypes, { oneOfType } from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

export default function MyRoute({ component: Component, isclosed, ...rest }) {
  const isLoggedIn = false;

  if (isclosed && !isLoggedIn) {
    return (
      <Redirect
        to={{ pathname: '/login', state: { prevPath: rest.location.pathname } }}
      />
    );
  }

  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Route {...rest} component={Component} />;
}

MyRoute.defaultProps = {
  isclosed: false,
};

MyRoute.propTypes = {
  component: oneOfType([PropTypes.element, PropTypes.func]).isRequired,
  isclosed: PropTypes.bool,
};
