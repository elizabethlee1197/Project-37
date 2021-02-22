class Question {
    constructor() {
        this.input = createInput("Enter Your Name Here..");
        this.input = createInput("Put Your Answer Here..");
        this.button = createButton('Play');
        this.greeting = createElement('h2');
        this.title = createElement('h2');
      }
      hide(){
        this.greeting.hide();
        this.button.hide();
        this.input.hide();
        this.title.hide();
      }
    
      display(){
        this.title.html("Quiz Game");
        this.title.position(350,0);
    
       this.question.html("Question:- The More You Take Away From Me, the bigger I shall get. What am I?");
       this.question.position(150,80);
       this.option1.html("1:a pocket");
       this.option1.position(150,100);
       this.option2.html("2:a pool");
       this.option2.position(150,120);
       this.option3.html("3:a hole");
       this.option3.position(150,140);

       this.input1.position(150,230);

        this.button.mousePressed(()=>{
          this.title.hide();
          this.input1.hide();
          this.button.hide();
          contestant.name = this.input.value();
          contestantCount+=1;
          contestant.index = contestantCount;
          contestant.update();
          contestant.updateCount(contestantCount);
          
        });
    
      }
}