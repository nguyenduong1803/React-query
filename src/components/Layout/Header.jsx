import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
     <p> <Link to="/">Home</Link></p>
   <p>   <Link to="/form">form</Link></p>
      <p><Link to="/image">Lazy image</Link></p>
      <p><Link to="/load">Load more</Link></p>
    </div>
  );
}

export default Header;
