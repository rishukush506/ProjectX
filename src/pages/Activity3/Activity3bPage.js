import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Activity3bPage.css";
import img1 from "./images/UI-2@3x.png";

export default function Activity3bPage() {
  const [reason, setReason] = useState("");
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const handleNext = () => {
    if (reason.trim() === "") {
      setError(true);
      return;
    }
    navigate("/activity3c");
  };

  return (
    <div className="activity3b-container">
      <div className="page-box">
        <h3 className="section-title">Plants are drooping</h3>

        <h4 className="highlight-text">
          There are two thought plants, select one plant for this activity
        </h4>
        <p className="instruction">
          It’s okay to have these thoughts, let’s go step by step, one plant at a time
        </p>

        <div className="reflection-section">
          <div className="image-wrapper">
            <div className="upperText">
            </div>
            <img src={img1} alt="Foggy plant" className="thoughts-image" />
          </div>

          <div className="textarea-wrapper">
            <label className="label">Why are you thinking like this?</label>
            <textarea
              className={`activity3d-textarea ${error ? "error-border" : ""}`}
              rows="6"
              value={reason}
              onChange={(e) => {
                setReason(e.target.value);
                if (error) setError(false);
              }}
              placeholder="You can write down your thoughts here..."
            />
          </div>
        </div>

        {error && (
          <p className="error-message">
            Please share your reflection before continuing.
          </p>
        )}

        <p className="footer-note">
          ℹ️ No textual data will be stored; you may express freely in whichever
          language you’re comfortable
        </p>

        <div className="button-container">
          <button className="next-btn" onClick={handleNext}>
            Next →
          </button>
        </div>
      </div>
    </div>
  );
}