import './HomeView.css';

import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import AccessibilityNewIcon from '@material-ui/icons/AccessibilityNew';
import AccountBalanceOutlinedIcon from '@material-ui/icons/AccountBalanceOutlined';
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import ContactSupportOutlinedIcon from '@material-ui/icons/ContactSupportOutlined';
import EmojiEmotionsOutlinedIcon from '@material-ui/icons/EmojiEmotionsOutlined';
import EventAvailableOutlinedIcon from '@material-ui/icons/EventAvailableOutlined';
import HeadsetIcon from '@material-ui/icons/Headset';
import StarOutlinedIcon from '@material-ui/icons/StarOutlined';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import React from 'react';
import { Link } from 'react-router-dom';

import CardList from '../../component/QuestionList/CardList';
import SearchBar from '../../component/SearchBar/SearchBar';
import { getQuestion } from '../../services/QuestionService';

/* const Questions1 = [
  {
    respondent: 'hhy',
    title: '为什么你会看到这个问题呢？',
    content: '当然是因为我只写了这一个呀',
    imgsrc: './QAQlogo.png',
    agree: 2333,
  },
  {
    respondent: 'hhy',
    title: '这个问题会很长？',
    content:
      '当然，我计划这个问题会有90+个字，这样我们才能测试我们的简介功能是否划分正确，当然如果字数实在不够的话我只能歪比歪比歪比八卜歪比歪比歪比八卜歪比歪比歪比八卜歪比歪比歪比八卜歪比歪比歪比八卜歪比歪比歪比八卜歪比歪比歪比八卜歪比歪比歪比八卜歪比歪比歪比八卜歪比歪比歪比八卜歪比歪比歪比八卜歪比歪比歪比八卜歪比歪比歪比八卜歪比歪比歪比八卜歪比歪比歪比八卜歪比歪比歪比八卜歪比歪比歪比八卜歪比歪比歪比八卜加上最后这一段我们就有213个字辣！',
    imgsrc: './QAQlogo.png',
    agree: 2333,
  },
  {
    respondent: 'hhy',
    title: '为什么你会看到这两个问题呢？',
    content: '可能是因为月活用户只有我们俩',
    imgsrc: './QAQlogo.png',
    agree: 1,
  },
];

const Questions2 = [
  {
    respondent: 'hhy',
    title: '好好反思以下你平时都关注了谁',
    content: '。。。。。。',
    imgsrc: './QAQlogo.png',
    questioner: 'xq',
    agree: 2333,
  },
  {
    respondent: 'hhy',
    title: '不会叭不会叭，不会真有人会关注我把？',
    content: '不会叭不会叭',
    imgsrc: './QAQlogo.png',
    questioner: 'xq',
    agree: 1,
  },
];

const Questions3 = [
  {
    respondent: 'hhy',
    title: '热搜，买的',
    content: '-8000￥',
    imgsrc: './QAQlogo.png',
    agree: 2333,
  },
  {
    respondent: 'hhy',
    title: '马老师，不讲武德',
    content: '我大意了啊，没有闪',
    imgsrc: './QAQlogo.png',
    agree: 1,
  },
]; */

export class HomeView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listTag: 1,
      recommendQues: [],
      friendQues: [],
      hotQues: [],
    };

    this.listChange1 = this.listChange1.bind(this);
    this.listChange2 = this.listChange2.bind(this);
    this.listChange3 = this.listChange3.bind(this);
    this.showList = this.showList.bind(this);
  }

  componentDidMount() {
    getQuestion(1).then((data) => {
      const tmp = this.state.recommendQues;
      tmp.push(data);
      this.setState({
        recommendQues: tmp,
      });
    });

    getQuestion(2).then((data) => {
      const tmp = this.state.recommendQues;
      tmp.push(data);
      this.setState({
        recommendQues: tmp,
      });
    });

    getQuestion(3).then((data) => {
      const tmp = this.state.recommendQues;
      tmp.push(data);
      this.setState({
        recommendQues: tmp,
      });
    });

    getQuestion(4).then((data) => {
      const tmp = this.state.recommendQues;
      tmp.push(data);
      this.setState({
        recommendQues: tmp,
      });
    });

    getQuestion(5).then((data) => {
      const tmp = this.state.recommendQues;
      tmp.push(data);
      this.setState({
        recommendQues: tmp,
      });
    });
  }

  listChange1() {
    this.setState({
      listTag: 1,
    });
  }

  listChange2() {
    this.setState({
      listTag: 2,
    });
  }

  listChange3() {
    this.setState({
      listTag: 3,
    });
  }

  showList(i) {
    switch (i) {
      // 如果是推荐页
      case 1:
        return <CardList dataSource={this.state.recommendQues} type={1} />;
      // 如果是动态页
      case 2:
        return <CardList dataSource={this.state.recommendQues} type={2} />;
      // 如果是热搜页
      case 3:
        return <CardList dataSource={this.state.recommendQues} type={3} />;
      default:
        break;
    }
  }

  render() {
    return (
      <div>
        <div>
          <SearchBar />
        </div>
        <Grid container direction="column" justify="flex-start" alignItems="center">
          {/* 导航下面的所有内容*/}
          <Grid item container direction="row" justify="center" alignItems="flex-start" style={{ marginTop: '20px' }}>
            {/* 内容左侧的所有内容*/}
            <Grid item container direction="column" justify="flex-start" alignItems="flex-start" style={{ backgroundColor: 'white', width: '694px', marginRight: '20px' }}>
              {/* 左侧推荐/关注/热榜导航栏*/}
              <Grid item style={{ height: '59px' }}>
                <div style={{ marginTop: '10px' }}>
                  <Button onClick={this.listChange1}>{this.state.listTag === 1 ? <span style={{ fontSize: '16px', color: 'rgb(0,132,225)' }}>推荐</span> : <span style={{ fontSize: '16px' }}>推荐</span>}</Button>
                  <Button onClick={this.listChange2}>{this.state.listTag === 2 ? <span style={{ fontSize: '16px', color: 'rgb(0,132,225)' }}>关注</span> : <span style={{ fontSize: '16px' }}>关注</span>}</Button>
                  <Button onClick={this.listChange3}>{this.state.listTag === 3 ? <span style={{ fontSize: '16px', color: 'rgb(0,132,225)' }}>热榜</span> : <span style={{ fontSize: '16px' }}>热榜</span>}</Button>
                </div>
              </Grid>
              {/* 左侧问题List*/}
              <Grid item>{this.showList(this.state.listTag)}</Grid>
            </Grid>
            {/* 内容右侧边栏*/}
            <Grid item container direction="column" justify="flex-start" alignItems="center" style={{ width: '296px', marginTop: '10px' }}>
              {/* 右侧带图标的导航ButtonList */}
              <Grid item container direction="row" justify="center" alignItems="center" spacing={2} style={{ backgroundColor: 'white' }}>
                <Grid item>
                  <Link to="/ask" className="homeView-link-text">
                    <ContactSupportOutlinedIcon style={{ marginLeft: '3px', color: 'rgb(0,132,225)' }} />
                    <div style={{ color: 'rgb(118,131,167)' }}>提问</div>
                  </Link>
                </Grid>
                <Grid item>
                  <Link to="/" className="homeView-link-text">
                    <AccountBalanceOutlinedIcon style={{ marginLeft: '18px', color: 'rgb(255,150,7)' }} />
                    <div style={{ color: 'rgb(118,131,167)' }}>大学社区</div>
                  </Link>
                </Grid>
                <Grid item>
                  <Link to="/" className="homeView-link-text">
                    <EventAvailableOutlinedIcon style={{ marginLeft: '18px', color: 'rgb(244,200,7)' }} />
                    <div style={{ color: 'rgb(118,131,167)' }}>寻找课程</div>
                  </Link>
                </Grid>
                <Grid item>
                  <Link to="/" className="homeView-link-text">
                    <EmojiEmotionsOutlinedIcon style={{ marginLeft: '18px', color: 'rgb(38,191,191)' }} />
                    <div style={{ color: 'rgb(118,131,167)' }}>我的兴趣</div>
                  </Link>
                </Grid>
              </Grid>

              {/* 右侧导航ButtonList */}
              <Grid item container direction="column" justify="flex-start" alignItems="flex-start" style={{ backgroundColor: 'white', marginTop: '20px', width: '312px' }}>
                <Grid item>
                  <Button className="homeView-button">
                    <StarOutlinedIcon className="homeView-button-text" />
                    <span style={{ color: 'rgb(118,131,167)' }}>我的收藏</span>
                  </Button>
                </Grid>
                <Grid item>
                  <Button className="homeView-button">
                    <ContactSupportOutlinedIcon className="homeView-button-text" />
                    <span style={{ color: 'rgb(118,131,167)' }}>我关注的问题</span>
                  </Button>
                </Grid>
                <Grid item>
                  <Button className="homeView-button">
                    <AssignmentIndIcon className="homeView-button-text" />
                    <span style={{ color: 'rgb(118,131,167)' }}>我关注的人</span>
                  </Button>
                </Grid>
                <Grid item>
                  <Button className="homeView-button">
                    <AccessibilityNewIcon className="homeView-button-text" />
                    <span style={{ color: 'rgb(118,131,167)' }}>我的粉丝</span>
                  </Button>
                </Grid>
                <Grid item>
                  <Button className="homeView-button">
                    <AccountBalanceOutlinedIcon className="homeView-button-text" />
                    <span style={{ color: 'rgb(118,131,167)' }}>我的社区</span>
                  </Button>
                </Grid>
                <Grid item>
                  <Button className="homeView-button">
                    <AccountBalanceWalletIcon className="homeView-button-text" />
                    <span style={{ color: 'rgb(118,131,167)' }}>我的课程</span>
                  </Button>
                </Grid>
                <Grid item>
                  <Button className="homeView-button">
                    <HeadsetIcon className="homeView-button-text" />
                    <span style={{ color: 'rgb(118,131,167)' }}>帮助中心</span>
                  </Button>
                </Grid>
                <Grid item>
                  <Link to="/admin">
                    <Button className="homeView-button">
                      <SupervisorAccountIcon className="homeView-button-text" />
                      <span style={{ color: 'rgb(118,131,167)' }}>管理员页面</span>
                    </Button>
                  </Link>
                </Grid>
              </Grid>

              {/* 右侧网站信息介绍 */}
              <Grid item direction="row" justify="flex-start" alignItems="flex-start" style={{ marginTop: '20px', width: '312px' }}>
                <div>
                  <span className="homeView-text">QAQ大学生问答社区开发小组</span>
                  <br />
                  <span className="homeView-text">开发成员：SeanChao 对劲</span>
                  <br />
                  <span className="homeView-text">没有对象的野指针</span>
                  <br />
                  <span className="homeView-text">不可燃的传火侠</span>
                  <br />
                  <span className="homeView-text">法人： 法外狂徒</span>
                  <br />
                  <span className="homeView-text">联系我们：xxx-xxxxx-xxx</span>
                </div>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default HomeView;
