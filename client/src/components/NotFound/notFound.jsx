import React from "react";
import { Link } from "react-router-dom";
import "./NotFound.css";

const NotFound = () => {
  return (
    <>
      <div>
        <h1>404</h1>
        <p>Page Not Found</p>
        <Link to="/">Go back to Homepage</Link>
      </div>
    </>
  );
};
export default NotFound;
