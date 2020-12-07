# Questions and Answers Backend with Node.js and Express.js

## How to run it locally

### `Step 1 - git clone`
Open your terminal and paste the command below and hit enter.
"git clone https://github.com/daxoliveira/qa_game_backend.git"

### `Step 2 - npm install`
You just need to cd into questions_and_answers_game, type "npm install", and hit enter.

### `Step 3 - npm start`
Once step 2 is done, you can run the app in development mode by typing "npm start".

### `Step 4 - Postman`
You can test the API endpoints with Postman.

GET
Open the Postman application, create a get request and paste the link below. 
http://localhost:8080/api/question
The return should be a random question object with its answers.


POST
To test the post request the process is similar but you need to do a few extra steps. 
  #### a) Create a new request
  #### b) Change the default get request type to POST
  #### c) Paste the link below in the route field
  #### http://localhost:8080/api/checkanswer
  #### d) Select the option Body
  #### e) Then select the radio button option "raw"
  #### f) Paste the object below with questionId and answerId of your preference
  #### { "questionId": 2, "answerId": 4 }
  #### The return should be a true or false in response to the question and answer you'd posted.
