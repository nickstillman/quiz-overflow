import React from 'react';

class CheckAnswer extends React.Component{
  constructor(props){
    super(props);
  }

  // returns div to be rendered
  getDiv(){
    // if starting game, returns empty div
    if(this.props.currentScore === 0){
      return (
        <div key={this.props.currentScore}></div>
      )
    } else {
      return(
        <div key={this.props.currentScore} className="correctFeedback">✓</div>
      );
    }
  }

  render(){
    const feedback = this.getDiv();
    return(
      <div>
            <div className="feedbackContainer">
            {feedback}
            </div>
      </div>
    )
  }
} 

export default CheckAnswer;