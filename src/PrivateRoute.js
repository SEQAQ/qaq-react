import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import * as userService from './services/userServices';
import { message } from 'antd';

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

  // 如果曾经没有登陆过，那么直接返回NULL
  if (!hasAuthed) {
    return null;
  }

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
              pathname: '/login',
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
