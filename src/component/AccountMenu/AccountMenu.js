import './AccountMenuModule.css';

import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import AccountCircle from '@material-ui/icons/AccountCircle';
import React from 'react';
import cookie from 'react-cookies';
import { Link } from 'react-router-dom';

export default function SimpleMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  /*  const [ifLogin, setIfLogin] = React.useState(false);*/

  const target = '/people/6';

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
      /*      console.log('已登出'); */
    }
  };

  return (
    <>
      <IconButton aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
        <AccountCircle />
      </IconButton>
      <Menu id="simple-menu" anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose}>
        <Link to="/users/login" className="text-link">
          <MenuItem onClick={handleClose}>登录</MenuItem>
        </Link>
        <Link to={target} className="text-link">
          <MenuItem onClick={handleClose}>我的主页</MenuItem>
        </Link>
        <Link to="/" className="text-link">
          <MenuItem onClick={handleClose}>设置</MenuItem>
        </Link>
        <Link to="/" className="text-link">
          <MenuItem onClick={logout}>退出</MenuItem>
        </Link>
      </Menu>
    </>
  );
}
