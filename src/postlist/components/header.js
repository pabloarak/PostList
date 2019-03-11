import React from "react";
import './header.css';

function Header() {
    return (
      <div className="header">
        <div></div>
        <h1 className="title">Post List</h1>
        <div className="post-create-button"><button><i class="fas fa-plus-circle"> Add</i></button></div>
      </div>
    );
  }

export default Header;