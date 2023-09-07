import React from "react";
import "../styles/notFound.css";

const NotFound: React.FC = () => {
  return (
    <div className="not-found">
      <div className="not-found-container">
        <h1 className="not-found-message">
          404 <span className="content">Not Found</span>
        </h1>
      </div>
    </div>
  );
};

export default NotFound;
