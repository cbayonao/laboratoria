import React from 'react';
import fire from './Firebase';
import CreatePost from './CreatePost';
import Posts from './Posts';
import Post from './Post';
import Logout from './Logout'

function Home(props) {
  return(
    <div>
    <br/>
    <Logout />
    <CreatePost />
    <Posts />
    </div>
  )
}

function logout() {
  fire.auth().signOut();
  return(
    <button className="btn btn-danger" onClick={this.logout}>Logout</button>
  )
}

export default Home;
