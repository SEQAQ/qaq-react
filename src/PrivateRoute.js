/*
import { message } from 'antd';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { Redirect, Route } from 'react-router-dom';

import * as userService from './services/userServices';

const PrivateRoute = (props) => {
  const [isAuthed, setIsAuthed] = useState(false); // 已经登陆
  const [hasAuthed, setHasAuthed] = useState(false); // 曾经登陆过

  const checkAuth = (data) => {
    if (data.status >= 0) {
      setIsAuthed(true);
      setHasAuthed(true);
    } else {
      message.error(data.msg);
      localStorage.removeItem('user');
      setIsAuthed(false);
      setHasAuthed(true);
    }
  };

  useEffect(() => userService.checkSession(checkAuth));
  const { component: Component, path = '/', exact = false, strict = false } = props;

  return (
    <Route
      path={path}
      exact={exact}
      strict={strict}
      render={(props) =>
        isAuthed ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: '/users/login',
              state: { from: props.location },
            }}
          />
        )
      }
    />
  );
};

PrivateRoute.propTypes = {
  location: PropTypes.any.isRequired,
  component: PropTypes.any,
  path: PropTypes.any,
  exact: PropTypes.any,
  strict: PropTypes.any,
};

export default PrivateRoute;
*/

import PropTypes from 'prop-types';
import React from 'react';
import cookie from 'react-cookies';
import { Redirect, Route } from 'react-router-dom';

const PrivateRoute = (props) => {
  const tmp = cookie.load('account');

  let isAuthed = false;

  if (tmp !== undefined) {
    isAuthed = true;
  }

  const { component: Component, path = '/', exact = false, strict = false } = props;

  return (
    <Route
      path={path}
      exact={exact}
      strict={strict}
      render={(props) => {
        isAuthed ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: '/users/login',
              state: { from: props.location },
            }}
          />
        );
      }}
    />
  );
};

PrivateRoute.propTypes = {
  location: PropTypes.any.isRequired,
  component: PropTypes.any,
  path: PropTypes.any,
  exact: PropTypes.any,
  strict: PropTypes.any,
};

export default PrivateRoute;
