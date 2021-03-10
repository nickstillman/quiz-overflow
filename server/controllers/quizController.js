const db = require('../models/quizModels');
const quizController = {};

quizController.getQuestion = (req, res, next) => {
  if (res.locals.cookieSessionMatch) {
    console.log('get question fired');
    //grab random record from quiz question table
    const queryQuestion = `SELECT *
    FROM quiz_question
    ORDER BY RANDOM()
    LIMIT 5`; // make 10 question at a time for each query. (random in server side or client side)
    
    // resultArray = [];
    // loop i = 0 - 4, index of rows
    // db.query
    // questionObject = {};
    // .then -> use result.rows[i] to make query for id,text,is_correct
    // add results to questionObject.questionID, .question
    // make query -> attach result to questionObject.choices
    // push question object to resultArray
    // continue loop through questionIDs
    // put on res.locals.questions
    
    
    const resultArray = [];
    
    
    db.query(queryQuestion)
    .then((result) => {
      
      for (let i = 0; i < 5; i ++) {
        const questionObject = {}
        
        const randQuestionId = result.rows[i]._id;
        const randQuestionText = result.rows[i].text;
        
        questionObject.question = randQuestionText;
        questionObject.questionID = randQuestionId;
        
        console.log(questionObject);
        
        //selected id,text, and is correct from quiz questions table, only grabbing questions which match random question ID
        const queryChoices = `SELECT c._id, c.text, c.is_correct FROM quiz_question_choices c WHERE c.quiz_question_id = ${randQuestionId}`;
        
        db.query(queryChoices)
        .then((qResult) => {
          //choices const holds array of questions
          questionObject.choices = qResult.rows;
          resultArray.push(questionObject);
          console.log('results: ', resultArray);
          if (resultArray.length === 5) {
            res.locals.questions = resultArray;
            return next();
          }
        });
      }
    })
    .catch((err) => next(err));
  } else {
    return next();
  }
};
module.exports = quizController;
