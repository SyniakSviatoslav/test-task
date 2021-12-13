import './App.css';
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { homePath, signInPath, signUpPath } from '../constants';
import SignInComponent from './components/SignIN-component';
import SignUpComponent from './components/SignUP-component';
import HomeComponent from './components/Home-component';


const App = () => {
  return (
    <Switch>
      <Route path={signInPath}>
        <SignInComponent />
      </Route>
      <Route path={signUpPath}>
        <SignUpComponent />
      </Route>
      <Route path={homePath}>
        <HomeComponent />
      </Route>
    </Switch>
  );
}

export default App;
