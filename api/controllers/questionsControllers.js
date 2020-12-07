module.exports = () => {
  const questionsDB = require('../data/questionsDB.json');
  
  const {randomQuestion, checkAnswer} = require('../services/questionServices.js');

  const controller = {};

  controller.question = (req, res) => res.status(200).json(randomQuestion(questionsDB));

  controller.checkAnswer = (req, res) => res.status(200).json(checkAnswer(req.body, questionsDB));

  return controller;
}