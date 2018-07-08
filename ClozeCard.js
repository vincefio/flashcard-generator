var ClozeCard = function(text, cloze){
  this.cloze = cloze;//cloze is the same as the back on basic card, also the answer
  this.text = text;
}

//create prototype for this.partial which returns ... instead of cloze
ClozeCard.prototype.partial = function(){
  let partialText = this.text.split(this.cloze)
  //console.log('partialText ' + partialText[1])
  //let newPartialText = partialText[1]
  //console.log('newPartialText ' + newPartialText)
  if(this.text.indexOf(this.cloze) != -1){

    //partialText = this.text.split(this.cloze)
    //console.log(this.text)
    partialText = String(partialText[1])
    return partialText
  }
  else{
    console.log('Answer must be present in the question')
    return
  }
}

module.exports = ClozeCard
