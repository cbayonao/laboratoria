import React, { Component } from 'react';
import fire from './Firebase';


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
      <button className="btn btn-warning" onClick={this.logout}>Salir</button>
      </div>
    );
  }
}
export default Logout;
