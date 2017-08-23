import React, { Component } from 'react';

export default class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  render() {
    return (
      <div>
        <form>
          <label>Email
            <input type='email' value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type='Submit' />
        </form>
      </div>
    );
  }
}
