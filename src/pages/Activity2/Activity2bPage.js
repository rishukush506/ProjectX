import React, { useState } from "react";
import "./Activity2bPage.css";
import { useNavigate } from "react-router-dom";
import img1 from "./images/EA-2.png";

const Activity2bPage = () => {
  const [response, setResponse] = useState("");
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const handleNext = () => {
    if (response.trim() === "") {
      setError(true);
      return;
    }
    navigate("/activity2c");
  };

  return (
    <div className="page-container">
      <div className="page-box">
        {/* Section Title */}
        <h3 className="section-title">Tending to the strongest plant</h3>

        {/* Question */}
        <p className="question-text">
          Are there any helpful thoughts you sometimes overlook or dismiss?
        </p>

        {/* Response Box */}
        <div className="response-image-wrapper">
          <textarea
            className={`response-box ${error ? "error-border" : ""}`}
            value={response}
            onChange={(e) => {
              setResponse(e.target.value);
              if (error) setError(false);
            }}
            placeholder="Write here..."
          />
          <div className="image-section">
            <img src={img1} alt="Right visual" />
          </div>
        </div>

        {error && (
          <p className="error-message">
            Please share your reflection before continuing.
          </p>
        )}

        {/* Footer */}
        <p className="footer-note">
          <span className="info-icon">ℹ️</span>
          No textual data will be stored; you may express freely in whichever language you’re comfortable
        </p>

        {/* Button */}
        <div className="button-container">
          <button className="next-button" onClick={handleNext}>
            Next →
          </button>
        </div>
      </div>
    </div>
  );
};

export default Activity2bPage;