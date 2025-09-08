import React, { useState, useContext } from "react";
import { UserContext } from "../UserContext";
import { useNavigate } from "react-router-dom";
import "./Activity1bPage.css";
import img1 from "./images/ACQHA2@3x.png";

export default function Activity1bPage() {
  const navigate = useNavigate();
  const [response, setResponse] = useState("");
  const [error, setError] = useState(false);

  const goToNextPage = () => {
    if (response.trim() === "") {
      setError(true);
      return;
    }
    navigate("/activity1c");
  };

  return (
    <div className="page-container">
      <div className="page-box">
        <h3 className="section-title">Weeds and the Weather</h3>

        <p className="question-text">
          Are these weeds truly out of your control or just overwhelming to face?
        </p>

        <div className="response-image-wrapper">
          <textarea
            className={`response-box ${error ? "error-border" : ""}`}
            value={response}
            onChange={(e) => {
              setResponse(e.target.value);
              if (error) setError(false);
            }}
            placeholder="Write here..."
          />
          <div className="image-section">
            <img src={img1} alt="Right visual" />
          </div>
        </div>

        {error && (
          <p className="error-message">
            Please share your thoughts before continuing.
          </p>
        )}

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