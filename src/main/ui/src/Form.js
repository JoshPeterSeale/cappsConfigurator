import React, {Component} from 'react';

export default class Form extends React.Component {
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
        <form>
          <label>
            Length:
            <input type="text" name="name" />
          </label>
          <input type="submit" value="Submit" />
        </form>
      );
    }
}