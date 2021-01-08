import Grid from '@material-ui/core/Grid';
import React from 'react';
import ReactMarkdown from 'react-markdown';

export class HotCard extends React.Component {
  constructor(props) {
    super(props);
    this.contentToIntro = this.contentToIntro.bind(this);
  }

  componentDidMount() {
    console.log(this.props);
  }

  /* 负责截取简介，字数上限为90字 */
  contentToIntro(content) {
    let introduction;
    if (!content) {
      return null;
    }
    if (content.length > 90) {
      introduction = content.substring(0, 90);
    } else {
      introduction = content;
    }
    return introduction;
  }

  render() {
    const content = this.props.data.detail && this.props.data.detail.detail ? this.props.data.detail.detail : null;
    const title = this.props.data.title;
    const qid = this.props.data.qid;
    const rank = this.props.rank + 1;
    const intro = this.contentToIntro(content);
    const imgsrc = './QAQlogo.png';

    return (
      <div>
        <Grid container direction="row" justify="flex-start" alignItems="flex-start" style={{ width: '680px', height: '137px' }}>
          {/* 排行数字 */}
          <Grid item style={{ minWidth: '57px', minHeight: '105px', textAlign: 'center' }}>
            {rank === 1 || rank === 2 || rank === 3 ? <span style={{ color: 'rgb(255,150,7)', lineHeight: '1.6', fontSize: '18px', fontWeight: '600' }}>{rank}</span> : null}
            {rank != 1 && rank != 2 && rank != 3 ? <span style={{ color: 'rgb(153,153,153)', lineHeight: '1.6', fontSize: '18px', fontWeight: '600' }}>{rank}</span> : null}
          </Grid>

          {/* 标题+简介 */}
          <Grid item style={{ width: '415px', height: '105px' }}>
            <a href={'/question/' + qid} style={{ textDecoration: 'none', color: 'black' }}>
              <span style={{ fontSize: '18px', fontWeight: 'bold' }}>{title}</span>
              <br />
              <ReactMarkdown>{intro}</ReactMarkdown>
            </a>
          </Grid>

          {/* 图片 */}
          <Grid item style={{ width: '195px', height: '105px' }}>
            <img src={imgsrc}></img>
          </Grid>

          {/* 操作 */}
          <Grid item></Grid>
        </Grid>
      </div>
    );
  }
}

export default HotCard;
