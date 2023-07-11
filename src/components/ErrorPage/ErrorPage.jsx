import React from 'react';
import './ErrorPage.css'


const ErrorPage = () => {
  return (
    <div className="error-page-container">
      <h1 className="error-page-title">Error 404</h1>
      <p className="error-page-message">Oops! The page you're looking for could not be found.</p>
      <a className="error-page-link" href="/">Go back to home</a>
    </div>
  );
};

export default ErrorPage;