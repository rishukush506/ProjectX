import React from "react";
import "./Activity2bPage.css";
import { useNavigate } from "react-router-dom";
import img1 from "./images/EA-2.png";

const Activity2bPage = () => {
  const navigate = useNavigate();

  const handleNext = () => {
    navigate("/activity2c");
  };

  return (
    <div className="page-container">
      <div className="page-box">
        {/* Intro Text */}
        <p className="intro-text">
          I appreciate you opening about this. Whatever you’re going through, your
          feelings are important. I’m here with you...
        </p>

        {/* Section Title */}
        <h3 className="section-title">Tending to the strongest plant</h3>

        {/* Section Text */}
        <p className="section-text">
          You recognizing the roots of your struggles, you actively prune away
          hindrances to flourish & stand tall against any storm
        </p>

        {/* Question */}
        <p className="question-text">
          Are there any helpful thoughts you sometimes overlook or dismiss?
        </p>

        {/* Response Box */}
        <div className="response-image-wrapper">
          <textarea
            className="response-box"
            placeholder="Write your thoughts..."
          />
          <div className="image-section">
            <img src={img1} alt="Right visual" />
          </div>
        </div>

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
