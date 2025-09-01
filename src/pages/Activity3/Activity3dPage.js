import React from "react";
import "./Activity3dPage.css";
import { useNavigate } from "react-router-dom";
import img1 from "./images/UI-4.png"; // Replace with your actual image path

const Activity3dPage = () => {
  const navigate = useNavigate();

  const goToNextPage = () => {
    navigate("/questionspost"); // Update route as needed
  };

  return (
    <div className="activity3d-container">
      <div className="page-box">
        <div className="activity3d-content">
          <div className="activity3d-left">
            <h3 className="activity3d-title">Plants are drooping</h3>
            <p className="activity3d-description">
              You’re not sure why your garden is not growing like it used to grow.
              Let’s try to take one step at a time & name exactly what we see.
            </p>
          </div>
          <div className="activity3d-right">
            <p className="activity3d-support">
              I appreciate you opening up about this. Whatever you’re going through,
              your feelings are important. I’m here with you...
            </p>
          </div>
        </div>

        <div className="activity3d-question">
          <p>
            After the activity, what do you know about the situation now that you
            didn’t know before?
          </p>

          <div className="reflection-section">
            <div className="image-wrapper">
              <img src={img1} alt="Foggy plant" className="thoughts-image" />
            </div>
            <div className="textarea-wrapper">
              <textarea
                className="activity3d-textarea"
                rows="6"
                placeholder="You can write down your thoughts here..."
              />
            </div>
          </div>
        </div>

        <div className="activity3d-footer">
          <p>
            <span className="info-icon">ℹ</span> No textual data will be stored;
            you may express freely in whichever language you’re comfortable.
          </p>
        </div>

        <div className="button-container">
          <button className="next-btn" onClick={goToNextPage}>
            Next →
          </button>
        </div>
      </div>
    </div>
  );
};

export default Activity3dPage;