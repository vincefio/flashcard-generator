var ClozeCard = function(text, cloze){
  this.cloze = cloze;//cloze is the same as the back on basic card, also the answer
  this.text = text;
}

//create prototype for this.partial which returns ... instead of cloze
ClozeCard.prototype.partial = function(){
  let splitText = this.text.split(" ")
  let splitCloze = this.cloze.split(" ")
  console.log(splitText + " " + splitCloze)
  //this.partial =
}

module.exports = ClozeCard
