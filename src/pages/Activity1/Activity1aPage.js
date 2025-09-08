import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Activity1aPage.css";
import img1 from "./images/ACQHA1@3x.png";

export default function Activity1aPage() {
  const navigate = useNavigate();
  const [response, setResponse] = useState("");
  const [error, setError] = useState(false);

  const goToNextPage = () => {
    if (response.trim() === "") {
      setError(true);
      return;
    }
    navigate("/activity1b");
  };

  return (
    <div className="page-container">
      <div className="page-box">
        <p className="intro-text">
          I appreciate you opening about this. Whatever you’re going through,
          your feelings are important. I’m here with you...
        </p>

        <h3 className="section-title">Weeds and the Weather</h3>
        <p className="section-text">
          You see what’s growing & what’s choking your garden, but the storm
          makes you feel stuck. Let’s find what you can tend.
        </p>

        <p className="question-text">
          What thoughts feel like weeds – persistent, unhelpful, or draining?
        </p>
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
          <p className="error-message">Please share your thoughts before continuing.</p>
        )}

        <p className="footer-note">
          <span>ℹ️</span> No textual data will be stored; you may express freely
          in whichever language you’re comfortable
        </p>

        <div className="button-container">
          <button className="next-button" onClick={goToNextPage}>
            Next →
          </button>
        </div>
      </div>
    </div>
  );
}