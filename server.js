//create structure for a simple sentence
//find word to fill out that structure

var request = require('request');
var words = require("an-array-of-english-words")
var pos = require('node-pos').partsOfSpeech;
var string = "I love to sing in the dark";

var finalSentence = "The ";

//addNoun(finalSentence)
//checkNoun(getWord())
generateValidAdjective(console.log)



function generateTheNounVerbPhrase(){

}

//get a random word
function getWord(){
  return words[Math.floor(Math.random()*words.length)];
};

//finds a Noun and calls the callback function on it
function generateValidNoun(callback){
  pos(getWord(), function (data) {
  	if(data[0][0].pos.indexOf('Noun')>=0){
  		callback(data[0][0].word);
  	}else{
  	  console.log('oops')
  	  generateValidNoun(callback)
  	}
  });
};

function generateValidVerb(callback){
  pos(getWord(), function (data) {
  	if(data[0][0].pos.indexOf('Verb')>=0){
  		callback(data[0][0].word);
  	}else{
  	  console.log('oops')
  	  generateValidNoun(callback)
  	}
  });
};

function generateValidAdjective(callback){
  pos(getWord(), function (data) {
  	if(data[0][0].pos.indexOf('Adjective')>=0){
  		callback(data[0][0].word);
  	}else{
  	  console.log('oops')
  	  generateValidNoun(callback)
  	}
  });
};