// imports React
import React from 'react';

// Created as a class to allow use of 'state'
class Counter extends React.Component {
    
    // Uses the constructor() method to inject props
    constructor (props) {

        // Super takes props from the parent class and injects into the instance
        super(props);

        // Sets the state objects
        this.state = {
            counter: 0,
        };
    };

    // the render() method returns the element
    // onClick on button increases the counter
    render() {
        let button;
        if(this.state.counter < 15) {
            button = "btn btn-primary"
        } else {
            button = "btn btn-danger"
        }

        return (
            <div className="countainer">
                <div className="row justify-content-center mt-4 mb-2">
                    <h1>Hello {this.props.name}</h1>
                </div>
                <div className="row justify-content-center my-3">
                    <button onClick={() => this.setState((prevState) => ({
                        counter: prevState.counter + 1
                    }))} className={button}>Click Me</button>
                </div>
                <div className="row justify-content-center my-4">
                    <p>You clicked me {this.state.counter} time(s)</p>
                </div>
            </div>
        );
    };
};

// Exports object to be used by other .js files
export default Counter;