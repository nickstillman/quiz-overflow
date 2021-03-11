import React from 'react';

const Feedback = (props) => (
  <div>
      <div className="feedbackContainer">
        <div className="invisible">{props.currentScore}</div>
        <div className="correctFeedback">Correct!</div>
      </div>
  </div>
);

export default Feedback;
