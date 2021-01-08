import './AppBar.css';

import Badge from '@material-ui/core/Badge';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import InputBase from '@material-ui/core/InputBase';
import MailIcon from '@material-ui/icons/Mail';
import SearchIcon from '@material-ui/icons/Search';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { history } from '../../utils/history';
import WsClient from '../../WsWrapper';
import AccountMenu from '../AccountMenu/AccountMenu';
import NotificationMenu from '../NotificationMenu/NotificationMenu';

const QAQAppBar = () => {
  const [searchString, setSearchString] = useState('');
  const [notificationList, setNotificationList] = useState([]);

  const msgAdapter = (msg) => ({
    type: msg.type,
    data: {
      uId: msg.data.users.uid,
      uName: msg.data.users.uname,
      qId: msg.data.qid,
      qTitle: msg.data.title ? msg.data.title : '',
      qContent: msg.data.detail.detail,
    },
  });

  const newNotification = (msg) => {
    const json = JSON.parse(msg);
    const newNotificationList = notificationList;
    newNotificationList.splice(0, 0, msgAdapter(json));
    setNotificationList(newNotificationList);
  };

  const wsClient = WsClient(newNotification);
  if (wsClient) {
    wsClient.activate();
  }

  useEffect(() => () => {
    if (wsClient) {
      wsClient.deactivate();
    }
  });

  const handleSearchStringChange = (event) => {
    setSearchString(event.target.value);
  };

  const onSearch = () => {
    history.replace('/search/' + searchString);
  };

  return (
    <div className="appbar-header" color={'white'}>
      <Grid container direction="row" justify="center" alignItems="center" xs={12}>
        <Grid item style={{ marginLeft: '150px' }}>
          <Link to="/">
            <img src={'/QAQlogo.png'} style={{ width: '80px' }} />
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
          <InputBase placeholder="搜索问题" style={{ background: '#f6f6f6', width: '300px' }} value={searchString} onChange={handleSearchStringChange} />
          <IconButton aria-label="search" onClick={onSearch}>
            <SearchIcon />
          </IconButton>
        </Grid>
        <Grid item xs={2} spacing={1}>
          <NotificationMenu notificationList={notificationList} />
          <IconButton color="inherit">
            <Badge badgeContent={17} color="secondary">
              <MailIcon />
            </Badge>
          </IconButton>
          <AccountMenu />
        </Grid>
      </Grid>
    </div>
  );
};

export default QAQAppBar;
