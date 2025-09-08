import React, { useState } from "react";
import "./Activity5dPage.css";
import { useNavigate } from "react-router-dom";
import img1 from "./images/DCArtboard 4.png";

const Activity5dPage = () => {
  const [description, setDescription] = useState("");
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setDescription(e.target.value);
    if (e.target.value.trim()) {
      setError(false);
    }
  };

  const goToNextPage = () => {
    if (description.trim()) {
      navigate("/poststress"); // Update route as needed
    } else {
      setError(true);
    }
  };

  return (
    <div className="activity5d-container">
      <h3 className="section-title">Clearing the Fog</h3>

      <h2 className="prompt-text">
        Imagine a clearer mental picture of the situation now. <br />
        Write a few lines describing it.
      </h2>

      <div className="response-section">
        <textarea
          className={`description-box ${error ? "error-border" : ""}`}
          value={description}
          onChange={handleChange}
          placeholder="Write here..."
        />
        <img
          src={img1}
          alt="Garden bed illustration"
          className="fog-image"
        />
      </div>

      {error && (
        <p className="error-message">
          Please describe your mental picture before continuing.
        </p>
      )}

      <p className="footer-note">
        <span>ⓘ</span> No textual data will be stored; you may express freely in
        whichever language you’re comfortable
      </p>

      <div className="button-container">
        <button className="next-btn" onClick={goToNextPage}>
          Next →
        </button>
      </div>
    </div>
  );
};

export default Activity5dPage;