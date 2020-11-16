import Avatar from '@material-ui/core/Avatar';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import React from 'react';

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

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
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
              <TextField autoComplete="uname" name="userName" variant="outlined" required fullWidth id="userName" label="用户名" value={values.uname} onChange={handleChange('uname')} autoFocus />
            </Grid>
            <Grid item xs={12}>
              <TextField variant="outlined" required fullWidth id="name" label="姓名" name="name" autoComplete="name" value={values.rname} onChange={handleChange('rname')} />
            </Grid>
            <Grid item xs={12}>
              <TextField variant="outlined" required fullWidth id="gender" label="性别" name="gender" autoComplete="gender" value={values.sex} onChange={handleChange('sex')} />
            </Grid>
            <Grid item xs={12}>
              <TextField variant="outlined" required fullWidth id="email" label="电子邮箱" name="email" autoComplete="email" value={values.email} onChange={handleChange('email')} />
            </Grid>
            <Grid item xs={12}>
              <TextField variant="outlined" required fullWidth id="phone" label="手机号码" name="phone" autoComplete="phone" value={values.phone} onChange={handleChange('phone')} />
            </Grid>
            <Grid item xs={12}>
              <TextField variant="outlined" required fullWidth name="password" label="密码" type="password" id="password" autoComplete="current-password" value={values.password} onChange={handleChange('password')} />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
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
              <FormControlLabel control={<Checkbox value={values.confirmLaws} color="primary" />} label={'已阅读并同意'} />
              <Link color="primary" href="https://material-ui.com/">
                《隐私保护协议》
              </Link>
              <Link color="primary" href="https://material-ui.com/">
                《QAQ用户协议》
              </Link>
            </Grid>
          </Grid>
          <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
            注册
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="/login" variant="body2">
                已有QAQ账号？点击这里登录
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
}
