import './SearchView.css';

import { Link } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Badge from '@material-ui/core/Badge';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import InputBase from '@material-ui/core/InputBase';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { fade } from '@material-ui/core/styles';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
// import MenuIcon from '@material-ui/icons/Menu';
import MoreIcon from '@material-ui/icons/MoreVert';
import NotificationsIcon from '@material-ui/icons/Notifications';
import PersonIcon from '@material-ui/icons/Person';
import SearchIcon from '@material-ui/icons/Search';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import VisibilityIcon from '@material-ui/icons/Visibility';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

import { QAFeedList } from '../../component/Feed';
import SearchList from '../../component/SearchList/SearchList';
import config from '../../utils/config';

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  appText: {
    underline: 'none',
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.black, 0.1),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.black, 0.05),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(5),
      width: 'auto',
    },
  },
  itemButtons: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    marginRight: theme.spacing(1),
    marginLeft: theme.spacing(1),
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchButton: {
    zIndex: 10,
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(1)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
}));

const SearchView = (props) => {
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const [values, setValues] = React.useState({
    // searchString: props.location.state.searchString,
  });
  const [feedList, setFeedList] = useState([]);
  const [resultList, setResultList] = useState([]);
  const handleChange = (ev, newVal) => setValue(newVal);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const handleChange2 = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const menuId = 'primary-search-account-menu';
  const mobileMenuId = 'primary-search-account-menu-mobile';

  useEffect(() => {
    setFeedList([
      { author: 'Author', action: 0, title: '什么是 Q∀Q?', content: '知乎，不行！\nQ∀Q 彳亍！\n' },
      { author: 'undefined!', action: 1, title: '宇宙的终极答案是什么？', content: '4 2\n' },
    ]);
  }, []);

  const renderMenu = (
    <Menu anchorEl={anchorEl} anchorOrigin={{ vertical: 'top', horizontal: 'right' }} id={menuId} keepMounted transformOrigin={{ vertical: 'top', horizontal: 'right' }} open={isMenuOpen} onClose={handleMenuClose}>
      <MenuItem onClick={handleMenuClose}>个人信息</MenuItem>
      <MenuItem onClick={handleMenuClose}>账号登出</MenuItem>
    </Menu>
  );

  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="secondary">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton aria-label="show 11 new notifications" color="inherit">
          <Badge badgeContent={11} color="secondary">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton aria-label="account of current user" aria-controls="primary-search-account-menu" aria-haspopup="true" color="inherit">
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  const onBarSearch = () => {
    history.push({ path: '/', state: { searchString: values.searchString } });
  };

  const onSearch = (i) => {
    // const that = this;
    const searchString = searchString;
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
    return <SearchList dataSource={itemList} type={i} />;
  };

  return (
    <div>
      <AppBar position="static" color={'inherit'}>
        <Toolbar>
          {/* <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">*/}
          {/*  <MenuIcon />*/}
          {/* </IconButton>*/}
          <Typography variant="h4" className={classes.title} color={'primary'}>
            <Link href={'/'} underline={'none'}>
              Q∀Q
            </Link>
          </Typography>
          <div className={classes.itemButtons}>
            {/* <Grid item style={{ marginLeft: '10px', marginRight: '10px' }}>*/}
            <Button href={'/'}>发现</Button>
            <Button href={'/'}>回答</Button>
            {/* </Grid>*/}
          </div>
          <div className={classes.search}>
            {/* <div className={classes.searchIcon}>*/}
            {/*  <SearchIcon />*/}
            {/* </div>*/}
            <InputBase
              placeholder="搜索"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
              value={values.searchString}
              onChange={handleChange2('searchString')}
            />
          </div>
          <div>
            <Button
              className={classes.searchButton}
              // onClick={}
            >
              <SearchIcon />
            </Button>
          </div>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <IconButton color="inherit">
              <Badge badgeContent={4} color="secondary">
                <MailIcon />
              </Badge>
            </IconButton>
            <IconButton aria-label="show 17 new notifications" color="inherit">
              <Badge badgeContent={17} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton edge="end" aria-label="account of current user" aria-controls={menuId} aria-haspopup="true" onClick={handleProfileMenuOpen} color="inherit">
              <AccountCircle />
            </IconButton>
          </div>
          <div className={classes.sectionMobile}>
            <IconButton aria-label="show more" aria-controls={mobileMenuId} aria-haspopup="true" onClick={handleMobileMenuOpen} color="inherit">
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
      <div className="profile-main">
        <div className="card profile-act">
          <Tabs value={value} indicatorColor="primary" textColor="primary" onChange={handleChange} aria-label="disabled tabs example">
            <Tab label="问题" style={{ width: '10px' }} />
            <Tab label="用户" />
            <Tab label="回答" />
            <Tab label="关注" />
          </Tabs>
          <QAFeedList dataSource={feedList} />
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
