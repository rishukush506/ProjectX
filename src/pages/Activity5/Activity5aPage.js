import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Activity5aPage.css";
import img1 from "./images/DCArtboard 1.png";

const Activity5aPage = () => {
  const navigate = useNavigate();
  const [thoughts, setThoughts] = useState("");
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    setThoughts(e.target.value);
    if (e.target.value.trim()) {
      setError(false);
    }
  };

  const goToNext = () => {
    if (thoughts.trim()) {
      navigate("/activity5b");
    } else {
      setError(true);
    }
  };

  return (
    <div className="activity5a-container">
      <p className="intro-text">
        I appreciate you opening about this. Whatever you’re going through, your
        feelings are important. I’m here with you...
      </p>

      <div className="section">
        <h3>Clearing the Fog</h3>
        <p>
          You’re planting with confidence but can’t see the whole garden. Let’s
          pull back the fog and look clearly at the landscape
        </p>
      </div>

      <div className="question-section">
        <h2>What exactly is happening in this situation?</h2>
        <p>Let’s start by listing some thoughts about this situation...</p>

        <div className="thoughts-wrapper">
          <textarea
            className={`thoughts-box ${error ? "error-border" : ""}`}
            placeholder="Write here..."
            value={thoughts}
            onChange={handleChange}
          />
          <div className="image-section">
            <img src={img1} alt="Right visual" />
          </div>
        </div>
        {error && (
          <p className="error-message">
            Please share your thoughts before continuing.
          </p>
        )}
      </div>

      <p className="note">
        <span>ⓘ</span> No textual data will be stored; you may express freely in
        whichever language you’re comfortable
      </p>

      <button className="next-btn" onClick={goToNext}>
        Next →
      </button>
    </div>
  );
};

export default Activity5aPage;