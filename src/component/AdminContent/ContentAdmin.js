import Grid from '@material-ui/core/Grid';
import React from 'react';

export class QAAdmin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchType: 0,
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      searchType: event.target.value,
    });
  }

  render() {
    return (
      <div>
        <Grid container direction="column" justify="flex-start" alignItems="center">
          {/* 搜索栏 */}
          <Grid item> 根据我们的业务，这个模块并不会用到的样子，因为敏感内容根本发不出来😕 </Grid>
          {/*  <FormControl style={{ width: '100px', marginLeft: '10px', marginTop: '10px', marginRight: '10px' }}>*/}
          {/*    <InputLabel>搜索方式</InputLabel>*/}
          {/*    <Select value={this.state.searchType} onChange={this.handleChange} style={{ height: '20px' }}>*/}
          {/*      <MenuItem value={0}>QID</MenuItem>*/}
          {/*      <MenuItem value={1}>问题内容</MenuItem>*/}
          {/*      <MenuItem value={2}>发起人</MenuItem>*/}
          {/*    </Select>*/}
          {/*  </FormControl>*/}
          {/*  {this.state.searchType == 0 ? <InputBase placeholder="通过 QID 搜索问题" style={{ height: '60px' }} /> : null}*/}
          {/*  {this.state.searchType == 1 ? <InputBase placeholder="通过 问题内容 搜索问题" style={{ height: '60px' }} /> : null}*/}
          {/*  {this.state.searchType == 2 ? <InputBase placeholder="通过 发起人 搜索问题" style={{ height: '60px' }} /> : null}*/}
          {/*  <IconButton type="submit">*/}
          {/*    <SearchIcon />*/}
          {/*  </IconButton>*/}
          {/* </Grid> */}

          {/* /!* 显示栏 *!/ */}
          {/* <Grid item></Grid> */}
        </Grid>
      </div>
    );
  }
}

export default QAAdmin;
