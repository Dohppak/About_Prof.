import React, { Component } from 'react';


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
            <div>
                <input
                    text={this.state.text}
                    onChange={this.onChange}
                    onKeyPress={this.onKeyPress}
                />
            </div>
        )
    }   
}

export default Search;