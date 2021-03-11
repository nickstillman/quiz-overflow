import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
  currentScore: state.quiz.currentScore,
});

class Feedback extends React.Component{
  constructor(props){
    super(props);
    this.state = { flag: false }
  }

  componentDidUpdate(prevProps){
    console.log('didUpdate fired');
    console.log('prevProps: ' + prevProps.currentScore);
    console.log(this.props.currentScore);
    if(prevProps.currentScore !== this.props.currentScore){
      this.setState({flag: true});
    }
  }

  render(){
    let feedback;
    if(this.state.flag){
      feedback = <div className="correctFeedback">✓</div>;
      this.setState({flag: false});
    }
    console.log(feedback)
    return(
      <div>
            <div className="feedbackContainer">
              {/* <div className="correctFeedback">✓</div> */}
              {/* <div className="incorrectFeedback">X</div> */}
              {feedback}
            </div>
      </div>
    )
  }

} 

export default connect(mapStateToProps)(Feedback);
