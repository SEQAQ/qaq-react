import Grid from '@material-ui/core/Grid';
import React from 'react';

export class HotCard extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.contentToIntro = this.contentToIntro.bind(this);
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
    /*    const respondent = this.props.data.respondent;
    const content = this.props.data.content;
    const title = this.props.data.title;
    const imgsrc = this.props.data.imgsrc;
    const intro = this.contentToIntro(content);*/

    const content = 'this.props.data.content';
    const title = 'this.props.data.title';
    /*    const respondent = 'this.props.data.respondent';
    const imgsrc = './QAQlogo.png';
    const intro = 'this.contentToIntro(content)';*/
    const index = this.props.key;

    return (
      <div>
        <Grid container direction="row" justify="flex-start" alignItems="flex-start">
          {/* 排行数字 */}
          <Grid item>{index}</Grid>

          {/* 标题+简介 */}
          <Grid item>
            <span style={{ fontSize: '18px', fontWeight: 'bold' }}>{title}</span>
            <br />
            <span>{content}</span>
          </Grid>

          {/* 图片 */}
          <Grid item></Grid>

          {/* 操作 */}
          <Grid item></Grid>
        </Grid>
      </div>
    );
  }
}

export default HotCard;
