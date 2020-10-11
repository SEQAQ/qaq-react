import React from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';

/* import PrivateRoute from './PrivateRoute';*/
import HomeView from './views/HomeView/HomeView';
import LoginView from './views/LoginView/LoginView';
import RegisterView from './views/RegisterView/RegisterView';
import Activity from './views/Activity/Activity';
import { history } from './utils/history';

const BasicRoute = () => (
  <>
    <Router history={history}>
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
