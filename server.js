const app = require('./config/express')();
const port = app.get('port');

// This function runs the application on the port we've set in the express file
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});