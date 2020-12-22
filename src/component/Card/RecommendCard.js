import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import Collapse from '@material-ui/core/Collapse';
import { red } from '@material-ui/core/colors';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import clsx from 'clsx';
import React from 'react';
import ReactMarkdown from 'react-markdown';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 694,
    width: 650,
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function RecipeReviewCard(data) {
  const classes = useStyles();

  const qid = !data.data.qid ? '' : data.data.qid;
  const title = !data.data.title ? '' : data.data.qid;
  const respondent = 'cat';
  const imgsrc = './QAQlogo.png';
  const content = !data.data.detail ? '' : data.data.detail.detail;

  let intro = '';
  const target = '/question/' + qid.toString();

  const [expanded, setExpanded] = React.useState(false);

  // 负责处理扩展
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  // 负责截取简介，字数上限为90字
  const contentToIntro = () => {
    if (content.length > 90) {
      intro = content.substring(0, 90);
    } else {
      intro = content;
    }
    return <ReactMarkdown>{intro}</ReactMarkdown>;
  };

  return (
    <Card className={classes.root}>
      <Grid container direction="column" justify="flex-start" alignItems="flex-start">
        {/* 标题*/}
        <Grid item>
          <Link to={target} target="_blank" style={{ textDecoration: 'none', color: 'black' }}>
            <CardHeader title={title} />
          </Link>
        </Grid>

        {/* 图片+简介*/}
        <Grid item container direction="row" justify="flex-start" alignItems="flex-start" style={{ height: '107px' }}>
          {/* 图片*/}
          <Grid item>
            <CardMedia image={imgsrc} title="Paella dish" style={{ width: '190px', height: '107px', marginLeft: '10px' }} />
          </Grid>

          {/* 简介*/}
          <Grid item style={{ width: '450px' }}>
            <CardContent>
              <span variant="body2" component="p">
                {content && content.length > 90 ? (
                  <span>
                    {respondent} : {contentToIntro()}...{' '}
                  </span>
                ) : (
                  <span>
                    {respondent} : {contentToIntro()}{' '}
                  </span>
                )}
              </span>
              <Button style={{ color: 'rgb(0,132,225)' }} onClick={handleExpandClick}>
                阅读全文
                <ExpandMoreIcon className={clsx(classes.expand, { [classes.expandOpen]: expanded })} onClick={handleExpandClick} aria-expanded={expanded} aria-label="show more" />
              </Button>
            </CardContent>
          </Grid>
        </Grid>

        {/* 操作*/}
        <Grid item>
          <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
              <FavoriteIcon />
            </IconButton>
            <IconButton aria-label="share">
              <ShareIcon />
            </IconButton>
          </CardActions>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography paragraph>
                <ReactMarkdown>{content}</ReactMarkdown>
              </Typography>
            </CardContent>
          </Collapse>
        </Grid>
      </Grid>
    </Card>
  );
}
