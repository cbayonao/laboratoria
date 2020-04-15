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
      <div className="container">
      <button className="btn btn-danger" onClick={this.logout}>Logout</button>
      <h1>Mis Publicaciones de Blog</h1>
      <div className="form-group">
      <label>Ingresa tu post:</label>
      <form action="#" id="formulario">
      <textarea id="proceso" className="form-control"></textarea>
      <label></label>
      <button className="btn btn-primary btn-block">Publicar</button>
      </form>
      </div>
      </div>
    );
  }
}
export default Home;
