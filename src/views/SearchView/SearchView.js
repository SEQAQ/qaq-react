import './SearchView.css';

import Box from '@material-ui/core/Box';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import Typography from '@material-ui/core/Typography';
import PersonIcon from '@material-ui/icons/Person';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import VisibilityIcon from '@material-ui/icons/Visibility';
import axios from 'axios';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';

import { FeedList, QAFeedList } from '../../component/Feed';
import SearchBar from '../../component/SearchBar/SearchBar';
import SearchList from '../../component/SearchList/SearchList';
import config from '../../utils/config';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div role="tabpanel" hidden={value !== index} id={`simple-tabpanel-${index}`} aria-labelledby={`simple-tab-${index}`} {...other}>
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const SearchView = ({ match }) => {
  const [value, setValue] = useState(0);
  const { str } = match.params;
  const [feedList, setFeedList] = useState([]);
  const [resultList, setResultList] = useState([]);
  const handleChange = (ev, newVal) => {
    setValue(newVal);
    onSearch(newVal);
  };

  useEffect(() => {
    setFeedList([
      { author: 'Author', action: 0, title: '什么是 Q∀Q?', content: '知乎，不行！\nQ∀Q 彳亍！\n' },
      { author: 'undefined!', action: 1, title: '宇宙的终极答案是什么？', content: '4 2\n' },
    ]);
  }, []);

  function onSearch(i) {
    // const that = this;
    const searchString = str;
    let itemList = [];
    switch (i) {
      // 如果是搜索问题
      case 1:
        axios({
          method: 'get',
          url: config.apiUrl + '/query/ques/title',
          header: { 'Content-Type': 'application/x-www-form-urlencoded' },
          params: { title: searchString },
        })
          .then((response) => {
            const itemData = response.data;
            console.log('no1');
            console.log(itemData);
            for (let i = 0; i < itemData.length; ++i) {
              const item = {
                title: itemData[i].title,
                detail: itemData[i].detail,
                qid: itemData[i].qid,
                user: itemData[i].users.uname,
                ctime: itemData[i].ctime,
                mtime: itemData[i].mtime,
              };
              itemList = [...itemList, item];
            }
            console.log('no2');
            setResultList(itemList);
            console.log(itemList);
            // this.setState({
            //   resultList: itemList,
            // });
          })
          .catch();
        break;
      // 如果是搜索用户
      case 2:
        axios({
          method: 'get',
          url: config.apiUrl + '/query/users',
          header: { 'Content-Type': 'application/x-www-form-urlencoded' },
          params: { nickname: searchString },
        })
          .then((response) => {
            const itemData = response.data;
            for (let i = 0; i < itemData.length; ++i) {
              const item = {
                account: itemData[i].account,
                uname: itemData[i].uname,
                followed: itemData[i].followed,
                follower: itemData[i].follower,
              };
              itemList = [...itemList, item];
              // that.setState({
              //   resultList: itemList,
              // });
            }
          })
          .catch();
        break;
    }
    console.log('no22');
    console.log(itemList);
    // return <SearchList dataSource={itemList} type={i} />;
  }

  return (
    <div>
      <div>
        <SearchBar />
      </div>
      <div className="profile-main">
        <div className="card profile-act">
          <Tabs value={value} indicatorColor="primary" textColor="primary" onChange={handleChange} aria-label="disabled tabs example">
            <Tab label="问题" style={{ width: '10px' }} {...a11yProps(0)} />
            <Tab label="用户" {...a11yProps(1)} />
            <Tab label="回答" {...a11yProps(2)} />
            <Tab label="关注" {...a11yProps(3)} />
          </Tabs>
          <TabPanel value={value} index={0}>
            <QAFeedList dataSource={feedList} />
          </TabPanel>
          <TabPanel value={value} index={1}>
            <QAFeedList dataSource={resultList} />
          </TabPanel>
          <TabPanel value={value} index={2}>
            <FeedList dataSource={feedList} />
          </TabPanel>
          <TabPanel value={value} index={3}>
            <FeedList dataSource={feedList} />
          </TabPanel>
        </div>
        <div className="profile-side">
          <div className="card">
            <div className="card-header">
              <div className="card-header-text">我的 QAQ</div>
            </div>
            <div className="side-stat-detail">
              <div className="side-stat-detail-item">
                <div className="side-icon">
                  <PersonIcon />
                </div>
                <span>关注了 114 个用户</span>
              </div>
              <div className="side-stat-detail-item">
                <div className="side-icon">
                  <VisibilityIcon />
                </div>
                <span>关注了 514 个问题</span>
              </div>
              <div className="side-stat-detail-item">
                <div className="side-icon">
                  <ThumbUpIcon />
                </div>
                <span>获得了 233 个赞同</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchView;
// import './SearchView.css';
//
// import Button from '@material-ui/core/Button';
// import Grid from '@material-ui/core/Grid';
// import AccessibilityNewIcon from '@material-ui/icons/AccessibilityNew';
// import AccountBalanceOutlinedIcon from '@material-ui/icons/AccountBalanceOutlined';
// import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';
// import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
// import ContactSupportOutlinedIcon from '@material-ui/icons/ContactSupportOutlined';
// import EmojiEmotionsOutlinedIcon from '@material-ui/icons/EmojiEmotionsOutlined';
// import EventAvailableOutlinedIcon from '@material-ui/icons/EventAvailableOutlined';
// import HeadsetIcon from '@material-ui/icons/Headset';
// import StarOutlinedIcon from '@material-ui/icons/StarOutlined';
// // import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import React from 'react';
// import { Link } from 'react-router-dom';
//
// import AppBar from '../../component/AppBar/AppBar';
// import SearchList from "../../component/SearchList/SearchList";
// import config from '../../utils/config';
//
// export class SearchView extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       listTag: 1,
//       searchString: this.props.match.params.str,
//       resultList: [],
//     };
//     console.log(this.props.match.params.str);
//
//     this.listChange1 = this.listChange1.bind(this);
//     this.listChange2 = this.listChange2.bind(this);
//     this.listChange3 = this.listChange3.bind(this);
//     this.onSearch = this.onSearch.bind(this);
//     // this.showList = this.showList.bind(this);
//   }
//
//   listChange1() {
//     this.setState({
//       listTag: 1,
//     });
//   }
//
//   listChange2() {
//     this.setState({
//       listTag: 2,
//     });
//   }
//
//   listChange3() {
//     this.setState({
//       listTag: 3,
//     });
//   }
//
//   onSearch(i) {
//     // const that = this;
//     const searchString = this.state.searchString;
//     let itemList = [];
//     switch (i) {
//       // 如果是搜索问题
//       case 1:
//         axios({
//           method: 'get',
//           url: config.apiUrl + '/query/ques/title',
//           header: {'Content-Type': 'application/x-www-form-urlencoded'},
//           params: {title: searchString},
//         }).then((response) => {
//           const itemData = response.data;
//           console.log("no1");
//           console.log(itemData);
//           for (let i = 0; i < itemData.length; ++i) {
//             const item = {
//               title: itemData[i].title,
//               detail: itemData[i].detail,
//               qid: itemData[i].qid,
//               user: itemData[i].users.uname,
//               ctime: itemData[i].ctime,
//               mtime: itemData[i].mtime,
//             };
//             itemList = [...itemList, item];
//           }
//           console.log("no2");
//           console.log(itemList);
//           // this.setState({
//           //   resultList: itemList,
//           // });
//         }).catch();
//         break;
//         // 如果是搜索用户
//       case 2:
//         axios({
//           method: 'get',
//           url: config.apiUrl + '/query/users',
//           header: {'Content-Type': 'application/x-www-form-urlencoded'},
//           params: {nickname: searchString},
//         }).then((response) => {
//           const itemData = response.data;
//           for (let i = 0; i < itemData.length; ++i) {
//             const item = {
//               account: itemData[i].account,
//               uname: itemData[i].uname,
//               followed: itemData[i].followed,
//               follower: itemData[i].follower,
//             };
//             itemList = [...itemList, item];
//             // that.setState({
//             //   resultList: itemList,
//             // });
//           }
//         }).catch();
//         break;
//     }
//     console.log("no22");
//     console.log(itemList);
//     return <SearchList dataSource={itemList} type={i} />;
//   }
//
//   render() {
//     return (
//         <div>
//           <Grid container direction="column" justify="flex-start" alignItems="center">
//             {/* 导航栏*/}
//             <Grid item>
//               <AppBar />
//             </Grid>
//             {/* 导航下面的所有内容*/}
//             <Grid item container direction="row" justify="center" alignItems="flex-start" style={{ marginTop: '20px' }}>
//               {/* 内容左侧的所有内容*/}
//               <Grid item container direction="column" justify="flex-start" alignItems="flex-start" style={{ backgroundColor: 'white', width: '694px', marginRight: '20px' }}>
//                 {/* 左侧推荐/关注/热榜导航栏*/}
//                 <Grid item style={{ height: '59px' }}>
//                   <div style={{ marginTop: '10px' }}>
//                     <Button onClick={this.listChange1}>{this.state.listTag === 1 ? <span style={{ fontSize: '16px', color: 'rgb(0,132,225)' }}>问题</span> : <span style={{ fontSize: '16px' }}>问题</span>}</Button>
//                     <Button onClick={this.listChange2}>{this.state.listTag === 2 ? <span style={{ fontSize: '16px', color: 'rgb(0,132,225)' }}>用户</span> : <span style={{ fontSize: '16px' }}>用户</span>}</Button>
//                     <Button onClick={this.listChange3}>{this.state.listTag === 3 ? <span style={{ fontSize: '16px', color: 'rgb(0,132,225)' }}>回答</span> : <span style={{ fontSize: '16px' }}>回答</span>}</Button>
//                   </div>
//                 </Grid>
//                 {/* 左侧问题List*/}
//                 <Grid item>{this.onSearch(this.state.listTag)}</Grid>
//               </Grid>
//               {/* 内容右侧边栏*/}
//               <Grid item container direction="column" justify="flex-start" alignItems="center" style={{ width: '296px', marginTop: '10px' }}>
//                 {/* 右侧带图标的导航ButtonList */}
//                 <Grid item container direction="row" justify="center" alignItems="center" spacing={2} style={{ backgroundColor: 'white' }}>
//                   <Grid item>
//                     <Link to="/" className="homeView-link-text">
//                       <ContactSupportOutlinedIcon style={{ marginLeft: '3px', color: 'rgb(0,132,225)' }} />
//                       <div style={{ color: 'rgb(118,131,167)' }}>提问</div>
//                     </Link>
//                   </Grid>
//                   <Grid item>
//                     <Link to="/" className="homeView-link-text">
//                       <AccountBalanceOutlinedIcon style={{ marginLeft: '18px', color: 'rgb(255,150,7)' }} />
//                       <div style={{ color: 'rgb(118,131,167)' }}>大学社区</div>
//                     </Link>
//                   </Grid>
//                   <Grid item>
//                     <Link to="/" className="homeView-link-text">
//                       <EventAvailableOutlinedIcon style={{ marginLeft: '18px', color: 'rgb(244,200,7)' }} />
//                       <div style={{ color: 'rgb(118,131,167)' }}>寻找课程</div>
//                     </Link>
//                   </Grid>
//                   <Grid item>
//                     <Link to="/" className="homeView-link-text">
//                       <EmojiEmotionsOutlinedIcon style={{ marginLeft: '18px', color: 'rgb(38,191,191)' }} />
//                       <div style={{ color: 'rgb(118,131,167)' }}>我的兴趣</div>
//                     </Link>
//                   </Grid>
//                 </Grid>
//
//                 {/* 右侧导航ButtonList */}
//                 <Grid item container direction="column" justify="flex-start" alignItems="flex-start" style={{ backgroundColor: 'white', marginTop: '20px', width: '312px' }}>
//                   <Grid item>
//                     <Button className="homeView-button">
//                       <StarOutlinedIcon className="homeView-button-text" />
//                       <span style={{ color: 'rgb(118,131,167)' }}>我的收藏</span>
//                     </Button>
//                   </Grid>
//                   <Grid item>
//                     <Button className="homeView-button">
//                       <ContactSupportOutlinedIcon className="homeView-button-text" />
//                       <span style={{ color: 'rgb(118,131,167)' }}>我关注的问题</span>
//                     </Button>
//                   </Grid>
//                   <Grid item>
//                     <Button className="homeView-button">
//                       <AssignmentIndIcon className="homeView-button-text" />
//                       <span style={{ color: 'rgb(118,131,167)' }}>我关注的人</span>
//                     </Button>
//                   </Grid>
//                   <Grid item>
//                     <Button className="homeView-button">
//                       <AccessibilityNewIcon className="homeView-button-text" />
//                       <span style={{ color: 'rgb(118,131,167)' }}>我的粉丝</span>
//                     </Button>
//                   </Grid>
//                   <Grid item>
//                     <Button className="homeView-button">
//                       <AccountBalanceOutlinedIcon className="homeView-button-text" />
//                       <span style={{ color: 'rgb(118,131,167)' }}>我的社区</span>
//                     </Button>
//                   </Grid>
//                   <Grid item>
//                     <Button className="homeView-button">
//                       <AccountBalanceWalletIcon className="homeView-button-text" />
//                       <span style={{ color: 'rgb(118,131,167)' }}>我的课程</span>
//                     </Button>
//                   </Grid>
//                   <Grid item>
//                     <Button className="homeView-button">
//                       <HeadsetIcon className="homeView-button-text" />
//                       <span style={{ color: 'rgb(118,131,167)' }}>帮助中心</span>
//                     </Button>
//                   </Grid>
//                 </Grid>
//
//                 {/* 右侧网站信息介绍 */}
//                 <Grid item direction="row" justify="flex-start" alignItems="flex-start" style={{ marginTop: '20px', width: '312px' }}>
//                   <div>
//                     <span className="homeView-text">QAQ大学生问答社区开发小组</span>
//                     <br />
//                     <span className="homeView-text">开发成员：SeanChao 对劲</span>
//                     <br />
//                     <span className="homeView-text">没有对象的野指针</span>
//                     <br />
//                     <span className="homeView-text">不可燃的传火侠</span>
//                     <br />
//                     <span className="homeView-text">法人： 法外狂徒</span>
//                     <br />
//                     <span className="homeView-text">联系我们：xxx-xxxxx-xxx</span>
//                   </div>
//                 </Grid>
//               </Grid>
//             </Grid>
//           </Grid>
//         </div>
//     );
//   }
// }
//
// export default SearchView;
