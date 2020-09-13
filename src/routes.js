import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Login from './components/login/login';
import SignUp from './components/signUp/signUp'

export const Routes = () => {
    return (
      <div>
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/">
            <Redirect to="/login" />
          </Route>
          <Route exact path="/sign-up" component={SignUp} />
        </Switch>
      </div>
    );
  };