import React from "react";
import { Link } from "react-router-dom";

const NotFound404 = () => {
  return (
    <div>
      <p> Page not found</p>
      <Link to="/">Home page</Link>
    </div>
  );
};

export default NotFound404;
