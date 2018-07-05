var BasicCard = require('./BasicCard')
var ClozeCard = require('./ClozeCard')

var inquirer = require('inquirer');
//create an array for all BasicCard questions and ClozeCard
basicCardArr = []
clozeCardArr = []

//define a couple of sample questions to work with
var firstPresident = new BasicCard("Who was the first president of the United States?", "George Washington");
var woodStock = new BasicCard('Who played the famouse version of "The Star Spangled Banner at Woodstock?"', 'Jimi Hendrix')
var blackSabbath = new BasicCard('What is the title of the first track on Black Sabbath\'s self titled album', 'Black Sabbath')
var ledZeppelin = new BasicCard('In what year was Led Zeppelin\'s debut album released', '1968')

console.log(blackSabbath.front);
var firstPresidentCloze = new ClozeCard("George Washington was the first president of the United States.", "George Washington");
//console.log(firstPresidentCloze.cloze);
var woodStockCloze = new ClozeCard('Jimi Hendrix played the famouse version of "The Star Spangled Banner at Woodstock', 'Jimi Hendrix')
var blackSabbathCloze = new ClozeCard('Black Sabbath is the title of the first track on Black Sabbath\'s self titled album', 'Black Sabbath')
var ledZeppelinCloze = new ClozeCard('Led Zeppelin\'s debut album was released in 1968', 1968)
