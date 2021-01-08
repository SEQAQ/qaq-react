import './ProfileHeader.css';

import PropTypes from 'prop-types';
import React from 'react';

import Avatar from '../../component/Avatar/Avatar';
import { FollowButton } from '../Button';

const genderText = [
  { label: 'male', emoji: '👨' },
  { label: 'female', emoji: '👩' },
  { label: '', emoji: '' },
];

const ProfileHeader = (props) => {
  const username = props.data.username;
  const gender = Math.min(props.data.gender, 1); // clamp gender to 0 or 1, the lower bound is not considerred
  const department = props.data.department;
  const img = props.data.img;
  const followed = props.followed;
  const noShow = props.hideFollowButton;
  // if (show === null || show === undefined) show = true;

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
          <span className={'profile-detail'}>{department}</span>
          <div className="profile-footer">
            {!noShow && (
              <FollowButton
                followed={followed}
                onClick={() => {
                  if (props.onFollow) {
                    props.onFollow(followed);
                  }
                }}
              />
            )}
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
