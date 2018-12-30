import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { StoreProvider } from '../../store';
import Intro from '../Intro';
import styles from './index.scss';

import Result from '../Result';

class App extends Component {
  render() {
    return (
      <Router>
        <StoreProvider>
          <div className={styles.app}>
            <Route 
                exact path='/'
                component={Intro}
              />
            <Route
              path='/result'
              render={Result}
            />
          </div>
        </StoreProvider>
      </Router>
    );
  }
}

export default App;
