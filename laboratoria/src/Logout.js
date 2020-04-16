import React, { Component } from 'react';
import fire from './config/Fire';


class Logout extends Component {
  constructor(props) {
    super(props);
    this.logout = this.logout.bind(this);
  }

  logout() {
    fire.auth().signOut();
  }

  render() {
    return(
      <div className="container">
      <button class="btn btn-danger" onClick={this.logout}>Logout</button>
      </div>
    );
  }
}
export default Logout;
