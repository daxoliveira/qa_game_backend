// Why this file doesn't neet to import or require (in fact, what is the difference) app?
module.exports = app => {
  const controller = require('../controllers/questionsControllers')();

  app.route('/api/question')
    .get(controller.question);
  
  app.route('/api/checkanswer')
    .post(controller.checkAnswer);
}