import React from 'react';
import { Link, Redirect, Route, Router, Switch } from 'react-router-dom';

import ProfileHeader from './component/Profile/ProfileHeader';
import PrivateRoute from './PrivateRoute';
import { history } from './utils/history';
import Activity from './views/Activity/Activity';
import HomeView from './views/homeView/HomeView';
import LoginView from './views/loginView/LoginView';
import { QuestionView } from './views/Question';
import RegisterView from './views/registerView/RegisterView';

const profileDemoData = {
  username: 'QAQ 小编',
  gender: 1,
  img: 'https://avatars1.githubusercontent.com/u/71007591',
  intro: '哦！我向上帝发誓，我什么也不知道。我打赌，我会把QAQ问到倒闭！看在玛丽亚的份上，请回答我的问题吧！',
};

const BasicRoute = () => (
  <>
    <Router history={history}>
      <div>
        This part is for development preview purpose when the homepage is not fully implemented. Remove this section after the HomeView is done.
        <Link to="/people">用户动态(Avatar, Follow Button, Profile Header)</Link>
        <Link to="/question">问题页</Link>
      </div>
      <Switch>
        <PrivateRoute exact path="/" component={HomeView} />
        <Route path="/question">
          <QuestionView />
        </Route>
        <Route path="/people">
          <Activity />
        </Route>
        <Route path="/dev/profileHeader">
          <ProfileHeader data={profileDemoData} />
        </Route>
        <Route exact path="/login" component={LoginView} />
        <Route exact path="/register" component={RegisterView} />
        <Redirect from="/*" to="/" />
      </Switch>
    </Router>
  </>
);

export default BasicRoute;
