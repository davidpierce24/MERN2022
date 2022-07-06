import {Component} from "react";

class PersonCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
        btnclick : props.age,
        // name : props.firstName
        }
    }

    // birthday = () => {
    //     this.setState((state) => {
    //         return {btnclick: state.btnclick + 1, name: state.name + "y"}
    //     })
        
    // }
    
    birthday = () => this.setState((state) => ({btnclick: state.btnclick + 1}))

    render() {
        return(
            <div>
                <h1>{this.props.lastName}, {this.props.firstName}</h1>
                <p>Age: {this.state.btnclick}</p>
                <p>Hair Color: {this.props.hairColor}</p>
                <button onClick={this.birthday}>Birthday Button for {this.props.firstName} {this.props.lastName}</button>
            </div>
        );
    }
}

export default PersonCard;