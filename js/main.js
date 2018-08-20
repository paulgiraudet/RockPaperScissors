//initializing some var
var userScore = 0;
var pcScore = 0;
var choiceList = ['rock', 'paper', 'scissors'];


//display none on useless stuff

for (i=1;i<=6;i++){
  document.getElementById("image"+i).style.display = "none" ;
}

document.getElementById("restart").style.display = "none";
document.getElementById("player_move").style.display = "none";
document.getElementById("ryu_hit").style.display = "none";
document.getElementById("computer_move").style.display = "none";
document.getElementById("computer_stand").style.display = "none";
document.getElementById("player_stand").style.display = "none";
document.getElementById("ken_hit").style.display = "none";
document.getElementById("ryu_lose").style.display = "none";
document.getElementById("ken_lose").style.display = "none";
document.getElementById("draw").style.display = "none";
document.getElementById("result_battle").style.display = "none" ;


//Several functions


// display id_pseudo
document.getElementById('btn_send').addEventListener('click', function() {

  var x = document.getElementById("id_pseudo").value.toUpperCase();

  //allowing player to play with a condition
  if((x.length > 2) && (x.length < 10)) {
     document.getElementById("id_choice_pseudo").style.display = "none";
     document.getElementById("computer_stand").style.display = "block";
     document.getElementById("player_stand").style.display = "block";

     for (i=1;i<=6;i++){
       document.getElementById("image"+i).style.display = "block" ;
     }

     document.getElementById("player_name").innerHTML = x;
   }
   else {
     document.getElementById("id_pseudo").placeholder="what did you say ?";
   }

});

// Restart function

document.getElementById('btn_restart').addEventListener('click', function() {
  userScore = 0;
  pcScore = 0;
  document.getElementById("progressbarbot").style.width="100%";
  document.getElementById("progressbarplayer").style.width="100%";

  for (i=1;i<=6;i++){
    document.getElementById("image"+i).style.display = "block" ;
  }

  document.getElementById("restart").style.display = "none";
  document.getElementById("ryu_lose").style.display = "none";
  document.getElementById("player_stand").style.display = "block";
  document.getElementById("ken_lose").style.display = "none";
  document.getElementById("computer_stand").style.display = "block";

});


//player move function
function player_attack(){

  var elem = document.getElementById("player_move");
  var pos = 50;
  var id = setInterval(frame, 1);
  function frame() {

    //end of movement to right
    if (pos === 900) {
      clearInterval(id);

      //display hit
      document.getElementById("ryu_hit").style.display = "block";
      document.getElementById("player_move").style.display = "none";

      if (userScore == 1) {
        document.getElementById("progressbarbot").style.width="66%";
      }
      else if (userScore == 2) {
        document.getElementById("progressbarbot").style.width="33%";
      }
      //winning scenario
      else if (userScore == 3) {
        document.getElementById("result").innerHTML= "YOU WIN";
        document.getElementById("progressbarbot").style.width="0%";
        document.getElementById("ken_lose").style.display = "block";
        document.getElementById("computer_stand").style.display = "none";
        document.getElementById("restart").style.display = "block";
      }

        //display game
        var id2 = setInterval(frame2, 1000);
        function frame2(){
          if (pos === 50){
            clearInterval(id2);
            document.getElementById("player_stand").style.display = "block";
            document.getElementById("ryu_hit").style.display = "none";

            for (i=1;i<=6;i++){
              document.getElementById("image"+i).style.display = "block" ;
            }

            document.getElementById("result_battle").style.display = "none" ;

            if(userScore===3){
              for (i=1;i<=6;i++){
                document.getElementById("image"+i).style.display = "none" ;
              }
            }
          }

          //reinitializing position
          else {
            pos-=850;
            elem.style.left = pos + 'px';
          }
        }

    }

    //moving from left to right
    else {
        pos+=2;
        elem.style.left = pos + 'px';

        //no game during animation
        document.getElementById("player_move").style.display = "block";
        document.getElementById("player_stand").style.display = "none";

        for (i=1;i<=6;i++){
          document.getElementById("image"+i).style.display = "none" ;
        }

        //display results
        document.getElementById("win_or_lose").innerHTML = " wins" ;
        document.getElementById("result_battle").style.display = "block" ;

    }
  }

}


//computer move function
function computer_attack(){
  var elem = document.getElementById("computer_move");
  var pos = 126;
  var id = setInterval(frame, 1);
  function frame() {

    //end of move to left
    if (pos === -850) {
      clearInterval(id);

      //display hit
      document.getElementById("ken_hit").style.display = "block";
      document.getElementById("computer_move").style.display = "none";

      if (pcScore == 1) {
        document.getElementById("progressbarplayer").style.width="66%";
      }
      else if (pcScore == 2) {
        document.getElementById("progressbarplayer").style.width="33%";
      }
      //winning computer scenario
      else if (pcScore == 3) {
        document.getElementById("progressbarplayer").style.width="0%";
        document.getElementById("ryu_lose").style.display = "block";
        document.getElementById("player_stand").style.display = "none";
        document.getElementById("restart").style.display = "block";
        document.getElementById("result").innerHTML= "YOU LOSE";
      }

        //display game
        var id2 = setInterval(frame2, 1000);
        function frame2(){
          if (pos === 126){
            clearInterval(id2);
            document.getElementById("computer_stand").style.display = "block";
            document.getElementById("ken_hit").style.display = "none";

            for (i=1;i<=6;i++){
              document.getElementById("image"+i).style.display = "block" ;
            }

            document.getElementById("result_battle").style.display = "none" ;

            if(pcScore===3){
              for (i=1;i<=6;i++){
                document.getElementById("image"+i).style.display = "none" ;
              }
            }
          }

          //reinitializing position
          else {
            pos+=976;
            elem.style.left = pos + 'px';
          }
        }

    }

    //moving from right to left
    else {
        pos-=2;
        elem.style.left = pos + 'px';

        //no game during animation
        document.getElementById("computer_move").style.display = "block";
        document.getElementById("computer_stand").style.display = "none";

        for (i=1;i<=6;i++){
          document.getElementById("image"+i).style.display = "none" ;
        }

        //display results
        document.getElementById("win_or_lose").innerHTML = " loses" ;
        document.getElementById("result_battle").style.display = "block" ;
    }
  }
}


//Draw function
function both_attack(){

  //planning to move both entity
  var elem = document.getElementById("player_move");
  var elem2 = document.getElementById("computer_move");
  var pos = 50;
  var pos2 = 0;

  //higher time between two position
  var id = setInterval(frame, 10);
  function frame() {

    //end of the movements
    if (pos === 400) {
      clearInterval(id);


      var id2 = setInterval(frame2, 5);
      function frame2() {
        if (pos === 50) {
          clearInterval(id2);

          //display game
          document.getElementById("computer_stand").style.display = "block";
          document.getElementById("player_stand").style.display = "block";
          document.getElementById("player_move").style.display = "none";
          document.getElementById("computer_move").style.display = "none";

          for (i=1;i<=6;i++){
            document.getElementById("image"+i).style.display = "block" ;
          }

          document.getElementById("draw").style.display = "none" ;
        }

        //reinitializing position
        else {
          pos-=350;
          pos2+=350;

          elem.style.left = pos + 'px';
          elem2.style.left = pos2 + 'px';
        }
      }
      //end of frame function

    }
    else {
      pos+=2;
      pos2-=2;

      elem.style.left = pos + 'px';
      elem2.style.left = pos2 + 'px';

      //no game during animation
      document.getElementById("computer_move").style.display = "block";
      document.getElementById("computer_stand").style.display = "none";
      document.getElementById("player_move").style.display = "block";
      document.getElementById("player_stand").style.display = "none";

      for (i=1;i<=6;i++){
        document.getElementById("image"+i).style.display = "none" ;
      }

      //display "results"
      document.getElementById("draw").style.display = "block" ;
    }
  }
}


//compare choice function
function compare(userChoice) {

//computer choice
var pcChoice = choiceList[Math.floor(Math.random() * choiceList.length)];

//saving choices
document.getElementById("player_result").innerHTML = userChoice ;
document.getElementById("computer_result").innerHTML = pcChoice ;

//draw
    if (userChoice === pcChoice) {
      both_attack();
    }

//Differences
    else if (userChoice === 'rock') {

      document.getElementById("draw").style.display = "none";

        if (pcChoice === 'scissors') {
            userScore++;
            player_attack();
        }
        else {
            pcScore++;
            computer_attack();
        }
    }

    else if (userChoice === 'paper') {

      document.getElementById("draw").style.display = "none";

        if (pcChoice === 'rock') {
            userScore++;
            player_attack();
        }
        else {
            pcScore++;
            computer_attack();
        }
    }

    else {

      document.getElementById("draw").style.display = "none";

        if (pcChoice === 'paper') {
            userScore++;
            player_attack();
        }
        else {
            pcScore++;
            computer_attack();
        }
    }

}
