import React from 'react';
import { Route, Switch, Redirect } from "react-router-dom";

import './App.scss';

import Navbar from './layout/Navbar';
import Home from './views/Home.js';
import SignUp from './views/SignUp.js';


export const Routes = () => {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/home" component={Home} />
        <Route exact path="/">
          <Redirect to="/home" />
        </Route>
        <Route exact path="/sign-up" component={SignUp} />
      </Switch>
    </div>
  );
};
