import React, { useState } from "react";
import "./Activity1dPage.css";
import { useNavigate } from "react-router-dom";
import img1 from "./images/HA 3-4 .png";

export default function Activity1dPage() {
  const [mantra, setMantra] = useState("");
  const [visual, setVisual] = useState("");

  const navigate = useNavigate();

    const goToNextPage = () => {
        navigate("/questionspost") // Change it to post stress
    };

  return (
    <div className="activity1d-container">
    <div className="page-box">
      {/* Intro */}
      <div className="intro-image-wrapper">
  <div className="text-section">
    <p className="intro-text">
      I appreciate you opening about this. Whatever you’re going through, your
      feelings are important. I’m here with you…
    </p>

    <h3 className="section-title">Weeds and the Weather</h3>
    <p className="description">
      You see what’s growing & what’s choking your garden, but the storm makes
      you feel stuck. Let’s find what you can tend.
    </p>

    <h4 className="instruction">
      Create a <span className="highlight">“micro-action mantra”</span> & a
      visualization acting on it.
    </h4>
    <p className="example">
      Example of micro-action mantra: <em>“I can water one corner today”</em>
    </p>
  </div>

  <div className="image-section">
    <img src={img1} alt="Right visual" />
  </div>
</div>

      {/* Inputs */}
      <div className="input-grid">
        <div className="input-box left-bubble">
          <label className="label">My mantra</label>
          <textarea
            value={mantra}
            onChange={(e) => setMantra(e.target.value)}
            className="response-box"
            placeholder="Write your mantra..."
          />
        </div>

        <div className="input-box right-bubble">
          <label className="label">My visualization</label>
          <textarea
            value={visual}
            onChange={(e) => setVisual(e.target.value)}
            className="response-box"
            placeholder="Describe your visualization..."
          />
        </div>
      </div>

      {/* Footer */}
      <p className="footer-note">
        ℹ️ No textual data will be stored; you may express freely in whichever
        language you’re comfortable
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
