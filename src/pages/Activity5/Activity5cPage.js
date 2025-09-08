import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Activity5cPage.css";
import img1 from "./images/DCArtboard 3.png";

const Activity5cPage = () => {
  const [response, setResponse] = useState("");
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const handleNext = () => {
    if (response.trim()) {
      navigate("/activity5d");
    } else {
      setError(true);
    }
  };

  return (
    <div className="activity5c-container">
      <div className="activity5c-card">
        <h3 className="activity5c-heading">Clearing the Fog</h3>

        <h2 className="activity5c-question">
          Let’s imagine, you’re observing someone in this situation,<br />
          how would you ask them to rethink the situation?
        </h2>

        <div className="activity5c-response-section">
          <textarea
            className={`activity5c-textarea ${error ? "error-border" : ""}`}
            placeholder="Write here..."
            value={response}
            onChange={(e) => {
              setResponse(e.target.value);
              if (e.target.value.trim()) setError(false);
            }}
          />

          <img
            src={img1}
            alt="Clearing the fog illustration"
            className="activity5c-image"
          />
        </div>

        {error && (
          <p className="error-message">
            Please share your response before continuing.
          </p>
        )}

        <button className="activity5c-button" onClick={handleNext}>
          Next →
        </button>
      </div>
    </div>
  );
};

export default Activity5cPage;