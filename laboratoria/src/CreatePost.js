import React, { useState } from 'react';
import db from './Firebase';
// import db from './config/Fire';

const CreatePost = (props) => {

  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

  const onTitleChanged = (event) => setTitle(event.target.value)
  const onContentChanged = (event) => setContent(event.target.value)

  const onCreatePost = () => {
    // let postRef = db.collection('posts');
    let payload = {title, content};
    console.log(payload);
    // console.log('create post');
    // console.log(title);
    // console.log(content);
  }

  return (
    <div className="container">
    <br/>
    <h1 className="text-center badge-pill badge-primary">Bienvenidx a FaceCool</h1>
    <br/>
    <div className="form-group">
    <h3>Ingresa tu publicación:</h3>
    <form action="#" id="formulario">
    <textarea value={title} className="form-control" onChange={onTitleChanged} placeholder="Ingresa el Titulo">
    </textarea>
    <br/>
    <textarea value={content} className="form-control" onChange={onContentChanged} placeholder="Ingresa el Contenido"></textarea>
    <br/>
    <button className="btn btn-primary btn-block" onClick={onCreatePost}>Publicar</button>
    </form>
    </div>
    </div>
  );
}
export default CreatePost;
