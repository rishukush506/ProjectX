import React from "react";
import { useNavigate } from "react-router-dom";
import "./Activity2cPage.css";
import img1 from "./images/EA-3.png";

const Activity2cPage = () => {
  const navigate = useNavigate();

  return (
    <div className="page-container">
      <div className="page-box">
        {/* Intro Text */}
        <p className="intro-text">
          I appreciate you opening about this. Whatever you’re going through, your feelings are important. I’m here with you...
        </p>

        {/* Section */}
        <h2 className="section-title">Tending to the strongest plant</h2>
        <p className="section-text">
          You recognizing the roots of your struggles, you actively prune away hindrances to flourish & stand tall against any storm
        </p>

        {/* Question */}
        <p className="question-text">
          How can you strengthen these beliefs & make them part of your daily mental watering?
        </p>

        {/* Response box with placeholder */}
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
          <span>ℹ️</span> No textual data will be stored; you may express freely in whichever language you’re comfortable
        </p>

        {/* Button */}
        <div className="button-container">
          <button
            className="next-button"
            onClick={() => navigate("/activity2d")}
          >
            Next →
          </button>
        </div>
      </div>
    </div>
  );
};

export default Activity2cPage;
