var canva;
var contestant;
var question;
var quiz;
var database;

function setup(){
  canvas = createCanvas(850,400);
  database = firebase.database();
  quiz = new Quiz();
  quiz.getState();
  quiz.start();
}


function draw(){
  background("pink");
  if(contestantCount === 4){
    game.update(1);
  }
gameState=1;
clear();
game.play();
}
