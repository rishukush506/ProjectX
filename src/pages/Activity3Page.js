import React, { useContext } from "react";
import { UserContext } from "./UserContext";

function Activity3Page() {
  const { userData } = useContext(UserContext);

  return (
    <div>
      <h1>Welcome to Activity 3</h1>
      <p>Participant ID: {userData.participantId}</p>
      <p>Group: {userData.group}</p>
      <p>Stress Level: {userData.sliderValue}</p>
      <p>Q1: {userData.answers?.q1}</p>
      <p>Q2: {userData.answers?.q2}</p>
      <p>Q3: {userData.answers?.q3}</p>
    </div>
  );
}

export default Activity3Page;
