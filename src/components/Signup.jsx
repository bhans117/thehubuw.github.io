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
    this.setDisplayError = this.setDisplayError.bind(this);
  }

  setDisplayError(error) {
  return (
        <form>
          <input 
            id={SignUpConstants.EMAIL} 
            className="col-sm-4 text-box" 
            type='email' 
            value={this.props.email.value} 
            placeholder="Email"
            onChange={this.handleChange}
             />
          <br />
          {error}
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
          <input type="submit" className="btn btn-xl js-scroll-trigger" value='Subscribe' onClick={onSubmit} />
        </form>
  )
}

  handleChange(event) {
    FormActions.set(event.target.value, event.target.id);
  }

  render() {
    let display = this.setDisplayError();
    console.log(this.props.memberStatus);
      if (this.props.memberStatus === "subscribed") {
        display = (
          <p>You are already subscribed using <b><i>{this.props.email.value}</i></b></p>
        )
      }
      else if (this.props.submit && this.props.validated) {
        display = (
          <div>
            <h5>Thank you for subscribing! We sent an email to <b><i>{this.props.email.value}</i></b> for you to comfirm your subscription.</h5>
            <p>If you do not see an email from us, check your spam because you may already be subscribed or pending (you have not clicked on the confirmation email).
            If it is still missing, try reloding the page and re-entring you email.
            Report problems to <b>thehubuw@gmail.com</b>.</p>
          </div>
        )
      } else if (this.props.submit && !this.props.validated) {
        display = this.setDisplayError(<p className="text-danger">*INVALID EMAIL</p>);
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
