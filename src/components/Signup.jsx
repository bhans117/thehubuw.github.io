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
      <section className="bg-white" id='email-list'>
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="section-heading">Email List</h2>
              <h3 className="email-subheading text-muted">Sign up for our email list to receive updates on events</h3>
              <input className="col-sm-4 text-box" type='email' value={this.props.value} onChange={this.handleChange} />
              <br />
              <input className="btn btn-xl js-scroll-trigger" value='Sign Up' type='button' onClick={onSubmit} />
            </div>
          </div>
        </div>
      </section>
    );
  }
}
