import React from "react";
import Post from "./post";
import './list.css';

function List(props) {
  return (
    <div className="list">
      <div className="post-row">
        <div className="post-cell">Name</div>
        <div className="post-cell">Description</div>
        <div className="post-cell">Action</div>
      </div>
      {
        props.data.posts.map(post => <Post key={post.id} name={post.name} description={post.description}/>)
      }
    </div>
  );
}

export default List;
