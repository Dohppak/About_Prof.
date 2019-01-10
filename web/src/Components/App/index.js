import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { StoreProvider } from '../../store';
import styled from 'styled-components';
import GlobalStyles from '../GlobalStyle';
import Intro from '../Intro';
import styles from './index.scss';

import Result from '../Result';

const Container = styled.div`
  padding : 90px 10% 0 10%;
`;

class App extends Component {
  render() {
    return (
      <Container>
        <GlobalStyles/>
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
      </Container>
    );
  }
}

export default App;
