import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Activity3cPage.css";
import img1 from "./images/UI-3.png";

export default function Activity3cPage() {
  const [response, setResponse] = useState("");
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const handleNext = () => {
    if (response.trim() === "") {
      setError(true);
      return;
    }
    navigate("/activity3d");
  };

  return (
    <div className="activity3c-container">
      <div className="page-box">
        <div className="top-text">
          <p>
            <strong>Plants are drooping</strong>
          </p>
        </div>

        <div className="question-section">
          <p>
            Let’s try to reframe the reason you’re thinking so <br />
            <strong>Is there something that can be done about it?</strong>
          </p>
        </div>

        <div className="input-section">
          <div className="reflection-section">
            <div className="image-wrapper">
              <p>...something small, something only you</p>
              <p>can do?</p>
              <img src={img1} alt="Foggy plant" className="thoughts-image" />
            </div>
            <div className="textarea-wrapper">
              <textarea
                className={`activity3d-textarea ${error ? "error-border" : ""}`}
                rows="6"
                value={response}
                onChange={(e) => {
                  setResponse(e.target.value);
                  if (error) setError(false);
                }}
                placeholder="Write here..."
              />
            </div>
          </div>
        </div>

        {error && (
          <p className="error-message">
            Please share your reflection before continuing.
          </p>
        )}

        <div className="footer-note">
          <p>
            <span className="info-icon">ℹ</span> No textual data will be stored;
            you may express freely in whichever language you’re comfortable
          </p>
        </div>

        <div className="button-container">
          <button onClick={handleNext} className="next-btn">
            Next
          </button>
        </div>
      </div>
    </div>
  );
}