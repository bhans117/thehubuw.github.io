import React, { Component } from 'react';

export default class Navigaiton extends Component {
  render() {
    return (
      <section className="bg-light" id='contact'>
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="section-heading">Contact</h2>
              <h3 className="email-subheading text-muted">Send us an email<br /> or<br />Message us on Facebook</h3>
              <ul className="list-inline social-buttons">
                <li className="list-inline-item">
                  <a href="https://www.facebook.com/thehubuw" target="_blank" rel="noopener noreferrer">
                    <i className="fa fa-envelope"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="https://www.facebook.com/thehubuw" target="_blank" rel="noopener noreferrer">  
                    <i className="fa fa-facebook"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    )
  }
}