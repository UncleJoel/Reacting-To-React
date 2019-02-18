import React, { Component } from 'react';

// const App = (props) => {
//     let element = <h1>{props.name}</h1>
//     return element;
// }

// export default App;


class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            text: '',
            placeholder: 'input text here!'
        }
    }

    handleTextchange(e) {
        this.setState({
            text: e.target.value,
        })
    }

    unLoadIt(e) {
        this.setState({
            loaded: false,
        })
    }

    loadIt(e) {
        this.setState({
            loaded: true,
        })
    }

    componentDidMount(e) {
        this.setState({
            loaded: true,
        })
    }

    render() {
        if (this.state.loaded === false) {
            return (
                <>
                <h2>...Loading</h2>
                <button onClick ={(e) => this.loadIt(e)}>Load It!</button>
                </>
            )
        } else 
            return (
                <>
                    <h1>{this.props.name}</h1>
                    <input value={this.state.text} placeholder={this.state.placeholder} onChange={(e) => this.handleTextchange(e)} />
                    <button onClick={(e) => this.unLoadIt(e)} >Unload It!</button>
                </>
            )
    }

    // end of component
}

export default App;