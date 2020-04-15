import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import fire from './config/Fire';

class Login extends Component {
  constructor(props) {
    super(props);
    this.login = this.login.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.signup = this.signup.bind(this);
    this.state = {
      email: '',
      password: ''
    };
  }

  login(e) {
    e.preventDefault();
    fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u)=>{}).catch((error) => {
      console.log(error);
    });
  }

  signup(e) {
    e.preventDefault();
    fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
	.catch((error) => {
	  console.log(error);
	})
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    return (
      <div className="container">
      <div className="col-md-6">
      <h1>Bienvenido a FaceCool</h1>
      <form>
      <div className="form-group">
      <label>Ingresa tu direccion de Email</label>
      <input value={this.state.email} onChange={this.handleChange} type="email" name="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Ingresa tu email" />
      </div>
      <div className="form-group">
      <label>Ingresa tu contraseña</label>
      <input value={this.state.password} onChange={this.handleChange} type="password" name="password" className="form-control" id="exampleInputPassword1" placeholder="Contraseña" />
      </div>
      <button type="submit" onClick={this.login} className="btn btn-primary">Ingresa</button>
      <button onClick={this.signup} style={{marginLeft: '25px'}} className="btn btn-success">Regístrate</button>
      </form>
      </div>
      </div>
    );
  }
}
export default Login;
