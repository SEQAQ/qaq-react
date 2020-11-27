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
        <MenuItem onClick={handleClose}>
          <Link to="/users/login" className="text-link">
            登录
          </Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link to={target} className="text-link">
            我的主页
          </Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link to="/" className="text-link">
            设置
          </Link>
        </MenuItem>
        <MenuItem onClick={logout}>
          <Link to="/" className="text-link">
            退出
          </Link>
        </MenuItem>
      </Menu>
    </>
  );
}
