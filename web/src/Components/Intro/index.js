import React, { Component } from 'react';
import Search from '../Search';
import styles from './index.scss';

const Selector = (props) => {
    return(
        <div className={styles.typeSelecter}>
            <div 
                id={1}
                className={!props.keyword?styles.active:styles.nonactive}
                onClick={props.changeMode}>professor
            </div>
            <div 
                id={2} 
                className={props.keyword?styles.active:styles.nonactive}
                onClick={props.changeMode}>keyword
            </div>
        </div>
    )
}

class Intro extends Component {
    constructor(props) {
        super(props);
        this.state = {
            keyword: false
        };
    }
    changeMode = (e) => {
        let  keyword
        if(e.target.id === '1'){
            keyword = false
        }else{
            keyword = true
        }
        this.setState({
            keyword
        })
        console.log(this.state.keyword)
    }
    render(){
        return(
            <div className={styles.body}>
                <div className={styles.header}>
                    <div className={styles.logo}>
                        <h1>About Prof.</h1>
                    </div>

                    <div className={styles.intro}>
                        <h4>You can search <br/> Prof's Research field in UNIST</h4>
                    </div>
                </div>
                <div className={styles.introbox}>
                    <Search keyword={this.state.keyword}/>
                </div>
                <div className={styles.footer}>
                    <Selector 
                        keyword={this.state.keyword}
                        changeMode={this.changeMode}
                    />
                    <div className={styles.aboutus}>
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