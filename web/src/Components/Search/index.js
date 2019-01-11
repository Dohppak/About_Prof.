import React, { Component } from 'react';
import { StoreConsumer } from '../../store';
import styles from './index.scss';

class Search extends Component{
    constructor(props) {
        super(props);
        this.state = {
            text: ''
        }
    }
    onKeyPress = (e) => {
        if (e.key === 'Enter') {
            console.log(this.state.text);
            this.props.search(this.state.text, this.props.keyword)
            this.setState({
                text: ''
            })
            e.target.value = ''
        }
    }
    onChange = (e) => {
        this.setState({
            text: e.target.value
        })
    }
    render(){
        return (
            <div className={styles.bar}>
                <input
                    placeholder="What is your interest?"
                    text={this.state.text}
                    onChange={this.onChange}
                    onKeyPress={this.onKeyPress}
                />
            </div>
        )
    }   
}

const SearchContainer = (props) => {
    return (
        <StoreConsumer>
            {
                ({state, actions}) => (
                    <Search 
                        search={actions.search}
                        {...props}
                    />
                )
            }
        </StoreConsumer>
    )
}

export default SearchContainer;