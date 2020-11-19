import './ProfileView.css';

import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import CreateIcon from '@material-ui/icons/Create';
import React from 'react';

// const useStyles = makeStyles((theme) => ({
//     root: {
//         "& > *": {
//             margin: theme.spacing(1)
//         }
//     },
//     input: {
//         display: "none"
//     },
//     cover: {}
// }));
const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(0),
    },
  },
  input: {
    display: 'flex', // 使用flex布局
    position: 'absolute', // 绝对定位
    top: '4px', // 距离父级元素顶部4像素
    left: '4px', // 距离父级元素左侧4像素（为了不覆盖边框）
    zIndex: 10, // 遮罩层的堆叠层级（只要设置的比被遮罩元素高就行）
    height: '160px', // 与父级元素同高
    width: '160px', // 与父级元素同宽
    background: 'rgba(0,0,0,0.4)', // 半透明背景
    textAlign: 'center',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderRadius: '4px',
  },
}));

const whiteButtons = makeStyles({
  root: {
    color: 'white',
    borderColor: 'white',
  },
});

const buttonModifies = makeStyles({
  root: {
    marginLeft: '16px',
  },
});

const backButtonStyles = makeStyles({
  root: {
    // position: 'absolute',
    top: '8px',
    right: '0',
  },
});

const ProfileView = () => {
  const classes = useStyles();
  const whiteButton = whiteButtons();
  const buttonModify = buttonModifies();
  const backButton = backButtonStyles();
  const user_cover = 'https://pic1.zhimg.com/80/v2-f66db98399499b67a6c83bb4481753f6_r.jpg';
  // const avatar = 'https://pic1.zhimg.com/v2-7e6d805ad8b081301ee5440e49b994e9_xl.jpg';
  // const user_cover = 'https://pbs.twimg.com/media/Ci73i2cUgAEw0GG?format=jpg&name=900x900';
  const avatar = 'https://pic3.zhimg.com/80/v2-92c7b36ae98d5a5b5daef60fb3696b6f_r.jpg';

  return (
    <div className={'profile-edit'}>
      <div className={'profile card'}>
        <div className="profile-header-header">
          {/* <div>*/}
          {/*   <label className={classes.root}>*/}
          {/*       /!* Edit User Cover - banned at present *!/*/}
          {/*       <input*/}
          {/*           accept="image/jpeg,image/png"*/}
          {/*           className={classes.input}*/}
          {/*           id="contained-button-file"*/}
          {/*           multiple*/}
          {/*           type="file"*/}
          {/*           // hidden={true}*/}
          {/*       />*/}
          {/*       <Button htmlFor="contained-button-file" variant="outlined" color="primary" component="span">*/}
          {/*           Upload*/}
          {/*       </Button>*/}
          {/*   </label>*/}
          {/* </div>*/}
          <div className="user-cover">
            <img className="user-cover-img" src={user_cover} alt={'用户封面'} />
          </div>
        </div>
        <div className="profile-header-main">
          <div className={'profile-avatar-editor'}>
            <div className={'user-avatar'}>
              <div className={classes.root}>
                <img className={'avatar-img'} src={avatar} alt={'用户头像'} />
              </div>
              <label className={classes.input}>
                <input accept="image/jpeg,image/png" id="contained-button-file" multiple type="file" hidden={true} />
                <Button
                  htmlFor="contained-button-file"
                  variant="outlined"
                  component="span"
                  classes={{
                    root: whiteButton.root,
                  }}
                >
                  上传头像
                </Button>
              </label>
            </div>
          </div>
          <div className={'profile-content'}>
            <div className={'profile-content-header'}>
              <h2 className={'profile-content-title'}>
                <div className={'full-name-field-editable'}>
                  <span className={'full-name-field-name'}>Tadokoro Kouji</span>
                  <div className={''}>
                    <Button
                      classes={{
                        root: backButton.root,
                      }}
                      color={'disable'}
                      endIcon={<ChevronRightIcon />}
                    >
                      返回我的主页
                    </Button>
                  </div>
                </div>
              </h2>
            </div>
            <div className={'profile-fields'}>
              <form className={'field'}>
                <h3 className={'field-label'}>性别</h3>
                <div className={'field-content'}>
                  <div>
                    <span className={'field-text'}>男</span>
                    <Button
                      classes={{
                        root: buttonModify.root,
                      }}
                      className={'button-field-modify'}
                      color={'primary'}
                      startIcon={<CreateIcon />}
                    >
                      修改
                    </Button>
                  </div>
                </div>
              </form>
              <form className={'field'}>
                <h3 className={'field-label'}>年龄</h3>
                <div className={'field-content'}>
                  <div>
                    24岁
                    <Button
                      classes={{
                        root: buttonModify.root,
                      }}
                      className={'button-field-modify'}
                      color={'primary'}
                      startIcon={<CreateIcon />}
                    >
                      修改
                    </Button>
                  </div>
                </div>
              </form>
              <form className={'field'}>
                <h3 className={'field-label'}>所在行业</h3>
                <div className={'field-content'}>
                  <div>
                    学生
                    <Button
                      classes={{
                        root: buttonModify.root,
                      }}
                      className={'button-field-modify'}
                      color={'primary'}
                      startIcon={<CreateIcon />}
                    >
                      修改
                    </Button>
                  </div>
                </div>
              </form>
              <form className={'field'}>
                <h3 className={'field-label'}>居住地</h3>
                <div className={'field-content'}>
                  <div>
                    下北泽
                    <Button
                      classes={{
                        root: buttonModify.root,
                      }}
                      className={'button-field-modify'}
                      color={'primary'}
                      startIcon={<CreateIcon />}
                    >
                      修改
                    </Button>
                  </div>
                </div>
              </form>
              <form className={'field'}>
                <h3 className={'field-label'}>联系方式</h3>
                <div className={'field-content'}>
                  <div>
                    114-5141919810
                    <Button
                      classes={{
                        root: buttonModify.root,
                      }}
                      className={'button-field-modify'}
                      color={'primary'}
                      startIcon={<CreateIcon />}
                    >
                      修改
                    </Button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileView;
