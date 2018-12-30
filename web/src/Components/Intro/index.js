import React from 'react';
import Search from '../Search';
import styles from './index.scss';

const Intro = () => {
    return (
        <div className={styles.introbox}>
            <Search />
            <div className={styles.description}>
                Hello!
            </div>
        </div>
    )
}

export default Intro