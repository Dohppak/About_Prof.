import React, { Component, createContext } from 'react';

const Context = createContext();
const { Provider, Consumer: StoreConsumer } = Context; 

class StoreProvider extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }
    componentDidMount() {
    }
    actions = {
        setStoreValue: (value) => {
            this.setState({
                value
            });
        }
    }
    render() {
        const { state, actions } = this;
        const value = { state, actions };
        return (
            <Provider value={value}>
                {this.props.children}
            </Provider>
        )
    }
}

export {
    StoreProvider,
    StoreConsumer,
};