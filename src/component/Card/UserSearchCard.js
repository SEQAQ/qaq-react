import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import React from 'react';

export class UserSearchCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: 0,
    };
    this.handleExpandClick = this.handleExpandClick(this);
    this.contentToIntro = this.contentToIntro.bind(this);
  }

  handleExpandClick() {
    /*    console.log(this.state.expanded);*/
    const tmp = !this.state.expanded;
    this.setState({
      expanded: tmp,
    });
    /*    console.log(this.state.expanded);*/
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
    const uname = this.props.data.uname;
    const account = this.props.data.account;
    const followed = this.props.data.followed;
    const follower = this.props.data.follower;
    const imgsrc = './QAQlogo.png';

    return (
      <div>
        <Grid container direction="column" justify="flex-start" alignItems="flex-start">
          {/* 昵称 */}
          <Grid item>
            <span style={{ fontSize: '18px', fontWeight: 'bold' }}>{uname}</span>
          </Grid>

          {/* 简介+头像 */}
          <Grid item container direction="row" justify="flex-start" alignItems="flex-start">
            {/* 图片 */}
            <Grid item>
              <img src={imgsrc} style={{ width: '190px', height: '105px' }} />
            </Grid>
            {/* 内容简介 */}
            <Grid item>
              <span>
                @{account} 关注了：{follower} 被关注：{followed}
              </span>
              <div>
                <Button style={{ color: 'rgb(0,132,225)' }}>
                  阅读全文
                  <ExpandMoreIcon fontSize="small" style={{ marginTop: '1px' }} />
                </Button>
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

export default UserSearchCard;
