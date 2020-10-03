import './VoteButtonGroup.sass';

import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import PropTypes from 'prop-types';
import React from 'react';

const styles = makeStyles({
  voteButtonLeftMargin: {
    marginLeft: '4px',
  },
  voteButton: {
    padding: '4px 10px',
  },
  activated: {
    border: '1px solid transparent',
  },
});

const VoteButtonGroup = ({ vote = 0, onUp, onDown, onCancel }) => {
  /**
   * voteState table
   * 0 -> no vote
   * 1 -> up vote
   * 2 -> down vote
   */
  const muiBtnProps = {
    variant: vote === 0 ? 'outlined' : 'contained',
    color: 'primary',
    size: 'small',
  };

  const handleVote = (val) => {
    if (vote !== 0) {
      onCancel();
    } else {
      const call = [onUp, onDown];
      call[val]();
    }
  };
  // console.log(styles().voteButton);
  const sty = styles();

  return (
    <>
      {vote !== 2 && (
        <Button {...muiBtnProps} startIcon={<KeyboardArrowUpIcon />} onClick={() => handleVote(0)} className={sty.voteButton + ` ${vote === 1 && sty.activated}`}>
          赞同
        </Button>
      )}
      {vote !== 1 && (
        <Button {...muiBtnProps} className={sty.voteButtonLeftMargin + ' ' + sty.voteButton + ` ${vote === 2 && sty.activated}`} onClick={() => handleVote(1)} startIcon={<KeyboardArrowDownIcon />}>
          反对
        </Button>
      )}
    </>
  );
};

VoteButtonGroup.propTypes = {
  vote: PropTypes.number.isRequired,
  onUp: PropTypes.func.isRequired,
  onDown: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
};

export default VoteButtonGroup;
