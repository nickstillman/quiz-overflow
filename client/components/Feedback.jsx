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
    if(prevProps.currentScore !== this.props.currentScore){
      this.setState({flag: true});
    }
  }

  render(){
    return(
      <div>
            <div className="feedbackContainer">
              <div score={this.props.currentScore} className="correctFeedback">✓</div>
              <div>{this.props.currentScore}</div>
              {/* <div className="incorrectFeedback">X</div> */}
            </div>
      </div>
    )
  }

} 

export default connect(mapStateToProps)(Feedback);
