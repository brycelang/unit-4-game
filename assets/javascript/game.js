//checks to make sure everything in the document has loaded properly.
$(document).ready(function() { 
    //variables to track wins, losses, and total score.
    var win = 0;
    var lose = 0;
    var score = 0;

    //generates a random numbers
    var random = Math.floor(Math.random() * 100 + 20);
    
    //push values for varios variables to HTML
    $("#randomNumber").html(random);
    $("#score").html(score);
    $("#win").html(win);
    $("#loss").html(lose);

    //button click handler
    $("button").on("click", function() {
        //sets the var button to the id of the button clicked
       var button = this.id;

        //generates a random number
       points = Math.floor(Math.random() * 12 + 1);

       //checks if this causes you to win or lose the game
       checkGameStatus();

        //checks which is button clicked
       
        if(button == "blueCrystal") {
            score += points;
           
        } else 

        if (button == "redCrystal") {
            score += points;

        } else

        if(button == "greenCrystal") {
            score += points;

        } else 

        if(button == "purpleCrystal") {
            score += points;
        }

    //updates current score
    $("#score").html(score);
        
    });

  function checkGameStatus() {
      //checks if score is equal to the random number
        if(score == random) {
            //increases win counter
            win++;
            //pushes wins to html
            $("#win").html(win);
            //resets the game
            reset();   

        } //checks if score is greater than the random number
        else if(score > random) {
            //increase loss counter
            lose++;
            //pushes result to html
            $("#loss").html(lose)
            //resets game
            reset();
    
}
  }

    //generates points randomly per click
 
    //initializes the game 
    function reset() {

    //resets score to zero
      score = 0;

     //sets #score to default of 0 using jQuery
      $("#score").html(score);

     //displays the current random number
        
    }
    
});
