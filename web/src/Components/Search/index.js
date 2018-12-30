import React, { Component } from 'react';


class Search extends Component{
    constructor(props) {
        super(props);
        this.state = {
            text: ''
        }
    }
    onChange = (e) => {
        console.log(e.target.value)
    }

    render(){
        return (
            <div>
                <input
                    text={this.state.text}
                    onChange={this.onChange}
                />
            </div>
        )
    }   
}

export default Search;