import './UserFeedItem.sass';

import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import React from 'react';
import ReactMarkdown from 'react-markdown';
import { Link } from 'react-router-dom';

import { ActionBar } from '../Bar';

const UserFeedItem = ({ data }) => {
  const title = data.title;
  const content = data.content;
  const link = data.link;
  const account = data.account;
  const uname = data.uname;
  // 若不加非空判断，在数据尚未获取时可能报错
  const firstWord = !uname ? '' : uname.substring(0, 1).toUpperCase();
  const follower = !data.follower ? 0 : data.follower;
  const followed = !data.followed ? 0 : data.followed;

  return (
    <div className="story-item-container">
      <div className="story-item-content">
        <Grid item container direction="row" justify="flex-start" alignItems="flex-start">
          {/* 头像 */}
          <Grid item style={{ marginTop: '10px' }}>
            <Avatar aria-label="recipe" background-color={'rgb(6,136,225)'}>
              {firstWord}
            </Avatar>
          </Grid>
          {/* 昵称 */}
          <Grid item style={{ marginLeft: '15px', marginTop: '20px', fontSize: '18px', fontWeight: '600' }}>
            {uname}
          </Grid>
          {/* 简介 */}
          <Grid item style={{ marginLeft: '15px', marginTop: '20px' }}>
            <span style={{ color: 'rgb(118,131,167)' }}>路过的开发人员</span>
          </Grid>
        </Grid>
        <div className="feed-source">@{account}</div>
        <div>
          <Link to={link}>
            <h2 className="feed-item-title">{title}</h2>
          </Link>
          <ReactMarkdown className="feed-item-content">{content}</ReactMarkdown>
          <div>
            <ActionBar variant="user" follower={follower} followed={followed} />
          </div>
        </div>
      </div>
    </div>
  );
};

UserFeedItem.propTypes = {
  data: PropTypes.any.isRequired,
};

export default UserFeedItem;
