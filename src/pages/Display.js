import React, { useContext } from "react";
import { UserContext } from "./UserContext";

function Display() {
  const { userData } = useContext(UserContext);

  // Email details
  const subject = encodeURIComponent("Data from User");
  const body = encodeURIComponent(
    `Participant ID: ${userData?.participantId || "Not provided"}
Group: ${userData?.group || "Not provided"}

--- Responses ---
Q1: ${userData?.answers?.q1 || "Not answered"}
Q2: ${userData?.answers?.q2 || "Not answered"}
Q3: ${userData?.answers?.q3 || "Not answered"}
Q4: ${userData?.answers?.q4 || "Not answered"}
Q5: ${userData?.answers?.q5 || "Not answered"}
Q6: ${userData?.answers?.q6 || "Not answered"}`
  );

  return (
    <div>
      <h1>Summary of Your Responses</h1>
      <p><b>Participant ID:</b> {userData.participantId}</p>
      <p><b>Group:</b> {userData.group}</p>

      <br></br>

      <h3 className="display-subtitle">Pre Activity Responses</h3>
      <div className="display-box">
        <p><strong>Pre Activity 1:</strong> {userData?.answers1?.q1 || "Not answered"}</p>
        <p><strong>Pre Activity 2:</strong> {userData?.answers1?.q2 || "Not answered"}</p>
        <p><strong>Pre Activity 3:</strong> {userData?.answers1?.q3 || "Not answered"}</p>
      </div>

      <br></br>

      <h3 className="display-subtitle">Post Activity Responses</h3>
      <div className="display-box">
        <p><strong>Post Activity 1:</strong> {userData?.answers2?.q4 || "Not answered"}</p>
        <p><strong>Post Activity 2:</strong> {userData?.answers2?.q5 || "Not answered"}</p>
        <p><strong>Post Activity 3:</strong> {userData?.answers2?.q6 || "Not answered"}</p>
      </div>

      <div className="button-container" style={{ marginLeft: "100px" }}>
        {/* Send Mail Button */}
        <a
          href={`mailto:pawansirsulla111@gmail.com?subject=${subject}&body=${body}`}
          className="next-button"
          
        >
          Submit
        </a>
      </div>
    </div>
  );
}

export default Display;