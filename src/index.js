import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './index.css';
import Home from './pages/Home';
import Login from './pages/Login';
import AdminPage from './pages/AdminPage'

ReactDOM.render(
  <Router>
    <Switch>
      <Route path="/" exact={true} component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/admin/user" exact component={AdminPage} />
      <Route path="/admin/user/new" component={AdminPage} />
    </Switch>
  </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals