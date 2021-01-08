import './NotificationMenu.css';

import Badge from '@material-ui/core/Badge';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Popover from '@material-ui/core/Popover';
import { withStyles } from '@material-ui/core/styles';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';
import NotificationsIcon from '@material-ui/icons/Notifications';
import PeopleIcon from '@material-ui/icons/People';
// import WsClient from '../../WsWrapper';
import React, { useState } from 'react';

// 1 表示 answer
// 2 表示 question
// 3 表示 comment
const friend = [
  {
    uId: 1,
    uName: 'hhy',
  },
  {
    uId: 2,
    uName: 'HYY',
  },
  {
    uId: 3,
    uName: 'HHYY',
  },
];

const favorite = [
  {
    uId: 1,
    uName: 'hhy',
    qId: 1,
    qTitle: '为什么年轻人不讲武德',
  },
  {
    uId: 2,
    uName: 'HYY',
    qId: 1,
    qTitle: '为什么年轻人不讲武德',
  },
  {
    uId: 3,
    uName: 'HHYY',
    qId: 1,
    qTitle: '为什么年轻人不讲武德',
  },
];

const AntTabs = withStyles({
  root: {
    borderBottom: '1px solid #e8e8e8',
  },
  indicator: {
    backgroundColor: '#1890ff',
  },
})(Tabs);

const AntTab = withStyles((theme) => ({
  root: {
    textTransform: 'none',
    minWidth: 120,
    fontWeight: theme.typography.fontWeightRegular,
    fontFamily: ['-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', '"Helvetica Neue"', 'Arial', 'sans-serif', '"Apple Color Emoji"', '"Segoe UI Emoji"', '"Segoe UI Symbol"'].join(','),
    '&:hover': {
      color: '#40a9ff',
      opacity: 1,
    },
    '&$selected': {
      color: '#1890ff',
      fontWeight: theme.typography.fontWeightMedium,
    },
    '&:focus': {
      color: '#40a9ff',
    },
  },
  selected: {},
}))((props) => <Tab disableRipple {...props} />);

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div role="tabpanel" hidden={value !== index} {...other}>
      {value === index && <div style={{ height: '350px' }}>{children}</div>}
    </div>
  );
}

// 1 表示 answer
// 2 表示 question
// 3 表示 comment
export default function NotificationMenu({ notificationList }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const [value, setValue] = useState(0);
  const msgList = notificationList;

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  // const getNotify = (data) => {
  //   if (notify.length < 10) {
  //     notify.push(data);
  //   }
  //   else {
  //     notify.shift();
  //     notify.push(data);
  //   }
  // };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <>
      <IconButton color="inherit" onClick={handleClick}>
        <Badge badgeContent={4} color="secondary">
          <NotificationsIcon />
        </Badge>
      </IconButton>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        <AntTabs value={value} onChange={handleChange} indicatorColor="primary" textColor="primary" style={{ width: '360px' }}>
          <AntTab icon={<FormatListBulletedIcon />} style={{ width: '120px' }} />
          <AntTab icon={<PeopleIcon />} style={{ width: '120px' }} />
          <AntTab icon={<FavoriteIcon />} style={{ width: '120px' }} />
        </AntTabs>
        <TabPanel value={value} index={0}>
          {msgList &&
            msgList.length &&
            msgList.length > 0 &&
            msgList.map((item, idx) => {
              switch (item.type) {
                case 1:
                  return (
                    <div style={{ width: '340px', minHeight: '50px', marginTop: '10px', marginLeft: '10px' }} key={idx}>
                      <a href={'/people/' + item.data.uId} className="Notification-link-text">
                        {item.data.uName}
                      </a>
                      {'\xa0' + '回答了问题' + '\xa0'}
                      <a href={'/question/' + item.data.qId} className="Notification-link-text">
                        {item.data.qTitle}
                      </a>
                      {'\xa0' + ':' + '\xa0' + item.data.qContent}
                      <Divider style={{ marginTop: '10px' }} />
                    </div>
                  );
                case 2:
                  return (
                    <div style={{ width: '340px', minHeight: '50px', marginTop: '10px', marginLeft: '10px' }} key={idx}>
                      <a href={'/people/' + item.data.uId} className="Notification-link-text">
                        {item.data.uName}
                      </a>
                      {'\xa0' + '提出了问题' + '\xa0'}
                      <a href={'/question/' + item.data.qId} className="Notification-link-text">
                        {item.data.qTitle}
                      </a>
                      {'\xa0' + ':' + '\xa0' + item.data.qContent}
                      <Divider style={{ marginTop: '10px' }} />
                    </div>
                  );
                case 3:
                  return (
                    <div style={{ width: '340px', minHeight: '50px', marginTop: '10px', marginLeft: '10px' }} key={idx}>
                      <a href={'/people/' + item.data.uId} className="Notification-link-text">
                        {item.data.uName}
                      </a>
                      {'\xa0' + '评论了问题' + '\xa0'}
                      <a href={'/question/' + item.data.qId} className="Notification-link-text">
                        {item.data.qTitle}
                      </a>
                      {'\xa0' + ':' + '\xa0' + item.data.qContent}
                      <Divider style={{ marginTop: '10px' }} />
                    </div>
                  );
                default:
                  return <span>List类型出错啦！</span>;
              }
            })}
        </TabPanel>
        <TabPanel value={value} index={1}>
          {friend &&
            friend.length &&
            friend.length > 0 &&
            friend.map((item, idx) => (
              <div style={{ width: '340px', minHeight: '30px', marginTop: '10px', marginLeft: '10px' }} key={idx}>
                <a href={'/people/' + item.uId} className="Notification-link-text">
                  {item.uName}
                </a>
                {'\xa0' + '最近关注了你' + '\xa0'}
                <Divider style={{ marginTop: '10px' }} />
              </div>
            ))}
        </TabPanel>
        <TabPanel value={value} index={2}>
          {favorite &&
            favorite.length &&
            favorite.length > 0 &&
            favorite.map((item, idx) => (
              <div style={{ width: '340px', minHeight: '30px', marginTop: '10px', marginLeft: '10px' }} key={idx}>
                <a href={'/people/' + item.uId} className="Notification-link-text">
                  {item.uName}
                </a>
                {'\xa0' + '最近收藏了你的问题' + '\xa0'}
                <a href={'/question/' + item.qId} className="Notification-link-text">
                  {item.qTitle}
                </a>
                <Divider style={{ marginTop: '10px' }} />
              </div>
            ))}
        </TabPanel>
      </Popover>
    </>
  );
}
