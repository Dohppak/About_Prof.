import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { StoreProvider } from '../../store';
import Intro from '../Intro';
import Result from '../Result';

class App extends Component {
  render() {
    return (
      <Router>
        <StoreProvider>
          <div className="App">
            <Route 
                exact path='/'
                render={Intro}
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
