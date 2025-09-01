import React from "react";
import "./Activity1cPage.css";
import { useNavigate } from "react-router-dom";
import img1 from "./images/HA 3-4 .png";

export default function Activity1cPage() {
    const navigate = useNavigate();

    const goToNextPage = () => {
        navigate("/activity1d");
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
          What small patch of the garden can you care for even though there is
          still so much left to tend to?
        </p>
        <div className="response-image-wrapper">
  <textarea className="response-box" />
  <div className="image-section">
    <img src={img1} alt="Right visual" />
  </div>
</div>

        <div className="activity-grid">
          <div className="activity-item left">
            <div className="speech-bubble-left">Something that I am doing I can change?</div>
            <div className="label">Habits</div>
          </div>

          <div className="activity-item right">
            <div className="label">Thoughts</div>
            <div className="speech-bubble-right">Something that I am thinking I can change?</div>
          </div>

          <div className="activity-item left">
            <div className="speech-bubble-left">Is there something I want to know before going forward?</div>
            <div className="label">Information</div>
          </div>

          <div className="activity-item right">
            <div className="label">Expression</div>
            <div className="speech-bubble-right">Should I tell someone about this?</div>
          </div>
        </div>

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
