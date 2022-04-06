import React from 'react';
import { Link } from 'react-router-dom';
import Title from '../generic/Title';
import './Err.css';

const Err = (props) => {
  const { status } = props;

  return (
    <>
      <div className="error-component">
        <div className="container">
          <Title value={status} />
          <p>{status === 404 ? 'Page Not Found' : 'Internal Server Error'}</p>
          {status === 404 ? (
            <span>
              The page you're looking for is not found, Go back to{' '}
              <Link to="/">Homepage</Link>
            </span>
          ) : (
            <span>
              We are having some issues with our server, please try again later.
            </span>
          )}
        </div>
      </div>
    </>
  );
};

export default Err;
