import React from 'react';
import { Link, Redirect, Route, Router, Switch } from 'react-router-dom';

import PrivateRoute from './PrivateRoute';
import { history } from './utils/history';
import Activity from './views/Activity/Activity';
import AskView from './views/Ask/AskView';
import HomeView from './views/homeView/HomeView';
import LoginView from './views/loginView/LoginView';
import ProfileView from './views/personalView/ProfileView';
import { QuestionView } from './views/Question';
import RegisterView from './views/registerView/RegisterView';

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
          <Link to={'/login'}>登录页</Link>
        </div>
        <div>
          <Link to={'/register'}>注册页</Link>
        </div>
        <div>
          <Link to="/ask">提问</Link>
        </div>
        <div>
          <Link to={'/profile'}>个人信息修改</Link>
        </div>
      </div>
      </div>*/}
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
        <Route exact path={'/profile'} component={ProfileView}></Route>
        <Route exact path="/login" component={LoginView} />
        <Route exact path="/register" component={RegisterView} />
        <Redirect from="/*" to="/" />
      </Switch>
    </Router>
  </>
);

export default BasicRoute;
