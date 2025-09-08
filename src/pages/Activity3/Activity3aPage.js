import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Activity3aPage.css";
import img1 from "./images/UI-1A.png";
import img2 from "./images/UI-1B.png";

export default function Activity3aPage() {
  const [thoughts, setThoughts] = useState(["", "", "", "", ""]);
  const [feelings, setFeelings] = useState(["", "", "", "", ""]);
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const handleThoughtChange = (index, value) => {
    const updated = [...thoughts];
    updated[index] = value;
    setThoughts(updated);
    if (error) setError(false);
  };

  const handleFeelingChange = (index, value) => {
    const updated = [...feelings];
    updated[index] = value;
    setFeelings(updated);
    if (error) setError(false);
  };

  const handleNext = () => {
    const allFilled = [...thoughts, ...feelings].every((entry) => entry.trim() !== "");
    if (!allFilled) {
      setError(true);
      return;
    }
    navigate("/activity3b");
  };

  return (
    <div className="activity3a-container">
      <div className="page-box">
        <p className="intro-text">
          I appreciate you opening about this. Whatever you’re going through, your feelings
          are important. I’m here with you…
        </p>

        <h3 className="section-title">Plants are drooping</h3>
        <p className="description">
          You’re not sure why your garden is not growing like it used to grow. Let’s try to
          take one step at a time & name exactly what we see
        </p>

        <h4 className="instruction">
          Let’s take a deep breath & without thinking too much, write down the top 5 thoughts
          that come to your mind about this situation & how it made you feel...
        </h4>

        <div className="image-section">
          <img src={img1} alt="Right visual" />
          <img src={img2} alt="Right visual" />
        </div>

        <p className="note">There are no right or wrong answers</p>

        <div className="grid-container">
          <div className="column">
            <h5>Thoughts</h5>
            {thoughts.map((t, i) => (
              <textarea
                key={`thought-${i}`}
                value={t}
                onChange={(e) => handleThoughtChange(i, e.target.value)}
                placeholder={`Thought ${i + 1}`}
                className={error && t.trim() === "" ? "error-border" : ""}
              />
            ))}
          </div>

          <div className="column">
            <h5>Feelings</h5>
            {feelings.map((f, i) => (
              <textarea
                key={`feeling-${i}`}
                value={f}
                onChange={(e) => handleFeelingChange(i, e.target.value)}
                placeholder={`Feeling ${i + 1}`}
                className={error && f.trim() === "" ? "error-border" : ""}
              />
            ))}
          </div>
        </div>

        {error && (
          <p className="error-message">
            Please fill in all thoughts and feelings before continuing.
          </p>
        )}

        <p className="footer-note">
          ℹ️ No textual data will be stored; you may express freely in whichever language
          you’re comfortable
        </p>

        <div className="button-container">
          <button className="next-btn" onClick={handleNext}>
            Next →
          </button>
        </div>
      </div>
    </div>
  );
}