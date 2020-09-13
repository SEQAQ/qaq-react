import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './ProfileHeader.css';
import Avatar from '../../component/Avatar/Avatar';
import FollowButton from '../Button/FollowButton';

const ProfileHeader = (props) => {
  const username = props.data.username;
  const gender = props.data.gender;
  const intro = props.data.intro;
  const img = props.data.img;
  const [followed, setFollowed] = useState(false);

  return (
    <div className={'profile-card card'}>
      <div className="profile-header">
        {/* User Avatar */}
        <div className="profile-avatar">
          <Avatar large className={'avatar'} src={img} />
        </div>
        {/* User Info */}
        <div className="profile-info">
          <h1 className="user-name">{username}</h1>
          {gender === 0 && (
            <span role="img" aria-label="male">
              👨
            </span>
          )}
          {gender === 1 && (
            <span role="img" aria-label="male">
              👩
            </span>
          )}
          <div className="divider" />
          <span className={'profile-detail'}>{intro}</span>
          <div className="profile-footer">
            <FollowButton followed={followed} onClick={() => setFollowed(!followed)} />
          </div>
        </div>
      </div>
    </div>
  );
};

ProfileHeader.propTypes = {
  data: PropTypes.object.isRequired,
};

export default ProfileHeader;
