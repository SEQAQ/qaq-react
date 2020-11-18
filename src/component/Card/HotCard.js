import ButtonBase from '@material-ui/core/ButtonBase';
import CardContent from '@material-ui/core/CardContent';
import Collapse from '@material-ui/core/Collapse';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import clsx from 'clsx';
import React from 'react';

export class HotCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: 0,
    };
    this.handleExpandClick = this.handleExpandClick(this);
    this.contentToIntro = this.contentToIntro.bind(this);
  }

  handleExpandClick() {
    console.log(this.state.expanded);
    const tmp = !this.state.expanded;
    this.setState({
      expanded: tmp,
    });
    console.log(this.state.expanded);
  }

  /* 负责截取简介，字数上限为90字 */
  contentToIntro(content) {
    let introduction;
    if (content.length > 90) {
      introduction = content.substring(0, 90);
    } else {
      introduction = content;
    }
    return introduction;
  }

  render() {
    const respondent = this.props.data.respondent;
    const content = this.props.data.content;
    const title = this.props.data.title;
    const imgsrc = this.props.data.imgsrc;
    const intro = this.contentToIntro(content);

    return (
      <div>
        <Grid container direction="column" justify="flex-start" alignItems="flex-start">
          {/* 标题 */}
          <Grid item>
            <span style={{ fontSize: '18px', fontWeight: 'bold' }}>{title}</span>
          </Grid>

          {/* 内容简介+图片 */}
          <Grid item container direction="row" justify="flex-start" alignItems="flex-start">
            {/* 图片 */}
            <Grid item>
              <img src={imgsrc} style={{ width: '190px', height: '105px' }} />
            </Grid>
            {/* 内容简介 */}
            <Grid item>
              {content.length > 90 ? (
                <span>
                  {respondent} : {intro}...
                </span>
              ) : (
                <span>
                  {respondent} : {intro}
                </span>
              )}
              <div>
                <IconButton onClick={this.handleExpandClick} aria-expanded={this.state.expanded}>
                  <ExpandMoreIcon />
                </IconButton>
                <button style={{ color: 'rgb(0,132,225)' }}>
                  阅读全文
                  <ExpandMoreIcon fontSize="small" style={{ marginTop: '1px' }} />
                </button>
                <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
                  <Typography paragraph>{content}</Typography>
                </Collapse>
              </div>
            </Grid>
          </Grid>

          {/* 操作 */}
          <Grid item></Grid>
        </Grid>
      </div>
    );
  }
}

export default HotCard;
