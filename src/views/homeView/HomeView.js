import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import React from 'react';

import AppBar from '../../component/Component_HHY/AppBar_hhy/AppBar';
import HomeViewQuestonCard from '../../component/Component_HHY/QuestionCard2/HomeViewQuestonCard';
import QuestionList from '../../component/Component_HHY/QuestionList2/QuestionList';

const Questions = [
  {
    title: '为什么你会看到这个问题呢？',
    content: '当然是因为我只写了这一个呀',
    agree: 2333,
  },
  {
    title: '为什么你会看到这两个问题呢？',
    content: '可能是因为月活用户只有我们俩',
    agree: 1,
  },
];

export class HomeView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pageTag: 1,
    };

    this.pageChange1 = this.pageChange1.bind(this);
    this.pageChange2 = this.pageChange2.bind(this);
    this.pageChange3 = this.pageChange3.bind(this);
  }

  pageChange1() {
    this.setState({
      pageTag: 1,
    });
  }

  pageChange2() {
    this.setState({
      pageTag: 2,
    });
  }

  pageChange3() {
    this.setState({
      pageTag: 3,
    });
  }

  render() {
    return (
      <div>
        <Grid container direction="column" justify="flex-start" alignItems="center">
          {/* 导航栏*/}
          <Grid item>
            <AppBar />
          </Grid>
          {/* 导航下面的所有内容*/}
          <Grid item container direction="row" justify="center" alignItems="center" style={{ marginTop: '10px' }}>
            {/* 内容左侧的所有内容*/}
            <Grid item container direction="column" justify="flex-start" alignItems="flex-start" style={{ backgroundColor: 'white', width: '694px', marginRight: '20px' }}>
              {/* 左侧推荐/关注/热榜导航栏*/}
              <Grid item style={{ height: '59px' }}>
                <div style={{ marginTop: '10px' }}>
                  <Button onClick={this.pageChange1}>
                    <span style={{ fontSize: '16px' }}>推荐</span>
                  </Button>
                  <Button onClick={this.pageChange2}>
                    <span style={{ fontSize: '16px' }}>关注</span>
                  </Button>
                  <Button onClick={this.pageChange3}>
                    <span style={{ fontSize: '16px' }}>热榜</span>
                  </Button>
                </div>
              </Grid>
              {/* 左侧问题List*/}
              <Grid item>
                <QuestionList dataSource={Questions} />
              </Grid>
            </Grid>
            {/* 内容右侧边栏*/}
            <Grid item container direction="row" justify="center" alignItems="center" style={{ backgroundColor: 'white', width: '296px' }}>
              1
            </Grid>
          </Grid>

          <HomeViewQuestonCard></HomeViewQuestonCard>
        </Grid>
      </div>
    );
  }
}

export default HomeView;
