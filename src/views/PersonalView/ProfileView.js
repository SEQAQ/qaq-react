import './ProfileView.css';

import Button from '@material-ui/core/Button';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import MenuItem from '@material-ui/core/MenuItem';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import Select from '@material-ui/core/Select';
import Snackbar from '@material-ui/core/Snackbar';
import { makeStyles } from '@material-ui/core/styles';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import CreateIcon from '@material-ui/icons/Create';
import DeleteIcon from '@material-ui/icons/Delete';
import SaveIcon from '@material-ui/icons/Save';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import MuiAlert from '@material-ui/lab/Alert';
import React, { useEffect } from 'react';

import { get, post, userInfo } from '../../lib';
import config from '../../utils/config';
import { history } from '../../utils/history';

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

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

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
  const [values, setValues] = React.useState({
    account: '',
    uname: '',
    password: '',
    email: '',
    phone: '',
    sex: '',
    department: '',
    rname: '',
    education: '',
    cid: '',
  });

  const [edit1, setEdit1] = React.useState(false);
  const doEdit1 = () => {
    setEdit1(true);
  };
  const closeEdit1 = () => {
    setEdit1(false);
  };
  const [edit2, setEdit2] = React.useState(false);
  const doEdit2 = () => {
    setEdit2(true);
  };
  const closeEdit2 = () => {
    setEdit2(false);
  };
  const [edit3, setEdit3] = React.useState(false);
  const doEdit3 = () => {
    setEdit3(true);
  };
  const closeEdit3 = () => {
    setEdit3(false);
  };
  const [edit4, setEdit4] = React.useState(false);
  const doEdit4 = () => {
    setEdit4(true);
  };
  const closeEdit4 = () => {
    setEdit4(false);
  };
  const [edit5, setEdit5] = React.useState(false);
  const doEdit5 = () => {
    setEdit5(true);
  };
  const closeEdit5 = () => {
    setEdit5(false);
  };
  const [edit6, setEdit6] = React.useState(false);
  const doEdit6 = () => {
    setEdit6(true);
  };
  const closeEdit6 = () => {
    setEdit6(false);
  };
  const [edit7, setEdit7] = React.useState(false);
  const doEdit7 = () => {
    setEdit7(true);
  };
  const closeEdit7 = () => {
    setEdit7(false);
  };

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const backToMyPage = () => {
    history.push('/');
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const [open1, setOpen1] = React.useState(false);
  const editSuccess = () => {
    setOpen1(true);
  };

  const handleClose1 = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen1(false);
  };

  useEffect(() => {
    get(config.apiUrl + '/users/findbyaccount', { account: userInfo().account }, true).then((data) => {
      setValues({
        account: data.account,
        uname: data.uname,
        password: data.password,
        email: data.email,
        phone: data.phone,
        sex: data.sex,
        department: data.department,
        rname: data.rname,
      });
    });
  }, []);

  const setProfile = () => {
    const newProfile = userInfo();
    newProfile.uname = values.uname;
    newProfile.password = values.password;
    newProfile.phone = values.phone;
    newProfile.sex = values.sex;
    newProfile.department = values.department;
    newProfile.rname = values.rname;
    // const data = {
    //   uname: values.uname,
    //   password: values.password,
    //   email: values.email,
    //   phone: values.phone,
    //   sex: values.sex,
    //   department: values.department,
    //   rname: values.rname
    // };
    post(config.apiUrl + '/users/edit', newProfile, true).then(() => {
      editSuccess();
    });
  };

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
                  <span className={'full-name-field-name'}>{userInfo().account === null ? <>Tadokoro Kouji</> : userInfo().account}</span>
                  <div className={''}>
                    <Button
                      classes={{
                        root: backButton.root,
                      }}
                      color={'disable'}
                      endIcon={<ChevronRightIcon />}
                      onClick={backToMyPage}
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
                  <div hidden={edit1}>
                    <span className={'field-text'}>{values.sex}</span>
                    <Button
                      classes={{
                        root: buttonModify.root,
                      }}
                      className={'button-field-modify'}
                      color={'primary'}
                      startIcon={<CreateIcon />}
                      onClick={doEdit1}
                    >
                      修改
                    </Button>
                  </div>

                  <div hidden={!edit1}>
                    <RadioGroup aria-label="gender" name="gender1" value={values.sex} onChange={handleChange('sex')}>
                      <FormControlLabel value="男" control={<Radio />} label="男" />
                      <FormControlLabel value="女" control={<Radio />} label="女" />
                    </RadioGroup>
                    <Button
                      classes={{
                        root: buttonModify.root,
                      }}
                      variant="outlined"
                      className={'button-field-modify'}
                      color={'primary'}
                      endIcon={<SaveIcon />}
                      onClick={setProfile}
                    >
                      保存
                    </Button>
                    <Button
                      classes={{
                        root: buttonModify.root,
                      }}
                      variant="outlined"
                      className={'button-field-modify'}
                      color={'secondary'}
                      endIcon={<DeleteIcon />}
                      onClick={closeEdit1}
                    >
                      取消
                    </Button>
                  </div>
                </div>
              </form>
              <form className={'field'}>
                <h3 className={'field-label'}>昵称</h3>
                <div className={'field-content'}>
                  <div hidden={edit2}>
                    {values.uname}
                    <Button
                      classes={{
                        root: buttonModify.root,
                      }}
                      className={'button-field-modify'}
                      color={'primary'}
                      startIcon={<CreateIcon />}
                      onClick={doEdit2}
                    >
                      修改
                    </Button>
                  </div>
                  {/* 修改 */}
                  <div hidden={!edit2}>
                    <Input defaultValue={values.uname} inputProps={{ 'aria-label': 'description' }} onChange={handleChange('uname')} />
                    <Button
                      classes={{
                        root: buttonModify.root,
                      }}
                      variant="outlined"
                      className={'button-field-modify'}
                      color={'primary'}
                      endIcon={<SaveIcon />}
                      onClick={setProfile}
                    >
                      保存
                    </Button>
                    <Button
                      classes={{
                        root: buttonModify.root,
                      }}
                      variant="outlined"
                      className={'button-field-modify'}
                      color={'secondary'}
                      endIcon={<DeleteIcon />}
                      onClick={closeEdit2}
                    >
                      取消
                    </Button>
                  </div>
                </div>
              </form>
              <form className={'field'}>
                <h3 className={'field-label'}>密码</h3>
                <div className={'field-content'}>
                  <div hidden={edit3}>
                    {/* {values.password}*/}
                    <Button
                      classes={{
                        root: buttonModify.root,
                      }}
                      className={'button-field-modify'}
                      color={'primary'}
                      startIcon={<CreateIcon />}
                      onClick={doEdit3}
                    >
                      修改
                    </Button>
                  </div>
                  <div hidden={!edit3}>
                    <Input
                      defaultValue={values.password}
                      inputProps={{ 'aria-label': 'description' }}
                      type={values.showPassword ? 'text' : 'password'}
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton aria-label="toggle password visibility" onClick={handleClickShowPassword} onMouseDown={handleMouseDownPassword} edge="end" onChange={handleChange('password')}>
                            {values.showPassword ? <Visibility /> : <VisibilityOff />}
                          </IconButton>
                        </InputAdornment>
                      }
                    />
                    <Button
                      classes={{
                        root: buttonModify.root,
                      }}
                      variant="outlined"
                      className={'button-field-modify'}
                      color={'primary'}
                      endIcon={<SaveIcon />}
                      onClick={setProfile}
                    >
                      保存
                    </Button>
                    <Button
                      classes={{
                        root: buttonModify.root,
                      }}
                      variant="outlined"
                      className={'button-field-modify'}
                      color={'secondary'}
                      endIcon={<DeleteIcon />}
                      onClick={closeEdit3}
                    >
                      取消
                    </Button>
                  </div>
                </div>
              </form>
              <form className={'field'}>
                <h3 className={'field-label'}>邮箱</h3>
                <div className={'field-content'}>
                  <div hidden={edit4}>
                    {values.email}
                    <Button
                      classes={{
                        root: buttonModify.root,
                      }}
                      className={'button-field-modify'}
                      color={'primary'}
                      startIcon={<CreateIcon />}
                      onClick={doEdit4}
                    >
                      修改
                    </Button>
                  </div>
                  <div hidden={!edit4}>
                    <Input defaultValue={values.email} inputProps={{ 'aria-label': 'description' }} onChange={handleChange('email')} />
                    <Button
                      classes={{
                        root: buttonModify.root,
                      }}
                      variant="outlined"
                      className={'button-field-modify'}
                      color={'primary'}
                      endIcon={<SaveIcon />}
                      onClick={setProfile}
                    >
                      保存
                    </Button>
                    <Button
                      classes={{
                        root: buttonModify.root,
                      }}
                      variant="outlined"
                      className={'button-field-modify'}
                      color={'secondary'}
                      endIcon={<DeleteIcon />}
                      onClick={closeEdit4}
                    >
                      取消
                    </Button>
                  </div>
                </div>
              </form>
              <form className={'field'}>
                <h3 className={'field-label'}>联系方式</h3>
                <div className={'field-content'}>
                  <div hidden={edit5}>
                    {values.phone}
                    <Button
                      classes={{
                        root: buttonModify.root,
                      }}
                      className={'button-field-modify'}
                      color={'primary'}
                      startIcon={<CreateIcon />}
                      onClick={doEdit5}
                    >
                      修改
                    </Button>
                  </div>
                  <div hidden={!edit5}>
                    <Input defaultValue={values.phone} inputProps={{ 'aria-label': 'description' }} onChange={handleChange('phone')} />
                    <Button
                      classes={{
                        root: buttonModify.root,
                      }}
                      variant="outlined"
                      className={'button-field-modify'}
                      color={'primary'}
                      endIcon={<SaveIcon />}
                      onClick={setProfile}
                    >
                      保存
                    </Button>
                    <Button
                      classes={{
                        root: buttonModify.root,
                      }}
                      variant="outlined"
                      className={'button-field-modify'}
                      color={'secondary'}
                      endIcon={<DeleteIcon />}
                      onClick={closeEdit5}
                    >
                      取消
                    </Button>
                  </div>
                </div>
              </form>
              <form className={'field'}>
                <h3 className={'field-label'}>学校</h3>
                <div className={'field-content'}>
                  <div hidden={edit6}>
                    <Select value={values.cid} onChange={handleChange('cid')} displayEmpty className={classes.selectEmpty} inputProps={{ readOnly: true, 'aria-label': 'Without label' }}>
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value={1}>下北泽大学</MenuItem>
                      <MenuItem value={2}>下北泽大学（分校）</MenuItem>
                      <MenuItem value={3}>下北泽大学（继续教育学院）</MenuItem>
                    </Select>
                    <Button
                      classes={{
                        root: buttonModify.root,
                      }}
                      className={'button-field-modify'}
                      color={'primary'}
                      startIcon={<CreateIcon />}
                      onClick={doEdit6}
                    >
                      修改
                    </Button>
                  </div>
                  <div hidden={!edit6}>
                    <Select value={values.cid} onChange={handleChange('cid')} displayEmpty className={classes.selectEmpty} inputProps={{ 'aria-label': 'Without label' }}>
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value={1}>下北泽大学</MenuItem>
                      <MenuItem value={2}>下北泽大学（分校）</MenuItem>
                      <MenuItem value={3}>下北泽大学（继续教育学院）</MenuItem>
                    </Select>
                    <Button
                      classes={{
                        root: buttonModify.root,
                      }}
                      variant="outlined"
                      className={'button-field-modify'}
                      color={'primary'}
                      endIcon={<SaveIcon />}
                      onClick={setProfile}
                    >
                      保存
                    </Button>
                    <Button
                      classes={{
                        root: buttonModify.root,
                      }}
                      variant="outlined"
                      className={'button-field-modify'}
                      color={'secondary'}
                      endIcon={<DeleteIcon />}
                      onClick={closeEdit6}
                    >
                      取消
                    </Button>
                  </div>
                </div>
              </form>
              <form className={'field'}>
                <h3 className={'field-label'}>学历</h3>
                <div className={'field-content'}>
                  <div hidden={edit7}>
                    {values.education}
                    <Button
                      classes={{
                        root: buttonModify.root,
                      }}
                      className={'button-field-modify'}
                      color={'primary'}
                      startIcon={<CreateIcon />}
                      onClick={doEdit7}
                    >
                      修改
                    </Button>
                  </div>
                  <div hidden={!edit7}>
                    <Input defaultValue={values.education} inputProps={{ 'aria-label': 'description' }} />
                    <Button
                      classes={{
                        root: buttonModify.root,
                      }}
                      variant="outlined"
                      className={'button-field-modify'}
                      color={'primary'}
                      endIcon={<SaveIcon />}
                    >
                      保存
                    </Button>
                    <Button
                      classes={{
                        root: buttonModify.root,
                      }}
                      variant="outlined"
                      className={'button-field-modify'}
                      color={'secondary'}
                      endIcon={<DeleteIcon />}
                      onClick={closeEdit7}
                    >
                      取消
                    </Button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Snackbar open={open1} autoHideDuration={6000} onClose={handleClose1}>
        <Alert onClose={handleClose1} severity="success">
          登陆成功，欢迎您！
        </Alert>
      </Snackbar>
    </div>
  );
};

export default ProfileView;
