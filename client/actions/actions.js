import { bindActionCreators } from 'redux';
import * as types from './actionTypes';

export const getNewCard = () => (dispatch) => {
  console.log('actions getNewDeck fired...');
  fetch('/quiz-overflow')
    .then((res) => res.json())
    .then((data) => {
      console.log('deck', data.questions);
      const deck = data.questions;
      return deck;
    })
    .then((deck) =>
      // we're receiving cards array
      // this is where we should probably iterate here or in state
      dispatch({
        type: types.NEW_DECK_RECEIVED,
        payload: deck,
      })
    );
};

export const getHighScore = () => (dispatch) => {
  dispatch({ type: types.HIGHSCORE_REQUEST });
  fetch('/high-score')
    .then((res) => res.json())
    .then((res) =>
      dispatch({
        type: types.HIGHSCORE_RECEIVED,
        payload: res.highScore,
      })
    );
};

export const updateHighScore = (score) => (dispatch) => {
  dispatch({ type: types.UPDATING_HIGHSCORE });
  fetch('/high-score', {
    method: 'put',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ score: score }),
  })
    .then((res) => res.json())
    .then((res) =>
      dispatch({
        type: types.HIGHSCORE_UPDATED,
        payload: res,
      })
    );
};

export const newHighScore = (score) => ({
  type: types.NEW_HIGHSCORE,
  payload: score,
});

export const correctChoice = (num) => ({
  type: types.CORRECT_CHOICE,
  payload: num,
});
