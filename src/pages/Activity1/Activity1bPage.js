import React, { useContext } from "react";
import { UserContext } from "../UserContext";
import { useNavigate } from "react-router-dom";
import "./Activity1bPage.css";
import img1 from "./images/HA-2.png";

export default function Activity1bPage() {

  const navigate = useNavigate();
  const goToNextPage = () => {
    navigate("/activity1c");
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
          Are these weeds truly out of your control or just overwhelming to
          face?
        </p>
        <div className="response-image-wrapper">
          <textarea className="response-box" />
          <div className="image-section">
            <img src={img1} alt="Right visual" />
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