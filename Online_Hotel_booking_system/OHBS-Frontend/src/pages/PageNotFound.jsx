import React from "react";
import { useNavigate } from "react-router-dom";
import "./PageNotFound.css"; // Create a separate CSS file for styling


const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="not-found-container">
      <div className="not-found-card">
        <h1 className="not-found-title">404</h1>
        <p className="not-found-message">Oops! The page you're looking for doesn't exist.</p>
        <button className="not-found-button" onClick={() => navigate("/")}>
          Go Back to Home
        </button>
      </div>
    </div>
  );
};

export default NotFound;
