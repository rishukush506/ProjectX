import React, { useState } from "react";
import "./Activity3dPage.css";
import { useNavigate } from "react-router-dom";
import img1 from "./images/UI-4.png";

const Activity3dPage = () => {
  const navigate = useNavigate();
  const [reflection, setReflection] = useState("");
  const [error, setError] = useState(false);

  const handleTextareaChange = (e) => {
    setReflection(e.target.value);
    if (e.target.value.trim()) {
      setError(false);
    }
  };

  const goToNextPage = () => {
    if (reflection.trim()) {
      navigate("/poststress");
    } else {
      setError(true);
    }
  };

  return (
    <div className="activity3d-container">
      <div className="page-box">
        <div className="activity3d-content">
          <div className="activity3d-left">
            <h3 className="activity3d-title">Plants are drooping</h3>
          </div>
          <div className="activity3d-right"></div>
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
                className={`activity3d-textarea ${error ? "error-border" : ""}`}
                rows="6"
                placeholder="Write here..."
                value={reflection}
                onChange={handleTextareaChange}
              />
              {error && (
                <p className="error-message">
                  Please share your thoughts before continuing.
                </p>
              )}
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