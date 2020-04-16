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
      <h1 className="badge-pill badge-primary">Bienvenid@ a FaceCool</h1>
      <br/>
      <h3>Muro:</h3>
      <div className="form-group">
      <label>Ingresa tu publicación:</label>
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
      <br/>
      <div className="card border-dark mb-3">
      <h4 className="card-header">Publicaciones:</h4>
      <div className="card-body text-dark">
      <h5 className="card-title">Publicación # 1</h5>
      <p className="card-text">Pellentesque we gonna chung tortizzle. Sed eros. Stuff fizzle dolor dapibus turpizzle tempizzle shizznit. pellentesque nibh et turpizzle. Vestibulum izzle tortor. Gangsta mammasay mammasa mamma oo sa rhoncus fo shizzle.</p>
      </div>
      <div className="card-body text-dark">
      <h5 className="card-title">Publicación # 2</h5>
      <p className="card-text">Lorizzle ipsizzle dolizzle sit amizzle, consectetuer adipiscing yo mamma. Nullam sapien velizzle, its fo rizzle volutpizzle, suscipit for sure, brizzle vizzle, its fo rizzle.</p>
      </div>
      </div>
      </div>
      </div>
    );
  }
}
export default Home;
