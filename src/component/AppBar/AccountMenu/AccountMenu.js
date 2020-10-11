import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { Link } from 'react-router-dom';
import './AccountMenuModule.css';

export default function SimpleMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <IconButton aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
        <AccountCircle />
      </IconButton>
      <Menu id="simple-menu" anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose}>
        <MenuItem onClick={handleClose}>
          <Link to="/people" className="text-link">
            我的主页
          </Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link to="/" className="text-link">
            设置
          </Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link to="/" className="text-link">
            退出
          </Link>
        </MenuItem>
      </Menu>
    </>
  );
}
