var BasicCard = require('./BasicCard')
var ClozeCard = require('./ClozeCard')

var inquirer = require('inquirer');
//create an array for all BasicCard questions and ClozeCard
basicCardArr = []
clozeCardArr = []

let correctAnswers = 0
let count = 0

//define a couple of sample questions to work with
var firstPresident = new BasicCard("Who was the first president of the United States?", "George Washington");
var woodStock = new BasicCard('Who played the famouse version of "The Star Spangled Banner at Woodstock?"', 'Jimi Hendrix')
var blackSabbath = new BasicCard('What is the title of the first track on Black Sabbath\'s self titled album', 'Black Sabbath')
var ledZeppelin = new BasicCard('In what year was Led Zeppelin\'s debut album released', '1968')
//push all these objects into the basicCardArr
basicCardArr.push(firstPresident, woodStock, blackSabbath, ledZeppelin)


var firstPresidentCloze = new ClozeCard("George Washington was the first president of the United States.", "George Washington");
//console.log(firstPresidentCloze.cloze);
var woodStockCloze = new ClozeCard('Jimi Hendrix played the famouse version of "The Star Spangled Banner at Woodstock"', 'Jimi Hendrix')
var blackSabbathCloze = new ClozeCard('Black Sabbath is the title of the first track on Black Sabbath\'s self titled album', 'Black Sabbath')
var ledZeppelinCloze = new ClozeCard('Led Zeppelin\'s debut album was released in 1968', '1968')
clozeCardArr.push(firstPresidentCloze, woodStockCloze, blackSabbathCloze, ledZeppelinCloze)

gameStart()

function easy(){
  //console.log('count ' + count)
    if(count < basicCardArr.length){
      let question = basicCardArr[count].front
      let answer = basicCardArr[count].back
      //console.log('question ' + question)

      inquirer.prompt([
        {
          name: 'basicQuestion' + count,
          type: 'input',
          message: question
        }
      ]).then(answers => {
        //console.log(answer)
        let answerName = 'basicQuestion' + count
        //console.log('answerName ' + answerName)
        console.log('answers ' + answers[answerName])
        //check if user answer is the same as answer
        if(answers[answerName].toLowerCase() == answer.toLowerCase()){
          console.log('Correct!')
          correctAnswers ++
        }else{
          console.log('wrong')
        }
      //  console.log('count ' + count)
        count++
        easy()
      });
    }
    else{
      console.log('NO MORE QUESTIONS')
      //function to prompt user to play again, then reset game
      resetGame()
      return;
    }

}

function resetGame(){
  inquirer.prompt([
    {
      name: 'resetGame',
      type: 'confirm',
      message: 'Play Again?'
    }
  ]).then(answers => {
    // Use user feedback for... whatever!!
    if(answers.resetGame){
      gameStart()
    }
    else{
      console.log('GOODBYE')

    }
    //console.log('answers ' + answers.resetGame)
  });

  correctAnswers = 0
  count = 0
}

function hard(){
  console.log('hard game')
}

function gameStart(){
  inquirer.prompt([
  /* Pass your questions in here */
  {
    name: 'easyOrHard',
    type: 'list',
    message: 'Do you want the easy or hard version?',
    choices: ['easy', 'hard']
  }
  ]).then(answers => {
      //console.log('answers ' + JSON.stringify(answers))
      // Use user feedback for... whatever!!
      if(answers.easyOrHard == 'easy'){
        easy()
      }
      else if(answers.easyOrHard == 'hard'){
        hard()
      }
  });
}
