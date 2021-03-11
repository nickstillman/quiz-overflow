import React from 'react';
import { decode } from 'html-entities';


const Card = (props) => {

  const choices = props.card.choices;

  const onSubmit = (e) => {
    console.log('onSubmit fired...');
    e.preventDefault();
    e.persist();

    for (let i = 0; i < 4; i++) {
      if (e.target[i].checked) {
        if (e.target[i].attributes.iscorrect.value === 'true') {
          props.correctChoice();
          console.log('correct');
          if (props.currentScore > props.highScore) {
            // why two calls here? can they be grouped
            // highScore being updated here
            props.newHighScore(props.currentScore);
            props.updateHighScore(props.currentScore);
            console.log('New Highscore!!!');
          }
        } else console.log('wrong');
      }
    }
  };


  return (
    <div className="card">
      <form onSubmit={(e) => {onSubmit(e)}}>
        <div className='questionContainer'>
          <div className="questionLabel">{decode(props.card.question)}</div>
          <span className="questionDivider"></span>
          <div>
            <input
              className="multipleChoice"
              type="radio"
              name="quiz"
              id="choice1"
              iscorrect={`${choices[0].is_correct}`}
            /><label for="choice1">{decode(choices[0].text)}</label>
          </div>
          <div>
            <input
              className="multipleChoice"
              type="radio"
              name="quiz"
              id="choice2"
              iscorrect={`${choices[1].is_correct}`}
            /><label for="choice2">{decode(choices[1].text)}</label>
          </div>
          <div>
            <input
              className="multipleChoice"
              type="radio"
              name="quiz"
              id="choice3"
              iscorrect={`${choices[2].is_correct}`}
            /><label for="choice3">{decode(choices[2].text)}</label>
          </div>
          <div>
            <input
              className="multipleChoice"
              type="radio"
              name="quiz"
              id="choice4"
              iscorrect={`${choices[3].is_correct}`}
            /><label for="choice4">{decode(choices[3].text)}</label>
          </div>
        </div>
        <br />

        <div className="questionSubmitBtnContainer">
          <input className="questionSubmitBtn" type="submit" value="Submit" />
          <input
            onClick={(e) => props.getNewCard(props.deck)}
            className="questionSubmitBtn"
            type="submit"
            value="TEMP"
          />
        </div>
      </form>
    </div>
  )
}


export default Card;
