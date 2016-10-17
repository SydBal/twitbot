//create structure for a simple sentence
//find word to fill out that structure

var request = require('request');
var words = require("an-array-of-english-words")
var pos = require('node-pos').partsOfSpeech;
var string = "I love to sing in the dark";

var finalSentence = "The ";

addNoun()

function addNoun(){
  pos(getWord(), function (data) {
	  console.log(JSON.stringify(data,null,2));
	})
}

function getWord(){
  //get a random word
  return words[Math.floor(Math.random()*words.length)];
}



//Sentence complete
finalSentence += ".";



//this will detect whether the sting fits the sentence structure
pos(string, function (data) {
  //console.log(JSON.stringify(data,null,2));
})
