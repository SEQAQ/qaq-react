import Grid from '@material-ui/core/Grid';
import React from 'react';
import { Redirect, Route, Router, Switch } from 'react-router-dom';

import AppBar from '../src/component/AppBar/AppBar';
// import SearchBar from './component/SearchBar/SearchBar';
/* import PrivateRoute from './PrivateRoute'; */
/* import PrivateRoute from './PrivateRoute'; */
import { history } from './utils/history';
import Activity from './views/Activity/Activity';
import AdminView from './views/AdminView/AdminView';
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
      {/* <SearchBar />*/}
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
            <Route path="/people/:id">
              <Activity />
            </Route>
            <Route path="/ask">
              <AskView />
            </Route>
            <Route exact path={'/admin'} component={AdminView} />
            <Route exact path={'/profile'} component={ProfileView} />
            <Route exact path="/users/login" component={LoginView} />
            <Route exact path="/users/register" component={RegisterView} />
            <Route exact path={'/search/:str'} component={SearchView} />
            <Redirect from="/*" to="/" />
          </Switch>
        </Grid>
      </Grid>
    </Router>
  </>
);

export default BasicRoute;
