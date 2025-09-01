import React from "react";
import { useNavigate } from "react-router-dom";
import "./Activity5cPage.css";  // separate CSS file
import img1 from "./images/DC-3.png";

const Activity5cPage = () => {
  const navigate = useNavigate();

  return (
    <div className="activity5c-container">
      <div className="activity5c-card">
        <p className="activity5c-intro">
          I appreciate you opening about this. Whatever you're going through, your feelings are important. I'm here with you...
        </p>

        <h3 className="activity5c-heading">Clearing the Fog</h3>
        <p className="activity5c-subtext">
          You're planting with co   nfidence but can’t see the whole garden. Let’s pull back the fog and look clearly at the landscape.
        </p>

        <h2 className="activity5c-question">
          Let’s imagine, you’re observing someone in this situation,<br />
          how would you ask them to rethink the situation?
        </h2>

        <div className="activity5c-response-section">
            

            <textarea
              className="activity5c-textarea"
              placeholder="Type your response here..."
            />

            <img
              src={img1}  // Make sure this path is correct
              alt="Clearing the fog illustration"
              className="activity5c-image"
            />
          </div>
          


        <button
          className="activity5c-button"
          onClick={() => navigate("/activity5d")}
        >
         Next →
        </button>
      </div>
    </div>
  );
};

export default Activity5cPage;
