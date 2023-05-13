import React, { Component } from 'react';

export class Dropdown extends React.Component {
    constructor(props) {
            super(props);
            this.state = {value: ''};
            this.handleChange = this.handleChange.bind(this);
            this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
            this.setState({value: event.target.value});
    }
    handleSubmit(event) {
            alert('A name was submitted: ' + this.state.value);
            event.preventDefault();
    }

    render() {
         return (
            <div className="dropdown-container">
              <div className="dropdown-input">
                <p> Hello World</p>
              </div>
            </div>
         );
    }
}
