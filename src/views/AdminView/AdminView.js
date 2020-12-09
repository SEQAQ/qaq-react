import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import React from 'react';

import ContentAdmin from '../../component/AdminContent/ContentAdmin';
import QAAdmin from '../../component/AdminContent/QAAdmin';
import UserAdmin from '../../component/AdminContent/UserAdmin';

export class AdminView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listTag: 1,
    };

    this.listChange1 = this.listChange1.bind(this);
    this.listChange2 = this.listChange2.bind(this);
    this.listChange3 = this.listChange3.bind(this);
    this.showList = this.showList.bind(this);
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
      // 如果是问答管理
      case 1:
        return <QAAdmin />;
      // 如果是内容审查
      case 2:
        return <ContentAdmin />;
      // 如果是用户管理
      case 3:
        return <UserAdmin />;
      default:
        break;
    }
  }

  render() {
    return (
      <div>
        {/* AppBar下的所有内容 */}
        <Grid container direction="row" justify="center" alignItems="flex-start">
          {/* 左侧的选择条 */}
          <Grid item container direction="column" justify="flex-start" alignItems="center" style={{ backgroundColor: 'white', width: '130px', height: '200px', marginTop: '20px', marginRight: '20px' }}>
            <Grid item>
              <Button onClick={this.listChange1}>{this.state.listTag === 1 ? <span style={{ fontSize: '16px', color: 'rgb(0,132,225)' }}>问答管理</span> : <span style={{ fontSize: '16px' }}>问答管理</span>}</Button>
            </Grid>
            <Grid item>
              <Button onClick={this.listChange2}>{this.state.listTag === 2 ? <span style={{ fontSize: '16px', color: 'rgb(0,132,225)' }}>内容审查</span> : <span style={{ fontSize: '16px' }}>内容审查</span>}</Button>
            </Grid>
            <Grid item>
              <Button onClick={this.listChange3}>{this.state.listTag === 3 ? <span style={{ fontSize: '16px', color: 'rgb(0,132,225)' }}>用户管理</span> : <span style={{ fontSize: '16px' }}>用户管理</span>}</Button>
            </Grid>
          </Grid>

          {/* 右侧的内容展示 */}
          <Grid item style={{ backgroundColor: 'white', marginTop: '20px', width: '1600px' }}>
            {this.showList(this.state.listTag)}
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default AdminView;
