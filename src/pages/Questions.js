import React, { useState, useContext } from "react";
import { UserContext } from "./UserContext";
import { useNavigate } from "react-router-dom";
import "./Questions.css"; // import css

function Questions() {
  const { userData, setUserData } = useContext(UserContext);

  const [form, setForm] = useState({
    q1: "",
    q2: "",
    q3: "",

  });


  const emotionalAwarenessOptions = [
  "I feel numb/disconnected",
  "I have a vague distress but can't identify my feelings",
  "I know I am stressed but struggle to pinpoint",
  "I can identify some of my emotions but not all",
  "I have a clear understanding of my emotions",
  "I am highly attuned to my feelings",
];

const externalUnderstandingOptions = [
  "I have no idea what's going on",
  "I have a limited view",
  "I see some external factors but missing key details",
  "I have a good grasp of the facts but might miss some nuances",
  "I have clear understanding of the situation & other's perspective",
  "I am acutely aware of the context, relevant facts and perspectives of everyone",
];

const influenceBeliefOptions = [
  "It is completely out of my control & there's nothing I can do",
  "I feel mostly helpless as what I do probably won't matter much",
  "I have small amount of influence but outside factors will likely decide what happens",
  "I believe my choices & efforts can have some effort",
  "I feel confident that my actions will have a big impact",
  "I feel that my actions and attitude will determine the outcome",
];



  const navigate = useNavigate();

  // handle change for radio inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSaveAndNext = () => {

    const { q1, q2, q3 } = form;
  if (!q1 || !q2 || !q3) {
    alert("Please answer all questions before proceeding.");
    return;
  }

  
    setUserData((prev) => ({ ...prev, answers1: form }));
    console.log("Updated userData:", { ...userData, answers1: form });
        switch (userData.group) {
      // case "Group 1":
      //   navigate("/activity1a");
      //   break;

      case "Group 1":
        const isCombo1 =
          q1 === emotionalAwarenessOptions[0] || q1 === emotionalAwarenessOptions[1] || q1 === emotionalAwarenessOptions[2] || q1 === emotionalAwarenessOptions[3] || q1 === emotionalAwarenessOptions[4];
        const isCombo2 =
          q1 === emotionalAwarenessOptions[0] || q1 === emotionalAwarenessOptions[1] || q1 === emotionalAwarenessOptions[2] || q1 === emotionalAwarenessOptions[3];
        const isCombo3 =
          q1 === emotionalAwarenessOptions[0] || q1 === emotionalAwarenessOptions[1] || q1 === emotionalAwarenessOptions[2] ;
        const isCombo4 =
          q1 === emotionalAwarenessOptions[0] || q1 === emotionalAwarenessOptions[1];
        const isCombo5 =
          q1 === emotionalAwarenessOptions[0];

        const q3Match = q3 === influenceBeliefOptions[0] || q3 === influenceBeliefOptions[1] || q3 === influenceBeliefOptions[2];

        const q3Match1 = q3 === influenceBeliefOptions[3] || q3 === influenceBeliefOptions[4] || q3 === influenceBeliefOptions[5];

        const match =
          (isCombo1 && q2 === externalUnderstandingOptions[0] && q3Match) ||
          (isCombo2 && q2 === externalUnderstandingOptions[1] && q3Match) ||
          (isCombo3 && q2 === externalUnderstandingOptions[2] && q3Match) ||
          (isCombo4 && q2 === externalUnderstandingOptions[3] && q3Match) ||
          (isCombo5 && q2 === externalUnderstandingOptions[4] && q3Match);

          const match1 =
          (isCombo1 && q2 === externalUnderstandingOptions[0] && q3Match1) ||
          (isCombo2 && q2 === externalUnderstandingOptions[1] && q3Match1) ||
          (isCombo3 && q2 === externalUnderstandingOptions[2] && q3Match1) ||
          (isCombo4 && q2 === externalUnderstandingOptions[3] && q3Match1) ||
          (isCombo5 && q2 === externalUnderstandingOptions[4] && q3Match1);


        if (match) {
    navigate("/activity3a");
  } else if (
    (q1 === emotionalAwarenessOptions[5] && q2 === externalUnderstandingOptions[0] && q3Match) ||
    ((q1 === emotionalAwarenessOptions[4] || q1 === emotionalAwarenessOptions[5]) && q2 === externalUnderstandingOptions[1] && q3Match) ||
    ((q1 === emotionalAwarenessOptions[3] || q1 === emotionalAwarenessOptions[4] || q1 === emotionalAwarenessOptions[5]) && q2 === externalUnderstandingOptions[2] && q3Match) ||
    ((q1 === emotionalAwarenessOptions[2] || q1 === emotionalAwarenessOptions[3] || q1 === emotionalAwarenessOptions[4] || q1 === emotionalAwarenessOptions[5]) && q2 === externalUnderstandingOptions[3] && q3Match) ||
    ((q1 === emotionalAwarenessOptions[1] || q1 === emotionalAwarenessOptions[2] || emotionalAwarenessOptions[3] || q1 === emotionalAwarenessOptions[4] || q1 === emotionalAwarenessOptions[5]) && q2 === externalUnderstandingOptions[4] && q3Match) ||
    ((q1 === emotionalAwarenessOptions[0] || q1 === emotionalAwarenessOptions[1] || q1 === emotionalAwarenessOptions[2] || q1 === emotionalAwarenessOptions[3] || q1 === emotionalAwarenessOptions[4] || q1 === emotionalAwarenessOptions[5]) && q2 === externalUnderstandingOptions[5] && q3Match)
  ) {
    navigate("/activity1a");}
    else if(match1)
    {
      navigate("/activity5a")
    }
        else {
          navigate("/activity2a");
        }
        break;


      case "Group 2":
        navigate("/group2");
        break;
      // case "Group 3":
      //   // navigate("/activity3");
      //   break;
      case "Group 3":
        const randomNumber = Math.floor(Math.random() * 4) + 1; // generates 1 to 4
        switch(randomNumber)
        {
          case 1 :
            navigate("/activity1a");
            break;
          case 2 :
            navigate("/group2");
            break;
          case 3 :
            navigate("/activity3a");
            break;
          case 4 :
            navigate("/activity5a");
            break;
        }
        // navigate(`/activity${randomNumber}`);
        break;
      case "Group 4":
        navigate("/activity4");
        break;
      default:
        navigate("/display"); // fallback
    }
  };

  const handleBack = () => {
    navigate("/stress");
  };
  

  return (
    <div className="container">
      <div className="form-box">
        <h5 className="intro-text">
          I appreciate you opening up about this. Whatever you’re going through,
          your feelings are important. I'm here with you.
        </h5>
        <h2 className="title">Based on your situation</h2>

        {/* Question 1 */}
<div className="question-block">
  <p className="question">
    1. How well do you understand what's happening inside you?
  </p>
  {emotionalAwarenessOptions.map((opt, i) => (
    <label key={i} className="option">
      <input
        type="radio"
        name="q1"
        value={opt}
        checked={form.q1 === opt}
        onChange={handleChange}
      />
      {opt}
    </label>
  ))}
</div>

{/* Question 2 */}
<div className="question-block">
  <p className="question">
    2. How well do you understand the external factors of the situation?
  </p>
  {externalUnderstandingOptions.map((opt, i) => (
    <label key={i} className="option">
      <input
        type="radio"
        name="q2"
        value={opt}
        checked={form.q2 === opt}
        onChange={handleChange}
      />
      {opt}
    </label>
  ))}
</div>

{/* Question 3 */}
<div className="question-block">
  <p className="question">
    3. How much do you believe you can influence the situation through
    your own actions and mindset?
  </p>
  {influenceBeliefOptions.map((opt, i) => (
    <label key={i} className="option">
      <input
        type="radio"
        name="q3"
        value={opt}
        checked={form.q3 === opt}
        onChange={handleChange}
      />
      {opt}
    </label>
  ))}
</div>

        {/* Buttons */}
        <div className="button-group">
          <button onClick={handleBack} className="back-btn">
            Back
          </button>
          <button onClick={handleSaveAndNext} className="next-btn">
            Save & Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default Questions;
