import React, { Component } from 'react';
const FormActions = require('../actions/FormActions');
const SignUpConstants = require('../constants/SignUpConstants');

function onSubmit() {
  FormActions.submit();
}

export default class SignUp extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    FormActions.set(event.target.value, event.target.id);
    console.log(event.target);
  }

  render() {
    let display;
    if (this.props.submit) {
      display = (
        <div>
          <p>Thank you for subscribing! We sent an email to <b><i>{this.props.email.value}</i></b> for you to comfirm your subscription</p>
        </div>
      );
    } else {
      display = (
        <form>
          <input 
            id={SignUpConstants.EMAIL} 
            className="col-sm-4 text-box" 
            type='email' 
            value={this.props.email.value} 
            placeholder="Email"
            onChange={this.handleChange} />
          <br />
          <input 
            id={SignUpConstants.FIRST_NAME} 
            className="col-sm-4 text-box" 
            type='text' 
            value={this.props.firstName.value} 
            placeholder="First Name"
            onChange={this.handleChange} />
          <br />
          <input 
            id={SignUpConstants.LAST_NAME} 
            className="col-sm-4 text-box" 
            type='text' 
            value={this.props.lastName.value} 
            placeholder="Last Name"
            onChange={this.handleChange} />
          <br />
          <input className="btn btn-xl js-scroll-trigger" value='Subscribe' type='button' onClick={onSubmit} />
        </form>
      );
    }
    return (
      <section className="bg-light" id='email-list'>
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="section-heading">Email List</h2>
              <h3 className="email-subheading text-muted">Sign up for our email list to receive updates on events</h3>
              {display}
            </div>
          </div>
        </div>
      </section>
    );
  }
}
