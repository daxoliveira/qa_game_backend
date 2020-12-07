const express = require('express');
const bodyParser = require('body-parser');
const config = require('config');

module.exports = () => {
  const app = express();

  // Setting application variables
  app.set('port', process.env.PORT || config.get('server.port'));

  // Middlewares
  app.use(bodyParser.json());

  // Importing application routes
  require('../api/routes/questionsRoutes')(app);

  return app;
}