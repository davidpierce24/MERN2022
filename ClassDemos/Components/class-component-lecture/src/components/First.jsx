import { Component } from "react";

const darkMode = {
    backgroundColor: "dimgray",
    color: "ghostwhite", 
    padding: "10px"
}

const lightMode = {
    backgroundColor: "white",
    color: "black",
    padding: "10px"
}

class First extends Component {
    constructor(props){
        super(props);
        this.state = {
            light: true
        }
    }

    render() {
        return (
            <div style={this.state.light ? lightMode : darkMode}>
                <h2>This is component 1</h2>
                <h3>My name is {this.props.firstName}</h3>
                <button onClick={ () => this.setState({light: !this.state.light}) }>{this.state.light ? "On" : "Off"}</button>
            </div>
        );
    }
}

export default First;