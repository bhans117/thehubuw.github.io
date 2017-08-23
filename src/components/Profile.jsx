import React, { Component } from 'react'

export default class SignUp extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props.profile_link);
    return (
      <div>
        <h2>{this.props.user_name}</h2>
        <a href={this.props.profile_link}>
        <img src={require(`../img/${this.props.img_src}.jpg`)} alt='-_-' height="200" width="200" />
        </a>
        <p>{this.props.user_bio}</p>
      </div>
    );
  }
}
