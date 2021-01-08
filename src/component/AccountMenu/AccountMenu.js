import './AccountMenuModule.css';

import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import AccountCircle from '@material-ui/icons/AccountCircle';
import React from 'react';
import cookie from 'react-cookies';
import { Link } from 'react-router-dom';

import { userInfo } from '../../lib';

export default function SimpleMenu() {
  const user = userInfo();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const target = user === null ? null : '/people/' + user.uid;

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const logout = () => {
    setAnchorEl(null);
    const tmp = cookie.load('account');
    if (tmp !== undefined) {
      cookie.remove('account', { path: '/' });
      localStorage.clear();
    }
  };

  return (
    <>
      <IconButton aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
        <AccountCircle />
      </IconButton>
      <Menu id="simple-menu" anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose}>
        {user !== null ? null : (
          <Link to="/users/login" className="text-link">
            <MenuItem onClick={handleClose}>用户登录</MenuItem>
          </Link>
        )}
        {user !== null ? null : (
          <Link to="/users/register" className="text-link">
            <MenuItem onClick={handleClose}>用户注册</MenuItem>
          </Link>
        )}
        {user === null ? null : (
          <Link to={target} className="text-link">
            <MenuItem onClick={handleClose}>我的主页</MenuItem>
          </Link>
        )}
        {user === null ? null : (
          <Link to="/" className="text-link">
            <MenuItem onClick={handleClose}>设置</MenuItem>
          </Link>
        )}
        {user === null ? null : (
          <a href="/" className="text-link">
            <MenuItem onClick={logout}>退出</MenuItem>
          </a>
        )}
      </Menu>
    </>
  );
}
