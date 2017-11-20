import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import Home from '../containers/Home';
import Details from '../containers/Details';
import Launches from '../containers/Launches';
import Nav from '../components/Nav';

import { AppBody, AppBodyInner } from '../styled/AppLayout';

class App extends Component {
  render() {
    return (
      <AppBody>
        <Router>
          <AppBodyInner>
            <Nav />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/launch-details/launch-:launch" component={Details} />
              <Route path="/launches" component={Launches} />
            </Switch>
          </AppBodyInner>
        </Router>
      </AppBody>
    );
  }
}

export default App;
