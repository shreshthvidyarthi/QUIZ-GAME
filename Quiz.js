class Quiz {
  constructor(){
    this.title = createElement('h1')
  }

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }

  play(){
    question.hide()

    background("yellow");

    this.title.html("RESULTS");
    this.title.position(350, 0);

   Contestant.getPlayerInfo();


    if(allContestants !== undefined){
     var displayAnswers = 230
    text("*NOTE:CONTESTANT WHO ANSWERED RIGHT ARE HIGHLIGHITED IN GREEN COLOUR",130,200)
     for (var plr in allContestants){
       var correctAnswer = "2"
       if(correctAnswer===allContestants[plr].answer)
       fill("GREEN")
       else 
       fill ("RED")
       displayAnswers+=30
       text(allContestants[plr].name+":"+allContestants[plr].answer,250,displayAnswers)
     }
    }

    //write code to add a note here

    //write code to highlight contest who answered correctly
    
  }

}
