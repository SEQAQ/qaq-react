import React from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import HomeView from "./views/homeView/HomeView";
import LoginView from './views/loginView/LoginView';
import RegisterView from './views/registerView/RegisterView';
import Activity from './views/Activity/Activity';
import { history } from "./utils/history";


class BasicRoute extends React.Component {

    constructor(props) {
        super(props);

        //history监听路由
        history.listen((location, action) => {
            // clear alert on location change
            console.log(location, action);
        });
    }

    render() {
        return (
            <Router history={history}>
                <Switch>
                    <PrivateRoute exact path="/" component={HomeView} />
                    <Route path="/people"  >
                        <Activity/>
                    </Route>
                    <Route exact path="/login" component={LoginView} />
                    <Route exact path="/register" component={RegisterView} />
                    <Redirect from="/*" to="/" />
                </Switch>
            </Router>
        )
    }


}

export default BasicRoute;
