import React, { useState } from "react";
import "./Activity2Page.css"; // import CSS file
import { useNavigate } from "react-router-dom";

const Activity2Page = () => {
  const [selected, setSelected] = useState(null);
  const navigate = useNavigate();
  const goToNextPage = () => {
        navigate("/activity1d");
    };


  const activities = [
    {
      id: 1,
      text: "You see what’s growing and what’s choking your garden, but the storm makes you stuck. Let’s find what you can tend.",
    },
    {
      id: 2,
      text: "You recognize the roots of your struggles; you actively prune away hindrances to flourish & stand tall against any storm.",
    },
    {
      id: 3,
      text: "You are not sure why your garden is not growing like it used to grow.",
    },
    {
      id: 4,
      text: "You’re planting with confidence but can’t see the whole garden.",
    },
  ];

  const getActivityMessage = (id) => {
    switch (id) {
      case 1:
        navigate("/activity1a");
        break
      case 2:
        navigate("/activity2a");
        break
      case 3:
        navigate("/activity3a");
        break
      case 4:
        navigate("/activity5a");
        break
      default:
        return "Unknown activity.";
    }
  };

  return (
    <div className="activity-container">
      <div className="activity-box">
        <h2 className="activity-intro">
          I appreciate you opening about this. Whatever you’re going through,
          your feelings are important. I’m here with you...
        </h2>
        <h1 className="activity-title">
          Based on your stressful situation...
        </h1>
        <p className="activity-subtitle">
          Below are metaphors of a garden that describes the activity. Select
          one activity that you would like to do?
        </p>

        <div className="activity-grid">
          {activities.map((activity) => (
            <button
              key={activity.id}
              onClick={() => setSelected(activity.id)}
              className={`activity-option ${
                selected === activity.id ? "selected" : ""
              }`}
            >
              {activity.text}
            </button>
          ))}
        </div>

        {selected && (
          <div className="activity-selected">
            <p>
              <strong>You selected:</strong> {getActivityMessage(selected)}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Activity2Page;