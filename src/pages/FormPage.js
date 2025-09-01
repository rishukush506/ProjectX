import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "./UserContext";
import "./FormPage.css";

function FormPage() {
  const { setUserData } = useContext(UserContext);
  const [numberValue, setNumberValue] = useState("");
  const [dropdownValue, setDropdownValue] = useState("");
  const navigate = useNavigate();

  const handleSaveAndNext = () => {
    setUserData((prev) => ({
      ...prev,
      participantId: numberValue,
      group: dropdownValue,
    }));
    navigate("/stress");
  };

  return (
    <div className="form-container">
      <h1 className="title">Welcome to the wellbeing study !!</h1>
      <h2 className="subtitle">
        All your information will be confidential, no personal data will be stored. 
        Please feel free to express in any language. 
        To have a fulfilling experience, we encourage you to be honest.
      </h2>

      <label className="form-label">Participant ID:</label>
      <input
        type="number"
        className="input-box"
        value={numberValue}
        onChange={(e) => setNumberValue(e.target.value)}
        placeholder="Enter participant id"
      />

      <label className="form-label">Select your group</label>
      <select
        className="dropdown"
        value={dropdownValue}
        onChange={(e) => setDropdownValue(e.target.value)}
      >
        <option value="">Group Number</option>
        <option value="Group 1">Group 1</option>
        <option value="Group 2">Group 2</option>
        <option value="Group 3">Group 3</option>
        <option value="Group 4">Group 4</option>
      </select>

      <div className="button-group">
        <button onClick={handleSaveAndNext} className="next-btn">
          Save & Next
        </button>
      </div>
    </div>
  );
}

export default FormPage;
