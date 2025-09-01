import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Activity3bPage.css";
import img1 from "./images/UI-2.png";

export default function Activity3bPage() {
  const [plantNumber, setPlantNumber] = useState("");
  const [reason, setReason] = useState("");
  const navigate = useNavigate();

  return (
    <div className="activity3b-container">
        <div className="page-box">
      <p className="intro-text">
        I appreciate you opening about this. Whatever you’re going through, your
        feelings are important. I’m here with you…
      </p>

      <h3 className="section-title">Plants are drooping</h3>
      <p className="description">
        You’re not sure why your garden is not growing like it used to grow.
        Let’s try to take one step at a time &amp; name exactly what we see.
      </p>

      

      <h4 className="highlight-text">
        There are two thought plants, select one plant this activity
      </h4>
      <p className="instruction" >
        It’s okay to have these thoughts, let’s go step by step, one plant at a
        time
      </p>

     <div className="reflection-section">

                         <div className="image-wrapper">
                          <div className="upperText">
                            <div className="insideText1">
                              <p>I think that there is nothing that I can do here. I am stuck</p>
                            </div>
                            <div className="insideText2">
                              <p>It's just the way I am, this is how it usually goes for me</p>
                            </div>
                            </div>
                          
                           <img src={img1} alt="Foggy plant" className="thoughts-image" />
                         </div>
                         <div className="textarea-wrapper">
                          <label className="label">
            Why are you thinking like this?
          </label>
                           <textarea
                             className="activity3d-textarea"
                             rows="6"
                             placeholder="You can write down your thoughts here..."
                           />
                         </div>
                       </div>



      {/* Inputs in a row */}
      


      

      <p className="footer-note">
        ℹ️ No textual data will be stored; you may express freely in whichever
        language you’re comfortable
      </p>

      <div className="button-container">
      <button className="next-btn" onClick={() => navigate("/activity3c")}>
        Next →
      </button>
      </div>
      </div>
    </div>
  );
}
