import './ProfileHeader.css';

import PropTypes from 'prop-types';
import React, { useState } from 'react';

import Avatar from '../../component/Avatar/Avatar';
import { FollowButton } from '../Button';

const ProfileHeader = (props) => {
  const username = props.data.username;
  const gender = Math.min(props.data.gender, 1); // clamp gender to 0 or 1, the lower bound is not considerred
  const intro = props.data.intro;
  const img = props.data.img;
  const [followed, setFollowed] = useState(false);

  const genderText = [
    { label: 'male', emoji: '👨' },
    { label: 'female', emoji: '👩' },
    { label: '', emoji: '' },
  ];

  return (
    <div className={'profile-card card'}>
      <div className="profile-header">
        {/* User Avatar */}
        <div className="profile-avatar">
          <Avatar size="large" className={'avatar'} src={img} />
        </div>
        {/* User Info */}
        <div className="profile-info">
          <h1 className="user-name">{username}</h1>
          <span role="img" aria-label={genderText[gender].label}>
            {genderText[gender].emoji}
          </span>
          {(gender === 0 || gender === 1) && <div className="divider" />}
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