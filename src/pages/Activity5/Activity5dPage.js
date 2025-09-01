import React, { useState } from "react";
import "./Activity5dPage.css";
import { useNavigate } from "react-router-dom";
import img1 from "./images/DC-3.png";

const Activity5dPage = () => {
  const [description, setDescription] = useState("");

  const handleChange = (e) => {
    setDescription(e.target.value);
  };

  const navigate = useNavigate();

    const goToNextPage = () => {
        navigate("/questionspost"); // Change it to post stress
    };


  return (
    <div className="activity5d-container">
      <p className="intro-text">
        I appreciate you opening about this. Whatever you're going through, your feelings
        are important. I'm here with you...
      </p>

      <h3 className="section-title">Clearing the Fog</h3>
      <p className="section-text">
        You’re planting with confidence but can’t see the whole garden. Let’s pull back
        the fog and look clearly at the landscape
      </p>

      <h2 className="prompt-text">
        Imagine a clearer mental picture of the situation now. <br />
        Write a few lines describing it.
      </h2>

      <div className="response-section">
      <textarea
        className="description-box"
        value={description}
        onChange={handleChange}
        placeholder="Type here..."
      />
      <img
        src={img1} // Update path if needed
        alt="Garden bed illustration"
        className="fog-image"
      />
    </div>

      <p className="footer-note">
        No textual data will be stored; you may express freely in whichever language
        you’re comfortable
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
