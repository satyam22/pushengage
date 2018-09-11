import React, { Component } from 'react';
import { Switch, Route, Redirect, BrowserRouter} from 'react-router-dom';

import Login from './components/login/Login';
import Signup from './components/signup/Signup';
class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
        <Redirect to='/login' />
      </Switch>
      </BrowserRouter>
    )
  }
}

export default App;
