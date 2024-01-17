let questions = [
  {
    "question": "Was steht für HTML?",
    "answer_1": "Home Tool Markup Language",
    "answer_2": "Highly Textured Modern Language",
    "answer_3": "Hyperlink and Text Markup Language",
    "answer_4": "Hyper Text Markup Language",
    "right_answer": 4
  },
  {
    "question": "Welches Element wird verwendet, um einen Absatz zu erstellen?",
    "answer_1": "&lt;para&gt;",
    "answer_2": "&lt;pd&gt;",
    "answer_3": "&lt;p&gt;",
    "answer_4": "&lt;paragraph&gt;",
    "right_answer": 3
  },
  {
    "question": "Welches Attribut wird verwendet, um einen Link in einem neuen Tab/Fenster zu öffnen?",
    "answer_1": "new",
    "answer_2": "target",
    "answer_3": "tab",
    "answer_4": "window",
    "right_answer": 2
  },
  {
    "question": "Was bedeutet die Abkürzung CSS?",
    "answer_1": "Cascading Style Sheet",
    "answer_2": "Computer Style Sheet",
    "answer_3": "Counter Style Sheet",
    "answer_4": "Colorful Style Sheet",
    "right_answer": 1
  },
  {
    "question": "Welches HTML-Element wird verwendet, um eine Tabelle zu erstellen?",
    "answer_1": "&lt;tbl&gt;",
    "answer_2": "&lt;tabel&gt;",
    "answer_3": "&lt;tab&gt;",
    "answer_4": "&lt;table&gt;",
    "right_answer": 4
  },
  {
    "question": "Welches HTML-Element wird für die nummerierte Listen verwendet?",
    "answer_1": "&lt;ol&gt;",
    "answer_2": "&lt;ul&gt;",
    "answer_3": "&lt;li&gt;",
    "answer_4": "&lt;dl&gt;",
    "right_answer": 1
  },
  {
    "question": "Was bedeutet die Abkürzung HTML?",
    "answer_1": "High Text Main Language",
    "answer_2": "Hyper Text Makeup Language",
    "answer_3": "Hyperlink and Text Markup Language",
    "answer_4": "Hyper Text Markup Language",
    "right_answer": 4
  }
];


let currentQuestion = 0;
let rightQuestions = 0;

function init() {
  let amountQuestions = document.getElementById('amountQuestions');
  amountQuestions.innerHTML = '';
  amountQuestions.innerHTML = questions.length;
  showQuestion();
}

function showQuestion() {

  if (currentQuestion >= questions.length) {
    document.getElementById('endScreen').style = '';
    document.getElementById('questionBody').style.display = 'none';
    document.getElementById('rightQuestions').innerHTML = rightQuestions;
    document.getElementById('completeQuestions').innerHTML = questions.length;
  } else {
    let question = questions[currentQuestion];
    document.getElementById('questiontext').innerHTML = question['question'];
    document.getElementById('answer_1').innerHTML = question['answer_1'];
    document.getElementById('answer_2').innerHTML = question['answer_2'];
    document.getElementById('answer_3').innerHTML = question['answer_3'];
    document.getElementById('answer_4').innerHTML = question['answer_4'];
    document.getElementById('currentQuestionNumber').innerHTML = currentQuestion + 1;
  }
}

function answer(selection) {
  let question = questions[currentQuestion];
  let selectedQuestionNumber = selection.slice(-1);

  let idOfRightAnswer = `answer_${question['right_answer']}`;
  if (selectedQuestionNumber == question['right_answer']) {
    document.getElementById(selection).parentNode.classList.add('bg-success')
    rightQuestions++;
  } else {
    document.getElementById(selection).parentNode.classList.add('bg-danger');
    document.getElementById(idOfRightAnswer).parentNode.classList.add('bg-success');
  }
  document.getElementById('nextButton').disabled = false;
}

function nextQuestion() {
  currentQuestion++;
  showQuestion();
  document.getElementById('nextButton').disabled = true;
  resetAnswerButtons();

}

function resetAnswerButtons() {
  for (let i = 1; i <= 4; i++) {
    document.getElementById(`answer_${i}`).parentNode.classList.remove('bg-danger');
    document.getElementById(`answer_${i}`).parentNode.classList.remove('bg-success');
  }
}

