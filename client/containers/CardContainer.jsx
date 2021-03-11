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
  deck: state.quiz.deck,
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
    console.log('CardContainer componentDidMount fired...');
    this.props.getHighScore();
    this.props.getNewCard();
  }

  render() {
    console.log('CardContainer render fired...');
    console.log('deck', this.props.deck);
    return (
      // <div>

      <div className="cardAndStatsContainer">
        <PlayerStats className="playerStatsContainer invisible" />

        {/* Card Container */}
        <div className="cardContainer">
          <Card
            currentScore={this.props.currentScore}
            newHighScore={this.props.newHighScore}
            highScore={this.props.highScore}
            updateHighScore={this.props.updateHighScore}
            correctAnswers={this.props.correctAnswers}
            correctChoice={this.props.correctChoice}
            // cardsThisSession={this.props.cardsThisSession}
            // card={this.props.card}
            card={this.props.deck[0] || this.props.card}
            getNewCard={this.props.getNewCard}
          />
        </div>

        {/* Get new question */}
        {/* <button className="getNewQuestionBtn" onClick={() => this.props.getNewCard()}>Gets Another Question</button> */}

        <PlayerStats className="playerStatsContainer" />
      </div>
      // </div>
    );
  }
}

/*  Once props are mapped connect will be used here  */
export default connect(mapStateToProps, mapDispatchToProps)(CardContainer);
