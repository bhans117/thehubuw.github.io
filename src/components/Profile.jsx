import React, { Component } from 'react'

export default class Profile extends Component {
  render() {
    if(this.props.twitter) {
      console.log("twitter");
      this.twitterDisplay = (
        <a href={this.props.twitter} target="_blank" rel="noopener noreferrer">
          <i className="fa fa-twitter"></i>
        </a>
      );
    }
    if (this.props.fb) {
      this.fbDisplay = (
        <a href={this.props.fb} target="_blank" rel="noopener noreferrer">
          <i className="fa fa-facebook"></i>
        </a>
      );
    }
    if (this.props.linkedIn) {
      this.linkedInDisplay = (
      <a href={this.props.linkedIn} target="_blank" rel="noopener noreferrer">
        <i className="fa fa-linkedin"></i>
      </a>
      );
    }
    return (
      <div className="col-sm-4">
        <div className="team-member">
          <a href={this.props.profile_link}>
            <img className="mx-auto rounded-circle" src={require(`../profile_img/${this.props.img_src}.jpg`)} alt="" />
          </a>
          <h4>{this.props.user_name}</h4>
          <p className="text-muted">{this.props.user_bio}</p>
          <ul className="list-inline social-buttons">
            <li className="list-inline-item">
              {this.twitterDisplay}
            </li>
            <li className="list-inline-item">
              {this.fbDisplay}
            </li>
            <li className="list-inline-item">
              {this.linkedInDisplay}
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
