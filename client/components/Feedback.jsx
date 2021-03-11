import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
  currentScore: state.quiz.currentScore,
});

class Feedback extends React.Component{
  constructor(props){
    super(props);
    this.state = { scoreUpdated: false }
  }

  componentDidUpdate(prevProps){
    console.log('componentUpdate triggered')
    if(prevProps.currentScore !== this.props.currentScore){
      this.setState({scoreUpdated: true});
    }
  }

  getFeedbackElement(){
    console.log('getFeedback triggered');
    return(
      <div currentScore={this.props.currentScore} className="correctFeedback">✓</div>
    );
  }

  toggleScoreUpdated(){
    console.log('toggle detected')
    this.setState({scoreUpdated:false});
  }

  render(){
    const feedback = this.getFeedbackElement();
    console.log(feedback);
    if(this.state.scoreUpdated){
      this.toggleScoreUpdated();
    }
    return(
      <div>
            <div className="feedbackContainer">
            <div key={this.props.currentScore}className="correctFeedback">✓</div>
            </div>
      </div>
    )
  }
} 

export default connect(mapStateToProps)(Feedback);
