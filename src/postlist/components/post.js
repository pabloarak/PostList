import React from "react";
import PropTypes from "prop-types";
import './post.css';

function Post(props) {
  return (
    <div className="post-row">
      <div className="post-cell">{props.name}</div>
      <div className="post-cell">{props.description}</div>
      <div className="post-cell">
        <button className="post-delete-button">Delete</button>
      </div>
    </div>
  );
}

Post.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
};

export default Post;
