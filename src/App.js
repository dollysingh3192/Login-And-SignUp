import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import { LoginPage, RegisterPage, DashboardPage } from "./components";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function isLoggedIn() {
  if (localStorage.getItem('user')) {
    return true;
  }
  return false;
}

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/dashboard" render={() => (
            !isLoggedIn() ? (
              <Redirect to="/login" />
            ) : (<DashboardPage />)
          )} />
          <Route path="/register" exact component={RegisterPage} />
          <Route path="/login" exact component={LoginPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
