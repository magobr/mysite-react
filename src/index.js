import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import './index.css';

// import Home from './pages/Home';
import Login from './pages/Login';
import Logout from './pages/Logout';
import AdminPage from './pages/AdminPage'
import notFound from './pages/404';
import AdminNewUser from './pages/AdminNewUser';
import AdminNewNews from './pages/AdminNewNews';

import { isAuthenticated } from './services/auth'

const auth = isAuthenticated();

function PrivateRoute ({path, exact, component, auth}) {

  if (auth) {
    return (
      <Route
        path={path}
        exact={exact}
        component={component}
      />
    )
  }
  return(
    <Redirect to="/login" />
  )
}

ReactDOM.render(
  <Router>
      <Switch>
        <Route path="/logout" exact={true} component={Logout} />
        <Route path="/login" exact={true} component={Login} />
        <PrivateRoute path="/admin/user" exact={true} component={AdminPage} auth={auth} />
        <PrivateRoute path="/admin/user/new" exact={true} component={AdminNewUser} auth={auth} />
        <PrivateRoute path="/admin/news" exact={true} component={AdminNewNews} auth={auth} />
        <PrivateRoute path="/admin/news/new" exact={true} component={AdminNewNews} auth={auth} />
        <Route path="*" component={notFound} />
      </Switch>
  </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals