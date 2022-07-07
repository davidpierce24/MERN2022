import { Component } from "react";

class First extends Component {
    constructor(props){
        super(props);
        this.state = {
            light: true
        }
    }

    render() {
        return (
            <>
                <h2>This is component 1</h2>
                <h3>My name is {this.props.firstName}</h3>
                <button onClick={ () => this.setState({light: !this.state.light}) }>{this.state.light ? "On" : "Off"}</button>
            </>
        );
    }
}

export default First;