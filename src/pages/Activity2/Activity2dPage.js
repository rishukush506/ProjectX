import React, { useState } from "react";
import "./Activity2dPage.css";
import { useNavigate } from "react-router-dom";
import img1 from "./images/post.PNG";

export default function Activity2dPage() {
  const [script, setScript] = useState("");
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const goToNextPage = () => {
    if (script.trim() === "") {
      setError(true);
      return;
    }
    navigate("/poststress");
  };

  return (
    <div className="activity2d-container">
      <div className="affirmation-card">
        <div className="affirmation-header">
          <h2>Tending to the Strongest Plant</h2>
          <p>
            When things feel heavy, your words can be the sunlight. Write a short
            self-affirming script you can revisit when you need grounding.
          </p>
          <p className="subtext">
            Think of this as your guiding post — a gentle reminder of your strength,
            worth, and direction.
          </p>
        </div>

        <div className="affirmation-body">
          <div className="textarea-section">
            <textarea
              className={`affirmation-textarea ${error ? "error-border" : ""}`}
              value={script}
              onChange={(e) => {
                setScript(e.target.value);
                if (error) setError(false);
              }}
              placeholder="Write your self-affirming script here..."
              rows={8}
            />
            {error && (
              <p className="error-message">
                Please write your self-affirming script before continuing.
              </p>
            )}
          </div>

          <div className="image-section">
            <img src={img1} alt="Illustration of inner strength" />
          </div>
        </div>

        <p className="footer-note">
          <span>ⓘ</span> No textual data will be stored; you may express freely in
          whichever language you’re comfortable.
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