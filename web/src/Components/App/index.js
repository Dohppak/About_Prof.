import React, { Component } from 'react';
import Intro from '../Intro';
import styles from './index.scss';


class App extends Component {
  render() {
    return (
      <div className={styles.app}>
        <Intro/>
      </div>
    );
  }
}

export default App;
