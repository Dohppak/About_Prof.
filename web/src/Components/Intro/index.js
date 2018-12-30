import React, { Component } from 'react';
import Search from '../Search';
import styles from './index.scss';

class Intro extends Component {
    constructor(props) {
        super(props);
        this.state = {
            keyword: false
        }
    }
    render(){
        return(
            <div calssName={styles.body}>
            <div className={styles.header}>
                <div className={styles.logo}>
                    <h1>About Prof.</h1>
                </div>

                <div calssName={styles.intro}>
                    <h3>You can search Prof's Research field in UNIST</h3>
                </div>
         </div>

            <div className={styles.introbox}>
                <Search/>
            </div>

            <div className={styles.footer}>
                <div className={styles.typeSelecter}>
                    <h4>professor</h4>
                    <h4>keyword</h4>
                </div>
                <div calssName={styles.aboutus}>
                    <h4>
                        aboutus
                    </h4>
                </div>
            </div>
        </div>
        )
    }
    
}

export default Intro