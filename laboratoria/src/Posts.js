import React from 'react';
import Post from './Post'
import api from './mock_api'
import _ from 'lodash'

function Posts(props) {
  return(
    <div className="container">
    <br/>
    <h3>Muro:</h3>
    <br/>
    <div className="card border-dark mb-3">
    <h4 className="card-header">Publicaciones:</h4>
    {
      _.map(api, (article, itx) => (
	<Post
	key={itx}
	title={article.title}
	content={article.content}
	id={article.id}
	author={article.author}
	/>
	))
    }
    </div>
    </div>
  );
}
export default Posts;
