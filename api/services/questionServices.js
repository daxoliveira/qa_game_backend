  const randomQuestion = (questions) => {
    const index = Math.floor(Math.random() * questions.length);
    return questions[index]
  }

  const checkAnswer = (body, questions) => {
    const { questionId, answerId } = body

    // for(let i = 0; i < questions.length; i += 1) {
    //   if(questions[i].id === questionId) {
    //     for(let j = 0; j < questions[i].answers.length; j += 1) {
    //       if (questions[i].answers[j].id === answerId) {
    //         return questions[i].answers[j].correctAnswer
    //       }
    //     }
    //   }
    // }

    // return false

    const gameQuestion = questions.find((question) => question.id === questionId)

    const gameQuestionAnswer = gameQuestion.answers.find((answer) => answer.id === answerId)

    return gameQuestionAnswer.correctAnswer
  }

  module.exports = {randomQuestion, checkAnswer};