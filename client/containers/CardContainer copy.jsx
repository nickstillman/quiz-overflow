import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from '../components/Card';
import {
  correctChoice,
  getNewCard,
  updateHighScore,
  getHighScore,
  newHighScore,
} from '../actions/actions';
import PlayerStats from '../components/PlayerStats';

const mapStateToProps = (state) => ({
  card: state.quiz.card,
  cardsThisSession: state.quiz.cardsThisSession,
  correctAnswers: state.quiz.correctAnswers,
  // new component?
  // currentScore: state.quiz.currentScore,
  // highScore: state.quiz.highScore,
});

const mapDispatchToProps = {
  getNewCard,
  correctChoice,
  getHighScore,
  updateHighScore,
  newHighScore,
};

class CardContainer extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getHighScore();
  }

  render() {
    return (
      <div>
        <div className="cardContainer">
          <Card
            currentScore={this.props.currentScore}
            newHighScore={this.props.newHighScore}
            highScore={this.props.highScore}
            updateHighScore={this.props.updateHighScore}
            correctAnswers={this.props.correctAnswers}
            correctChoice={this.props.correctChoice}
            // cardsThisSession={this.props.cardsThisSession}
            card={this.props.card}
          />
        </div>

        <PlayerStats
          getHighScore={this.props.getHighScore}
          highScore={this.props.highScore}
          currentScore={this.props.currentScore}
        />
        <p>High Score: {this.props.highScore}</p>
        <p>Current Score: {this.props.currentScore}</p>
        <button onClick={() => this.props.getNewCard()}>
          Gets Another Question
        </button>
      </div>
    );
  }
}

/*  Once props are mapped connect will be used here  */
export default connect(mapStateToProps, mapDispatchToProps)(CardContainer);
