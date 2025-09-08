import React, { useState } from "react";
import "./Activity4Page.css";
import { useNavigate } from "react-router-dom";

const Activity4Page = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    event: "",
    belief: "",
    consequence: "",
  });

  const [error, setError] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (e.target.value.trim()) setError(false);
  };

  const goToNextPage = () => {
    const { event, belief, consequence } = formData;
    if (event.trim() && belief.trim() && consequence.trim()) {
      navigate("/poststress"); // Update route as needed
    } else {
      setError(true);
    }
  };

  return (
    <div className="activity4-container">
      {/* Header */}
      <div className="activity4-header">
        <p>
          I appreciate you opening about this. Whatever you’re going through,
          your feelings are important. I’m here with you...
        </p>
      </div>

      {/* Three-column layout with inputs */}
      <div className="activity4-grid">
        {/* Activating Event */}
        <div className="activity4-column">
          <h2>Activating Event</h2>
          <textarea
            name="event"
            value={formData.event}
            onChange={handleChange}
            className={`activity4-input ${error && !formData.event.trim() ? "error-border" : ""}`}
            placeholder="Describe the event..."
          />
        </div>

        {/* Belief/Thought */}
        <div className="activity4-column">
          <h2>Belief/Thought</h2>
          <textarea
            name="belief"
            value={formData.belief}
            onChange={handleChange}
            className={`activity4-input ${error && !formData.belief.trim() ? "error-border" : ""}`}
            placeholder="What were your thoughts or beliefs?"
          />
        </div>

        {/* Emotional/Behavioral Consequence */}
        <div className="activity4-column">
          <h2>Emotional/Behavioral Consequence</h2>
          <textarea
            name="consequence"
            value={formData.consequence}
            onChange={handleChange}
            className={`activity4-input ${error && !formData.consequence.trim() ? "error-border" : ""}`}
            placeholder="How did you feel or react?"
          />
        </div>
      </div>

      {error && (
        <p className="error-message">
          Please complete all three sections before continuing.
        </p>
      )}

      <div className="button-container">
        <button className="next-button" onClick={goToNextPage}>
          Next →
        </button>
      </div>
    </div>
  );
};

export default Activity4Page;