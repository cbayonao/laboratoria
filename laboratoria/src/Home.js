import React, { Component } from 'react';
import fire from './config/Fire';

class Home extends Component {
  constructor(props) {
    super(props);
    this.logout = this.logout.bind(this);
    this.state = {
      uploadValue: 0,
      picture: null
    };
    this.handleUpload = this.handleUpload.bind(this);
  }

  handleUpload(event) {
    const image = event.target.files[0];
    const storageRef = fire.storage().ref(`/laboratoriaImages/${image.name}`);
    const task = storageRef.put(image);

    task.on('state_changed', snapshot => {
      let progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      this.setState({
	uploadValue: progress
      })
    }, error => {
      console.log(error.message)
    }, () => {
      this.setState({
	uploadValue: 100,
	picture: task.snapshot.downloadURL
      });
    });
  }
  logout() {
    fire.auth().signOut()
  }

  render() {
    return(
      <div className="container">
      <br/>
      <button className="btn btn-danger" onClick={this.logout}>Salir</button>
      <br/>
      <br/>
      <h1>Mis Publicaciones de Blog</h1>
      <div className="form-group">
      <label>Ingresa tu post:</label>
      <form action="#" id="formulario">
      <textarea id="proceso" className="form-control"></textarea>
      <br/>
      <label>Agrega una imagen</label>
      <progress value={this.state.uploadValue} max="100"></progress>
      <br/>
      <input onChange={this.handleUpload} type="file" className="form-control-file"/>
      <br/>
      <button className="btn btn-primary btn-block">Publicar</button>
      </form>
      <img width="320" src={this.state.picture} alt=""/>
      </div>
      </div>
    );
  }
}
export default Home;
