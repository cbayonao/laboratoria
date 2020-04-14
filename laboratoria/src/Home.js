import React, { Component } from 'react';
import fire from './config/Fire';

class Home extends Component {
  constructor(props) {
    super(props);
    this.logout = this.logout.bind(this);
  }

  logout() {
    fire.auth().signOut();
  }

  render() {
    return(
      <div className="col-md-6">
      <h1>You are home, Now ready to DO posts manager</h1>
      <button class="btn btn-danger" onClick={this.logout}>Logout</button>
      </div>
    );
  }
}
export default Home;
