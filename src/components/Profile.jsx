import React, { Component } from 'react'

export default class Profile extends Component {
  render() {
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
              <a href="">
                <i className="fa fa-twitter"></i>
              </a>
            </li>
            <li className="list-inline-item">
              <a href="">
                <i className="fa fa-facebook"></i>
              </a>
            </li>
            <li className="list-inline-item">
              <a href="">
                <i className="fa fa-linkedin"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
