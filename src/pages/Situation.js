import React, { useState } from "react";
import "./Situation.css";
import { useNavigate } from "react-router-dom";

const Situation = () => {
  const [response, setResponse] = useState("");
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setResponse(e.target.value);
    if (e.target.value.trim()) setError(false);
  };

  const handleSubmit = () => {
    if (response.trim()) {
      console.log("User response:", response);
      navigate("/stress"); // Replace with your actual route
    } else {
      setError(true);
    }
  };

  return (
    <div className="stress-prompt-container">
      <h1 className="greeting">Hello!</h1>
      <h2 className="prompt-title">What's been on your mind?</h2>
      <p className="prompt-description">
        This is a safe place. Let's start by writing about a workplace situation
        that's been stressing you out lately (in the last 15 days). No pressure —
        just a few words can help you feel a bit lighter.
      </p>

      <textarea
        className={`response-box ${error ? "error-border" : ""}`}
        placeholder="Type your thoughts here..."
        value={response}
        onChange={handleChange}
        rows={8}
      />

      {error && (
        <p className="error-message">
          Please share something before continuing.
        </p>
      )}

      <p className="note">
        <span>ⓘ</span> No textual data will be stored; you may express freely in
        whichever language you're comfortable.
      </p>

      <button className="submit-btn" onClick={handleSubmit}>
        Next
      </button>
    </div>
  );
};

export default Situation;