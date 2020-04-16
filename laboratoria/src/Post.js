import React from 'react';

const Post = (props) => {
  return (
    <div className="container">
    <div className="card-body">
    <h5 className="card-title">{props.title}</h5>
    <p className="card-text">{props.content}</p>
    <p>Autor: {props.author}</p>
    <p>Id: <span class="badge badge-secondary">{props.id}</span></p>
    <a href="#" className="card-link">Editar</a>
    <a href="#" className="card-link">Eliminar</a>
    </div>
    </div>
  )
}
export default Post;
