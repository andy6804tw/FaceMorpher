import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './Home/Home';
import NotFound from './NotFound/NotFound';

export default
class Main extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/FaceMorpher/" component={Home}/>
          <Route path="*" component={NotFound}/>
        </Switch>
      </Router>
    );
  }
}