import React, { useState } from "react";
import "./Activity2aPage.css";
import { useNavigate } from "react-router-dom";
import img1 from "./images/flower-roots.PNG";

export default function Activity2aPage() {
  const [thoughts, setThoughts] = useState("");
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const handleNext = () => {
    if (thoughts.trim() === "") {
      setError(true);
      return;
    }
    navigate("/activity2b");
  };

  return (
    <div className="page-container">
      <div className="page-box">
        <p className="intro-text">
          I appreciate you opening about this. Whatever you’re going through,
          your feelings are important. I’m here with you…
        </p>

        <h2 className="section-title">Tending to the strongest plant</h2>
        <p className="section-text">
          You recognizing the roots of your struggles, you actively prune away
          hindrances to flourish & stand tall against any storm
        </p>

        <h3 className="question-text">
          What are the thoughts that are helping you stay grounded and act with
          clarity?
        </h3>

        <div className="response-image-wrapper">
          <textarea
            className={`response-box ${error ? "error-border" : ""}`}
            value={thoughts}
            onChange={(e) => {
              setThoughts(e.target.value);
              if (error) setError(false);
            }}
            placeholder="Write your thoughts..."
          />
          <div className="image-section">
            <img src={img1} alt="Right visual" />
          </div>
        </div>

        {error && (
          <p className="error-message">
            Please share your grounding thoughts before continuing.
          </p>
        )}

        <p className="footer-note">
          ℹ️ No textual data will be stored; you may express freely in whichever
          language you’re comfortable
        </p>

        <div className="button-container">
          <button className="next-button" onClick={handleNext}>
            Next →
          </button>
        </div>
      </div>
    </div>
  );
}