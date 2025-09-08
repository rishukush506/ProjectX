import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Activity2cPage.css";
import img1 from "./images/EA-3.png";

const Activity2cPage = () => {
  const [response, setResponse] = useState("");
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const handleNext = () => {
    if (response.trim() === "") {
      setError(true);
      return;
    }
    navigate("/activity2d");
  };

  return (
    <div className="page-container">
      <div className="page-box">
        {/* Section */}
        <h2 className="section-title">Tending to the strongest plant</h2>

        {/* Question */}
        <p className="question-text">
          How can you strengthen these beliefs & make them part of your daily mental watering?
        </p>

        {/* Response box */}
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
          <span>ℹ️</span> No textual data will be stored; you may express freely in whichever language you’re comfortable
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

export default Activity2cPage;