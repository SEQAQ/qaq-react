import IconButton from '@material-ui/core/IconButton';
import InputBase from '@material-ui/core/InputBase';
import { makeStyles } from '@material-ui/core/styles';
import SendIcon from '@material-ui/icons/Send';
import React from 'react';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
}));

/**
 * A basic pure text editor
 * @param {func} onChange(e, ...) e.target.value is the input value
 * @param {func} onSubmit handles click on submit button
 */
const Editor = ({ onChange, onSubmit, placeholder }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <InputBase className={classes.input} placeholder={placeholder ? placeholder : '说说你的看法'} inputProps={{ 'aria-label': 'input your comment' }} onChange={onChange} />
      <IconButton type="submit" onClick={onSubmit} className={classes.iconButton} aria-label="send comment">
        <SendIcon />
      </IconButton>
    </div>
  );
};

export default Editor;
