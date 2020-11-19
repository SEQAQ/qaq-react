import Grid from '@material-ui/core/Grid';
import React from 'react';
import { Redirect, Route, Router, Switch } from 'react-router-dom';

import AppBar from '../src/component/AppBar/AppBar';
/* import PrivateRoute from './PrivateRoute'; */
import { history } from './utils/history';
import Activity from './views/Activity/Activity';
import AskView from './views/Ask/AskView';
import HomeView from './views/HomeView/HomeView';
import LoginView from './views/LoginView/LoginView';
import ProfileView from './views/PersonalView/ProfileView';
import { QuestionView } from './views/Question';
import RegisterView from './views/RegisterView/RegisterView';
import SearchView from './views/SearchView/SearchView';

const BasicRoute = () => (
  <>
    <Router history={history}>
      {/*  <div>
        This part is for development preview purpose when the homepage is not fully implemented. Remove this section after the HomeView is done.
        <div>
          <Link to="/people">用户动态(Avatar, Follow Button, Profile Header)</Link>
        </div>
        <div>
          <Link to="/question">问题页</Link>
        </div>
        <div>
          <Link to={'/users/login'}>登录页</Link>
        </div>
        <div>
          <Link to={'/users/register'}>注册页</Link>
        </div>
        <div>
          <Link to="/ask">提问</Link>
        </div>
        <div>
          <Link to={'/profile'}>个人信息修改</Link>
        </div>
        <div>
          <Link to={'/search'}>搜索结果</Link>
        </div>
      </div>
      </div>*/}
      <Grid container direction="column" justify="flex-start" alignItems="center">
        <Grid item>
          <AppBar />
        </Grid>
        <Grid item>
          <Switch>
            <Route exact path="/" component={HomeView} />
            <Route path="/question/:id">
              <QuestionView />
            </Route>
            <Route path="/people">
              <Activity />
            </Route>
            <Route path="/ask">
              <AskView />
            </Route>
            <Route exact path={'/profile'} component={ProfileView} />
            <Route exact path="/users/login" component={LoginView} />
            <Route exact path="/users/register" component={RegisterView} />
            <Route exact path={'/search'} component={SearchView} />
            <Redirect from="/*" to="/" />
          </Switch>
        </Grid>
      </Grid>
    </Router>
  </>
);

export default BasicRoute;
