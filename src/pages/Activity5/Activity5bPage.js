import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Activity5bPage.css";
import img1 from "./images/DCArtboard 2.png";

const Activity5bPage = () => {
  const [trueThoughts, setTrueThoughts] = useState("");
  const [notTrueThoughts, setNotTrueThoughts] = useState("");
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const handleNext = () => {
    if (trueThoughts.trim() && notTrueThoughts.trim()) {
      console.log("Why true:", trueThoughts);
      console.log("Why not true:", notTrueThoughts);
      navigate("/activity5c");
    } else {
      setError(true);
    }
  };

  return (
    <div className="activity5b-container">
      <div className="header-text">
        <h3>Clearing the Fog</h3>
      </div>

      <div className="thoughts-boxes">
        <div className="thought-box">
          <label>Why are these thoughts true?</label>
          <textarea
            value={trueThoughts}
            onChange={(e) => setTrueThoughts(e.target.value)}
            className={error && !trueThoughts.trim() ? "error-border" : ""}
            placeholder="Write here..."
          />

          <label>Why might these thoughts be true?</label>
          <textarea
            value={notTrueThoughts}
            onChange={(e) => setNotTrueThoughts(e.target.value)}
            className={error && !notTrueThoughts.trim() ? "error-border" : ""}
            placeholder="Write here..."
          />

          {error && (
            <p className="error-message">
              Please fill in both sections before continuing.
            </p>
          )}
        </div>

        <div className="activity5b-image">
          <img
            src={img1}
            alt="Clearing the fog illustration"
            className="activity5b-image"
          />
        </div>
      </div>

      <p className="note-text">
        <span>ⓘ</span> No textual data will be stored; you may express freely in
        whichever language you’re comfortable
      </p>

      <button className="next-btn" onClick={handleNext}>
        Next →
      </button>
    </div>
  );
};

export default Activity5bPage;