import { Avatar, Divider, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
// import { CommentButton } from '../';
import React from 'react';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
  fonts: {
    fontWeight: 'bold',
  },
  inline: {
    display: 'inline',
  },
}));

const Comment = ({ dataSource }) => {
  const classes = useStyles();
  // TODO: implement nested comments
  return (
    <List className={classes.root}>
      {dataSource &&
        dataSource.map((comment, idx) => (
          <div key={idx}>
            <ListItem key={idx} alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt="avatar" src={comment.avatar} />
              </ListItemAvatar>
              <ListItemText
                primary={<Typography className={classes.fonts}>{comment.name}</Typography>}
                secondary={
                  <>
                    <Typography component="span" variant="body2" className={classes.inline} color="textPrimary">
                      {comment.content}
                    </Typography>
                  </>
                }
              />
            </ListItem>
            <Divider />
          </div>
        ))}
    </List>
  );
};

export default Comment;
