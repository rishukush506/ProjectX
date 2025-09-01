import React from "react";
import "./Activity2dPage.css";
import { useNavigate } from "react-router-dom";
import img1 from "./images/post.PNG";

export default function Activity2dPage() {
  const navigate = useNavigate();

  const goToNextPage = () => {
    navigate("/questionspost"); // Change it to post stress
  };

  return (
    <div className="page-container">
      <div className="content-wrapper">
        {/* Left Side: Text Content */}
        <div className="text-section">
          <p className="intro-text">
            I appreciate you opening about this. Whatever you’re going through, your feelings
            are important. I’m here with you...
          </p>

          <div className="section">
            <h2 className="section-title">Tending to the strongest plant</h2>
            <p className="section-text">
              You recognizing the roots of your struggles, you actively prune away hindrances
              to flourish & stand tall against any storm
            </p>
          </div>

          <div className="question-section">
            <p className="question-text">
              Write a short self-affirming script you can revisit when things get tough.
            </p>
            <p className="helper-text">
              This could be like a guiding post to take you to the positive thoughts
            </p>
            <div className="response-image-wrapper">
                              <textarea
                                className="response-box"
                                placeholder="Write your thoughts..."
                              />
                              <div className="image-section">
                                <img src={img1} alt="Right visual" />
                              </div>
                            </div>
          </div>

          <div className="footer-note">
            <span>
              No textual data will be stored; you may express freely in whichever
              language you’re comfortable
            </span>
          </div>

          <div className="button-container">
            <button className="next-button" onClick={goToNextPage}>
              Next →
            </button>
          </div>
        </div>

        {/* Right Side: Image */}
      </div>
    </div>
  );
}