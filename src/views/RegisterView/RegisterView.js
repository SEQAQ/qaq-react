import Avatar from '@material-ui/core/Avatar';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import MenuItem from '@material-ui/core/MenuItem';
import Snackbar from '@material-ui/core/Snackbar';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import MuiAlert from '@material-ui/lab/Alert';
import axios from 'axios';
import React from 'react';
import cookie from 'react-cookies';

import config from '../../utils/config';
import { history } from '../../utils/history';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        QAQ.Inc
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.primary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

function* sleep(ms) {
  yield new Promise(function (resolve) {
    setTimeout(resolve, ms);
  });
}

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default function RegisterView() {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    rname: '',
    account: '',
    password: '',
    confirmPassword: '',
    phone: '',
    email: '',
    sex: '',
    uname: '',
    confirmLaws: false,
  });

  const currencies = [
    {
      value: '男',
      label: '$',
    },
    {
      value: '女',
      label: '€',
    },
  ];

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const [open1, setOpen1] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);
  const [open3, setOpen3] = React.useState(false);
  const [open4, setOpen4] = React.useState(false);
  const [open5, setOpen5] = React.useState(false);
  const [open6, setOpen6] = React.useState(false);
  const [open7, setOpen7] = React.useState(false);
  const [open8, setOpen8] = React.useState(false);
  const [open9, setOpen9] = React.useState(false);

  const handleConfirmLaws = () => {
    setValues({ ...values, confirmLaws: !values.confirmLaws });
  };

  const registerSuccess = () => {
    setOpen1(true);
  };

  const handleClose1 = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen1(false);
  };

  const registerFail = () => {
    setOpen2(true);
  };

  const handleClose2 = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen2(false);
  };

  const confilmFail = () => {
    setOpen3(true);
  };

  const handleClose3 = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen3(false);
  };

  const lawsToBeConfirm = () => {
    setOpen4(true);
  };

  const handleClose4 = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen4(false);
  };

  const errAccountFormate = () => {
    setOpen5(true);
  };

  const handleClose5 = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen5(false);
  };

  const errEmailFormate = () => {
    setOpen6(true);
  };

  const handleClose6 = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen6(false);
  };

  const userExist = () => {
    setOpen7(true);
  };

  const handleClose7 = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen7(false);
  };

  const errPwFormate = () => {
    setOpen8(true);
  };

  const handleClose8 = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen8(false);
  };

  const unFinished = () => {
    setOpen9(true);
  };

  const handleClose9 = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen9(false);
  };

  const register = () => {
    const user_info = {
      account: values.account,
      rname: values.rname,
      uname: values.uname,
      password: values.password,
      phone: values.phone,
      sex: values.sex,
    };
    if (values.password !== values.confirmPassword) {
      confilmFail();
    } else if (values.confirmLaws === false) {
      lawsToBeConfirm();
    } else if (values.rname === null || values.sex === null || values.phone === null || values.uname === null) {
      unFinished();
    } else {
      axios({
        method: 'post',
        url: config.apiUrl + '/users/register',
        data: user_info,
      })
        .then((response) => {
          if (response.status === 200) {
            if (response.data.code === 1) {
              if (response.data.message === 'Wrong account format') {
                errAccountFormate();
              } else if (response.data.message === 'Account exists') {
                userExist();
              } else if (response.data.message === 'Wrong password format') {
                errPwFormate();
              } else if (response.data.message === 'Wrong email format') {
                errEmailFormate();
              }
            } else if (response.data.code === 0) {
              cookie.remove('account', { path: '/' });
              cookie.save('account', values.account, { path: '/' });
              registerSuccess();
              sleep(1000)
                .next()
                .value.then(() => {
                  history.push('/');
                });
            }
          }
        })
        .catch(() => {
          registerFail();
        });
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <PersonAddIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          新用户注册
        </Typography>
        <form className={classes.form}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                autoComplete="account"
                name="account"
                variant="outlined"
                required
                fullWidth
                id="account"
                label="用户名"
                value={values.account}
                onChange={handleChange('account')}
                autoFocus
                placeholder="需包含大小写字母及数字"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField variant="outlined" required="true" fullWidth id="uname" label="昵称" name="uname" autoComplete="nuame" value={values.uname} onChange={handleChange('uname')} />
            </Grid>
            <Grid item xs={12}>
              <TextField id="outlined-select-currency" select label="性别" fullWidth value={values.sex} onChange={handleChange('sex')} variant="outlined">
                {currencies.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.value}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
            <Grid item xs={12}>
              <TextField variant="outlined" required fullWidth id="email" label="电子邮箱" name="email" autoComplete="email" value={values.email} onChange={handleChange('email')} placeholder="需格式正确且唯一" />
            </Grid>
            <Grid item xs={12}>
              <TextField variant="outlined" required fullWidth id="phone" label="手机号码" name="phone" autoComplete="phone" value={values.phone} onChange={handleChange('phone')} placeholder="需格式正确且唯一" />
            </Grid>
            <Grid item xs={12}>
              <TextField variant="outlined" required fullWidth name="password" label="密码" type="password" id="password" autoComplete="current-password" value={values.password} onChange={handleChange('password')} />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required={'true'}
                fullWidth
                name="comfirmPw"
                label="确认密码"
                type="password"
                id="confirmPw"
                autoComplete="confirm-password"
                value={values.confirmPassword}
                onChange={handleChange('confirmPassword')}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel control={<Checkbox value={values.confirmLaws} color="primary" />} label={'已阅读并同意'} onClick={handleConfirmLaws} />
              <Link color="primary" href="https://material-ui.com/">
                《隐私保护协议》
              </Link>
              <Link color="primary" href="https://material-ui.com/">
                《QAQ用户协议》
              </Link>
            </Grid>
          </Grid>
          <Button fullWidth variant="contained" color="primary" className={classes.submit} onClick={register}>
            注册
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="/users/login" variant="body2">
                已有QAQ账号？点击这里登录
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
      <Snackbar open={open1} autoHideDuration={6000} onClose={handleClose1}>
        <Alert onClose={handleClose1} severity="success">
          欢迎加入QAQ，完成激活后即可登录~
        </Alert>
      </Snackbar>
      <Snackbar open={open2} autoHideDuration={6000} onClose={handleClose2}>
        <Alert onClose={handleClose2} severity="error">
          注册失败，请稍后再试
        </Alert>
      </Snackbar>
      <Snackbar open={open3} autoHideDuration={6000} onClose={handleClose3}>
        <Alert onClose={handleClose3} severity="warning">
          确认密码不一致，请重新输入
        </Alert>
      </Snackbar>
      <Snackbar open={open4} autoHideDuration={6000} onClose={handleClose4}>
        <Alert onClose={handleClose4} severity="warning">
          阅读并同意许可条款，即可完成注册
        </Alert>
      </Snackbar>
      <Snackbar open={open5} autoHideDuration={6000} onClose={handleClose5}>
        <Alert onClose={handleClose5} severity="warning">
          用户名格式不正确，请重新输入
        </Alert>
      </Snackbar>
      <Snackbar open={open6} autoHideDuration={6000} onClose={handleClose6}>
        <Alert onClose={handleClose6} severity="warning">
          邮箱格式不正确，请重新输入
        </Alert>
      </Snackbar>
      <Snackbar open={open7} autoHideDuration={6000} onClose={handleClose7}>
        <Alert onClose={handleClose7} severity="warning">
          用户名已被注册，请重新输入
        </Alert>
      </Snackbar>
      <Snackbar open={open8} autoHideDuration={6000} onClose={handleClose8}>
        <Alert onClose={handleClose8} severity="warning">
          密码格式不正确，请重新输入
        </Alert>
      </Snackbar>
      <Snackbar open={open9} autoHideDuration={6000} onClose={handleClose9}>
        <Alert onClose={handleClose9} severity="warning">
          请先完成基本信息填写哦
        </Alert>
      </Snackbar>
    </Container>
  );
}
