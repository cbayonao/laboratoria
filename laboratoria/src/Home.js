import React from 'react';
import fire from './config/Fire';
import Posts from './Posts';
import Post from './Post';
import Logout from './Logout'

function Home(props) {
  return(
    <div>
    <Logout />
    <Posts />
    </div>
  )
}

function logout() {
  fire.auth().signOut();
  return(
    <button class="btn btn-danger" onClick={this.logout}>Logout</button>
  )
}

export default Home;
