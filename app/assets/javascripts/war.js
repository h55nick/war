/*Setting both hands as global for simplicity sake*/
/*could pass them back and forth a million times- not worth it*/
phand =[];
chand =[];


$(function(){
  dealfulldeck();/* Code near Bottom ctrl f -> "makedeck" !*/
  $('#warbtn').click(war_me_bro);


});

function check_end(){
  if (phand.length >= 51) {//Player wins
    alert("Player Wins");
  }else if(chand.length >= 51){//Computer wins
    alert("Computer WIns");
  }else{
    //Don't really need this means game continues!
  };
}

function war_me_bro(){
  var b_c = [];
  /*alert("War me bro");*/
  b_c = [phand.shift(),chand.shift()]; /*battle cards */
  /*b_c = battle cards*/
  // b_c[0] => players hand
  // b_c[1] => comps hand
  // Remember that our syntax means that:
  // b_c[0][0] is the number value of the card for the players hand
  // b_c[1][1] would be the suit of the computers hand (not that it matters!)
  // Feel free to save these into variables if it makes it easier
  $('.battleholder .card0').text(b_c[0]);
  $('.battleholder .card1').text(b_c[1]);

  if(b_c[0][0] > b_c[1][0]){//player wins
    phand.push(b_c[0],b_c[1]);//player wins so add to players hand
    $('#battleoutcome').text("You won this one!");
  }
  else if(b_c[0][0] < b_c[1][0]){//Comp wins
    chand.push(b_c[0],b_c[1]);//comp wins so add to comp hand
    $('#battleoutcome').text("Javascript won. Again.");
  }
  else{//TIE AHHHH
    //decided to split until I get AJAX working
    phand.push(b_c[0]); //player gets its hand back
    chand.push(b_c[1]); //comp gets its hand back
  };


  check_end();//Checking to see if the game is over.

}//End WMB






function dealfulldeck(){
  var  deck = makedeck();

  deck = _.shuffle(deck);/*Suffle the deck*/
  /*Needed underscores _.shuffle (make sure to include library!)*/

    /*Reset both hands just in case*/
  phand , chand = [];

  /*Now deal. Not exactly what we talked about in class but it works*/
  /*Note we only do it 26 (0->25) times because each time we deal 2 cards*/
  for(var k=0; k<= 25;k++){
    phand.push(deck.pop());
    chand.push(deck.pop());
  }/*choose this because couldn't find js documentation that supported Ruby syntax that we discussed*/


/*Hand has been delt*/
}



/* This function makes the deck*/
function makedeck(){
  var suits = ["C","D","H","S"];//define 4 suits
  var deck =[];//empty deck
  for(var c = 1; c <=13; c++){/*ALL 13 values (view helper will show 10-13 as [j,q,k,1] */
    for(var s = 0; s <=3;s++){/*Now we need to add suits, this will go to second*/
      deck.push([c,suits[s]]); /*push the array of the value and the suit corrisponding to which number we are one*/
    }
  }
  return deck;
}