import React, { Component } from "react";
import Post from "./post";
import './list.css';
import Header from "./header";

class List extends Component {

  state = {
      posts: []
  };

  componentDidMount() {
    fetch("http://localhost:3000/api/posts")
      .then(response => response.json())
      .then(json => {
        // create an array of post only with relevant data
        const newPosts = json.posts.map(post => {
          return {
            id: post.id,
            name: post.name,
            description: post.description
          };
        });

        // create a new "State" object without mutating
        // the original State object.
        const newState = Object.assign({}, this.state, {
          posts: newPosts
        });

        // store the new state object in the component's state
        this.setState(newState);
      })
      .catch(error => console.log(error));
  }

  render() {
    return (
      <div>
        <Header/>
        <div className="list">
          <div className="post-row">
            <div className="post-cell">Name</div>
            <div className="post-cell">Description</div>
            <div className="post-cell">Action</div>
          </div>
          {
            this.state.posts.map(post => <Post key={post.id} name={post.name} description={post.description}/>)
          }
        </div>
      </div>
    );
  }
}

export default List;
