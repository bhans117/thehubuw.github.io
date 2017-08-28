import React, { Component } from 'react';
const FormActions = require('../actions/FormActions');

function onSubmit() {
  FormActions.submit();
}

export default class SignUp extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    FormActions.set(event.target.value);
    //this.setState({ value: event.target.value });
  }

  render() {
    return (
      <div>
        <form>
          <label>Email
            <input type='email' value={this.props.value} onChange={this.handleChange} />
          </label>
          <input type='button' onClick={onSubmit} />
        </form>
      </div>
    );
  }
}
