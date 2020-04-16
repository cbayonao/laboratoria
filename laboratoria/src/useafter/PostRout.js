import React from 'react';

const PostRout = (props) => {
  return (
    <div className="container">
    <br/>
    <h3>Muro:</h3>
    <br/>
    <div className="card border-dark mb-3">
    <h4 className="card-header">Publicaciones:</h4>
    </div>
    <div className="card-body">
    <h5 className="card-title">{props.title}</h5>
    <p className="card-text">{props.content}</p>
    <a href="#" className="card-link">Editar</a>
    <a href="#" className="card-link">Eliminar</a>
    </div>
    </div>
  )

}
export default Logout;
