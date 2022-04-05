import React from "react";
import { Link } from "react-router-dom";
import "./notFound.css";

const notFound = () => {
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
export default notFound;
