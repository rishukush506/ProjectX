import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Activity5bPage.css";
import img1 from "./images/DC-3.png";

const Activity5bPage = () => {
  const [trueThoughts, setTrueThoughts] = useState("");
  const [notTrueThoughts, setNotTrueThoughts] = useState("");
  const navigate = useNavigate();

  const handleNext = () => {
    console.log("Why true:", trueThoughts);
    console.log("Why not true:", notTrueThoughts);
    navigate("/activity5c");
  };

  return (
    <div className="activity5b-container">
      <div className="header-text">
        <p>
          <i>
            I appreciate you opening about this. Whatever you’re going through,
            your feelings are important. I’m here with you...
          </i>
        </p>
        <h3>Clearing the Fog</h3>
        <p>
          You’re planting with confidence but can’t see the whole garden. Let’s
          pull back the fog and look clearly at the landscape
        </p>
      </div>

      <div className="thoughts-boxes">
        <div className="thought-box">
          <label>Why are these thoughts true?</label>
          <textarea
            value={trueThoughts}
            onChange={(e) => setTrueThoughts(e.target.value)}
          />
        
          <label>Why might thoughts not be true?</label>
          <textarea
            value={notTrueThoughts}
            onChange={(e) => setNotTrueThoughts(e.target.value)}
          />
        </div>
        <div className="activity5b-image">
          <img
                        src={img1}  // Make sure this path is correct
                        alt="Clearing the fog illustration"
                        className="activity5b-image"
                      />
        </div>
      </div>

      <p className="note-text">
        No textual data will be stored; you may express freely in whichever
        language you’re comfortable
      </p>

      <button className="next-btn" onClick={handleNext}>
        Next →
      </button>
    </div>
  );
};

export default Activity5bPage;
