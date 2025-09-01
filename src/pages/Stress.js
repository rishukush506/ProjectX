import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "./UserContext";
import "./Stress.css";

function Stress() {
  const { setUserData } = useContext(UserContext);
  const [value, setValue] = useState(5); // default midpoint
  const navigate = useNavigate();

  const handleSaveAndNext = () => {
    setUserData((prev) => ({ ...prev, sliderValue: value }));
    navigate("/questions");
  };

  const handleBack = () => {
    navigate("/");
  };

  return (
    <div className="container">
      <div className="form-box">
        <h5 className="intro-text">
          I appreciate you opening up about this. Whatever you're going through, 
          your feelings are important. I'm here with you.
        </h5>
        <h2 className="title">Reflection on your situation</h2>
        <h1 className="question">How much stress is it causing you?</h1>

        <div className="slider-block">
          <label className="slider-label">Select a number (1–10):</label>
          <input
            type="range"
            min="1"
            max="10"
            step="1"
            value={value}
            onChange={(e) => setValue(Number(e.target.value))}
            className="slider"
          />
          <p className="slider-value">Current Value: {value}</p>
        </div>

        <div className="button-group">
          <button onClick={handleBack} className="back-btn">Back</button>
          <button onClick={handleSaveAndNext} className="next-btn">
            Save & Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default Stress;
