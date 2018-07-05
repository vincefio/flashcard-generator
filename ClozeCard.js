var ClozeCard = function(text, cloze){
  this.cloze = cloze;//cloze is the same as the back on basic card, also the answer
  this.text = text;
}

//create prototype for this.partial which returns ... instead of cloze
ClozeCard.prototype.partial = function(){
  let partialText
  /*
  let splitText = this.text.split(" ")
  let splitCloze = this.cloze.split(" ")
  */
//  console.log(splitText + " " + splitCloze)

  if(this.text.indexOf(this.cloze) != -1){
    /*console.log('string is inside string')
    let startIndex = this.text.indexOf(this.cloze)
    console.log(startIndex)
    let endIndex = startIndex + this.cloze.length
    console.log('endIndex ' + endIndex)*/
    partialText = this.text.split(this.cloze)
    //console.log(this.text)
  }
  else{
    console.log('Answer must be present in the question')
    return
  }

  partialText = String(partialText[1])
  return partialText
  //console.log(partialText)
  //console.log(this.text + ' ' + typeof partialText)
  //console.log(typeof partialText)
}

module.exports = ClozeCard
