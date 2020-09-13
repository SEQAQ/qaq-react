import React from 'react';
import { Router, Route, Switch, Redirect, Link } from 'react-router-dom';

/* import PrivateRoute from './PrivateRoute';*/
import HomeView from './views/HomeView/HomeView';
import LoginView from './views/LoginView/LoginView';
import RegisterView from './views/RegisterView/RegisterView';
import Activity from './views/Activity/Activity';
import { history } from './utils/history';

const BasicRoute = () => (
  <>
    <Router history={history}>
      <div>
        This part is for development preview purpose when the homepage is not fully implemented. Remove this section after the HomeView is done.
        <Link to="/people">用户动态(Avatar, Follow Button, Profile Header)</Link>
      </div>
      <Switch>
        {/* <PrivateRoute exact path="/" component={HomeView} />*/}
        <Route exact path="/" component={HomeView} />
        <Route path="/people">
          <Activity />
        </Route>
        <Route exact path="/login" component={LoginView} />
        <Route exact path="/register" component={RegisterView} />
        <Redirect from="/*" to="/" />
      </Switch>
    </Router>
  </>
);

export default BasicRoute;
