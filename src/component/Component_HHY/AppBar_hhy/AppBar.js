import './AppBar.css';

import Badge from '@material-ui/core/Badge';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import InputBase from '@material-ui/core/InputBase';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import SearchIcon from '@material-ui/icons/Search';
import React from 'react';
import { Link } from 'react-router-dom';

import AccountMenu from './AccountMenu/AccountMenu';

export class QAQAppBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="appbar-header">
        <Grid container direction="row" justify="center" alignItems="center" xs={12}>
          <Grid item style={{ marginLeft: '150px' }}>
            <Link to="/">
              <img src={'./QAQlogo.png'} style={{ width: '80px' }} />
            </Link>
          </Grid>
          <Grid item style={{ marginLeft: '10px', marginRight: '40px' }}>
            <Link to="/" className="app-text">
              <Button>首页</Button>
            </Link>
            <Link to="/" className="app-text">
              <Button>发现</Button>
            </Link>
            <Link to="/" className="app-text">
              <Button>回答</Button>
            </Link>
          </Grid>
          <Grid item xs={3} style={{ marginRight: '40px' }}>
            <InputBase placeholder="搜索问题" style={{ background: '#f6f6f6', width: '300px' }} />
            <IconButton type="submit" aria-label="search">
              <SearchIcon />
            </IconButton>
          </Grid>
          <Grid item xs={2} spacing={1}>
            <IconButton color="inherit">
              <Badge badgeContent={17} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton color="inherit">
              <Badge badgeContent={4} color="secondary">
                <MailIcon />
              </Badge>
            </IconButton>
            <AccountMenu />
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default QAQAppBar;