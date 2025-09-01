import React from "react";
import { useNavigate } from "react-router-dom";
import "./Activity3cPage.css";
import img1 from "./images/UI-3.png";

export default function Activity3cPage() {
  const navigate = useNavigate();

  const handleNext = () => {
    navigate("/activity3d");
  };

  return (
    <div className="activity3c-container">
        <div className="page-box">
      <div className="top-text">
        <p>
          <strong>Plants are drooping</strong>
        </p>
        <p>
          You’re not sure why your garden is not growing like it used to grow.
          Let’s try to take one step at a time & name exactly what we see
        </p>
      </div>

      <div className="side-text">
        <p>
          I appreciate you opening about this. Whatever you’re going through,
          your feelings are important. I’m here with you…
        </p>
      </div>

      <div className="question-section">
        <p>
          Let’s try to reframe the reason you’re thinking so <br />
          <strong>Is there something that can be done about it?</strong>
        </p>
      </div>

      <div className="input-section">
        

        <div className="reflection-section">
                    <div className="image-wrapper">
                      <p>...something small, something only, you</p>
                      <p> can do?</p>
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

      <div className="footer-note">
        <p>
          <span className="info-icon">ℹ</span> No textual data will be stored;
          you may express freely in whichever language you’re comfortable
        </p>
      </div>

      <div className="button-container">
        <button onClick={handleNext} className="next-btn">
          Next
        </button>
      </div>
      </div>
    </div>
  );
}
