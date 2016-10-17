//create structure for a simple sentence
//find word to fill out that structure

var request = require('request');
var words = require("an-array-of-english-words")
var pos = require('node-pos').partsOfSpeech;
var string = "I love to sing in the dark";

var finalSentence = "The ";

addNoun(finalSentence)

function addNoun(sentence){
	var isNounNotFound = true;
	while(isNounNotFound){
		pos(getWord(), function (data) {
	    addVerb(sentence + data[0][0].word+" ");
		});
		isNounNotFound = false;
	}
};

function addVerb(sentence){
  pos(getWord(), function (data) {
  	sentence += data[0][0].word+".";
  	    console.log(sentence)
  });
};

function getWord(){
  //get a random word
  return words[Math.floor(Math.random()*words.length)];
};

