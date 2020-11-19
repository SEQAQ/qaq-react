import Avatar from '@material-ui/core/Avatar';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import InputLabel from '@material-ui/core/InputLabel';
import Link from '@material-ui/core/Link';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import Snackbar from '@material-ui/core/Snackbar';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import PersonIcon from '@material-ui/icons/Person';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
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

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

function* sleep(ms) {
  yield new Promise(function (resolve) {
    setTimeout(resolve, ms);
  });
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
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function LoginView() {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    account: '',
    password: '',
  });

  const [open1, setOpen1] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);
  const [open3, setOpen3] = React.useState(false);
  const [open4, setOpen4] = React.useState(false);

  const loginSuccess = () => {
    setOpen1(true);
  };

  const handleClose1 = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen1(false);
  };

  const noSuchUser = () => {
    setOpen2(true);
  };

  const handleClose2 = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen2(false);
  };

  const passwordError = () => {
    setOpen3(true);
  };

  const handleClose3 = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen3(false);
  };

  const accountAbnormal = () => {
    setOpen4(true);
  };

  const handleClose4 = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen4(false);
  };

  const login = () => {
    axios({
      method: 'post',
      url: config.apiUrl,
      header: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      params: {
        account: values.account,
        password: values.password,
      },
    })
      .then((response) => {
        if (response.status === 200) {
          console.log(response);
          if (response.data === 'Success') {
            cookie.remove('userName');
            cookie.save('userName', values.uname, { path: '/' });
            loginSuccess();
            sleep(1000)
              .next()
              .value.then(() => {
                history.push('/people');
              });
          } else if (response.data === "User doesn't exist") {
            noSuchUser();
          } else if (response.data === 'Password is wrong') {
            passwordError();
          } else if (response.data === 'User is banned or deleted') {
            accountAbnormal();
          }
        }
      })
      .catch();
  };

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <PersonIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          登录QAQ
        </Typography>
        <form>
          <TextField
            value={values.account}
            onChange={handleChange('account')}
            className={classes.form}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="account"
            label="账户"
            name="account"
            autoComplete="account"
            autoFocus
          />
          <FormControl className={classes.form} variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password" required>
              密码
            </InputLabel>
            <OutlinedInput
              required
              id="outlined-adornment-password"
              type={values.showPassword ? 'text' : 'password'}
              value={values.password}
              onChange={handleChange('password')}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton aria-label="toggle password visibility" onClick={handleClickShowPassword} onMouseDown={handleMouseDownPassword} edge="end">
                    {values.showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              }
              labelWidth={70}
            />
          </FormControl>
          <FormControlLabel control={<Checkbox value="remember" color="primary" />} label="记住我" />
          <Button fullWidth variant="contained" color="primary" className={classes.submit} onClick={login}>
            登录
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                忘记密码？
              </Link>
            </Grid>
            <Grid item>
              <Link href="/register" variant="body2">
                {'还没有QAQ账号？立即注册'}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
      <Snackbar open={open1} autoHideDuration={6000} onClose={handleClose1}>
        <Alert onClose={handleClose1} severity="success">
          登陆成功，欢迎您！
        </Alert>
      </Snackbar>
      <Snackbar open={open2} autoHideDuration={6000} onClose={handleClose2}>
        <Alert onClose={handleClose2} severity="error">
          账户不存在，请重新输入
        </Alert>
      </Snackbar>
      <Snackbar open={open3} autoHideDuration={6000} onClose={handleClose3}>
        <Alert onClose={handleClose3} severity="error">
          密码错误，请重新输入
        </Alert>
      </Snackbar>
      <Snackbar open={open4} autoHideDuration={6000} onClose={handleClose4}>
        <Alert onClose={handleClose4} severity="warning">
          账号已注销或等待解封
        </Alert>
      </Snackbar>
    </Container>
  );
}
