import React from "react";
import { Link } from "react-router-dom";
import "./serverError.css";

const ServerError = () => {
  return (
    <>
      <div className="error-class">
        <h1>500</h1>
        <p>Internal Server Error</p>
        <Link to="/">Go back to Homepage</Link>
      </div>
    </>
  );
};
export default ServerError;
